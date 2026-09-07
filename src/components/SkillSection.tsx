import React, { useLayoutEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';

const SKILL_CATEGORIES = [
  { key: 'frontend', label: '프론트엔드' },
  { key: 'library', label: '라이브러리' },
  { key: 'env', label: '환경 및 배포' },
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
  const sectionRef = useRef<HTMLElement>(null);

  useLayoutEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      gsap.fromTo(
        '[data-skill-item]',
        {
          y: 10,
          autoAlpha: 0,
        },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.16,
          delay: 0.02,
          stagger: {
            each: 0.04,
            from: 'start',
          },
          ease: 'power1.out',
          clearProps: 'transform,visibility',
        },
      );
    }, sectionRef);

    return () => context.revert();
  }, [activeTab]);

  const activeSkills = SKILLS.filter((skill) => skill.category === activeTab);

  return (
    <section
      id="skill"
      ref={sectionRef}
      className="min-h-[calc(100vh-72px)] border-b border-[#eee3dd] bg-white px-6 py-24 md:px-10 md:py-32 lg:px-16"
    >
      <div className="mx-auto max-w-7xl">
        <div>
          <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e9685a]">
            01 / Capabilities
          </p>
          <h1 className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
            <span className="block">익숙한 기술보다</span>
            <span className="mt-3 block text-[#e9685a] md:mt-4">적합한 해법을 선택합니다.</span>
          </h1>
          <p className="mt-6 max-w-3xl text-base font-bold leading-7 text-slate-600 md:text-lg md:leading-8">
            프로젝트 규모와 운영 환경을 기준으로 기술을 선택하고, 팀이 오래 유지할 수 있는 구조를 설계합니다.
          </p>
        </div>

        <div className="mt-10 flex justify-center">
          <div className="flex max-w-full gap-1 overflow-x-auto rounded-full border border-[#f1d2ca] bg-[#fff1ec] p-2 shadow-sm">
            {SKILL_CATEGORIES.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-bold transition-all sm:px-5 sm:text-sm ${
                  activeTab === tab.key
                    ? 'bg-white text-[#d95749] shadow-sm'
                    : 'text-slate-500 hover:bg-white/60 hover:text-slate-700'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        <div className="mx-auto mt-10 grid max-w-3xl grid-cols-3 justify-items-center gap-5 sm:grid-cols-5 md:grid-cols-6 md:gap-6">
          {activeSkills.map((skill) => (
            <div
              key={skill.name}
              data-skill-item
              style={{ opacity: 0 }}
              className="flex h-20 w-20 flex-col items-center justify-center rounded-2xl border border-[#f0dcd6] bg-gradient-to-br from-white to-[#fff7f3] shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-[#efb5aa] hover:shadow-[0_10px_24px_rgba(180,108,92,0.12)]"
            >
              <img src={skill.icon} alt="" className="mb-1 h-9 w-9 object-contain" />
              <span className="mt-1 text-[11px] font-bold text-slate-700">{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
