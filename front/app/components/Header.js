import React from 'react';
import { BookMarked } from 'lucide-react';

const Header = () => {
  return (
    <header className="flex items-center justify-between p-4 bg-[#13131f] border-b border-[#2a2a40] text-white">
      <div className="flex items-center gap-2">
        <BookMarked className="text-blue-400" size={24} />
        <h1 className="text-xl font-bold tracking-tight">Kwordye</h1>
      </div>
      <div className="flex items-center gap-4">
        <a href="#" className="text-sm text-gray-300 hover:text-white transition">Home</a>
        <a href="#" className="text-sm text-gray-300 hover:text-white transition">Browse</a>
        <button className="px-4 py-2 text-sm font-semibold bg-blue-600 rounded-lg hover:bg-blue-700 transition">
          Login
        </button>
      </div>
    </header>
  );
};

export default Header;