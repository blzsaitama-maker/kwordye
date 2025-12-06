import React from 'react';
import PropTypes from 'prop-types';
import { History, Clock } from 'lucide-react';

const HistoryItem = ({ manga }) => (
  <div key={manga.id} className="group relative flex gap-3 cursor-pointer items-center p-2 rounded-xl bg-[#1a1a25] hover:bg-[#232333] transition-all border border-transparent hover:border-blue-500/30 shadow-sm hover:shadow-md hover:-translate-y-0.5">
    {/* Mini Cover */}
    <div className={`h-14 w-10 rounded-md bg-gradient-to-br ${manga.color} shrink-0 shadow-inner border border-white/10`}></div>
    
    {/* Mini Info */}
    <div className="overflow-hidden flex-1">
      <p className="text-sm font-bold text-gray-100 truncate group-hover:text-blue-300 transition">{manga.title}</p>
      <p className="text-[10px] text-gray-500 flex items-center gap-1 mt-1">
        <Clock size={10} className="text-blue-400" /> {manga.lastRead}
      </p>
    </div>
  </div>
);

HistoryItem.propTypes = {
  manga: PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lastRead: PropTypes.string.isRequired,
  }).isRequired,
};

const HistorySidebar = ({ readingHistory = [] }) => {
  return (
    <div className="hidden lg:flex flex-col w-56 shrink-0 bg-[#13131f] border border-[#2a2a40] rounded-2xl p-4 shadow-[0_0_20px_rgba(0,0,0,0.3)] relative overflow-hidden">
      {/* Decorative glow */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent"></div>
      
      <div className="flex items-center gap-2 text-blue-300 mb-4 pb-2 border-b border-blue-900/30">
        <History size={18} />
        <span className="text-xs font-extrabold uppercase tracking-widest">Reading History</span>
      </div>
      
      <div className="flex flex-col gap-3">
        {readingHistory.length > 0 ? (
          readingHistory.map((manga) => <HistoryItem key={manga.id} manga={manga} />)
        ) : (
          <p className="text-xs text-gray-600 italic py-4 text-center">No history yet.</p>
        )}
      </div>
    </div>
  );
};

HistorySidebar.propTypes = {
  readingHistory: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
    color: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    lastRead: PropTypes.string.isRequired,
  })),
};

export default HistorySidebar;
