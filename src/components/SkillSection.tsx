import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const SKILL_CATEGORIES = [
  { key: 'frontend', label: 'Frontend' },
  { key: 'library', label: 'Library & UI' },
  { key: 'env', label: 'Build & Deploy' },
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

  useEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      gsap.from('[data-skill-item]', {
        y: 18,
        autoAlpha: 0,
        duration: 0.5,
        stagger: 0.06,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 75%',
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, [activeTab]);

  const activeSkills = SKILLS.filter((skill) => skill.category === activeTab);

  return (
    <section id="skill" ref={sectionRef} className="min-h-[calc(100vh-72px)] border-b border-[#eee3dd] bg-[#fffdfb] px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div>
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e9685a]">01 / Capabilities</p>
            <h2 className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              <span className="block">익숙한 기술보다</span>
              <span className="mt-3 block text-[#e9685a] md:mt-4">적합한 해법을 선택합니다.</span>
            </h2>
          </div>
          <p className="mt-6 max-w-3xl text-base font-bold leading-7 text-slate-600 md:text-lg md:leading-8">
            제품 규모와 운영 환경을 기준으로 기술을 선택하고, 팀이 오래 유지할 수 있는 구조를 설계합니다.
          </p>
        </div>

        <div className="mt-14 border-y border-slate-200">
          <div className="flex gap-1 overflow-x-auto border-b border-slate-200 py-3">
            {SKILL_CATEGORIES.map((tab) => (
              <button
                key={tab.key}
                type="button"
                onClick={() => setActiveTab(tab.key)}
                className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold transition-colors ${
                  activeTab === tab.key
                    ? 'bg-[#ffebe6] text-[#d95749]'
                    : 'text-slate-500 hover:bg-[#fff5f1] hover:text-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 overflow-hidden sm:grid-cols-3 lg:grid-cols-5">
            {activeSkills.map((skill) => (
              <div
                key={skill.name}
                data-skill-item
                className="-mb-px -mr-px flex min-h-32 items-center gap-4 border-b border-r border-[#eee3dd] px-4 py-6 transition-colors hover:bg-[#fff7f3] sm:px-6"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-white">
                  <img src={skill.icon} alt="" className="h-6 w-6 object-contain" />
                </span>
                <span className="text-sm font-bold text-slate-800">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillSection;
