import React, { useState } from 'react';

const SKILL_CATEGORIES = [
  { key: 'frontend', label: '프론트엔드' },
  { key: 'library', label: '라이브러리' },
  { key: 'env', label: '환경 및 배포' },
  { key: 'design', label: '디자인' },
];

const SKILLS = [
  { name: 'JavaScript', icon: '/icons/js.svg', category: 'frontend' },
  { name: 'React', icon: '/icons/react.svg', category: 'frontend' },
  { name: 'Next.js', icon: '/icons/nextjs.svg', category: 'frontend' },
  { name: 'TypeScript', icon: '/icons/typescript.svg', category: 'frontend' },
  { name: 'Bear', icon: '/icons/bear.svg', category: 'frontend' },
  { name: 'Nail', icon: '/icons/nail.svg', category: 'frontend' },
  { name: 'Tailwind', icon: '/icons/tailwind.svg', category: 'library' },
  { name: 'Vite', icon: '/icons/vite.svg', category: 'library' },
  { name: 'Jest', icon: '/icons/jest.svg', category: 'library' },
  { name: 'Octopus', icon: '/icons/octopus.svg', category: 'library' },
  { name: 'Storybook', icon: '/icons/storybook.svg', category: 'library' },
  { name: 'GraphQL', icon: '/icons/graphql.svg', category: 'library' },
  { name: 'Beach', icon: '/icons/beach.svg', category: 'env' },
  { name: 'Clipboard', icon: '/icons/clipboard.svg', category: 'env' },
  { name: 'Redux', icon: '/icons/redux.svg', category: 'library' },
  { name: 'Sass', icon: '/icons/sass.svg', category: 'library' },
  { name: 'Webpack', icon: '/icons/webpack.svg', category: 'env' },
  { name: 'GitHub', icon: '/icons/github.svg', category: 'env' },
  { name: 'Vercel', icon: '/icons/vercel.svg', category: 'env' },
  { name: 'AWS', icon: '/icons/aws.svg', category: 'env' },
  { name: 'Figma', icon: '/icons/figma.svg', category: 'design' },
  { name: 'Photoshop', icon: '/icons/photoshop.svg', category: 'design' },
  { name: 'Illustrator', icon: '/icons/illustrator.svg', category: 'design' },
  { name: 'Premiere', icon: '/icons/premiere.svg', category: 'design' },
  { name: 'XD', icon: '/icons/xd.svg', category: 'design' },
];

const SkillSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState('frontend');

  return (
    <section className="mb-24">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-primary font-bold text-sm mb-2 tracking-wide">기술 스택 및 도구</h3>
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
        {SKILLS.filter(skill => skill.category === activeTab).map(skill => (
          <div
            key={skill.name}
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
