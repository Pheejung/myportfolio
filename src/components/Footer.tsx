import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-bg-dark text-white pt-32 pb-16 px-6 md:px-20 lg:px-40 relative overflow-hidden">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-primary/10 blur-[120px] rounded-full pointer-events-none"></div>
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <div className="mb-12 inline-flex w-16 h-16 bg-white/5 border border-white/10 rounded-xl items-center justify-center group hover:bg-primary/20 hover:border-primary/50 transition-all cursor-pointer">
          <span className="material-symbols-outlined text-primary text-3xl group-hover:scale-110 transition-transform">terminal</span>
        </div>
        <h2 className="text-5xl md:text-7xl font-black mb-8 tracking-tighter leading-tight">
          Ready for the <br/> next sprint?
        </h2>
        <p className="text-gray-400 text-lg md:text-xl mb-12 leading-relaxed max-w-2xl mx-auto">
          I'm currently open to senior frontend or technical lead positions that prioritize performance and engineering excellence.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a href="mailto:hello@park.hj" className="w-full sm:w-auto px-10 py-5 bg-primary rounded-full font-black text-lg hover:scale-105 hover:brightness-110 shadow-2xl shadow-primary/20 transition-all active:scale-95">
            Get in Touch
          </a>
          <a href="#" className="w-full sm:w-auto px-10 py-5 border border-white/20 rounded-full font-black text-lg hover:bg-white/5 hover:border-white/40 transition-all active:scale-95">
            Technical Resume
          </a>
        </div>
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-500 tracking-widest uppercase">
          <p>© 2024 PARK HEE-JUNG. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="#" className="hover:text-primary transition-colors">GitHub</a>
            <a href="#" className="hover:text-primary transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-primary transition-colors">Medium</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
