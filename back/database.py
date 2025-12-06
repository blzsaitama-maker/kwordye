import os
from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker

DB_USER = os.environ.get("DB_USER", "postgres")
DB_PASS = os.environ.get("DB_PASS", "") 
DB_NAME = os.environ.get("DB_NAME", "postgres")

CLOUD_SQL_CONNECTION_NAME = os.environ.get("CLOUD_SQL_CONNECTION_NAME")

if CLOUD_SQL_CONNECTION_NAME:
    
    SQL_DATABASE_URL = (
        f"postgresql+psycopg2://{DB_USER}:{DB_PASS}@/{DB_NAME}?"
        f"host=/cloudsql/{CLOUD_SQL_CONNECTION_NAME}"
    )
    print("Conectando ao Cloud SQL via Socket UNIX...")
else:
    
    DB_HOST = os.environ.get("DB_HOST", "localhost")
    SQL_DATABASE_URL = f"postgresql://{DB_USER}:{DB_PASS}@{DB_HOST}/{DB_NAME}"
    print("Conectando ao banco de dados localmente...")

engine = create_engine(
    SQL_DATABASE_URL, pool_pre_ping=True
)

SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)

Base = declarative_base()

def get_db():
    """
    FastAPI dependency that provides a database session.

    Yields:
        Database session.
    """
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()