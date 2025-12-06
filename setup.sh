#!/bin/bash

# 1. Criar a estrutura de pastas
echo "📂 A criar pastas..."
mkdir -p front/app

# 2. Entrar na pasta front
cd front

# 3. Criar package.json (Configuração do Projeto)
echo "📝 A criar package.json..."
cat <<EOF > package.json
{
  "name": "kwordye-front",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  },
  "dependencies": {
    "lucide-react": "^0.263.1",
    "next": "13.4.19",
    "react": "18.2.0",
    "react-dom": "18.2.0",
    "autoprefixer": "10.4.15",
    "postcss": "8.4.29",
    "tailwindcss": "3.3.3"
  }
}
EOF

# 4. Criar a Página Principal (O código que liga ao Python)
echo "📝 A criar app/page.js..."
cat <<EOF > app/page.js
'use client';

import React, { useState } from 'react';
import { Play, Database, Zap, CheckCircle, Loader2, Server, Wifi } from 'lucide-react';

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  const API_URL = 'http://127.0.0.1:8000/api/v1/status';

  const testEndpoint = async () => {
    setLoading(true);
    setResponse(null);
    setError(null);

    try {
      const res = await fetch(API_URL);
      if (!res.ok) throw new Error(\`Erro HTTP: \${res.status}\`);
      const data = await res.json();
      setTimeout(() => {
        setResponse(data);
        setLoading(false);
      }, 600);
    } catch (err) {
      console.error(err);
      setError("Falha ao conectar ao Backend. O Python está a correr?");
      setLoading(false);
    }
  };

  const renderJson = (json) => {
    if (!json) return null;
    return JSON.stringify(json, null, 2).split('\n').map((line, i) => {
      const parts = line.split(':');
      if (parts.length > 1) {
        return (
          <div key={i}>
            <span className="text-violet-400">{parts[0]}:</span>
            <span className="text-green-400">{parts.slice(1).join(':')}</span>
          </div>
        );
      }
      return <div key={i} className="text-yellow-300">{line}</div>;
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0f172a] text-slate-200 font-sans selection:bg-violet-500/30">
      <nav className="border-b border-slate-800 bg-slate-900/50 backdrop-blur-md sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-3">
              <Database className="text-violet-400 w-6 h-6" />
              <span className="font-bold text-xl tracking-tight text-white">
                Kwordye<span className="text-violet-400">API</span>
              </span>
            </div>
            <div className="hidden md:block">
              <div className="flex items-baseline space-x-8">
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">FRONT: Next.js</span>
                <span className="text-xs font-mono px-2 py-1 rounded bg-slate-800 text-slate-400 border border-slate-700">BACK: Python</span>
              </div>
            </div>
          </div>
        </div>
      </nav>

      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-medium">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                Sistema Operacional
              </div>
              <h1 className="text-5xl md:text-6xl font-bold leading-tight text-white">
                Documentação <br />
                <span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">Interativa</span>
              </h1>
              <p className="text-slate-400 text-lg max-w-xl leading-relaxed">
                Frontend em Next.js comunicando via REST API com o Backend em Python.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <button onClick={testEndpoint} className="px-8 py-4 bg-violet-600 hover:bg-violet-700 text-white rounded-xl font-semibold transition-all shadow-lg shadow-violet-600/20 flex items-center justify-center gap-2 active:scale-95 transform duration-200">
                  <Play className="w-5 h-5 fill-current" /> Testar Conexão Python
                </button>
              </div>
            </div>

            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 to-indigo-600 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
              <div className="relative bg-[#1e293b] rounded-xl overflow-hidden shadow-2xl border border-slate-700">
                <div className="flex items-center justify-between px-4 py-3 border-b border-slate-700 bg-slate-900/80">
                  <div className="flex items-center gap-2">
                     <Server className="w-4 h-4 text-slate-400" />
                     <span className="text-xs text-slate-500 font-mono">http://127.0.0.1:8000/api/v1/status</span>
                  </div>
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  </div>
                </div>
                <div className="p-6 font-mono text-sm overflow-x-auto min-h-[250px] flex flex-col justify-center bg-[#0f172a]">
                  {loading ? (
                    <div className="text-slate-400 flex flex-col items-center justify-center gap-3 animate-pulse">
                      <Wifi className="w-8 h-8 text-violet-500" />
                      <span>A ligar ao Python (Porta 8000)...</span>
                    </div>
                  ) : error ? (
                    <div className="text-red-400 flex flex-col items-center justify-center gap-2 text-center">
                      <Zap className="w-8 h-8 text-red-500" />
                      <span className="font-bold">Erro de Conexão</span>
                      <span className="text-xs text-slate-500">{error}</span>
                    </div>
                  ) : response ? (
                    <div className="animate-in fade-in zoom-in duration-300">
                       <div className="text-xs text-green-500 mb-2 flex items-center gap-1">
                          <CheckCircle className="w-3 h-3" /> Resposta recebida (200 OK)
                       </div>
                       <pre className="text-sm">{renderJson(response)}</pre>
                    </div>
                  ) : (
                    <div className="text-slate-500 text-center">
                      <p className="mb-2">O console está pronto.</p>
                      <span className="text-slate-600 text-xs">Clica no botão para enviar um pedido GET ao teu backend local.</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
EOF

# 5. Criar Layout e CSS
echo "📝 A criar app/layout.js e CSS..."
cat <<EOF > app/layout.js
import './globals.css'
export const metadata = { title: 'Kwordye API Docs', description: 'Documentação da API Kwordye' }
export default function RootLayout({ children }) {
  return (<html lang="pt"><body>{children}</body></html>)
}
EOF

cat <<EOF > app/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;
body { background-color: #0f172a; color: white; }
EOF

# 6. Criar Configurações (Tailwind e PostCSS)
echo "📝 A criar configurações..."
cat <<EOF > tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}', './app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: { extend: {} },
  plugins: [],
}
EOF

cat <<EOF > postcss.config.js
module.exports = { plugins: { tailwindcss: {}, autoprefixer: {} } }
EOF

# 7. Instalar dependências
echo "🚀 A instalar o Next.js e dependências (isto pode demorar 1-2 minutos)..."
npm install

echo "✅ Instalação concluída! Agora podes rodar: npm run dev"
