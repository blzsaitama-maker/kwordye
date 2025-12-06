import React from 'react';

const Footer = () => {
  return (
    <footer className="w-full mt-12 py-6 text-center text-xs text-gray-500 border-t border-[#2a2a40]">
      <p>&copy; {new Date().getFullYear()} Kwordye. All rights reserved.</p>
      <p className="mt-1">A fictional manga reader project.</p>
    </footer>
  );
};

export default Footer;