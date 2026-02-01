import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  { key: 'frontend', label: '프론트엔드' },
  { key: 'library', label: '라이브러리' },
  { key: 'env', label: '환경 및 배포' }
];

const SKILLS = [
  { name: 'JavaScript', icon: 'icons/js.png', category: 'frontend' },
  { name: 'TypeScript', icon: 'icons/ts.png', category: 'frontend' },
  { name: 'React', icon: 'icons/react.png', category: 'frontend' },
  { name: 'Next.js', icon: 'icons/next.svg', category: 'frontend' },
  { name: 'Angular', icon: 'icons/angular.png', category: 'frontend' },
  { name: 'Redux', icon: 'icons/redux.png', category: 'library' },
  { name: 'Zustand', icon: 'icons/zustand.webp', category: 'library' },
  { name: 'Sass', icon: 'icons/sass.png', category: 'library' },
  { name: 'Tailwind', icon: 'icons/tailwind.png', category: 'library' },
  { name: 'Storybook', icon: 'icons/storybook.png', category: 'library' },
  { name: 'Tanstack', icon: 'icons/tanstack.png', category: 'library' },
  { name: 'Webpack', icon: 'icons/webpack.png', category: 'env' },
  { name: 'GitHub', icon: 'icons/github.png', category: 'env' },
  { name: 'Cloudflare', icon: 'icons/cloudflare.jpg', category: 'env' },
  { name: 'Vite', icon: 'icons/vite.svg', category: 'env' },
  { name: 'Azure', icon: 'icons/azure.svg', category: 'env' },
];

const SkillSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');
  const cardRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    cardRefs.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: i * 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    });
  }, [activeTab]);

  return (
    <section id="skill" className="mt-20 mb-24 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-bold text-sm mt-10 mb-2 tracking-wide">기술 스택 및 도구 🛠️</h3>
        <h2 className="text-2xl md:text-3xl font-black mb-3 text-gray-800">아래의 기술을 사용할 수 있습니다.</h2>
      </div>
      <div className="max-w-4xl mx-auto mt-8 mb-8 flex justify-center">
        <div className="bg-gradient-to-r from-pink-100 to-purple-100 rounded-full flex gap-2 px-3 py-2 shadow-md border-2 border-pink-200">
          {SKILL_CATEGORIES.map(tab => (
            <button
              key={tab.key}
              className={`px-5 py-2.5 rounded-full font-bold text-sm transition-all ${activeTab === tab.key ? 'bg-white shadow-md text-pink-500 scale-105' : 'text-gray-600 hover:bg-white/60 hover:scale-105'}`}
              onClick={() => setActiveTab(tab.key)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
      <div className="max-w-4xl mx-auto grid grid-cols-4 sm:grid-cols-5 md:grid-cols-6 gap-6 justify-items-center">
        {SKILLS.filter(skill => skill.category === activeTab).map((skill, i) => (
          <div
            key={skill.name}
            ref={el => cardRefs.current[i] = el}
            className="w-20 h-20 bg-gradient-to-br from-pink-50 to-purple-50 rounded-2xl shadow-md flex flex-col items-center justify-center transition-all hover:-translate-y-3 hover:shadow-xl hover:scale-110 border-2 border-pink-100"
          >
            <img src={skill.icon} alt={skill.name} className="w-10 h-10 mb-1" />
            <span className="text-xs font-bold text-gray-700 mt-1">{skill.name}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillSection;
