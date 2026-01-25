import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M24 4L4 24L24 44L44 24L24 4Z" fill="currentColor" />
        </svg>
        <span className="font-black text-xl tracking-tight">PARK HEE-JUNG</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#experience" className="hover:text-primary transition-colors">Experience</a>
        <a href="#projects" className="hover:text-primary transition-colors">Projects</a>
        <a href="#education" className="hover:text-primary transition-colors">Education</a>
        <a href="#contact" className="bg-primary text-white px-6 py-2 rounded-full font-bold hover:scale-105 transition-transform active:scale-95">Contact</a>
      </div>
    </nav>
  );
};

export default Navbar;
