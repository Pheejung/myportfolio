import React, { useEffect, useState } from 'react';

const Navbar: React.FC = () => {
  // 스크롤 스무스 이동 함수
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>,
    id: string,
  ) => {
    e.preventDefault();
    setMobileMenuOpen(false); // 모바일 메뉴 닫기
    const el = document.getElementById(id);
    if (el) {
      const y = el.getBoundingClientRect().top + window.pageYOffset - 100; // 헤더 높이만큼 보정
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // active 메뉴 상태
  const [activeSection, setActiveSection] = useState('about');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

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
    <>
      <nav className="fixed top-0 left-0 w-full z-50 bg-pink-50/90 backdrop-blur-md border-b-2 border-pink-100 px-6 py-4 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-pink-300 to-purple-300 flex items-center justify-center shadow-md">
            <span className="text-white text-xl font-black">P</span>
          </div>
          <span className="font-black text-base sm:text-xl tracking-tight bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent">PARK HEE JUNG</span>
        </div>
        
        {/* 데스크톱 메뉴 */}
        <div className="hidden md:flex items-center gap-4 text-sm font-semibold">
          <a
            href="#about"
            className={
              `transition-all px-5 py-2.5 rounded-full font-bold shadow-sm ` +
              (activeSection === 'about'
                ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white scale-105 shadow-md'
                : 'bg-white text-gray-600 hover:text-pink-500 hover:shadow-md hover:scale-105')
            }
            onClick={e => handleNavClick(e, 'about')}
          >About</a>
          <a
            href="#skill"
            className={
              `transition-all px-5 py-2.5 rounded-full font-bold shadow-sm ` +
              (activeSection === 'skill'
                ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white scale-105 shadow-md'
                : 'bg-white text-gray-600 hover:text-pink-500 hover:shadow-md hover:scale-105')
            }
            onClick={e => handleNavClick(e, 'skill')}
          >Skill</a>
          <a
            href="#experience"
            className={
              `transition-all px-5 py-2.5 rounded-full font-bold shadow-sm ` +
              (activeSection === 'experience'
                ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white scale-105 shadow-md'
                : 'bg-white text-gray-600 hover:text-pink-500 hover:shadow-md hover:scale-105')
            }
            onClick={e => handleNavClick(e, 'experience')}
          >Experience</a>
          <a
            href="#education"
            className={
              `transition-all px-5 py-2.5 rounded-full font-bold shadow-sm ` +
              (activeSection === 'education'
                ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white scale-105 shadow-md'
                : 'bg-white text-gray-600 hover:text-pink-500 hover:shadow-md hover:scale-105')
            }
            onClick={e => handleNavClick(e, 'education')}
          >Education</a>
        </div>

        {/* 모바일 햄버거 버튼 */}
        <button 
          className="md:hidden w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center hover:scale-105 transition-all"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="메뉴"
        >
          <svg className="w-6 h-6 text-pink-500" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* 모바일 메뉴 */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setMobileMenuOpen(false)} />
          <div className="fixed top-20 right-4 left-4 bg-white rounded-3xl shadow-2xl border-2 border-pink-200 p-6 animate-slideDown">
            <div className="flex flex-col gap-3">
              <a
                href="#about"
                className={
                  `transition-all px-5 py-3 rounded-full font-bold shadow-sm text-center ` +
                  (activeSection === 'about'
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
                    : 'bg-pink-50 text-gray-700')
                }
                onClick={e => handleNavClick(e, 'about')}
              >About</a>
              <a
                href="#skill"
                className={
                  `transition-all px-5 py-3 rounded-full font-bold shadow-sm text-center ` +
                  (activeSection === 'skill'
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
                    : 'bg-pink-50 text-gray-700')
                }
                onClick={e => handleNavClick(e, 'skill')}
              >Skill</a>
              <a
                href="#experience"
                className={
                  `transition-all px-5 py-3 rounded-full font-bold shadow-sm text-center ` +
                  (activeSection === 'experience'
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
                    : 'bg-pink-50 text-gray-700')
                }
                onClick={e => handleNavClick(e, 'experience')}
              >Experience</a>
              <a
                href="#education"
                className={
                  `transition-all px-5 py-3 rounded-full font-bold shadow-sm text-center ` +
                  (activeSection === 'education'
                    ? 'bg-gradient-to-r from-pink-400 to-purple-400 text-white shadow-md'
                    : 'bg-pink-50 text-gray-700')
                }
                onClick={e => handleNavClick(e, 'education')}
              >Education</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
