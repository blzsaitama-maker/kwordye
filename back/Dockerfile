# 1. Fase de Construção (Build Stage)
# Usamos uma imagem base do Python leve.
FROM python:3.11-slim as builder

# Define o diretório de trabalho dentro do contêiner
WORKDIR /app

# Define esta variável de ambiente para que o Python não escreva .pyc
ENV PYTHONDONTWRITEBYTECODE 1
# Define esta variável para buffering de saída
ENV PYTHONUNBUFFERED 1

# Copia o arquivo de requisitos e instala as dependências
COPY requirements.txt /app/requirements.txt

# Instala as dependências. Usamos --no-cache-dir para economizar espaço.
RUN pip install --no-cache-dir -r requirements.txt

# 2. Fase Final (Final Stage)
# Usamos uma imagem base ainda mais leve para o contêiner final
FROM python:3.11-slim

# Define o diretório de trabalho
WORKDIR /app

# Copia as dependências instaladas da fase de construção (bibliotecas Python)
COPY --from=builder /usr/local/lib/python3.11/site-packages /usr/local/lib/python3.11/site-packages

# --- A CORREÇÃO ESTÁ AQUI EMBAIXO ---
# Copia os executáveis (gunicorn, uvicorn) da pasta /usr/local/bin
# Sem isso, o comando CMD falha com "gunicorn: not found"
COPY --from=builder /usr/local/bin /usr/local/bin

# Copia o restante do código da sua aplicação
COPY . /app

# O comando para iniciar a aplicação
CMD exec gunicorn --bind 0.0.0.0:$PORT --workers 4 --worker-class uvicorn.workers.UvicornWorker main:app