import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  // 스크롤 스무스 이동 함수
  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement, MouseEvent>, id: string) => {
    e.preventDefault();
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 80; // 헤더 높이만큼 보정
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // active 메뉴 상태
  const [activeSection, setActiveSection] = useState('about');

  useEffect(() => {
  const sectionIds = ['about', 'skill', 'experience', 'education'];
    const handleScroll = () => {
      let found = false;
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const el = document.getElementById(sectionIds[i]);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100) {
            setActiveSection(sectionIds[i]);
            found = true;
            break;
          }
        }
      }
      if (!found) setActiveSection('about');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-primary">
          <path d="M24 4L4 24L24 44L44 24L24 4Z" fill="currentColor" />
        </svg>
        <span className="font-black text-xl tracking-tight">PARK HEE JUNG</span>
      </div>
      <div className="hidden md:flex items-center gap-8 text-sm font-semibold text-gray-600">
        <a
          href="#about"
          className={
            `transition-colors px-6 py-2 rounded-full font-bold ` +
            (activeSection === 'about'
              ? 'bg-primary text-white scale-105 shadow-lg'
              : 'text-gray-600 hover:text-primary')
          }
          onClick={e => handleNavClick(e, 'about')}
        >About</a>
        <a
          href="#skill"
          className={
            `transition-colors px-6 py-2 rounded-full font-bold ` +
            (activeSection === 'skill'
              ? 'bg-primary text-white scale-105 shadow-lg'
              : 'text-gray-600 hover:text-primary')
          }
          onClick={e => handleNavClick(e, 'skill')}
        >Skill</a>
        <a
          href="#experience"
          className={
            `transition-colors px-6 py-2 rounded-full font-bold ` +
            (activeSection === 'experience'
              ? 'bg-primary text-white scale-105 shadow-lg'
              : 'text-gray-600 hover:text-primary')
          }
          onClick={e => handleNavClick(e, 'experience')}
        >Experience</a>
        <a
          href="#education"
          className={
            `transition-colors px-6 py-2 rounded-full font-bold ` +
            (activeSection === 'education'
              ? 'bg-primary text-white scale-105 shadow-lg'
              : 'text-gray-600 hover:text-primary')
          }
          onClick={e => handleNavClick(e, 'education')}
        >Education</a>
      </div>
    </nav>
  );
};

export default Navbar;
