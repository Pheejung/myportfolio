import React from 'react';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import AboutPage from './pages/AboutPage';
import ExperiencePage from './pages/ExperiencePage';
import HomePage from './pages/HomePage';
import SkillsPage from './pages/SkillsPage';
import { RoutePath, useHashRoute } from './router';

const PAGES: Record<RoutePath, React.FC> = {
  '/': HomePage,
  '/skills': SkillsPage,
  '/experience': ExperiencePage,
  '/about': AboutPage,
};

const App: React.FC = () => {
  const route = useHashRoute();
  const CurrentPage = PAGES[route];

  return (
    <div className="min-h-screen bg-white font-sans text-slate-800 antialiased">
      <Navbar currentRoute={route} />
      <main key={route} className="page-enter">
        <CurrentPage />
      </main>
      <Footer />
    </div>
  );
};

export default App;
