import { useEffect, useState } from 'react';

export type RoutePath = '/' | '/skills' | '/experience' | '/about';

export const ROUTE_META: Record<RoutePath, { label: string; title: string }> = {
  '/': { label: 'Home', title: '박희정 | Frontend Developer' },
  '/skills': { label: 'Skills', title: 'Skills | 박희정 포트폴리오' },
  '/experience': { label: 'Experience', title: 'Experience | 박희정 포트폴리오' },
  '/about': { label: 'About', title: 'About | 박희정 포트폴리오' },
};

const isRoutePath = (path: string): path is RoutePath => path in ROUTE_META;

const getRouteFromHash = (): RoutePath => {
  const hashPath = window.location.hash.slice(1).split('?')[0] || '/';
  return isRoutePath(hashPath) ? hashPath : '/';
};

export const useHashRoute = () => {
  const [route, setRoute] = useState<RoutePath>(getRouteFromHash);

  useEffect(() => {
    const handleRouteChange = () => {
      const nextRoute = getRouteFromHash();
      setRoute(nextRoute);
      document.title = ROUTE_META[nextRoute].title;
      window.scrollTo({ top: 0, behavior: 'auto' });
    };

    window.addEventListener('hashchange', handleRouteChange);
    handleRouteChange();
    return () => window.removeEventListener('hashchange', handleRouteChange);
  }, []);

  return route;
};
