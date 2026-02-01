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
    <footer id="contact" className="bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 text-gray-800 pb-10 px-6 md:px-20 lg:px-40 relative overflow-hidden border-t-4 border-pink-200">
        {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-32">
          <a href="mailto:hello@park.hj" className="w-full sm:w-auto px-10 py-5 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full font-black text-lg text-white hover:scale-105 hover:brightness-110 shadow-2xl shadow-pink-300/50 transition-all active:scale-95">
            Get in Touch
          </a>
          <a href="#" className="w-full sm:w-auto px-10 py-5 border-2 border-pink-300 rounded-full font-black text-lg hover:bg-white/50 hover:border-pink-400 transition-all active:scale-95" onClick={e => handleNavClick(e, 'contact')}>
            Technical Resume
          </a>
        </div> */}
        <div className="border-t-2 border-pink-200 pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-xs font-bold text-gray-600 tracking-widest uppercase">
          <p>© 2026 PARK HEE JUNG. ALL RIGHTS RESERVED. ✨</p>
          <div className="flex gap-8">
            <a href="https://github.com/Pheejung" className="hover:text-pink-500 transition-colors">GitHub 🐙</a>
            <a href="https://velog.io/@gmlwjd2116/posts" className="hover:text-purple-500 transition-colors">Blog 📝</a>
            <a href="mailto:gmlwjd2116@gmail.com" className="hover:text-blue-500 transition-colors">Email 💌</a>
          </div>
        </div>
    </footer>
  );
};

export default Footer;
