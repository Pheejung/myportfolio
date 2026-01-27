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
    <section id="skill" className="mt-20 mb-24">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-primary font-bold text-sm mt-10 mb-2 tracking-wide">기술 스택 및 도구</h3>
        <h2 className="text-2xl md:text-3xl font-black mb-3">아래의 기술을 사용할 수 있습니다.</h2>
      </div>
      <div className="max-w-4xl mx-auto mt-8 mb-8 flex justify-center">
        <div className="bg-gray-100 rounded-full flex gap-2 px-2 py-1 shadow-sm">
          {SKILL_CATEGORIES.map(tab => (
            <button
              key={tab.key}
              className={`px-4 py-2 rounded-full font-bold text-sm transition-colors ${activeTab === tab.key ? 'bg-white shadow text-primary' : 'text-gray-500 hover:bg-white/60'}`}
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
            className="w-20 h-20 bg-white rounded-2xl shadow-md flex flex-col items-center justify-center transition-transform hover:-translate-y-2 hover:shadow-xl border border-gray-100"
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
