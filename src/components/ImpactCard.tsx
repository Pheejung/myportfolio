
import React, { useState, useMemo } from 'react';
import { ImpactProject } from '../types';
import { getIcon } from '../constants';

interface ImpactCardProps {
  project: ImpactProject;
  color?: 'red';
}

const ImpactCard: React.FC<ImpactCardProps> = ({ project, color = 'red' }) => {
  const c = {
    border: 'border-red-100',
    icon: 'text-red-200',
    impactLabel: 'text-red-500',
    impactValue: 'text-red-500',
    tag: 'bg-white text-black border-red-100',
    title: 'text-gray-900',
    category: 'text-gray-300',
    problem: 'text-gray-700',
    solution: 'text-gray-500',
  };
  // 랜덤 색상 클래스 목록
  const hoverColors = [
    'hover:bg-red-100',
    'hover:bg-orange-100',
    'hover:bg-yellow-100',
    'hover:bg-green-100',
    'hover:bg-sky-100',
    'hover:bg-blue-100',
    'hover:bg-purple-100',
    'hover:bg-pink-100',
    'hover:bg-emerald-100',
    'hover:bg-lime-100',
    'hover:bg-fuchsia-100',
    'hover:bg-cyan-100',
    'hover:bg-indigo-100',
  ];
  // 카드별로 고정된 랜덤 색상 부여
  const [hoverIdx] = useState(() => Math.floor(Math.random() * hoverColors.length));
  const hoverClass = useMemo(() => hoverColors[hoverIdx], [hoverIdx]);

  return (
    <div className={`bg-white p-8 rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-shadow ${hoverClass}`}>
      <h3 className={`text-2xl font-bold mb-6 ${c.title}`}>{project.title}</h3>
      <div className="space-y-4 mb-8">
        <div>
          <p className={`text-[10px] font-black uppercase tracking-widest mb-1.5 ${c.category}`}>{project.category}</p>
          <p className={`text-sm leading-relaxed font-medium ${c.problem}`}>
            {project.subject}
          </p>
        </div>
        <div>
          <p className={`text-[10px] font-black uppercase tracking-widest mb-1.5 ${c.category}`}></p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className={`px-3 py-1 text-[10px] font-black rounded-full tracking-wide border border-red-400 ${c.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImpactCard;
