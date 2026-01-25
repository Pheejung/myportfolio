
import React from 'react';

import HeroSection from './components/HeroSection';
import SkillSection from './components/SkillSection';
import ProjectsSection from './components/ProjectsSection';
import EducationSection from './components/EducationSection';
import CertificationsSection from './components/CertificationsSection';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

const App: React.FC = () => {
  return (
    <div className="font-sans antialiased text-[#1a1a1a]">
      <Navbar />
  <HeroSection />
  <SkillSection />
      <ProjectsSection />
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 px-6 md:px-20 lg:px-40 py-24">
        <EducationSection />
        <CertificationsSection />
      </div>
      <Footer />
      {/* Aesthetic Blob background decoration */}
      <div className="fixed top-0 left-0 w-full h-screen pointer-events-none -z-10 opacity-40">
        <div className="absolute top-[10%] left-[5%] w-96 h-96 bg-primary/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[20%] right-[10%] w-64 h-64 bg-primary/10 rounded-full blur-[80px]"></div>
      </div>
    </div>
  );
};

export default App;
