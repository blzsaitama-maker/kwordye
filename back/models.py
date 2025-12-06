"""
Database models for the Manga API.

This module defines the SQLAlchemy models that map to the database tables.
"""
from sqlalchemy import (
    Column,
    Date,
    DateTime,
    Enum,
    ForeignKey,
    Integer,
    String,
    Text,
)
from sqlalchemy.orm import relationship
from sqlalchemy.sql import func

from database import Base
from schemas import MangaStatus


class Manga(Base):
    """Represents a manga series in the database."""

    __tablename__ = "mangas"

    id = Column(Integer, primary_key=True, index=True)
    title = Column(String, index=True, nullable=False)
    author = Column(String, nullable=False)
    genre = Column(String, nullable=False)
    tags = Column(String)  # Simple storage for tags as a comma-separated string
    synopsis = Column(Text, nullable=False)
    cover_image_url = Column(String)
    status = Column(Enum(MangaStatus), nullable=False)
    release_date = Column(Date, nullable=False)
    created_at = Column(DateTime, server_default=func.now())
    updated_at = Column(DateTime, onupdate=func.now())

    chapters = relationship("Chapter", back_populates="manga")


class Chapter(Base):
    """Represents a chapter of a manga in the database."""

    __tablename__ = "chapters"

    id = Column(Integer, primary_key=True, index=True)
    chapter_number = Column(Integer, nullable=False)
    title = Column(String, default="TBD")
    page_count = Column(Integer, nullable=False)
    reading_url = Column(String)  # Storing URL as String
    manga_id = Column(Integer, ForeignKey("mangas.id"), nullable=False)

    manga = relationship("Manga", back_populates="chapters")
