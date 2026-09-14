import React, { useEffect, useState } from 'react';
import { getRouteHref, navigateToRoute, ROUTE_META, RoutePath } from '../router';

interface NavbarProps {
  currentRoute: RoutePath;
}

const NAV_ITEMS = (Object.entries(ROUTE_META) as [RoutePath, (typeof ROUTE_META)[RoutePath]][]).map(
  ([path, meta]) => ({ path, label: meta.label }),
);

const Navbar: React.FC<NavbarProps> = ({ currentRoute }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    setMobileMenuOpen(false);
  }, [currentRoute]);

  const handleRouteClick = (event: React.MouseEvent<HTMLAnchorElement>, path: RoutePath) => {
    setMobileMenuOpen(false);
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;

    event.preventDefault();
    if (path === currentRoute) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    navigateToRoute(path);
  };

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-[#F4E8DF] bg-white/90 shadow-[0_4px_24px_rgba(99,65,50,0.04)] backdrop-blur-xl">
        <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-6 md:px-10 lg:px-16">
          <a
            href={getRouteHref('/')}
            onClick={(event) => handleRouteClick(event, '/')}
            className="group flex items-center gap-3 text-left"
            aria-label="홈으로 이동"
          >
            <span className="relative flex h-9 w-9 items-center justify-center rounded-[14px] bg-[#FF6685] text-xs font-bold text-white shadow-[0_6px_16px_rgba(255,102,133,0.28)] transition-transform group-hover:-rotate-3 group-hover:scale-105">
              PH
              <span className="absolute -right-1 -top-1 h-3 w-3 rounded-full border-2 border-white bg-[#FFD86B]" />
            </span>
            <span>
              <strong className="block text-sm font-bold tracking-tight text-slate-800">Park Hee Jung</strong>
              <span className="block text-[10px] font-semibold uppercase tracking-[0.14em] text-slate-400">Frontend Developer</span>
            </span>
          </a>

          <div className="hidden items-center gap-1 md:flex">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.path}
                href={getRouteHref(item.path)}
                onClick={(event) => handleRouteClick(event, item.path)}
                aria-current={currentRoute === item.path ? 'page' : undefined}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  currentRoute === item.path
                    ? 'bg-[#FFF0F3] text-[#E94F70]'
                    : 'text-slate-500 hover:bg-[#FFF8ED] hover:text-[#E94F70]'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-[14px] border border-[#F5DDD7] bg-[#FFF7F3] md:hidden"
            onClick={() => setMobileMenuOpen((isOpen) => !isOpen)}
            aria-expanded={mobileMenuOpen}
            aria-label={mobileMenuOpen ? '메뉴 닫기' : '메뉴 열기'}
          >
            <span className="relative h-4 w-4">
              <span className={`absolute left-0 top-1 h-px w-4 bg-slate-900 transition ${mobileMenuOpen ? 'translate-y-1 rotate-45' : ''}`} />
              <span className={`absolute bottom-1 left-0 h-px w-4 bg-slate-900 transition ${mobileMenuOpen ? '-translate-y-1 -rotate-45' : ''}`} />
            </span>
          </button>
        </div>
      </nav>

      {mobileMenuOpen && (
        <div className="fixed inset-x-4 top-20 z-40 rounded-3xl border border-[#F4E2DC] bg-white p-3 shadow-[0_18px_50px_rgba(115,72,56,0.12)] md:hidden">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.path}
              href={getRouteHref(item.path)}
              onClick={(event) => handleRouteClick(event, item.path)}
              aria-current={currentRoute === item.path ? 'page' : undefined}
              className={`block rounded-xl px-4 py-3 text-sm font-semibold ${
                currentRoute === item.path ? 'bg-[#FFF0F3] text-[#E94F70]' : 'text-slate-600'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </>
  );
};

export default Navbar;
