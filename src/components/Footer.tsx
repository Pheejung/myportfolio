import React from 'react';

const Footer: React.FC = () => {
  // 스크롤 스무스 이동 함수 (중복 방지용, Navbar와 동일하게)
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };
  return (
    <footer id="contact" className="bg-bg-dark text-white pb-10 px-6 md:px-20 lg:px-40 relative overflow-hidden">
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a href="mailto:hello@park.hj" className="w-full sm:w-auto px-10 py-5 bg-primary rounded-full font-black text-lg hover:scale-105 hover:brightness-110 shadow-2xl shadow-primary/20 transition-all active:scale-95">
            Get in Touch
          </a>
          <a href="#" className="w-full sm:w-auto px-10 py-5 border border-white/20 rounded-full font-black text-lg hover:bg-white/5 hover:border-white/40 transition-all active:scale-95" onClick={e => handleNavClick(e, 'contact')}>
            Technical Resume
          </a>
        </div> */}
        <div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-500 tracking-widest uppercase">
          <p>© 2026 PARK HEE JUNG. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-8">
            <a href="https://github.com/Pheejung" className="hover:text-primary transition-colors">GitHub</a>
            <a href="https://velog.io/@gmlwjd2116/posts" className="hover:text-primary transition-colors">Blog</a>
            <a href="mailto:gmlwjd2116@gmail.com" className="hover:text-primary transition-colors">Email</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
