from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
import datetime

app = FastAPI()

# Configuração de CORS (Crucial para o Front falar com o Back)
# Permite que o Next.js (normalmente na porta 3000) aceda ao Python
origins = [
    "http://localhost:3000",
    "http://127.0.0.1:3000",
]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def read_root():
    return {"message": "Backend Kwordye a correr!"}

@app.get("/api/v1/status")
def get_status():
    """
    Este é o endpoint que o Frontend vai chamar
    """
    return {
        "status": "online",
        "message": "Bem-vindo à API de mangá Kwordye!",
        "server": "kwordye-back-python",
        "timestamp": datetime.datetime.now().isoformat()
    }

# Para rodar: uvicorn main:app --reload