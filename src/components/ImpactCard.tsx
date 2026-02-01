
import React, { useState, useMemo } from 'react';
import { ImpactProject } from '../types';
import { getIcon } from '../constants';

interface ImpactCardProps {
  project: ImpactProject;
  color?: 'red';
}

const ImpactCard: React.FC<ImpactCardProps> = ({ project, color = 'red' }) => {
  const c = {
    border: 'border-pink-200',
    icon: 'text-pink-300',
    impactLabel: 'text-purple-500',
    impactValue: 'text-purple-600',
    tag: 'bg-gradient-to-r from-pink-100 to-purple-100 text-gray-800 border-pink-200',
    title: 'text-gray-800',
    category: 'text-gray-400',
    problem: 'text-gray-700',
    solution: 'text-gray-600',
  };
  // 랜덤 색상 클래스 목록 - 더 귀여운 파스텔톤으로
  const hoverColors = [
    'hover:bg-pink-50',
    'hover:bg-rose-50',
    'hover:bg-orange-50',
    'hover:bg-amber-50',
    'hover:bg-yellow-50',
    'hover:bg-lime-50',
    'hover:bg-green-50',
    'hover:bg-emerald-50',
    'hover:bg-teal-50',
    'hover:bg-cyan-50',
    'hover:bg-sky-50',
    'hover:bg-blue-50',
    'hover:bg-indigo-50',
    'hover:bg-violet-50',
    'hover:bg-purple-50',
    'hover:bg-fuchsia-50',
  ];
  // 카드별로 고정된 랜덤 색상 부여
  const [hoverIdx] = useState(() => Math.floor(Math.random() * hoverColors.length));
  const hoverClass = useMemo(() => hoverColors[hoverIdx], [hoverIdx]);

  return (
    <div className={`bg-white p-8 rounded-3xl border-2 ${c.border} shadow-md hover:shadow-xl hover:scale-[1.02] transition-all duration-300 ${hoverClass}`}>
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
