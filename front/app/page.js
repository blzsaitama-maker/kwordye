'use client';
import React, { useState, useEffect, useCallback } from 'react';
import { 
  Search, 
  MessageCircle, 
  PlayCircle, 
  AlertTriangle, 
  Mail, 
  Phone, 
  ChevronRight, 
  ChevronLeft,
  List,
  Clock,
  History,
  Keyboard
} from 'lucide-react';

import { MOCK_MANGAS } from '@/lib/data';
import AdSpace from '@/components/AdSpace';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function App() {
  const [currentManga, setCurrentManga] = useState(MOCK_MANGAS[0]);
  const [selectedGenre, setSelectedGenre] = useState('All');
  const [is18Plus, setIs18Plus] = useState(false);
  const [animationClass, setAnimationClass] = useState('');
  
  // Estado para o histórico de leitura
  const [readingHistory, setReadingHistory] = useState([
    { id: 3, title: "One Piece", genre: "Adventure", color: "from-yellow-400 to-red-500", rating: 4.8, lastRead: "2m ago" },
    { id: 7, title: "Blue Lock", genre: "Sports", color: "from-blue-400 to-cyan-500", rating: 4.6, lastRead: "1h ago" },
    { id: 2, title: "Berserk", genre: "Horror", color: "from-red-900 to-black", rating: 5.0, lastRead: "1d ago" }
  ]);

  // Filtra os mangás baseados no genero
  const getFilteredMangas = useCallback(() => {
    if (selectedGenre === 'All') return MOCK_MANGAS;
    return MOCK_MANGAS.filter(m => m.genre === selectedGenre);
  }, [selectedGenre]);

  // Função para pegar um mangá aleatório
  const randomizeManga = useCallback((direction) => {
    const filtered = getFilteredMangas();
    let newManga;
    
    // Evita repetir o mesmo imediatamente se houver opções
    do {
      const randomIndex = Math.floor(Math.random() * filtered.length);
      newManga = filtered[randomIndex];
    } while (filtered.length > 1 && newManga.id === currentManga.id);

    // Animação simples
    setAnimationClass(direction === 'next' ? 'translate-x-10 opacity-0' : '-translate-x-10 opacity-0');
    
    setTimeout(() => {
      setCurrentManga(newManga);
      setAnimationClass(direction === 'next' ? '-translate-x-10 opacity-0' : 'translate-x-10 opacity-0');
      
      requestAnimationFrame(() => {
        setAnimationClass('translate-x-0 opacity-100');
      });
    }, 150);
  }, [currentManga, getFilteredMangas]);

  // Função chamada ao clicar em "Read Now"
  const handleReadNow = () => {
    setReadingHistory(prev => {
      const filtered = prev.filter(m => m.id !== currentManga.id);
      return [{ ...currentManga, lastRead: "Just now" }, ...filtered];
    });
    alert(`Starting ${currentManga.title}...`);
  };

  // Hook para Teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') randomizeManga('next');
      if (e.key === 'ArrowLeft') randomizeManga('prev');
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [randomizeManga]);

  return (
    <div className="min-h-screen bg-[#09090b] text-white flex flex-col font-sans overflow-x-hidden bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-gray-900 via-[#09090b] to-black">
      
      {/* === MAIN CONTENT AREA (3 Columns) === */}
      <div className="flex flex-1">
        
        <AdSpace position="left" />

        {/* --- CENTER CONTENT --- */}
        <main className="flex-1 flex flex-col relative w-full max-w-6xl mx-auto">
          
          <Header is18Plus={is18Plus} setIs18Plus={setIs18Plus} />

          {/* === CONTENT GRID: HISTORY (Left) + RANDOMIZER (Center) + HINTS (Right) === */}
          <div className="flex-1 flex flex-col lg:flex-row justify-center items-start gap-6 p-4">
            
import HistorySidebar from '@/components/HistorySidebar';
            <HistorySidebar readingHistory={readingHistory} />

            {/* --- CENTER: RANDOMIZER AREA --- */}
            <div className="flex flex-col items-center max-w-md w-full shrink-0">
              
              {/* Genre Filter Window (TOP of Cover) */}
              <div className="mb-6 bg-amber-950/30 border border-amber-600/30 p-1.5 rounded-xl flex items-center shadow-[0_0_15px_rgba(217,119,6,0.1)] backdrop-blur-md relative z-20 hover:border-amber-500/50 transition-colors">
                <div className="bg-amber-900/40 p-1.5 rounded-lg mr-2">
                  <List size={14} className="text-amber-400" />
                </div>
                <span className="text-xs text-amber-200 uppercase tracking-widest font-bold mr-2">Filter Genre:</span>
                <div className="relative group">
                  <select 
                    value={selectedGenre} 
                    onChange={(e) => setSelectedGenre(e.target.value)}
                    className="appearance-none bg-[#1c1c26] text-amber-100 text-xs px-4 py-1.5 rounded-lg border border-amber-700/50 outline-none focus:border-amber-500 cursor-pointer font-bold pr-8 hover:bg-[#252532] transition-colors shadow-sm"
                  >
                    <option value="All">All Genres</option>
                    <option value="Action">Action</option>
                    <option value="Romance">Romance</option>
                    <option value="Horror">Horror</option>
                    <option value="Adventure">Adventure</option>
                    <option value="Sports">Sports</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-amber-500 group-hover:text-amber-300">
                    <svg className="fill-current h-3 w-3" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              {/* Interaction Row (Arrows + Card) */}
              <div className="flex items-center gap-6 w-full justify-center relative">
                
                {/* Left Arrow (Visible on Mobile/Tablet) */}
                <button 
                  onClick={() => randomizeManga('prev')} 
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition backdrop-blur-sm lg:hidden z-10"
                  aria-label="Previous Manga"
                >
                  <ChevronLeft size={32} />
                </button>

                {/* The Manga Card */}
                <div className={`relative w-64 md:w-80 aspect-[2/3] transition-all duration-300 transform ${animationClass} z-0`}>
                  {/* Background Glow */}
                  <div className={`absolute -inset-6 bg-gradient-to-br ${currentManga.color} opacity-30 blur-3xl rounded-[3rem]`}></div>
                  
                  {/* Card Content */}
                  <div className="relative h-full w-full bg-[#12121a] rounded-2xl overflow-hidden shadow-[0_0_30px_rgba(0,0,0,0.5)] border border-white/10 group cursor-pointer hover:scale-[1.02] transition-transform duration-300 flex flex-col ring-1 ring-white/5 hover:ring-blue-500/30">
                    {/* Fake Image Placeholder */}
                    <div className={`h-[62%] w-full bg-gradient-to-br ${currentManga.color} flex items-center justify-center relative p-6 overflow-hidden`}>
                       {/* Diagonal scanlines effect */}
                       <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3W3.org/2000/svgIiB3aWR0aD0iNCIgaGVpZ2h0PSI0IiB2aWV3Qm94PSIwIDAgNCA0Ij48cGF0aCBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii4xIiBkPSJNMSAzaDF2MUgxVjN6bTItMmgxdjFIM1YxeiIvPjwvc3ZnPg==')] opacity-30 mix-blend-overlay"></div>
                       <div className="w-full h-full border-4 border-white/20 flex items-center justify-center backdrop-blur-sm bg-black/10">
                          <span className="text-white/30 text-5xl font-black -rotate-12 select-none drop-shadow-lg">COVER</span>
                       </div>
                      
                      {/* Rating Badge */}
                      <div className="absolute top-4 right-4 bg-black/70 backdrop-blur-xl text-yellow-400 px-3 py-1.5 rounded-lg flex items-center gap-1 font-extrabold text-sm shadow-lg border border-yellow-500/20">
                        ★ {currentManga.rating}
                      </div>
                    </div>

                    {/* Info */}
                    <div className="h-[38%] p-5 flex flex-col justify-between bg-[#0e0e14] relative">
                      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                      
                      <div>
                        <h2 className="text-2xl md:text-3xl font-black text-white mb-2 truncate leading-tight drop-shadow-sm">{currentManga.title}</h2>
                        <div className="flex items-center gap-2">
                          <span className="text-[10px] font-bold px-2.5 py-1 bg-gray-800/80 rounded-md text-gray-300 uppercase tracking-wider border border-gray-700/50 shadow-sm">
                            {currentManga.genre}
                          </span>
                          <span className="text-[10px] font-bold px-2.5 py-1 bg-blue-900/30 rounded-md text-blue-300 uppercase tracking-wider border border-blue-700/30 shadow-sm">
                            Vol. 1
                          </span>
                        </div>
                      </div>
                      
                      <button 
                        onClick={handleReadNow}
                        className="w-full bg-gradient-to-r from-white to-gray-200 text-black hover:from-gray-100 hover:to-white py-3 rounded-xl font-bold text-base transition flex items-center justify-center gap-2 mt-3 shadow-[0_0_15px_rgba(255,255,255,0.15)] hover:shadow-[0_0_25px_rgba(255,255,255,0.3)] hover:-translate-y-0.5 active:translate-y-0"
                      >
                        <PlayCircle size={18} className="text-black fill-black" />
                        Read Now
                      </button>
                    </div>
                  </div>
                </div>

                {/* Right Arrow (Visible on Mobile/Tablet) */}
                <button 
                  onClick={() => randomizeManga('next')} 
                  className="p-3 rounded-full bg-gray-800/50 border border-gray-700/50 text-gray-400 hover:text-white hover:bg-blue-600/20 hover:border-blue-500/50 transition backdrop-blur-sm lg:hidden z-10"
                  aria-label="Next Manga"
                >
                  <ChevronRight size={32} />
                </button>
              </div>

            </div>

             {/* --- RIGHT SIDE: HINTS WINDOW (Desktop) --- */}
            <div className="hidden lg:flex flex-col w-48 shrink-0 bg-[#13131f] border border-[#2a2a40] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] relative overflow-hidden h-fit mt-14">
                {/* Decorative glow */}
               <div className="absolute top-0 right-0 w-full h-1 bg-gradient-to-l from-transparent via-purple-500/50 to-transparent"></div>

               <div className="flex items-center gap-2 text-purple-300 mb-4 pb-2 border-b border-purple-900/30">
                  <Keyboard size={18} />
                  <span className="text-xs font-extrabold uppercase tracking-widest">Controls</span>
               </div>

               <div className="flex flex-col gap-4 text-center">
                  <div className="bg-[#1a1a25] p-3 rounded-xl border border-purple-500/20 shadow-sm">
                    <p className="text-xs text-gray-400 mb-2 font-bold uppercase">Shuffle</p>
                    <div className="flex items-center justify-center gap-2">
                      <kbd className="bg-[#2a2a35] px-2 py-1 rounded-md border-b-2 border-gray-700 text-gray-200 font-mono text-sm shadow-sm">←</kbd>
                      <span className="text-gray-600">or</span>
                      <kbd className="bg-[#2a2a35] px-2 py-1 rounded-md border-b-2 border-gray-700 text-gray-200 font-mono text-sm shadow-sm">→</kbd>
                    </div>
                  </div>
                   <div className="bg-[#1a1a25] p-3 rounded-xl border border-purple-500/20 shadow-sm">
                     <p className="text-xs text-gray-400 font-bold uppercase">Pro Tip</p>
                     <p className="text-[10px] text-gray-500 mt-1 leading-tight">Use arrow keys for instant randomized discovery.</p>
                   </div>
               </div>
            </div>

          </div>

          <Footer />

        </main>

        <AdSpace position="right" />

      </div>
    </div>
  );
}
