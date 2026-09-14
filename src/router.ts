import { useEffect, useState } from 'react';

export type RoutePath = '/' | '/skills' | '/career' | '/about';

export const ROUTE_META: Record<RoutePath, { label: string; title: string }> = {
  '/': { label: 'Home', title: '박희정 | Frontend Developer' },
  '/skills': { label: 'Skills', title: 'Skills | 박희정 포트폴리오' },
  '/career': { label: 'Career', title: 'Career | 박희정 포트폴리오' },
  '/about': { label: 'About', title: 'About | 박희정 포트폴리오' },
};

const isRoutePath = (path: string): path is RoutePath => path in ROUTE_META;

const BASE_PATH = import.meta.env.BASE_URL.replace(/\/$/, '');

const getRouteFromPathname = (): RoutePath => {
  const pathname = decodeURI(window.location.pathname);
  const routePath = BASE_PATH && pathname.startsWith(BASE_PATH)
    ? pathname.slice(BASE_PATH.length) || '/'
    : pathname;

  return isRoutePath(routePath) ? routePath : '/';
};

export const getRouteHref = (path: RoutePath) => `${BASE_PATH}${path}`;

export const navigateToRoute = (path: RoutePath) => {
  window.history.pushState(null, '', getRouteHref(path));
  window.dispatchEvent(new PopStateEvent('popstate'));
};

export const useRoute = () => {
  const [route, setRoute] = useState<RoutePath>(getRouteFromPathname);

  useEffect(() => {
    const handleRouteChange = () => {
      const nextRoute = getRouteFromPathname();
      setRoute(nextRoute);
      document.title = ROUTE_META[nextRoute].title;
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('popstate', handleRouteChange);
    handleRouteChange();
    return () => window.removeEventListener('popstate', handleRouteChange);
  }, []);

  return route;
};
