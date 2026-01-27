
import React from 'react';
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
    tag: 'bg-red-500 text-white',
    title: 'text-gray-900',
    category: 'text-gray-300',
    problem: 'text-gray-700',
    solution: 'text-gray-500',
  };
  return (
    <div className={`bg-white p-8 rounded-2xl border ${c.border} shadow-sm hover:shadow-md transition-shadow`}>
      <h3 className={`text-2xl font-bold mb-6 ${c.title}`}>{project.title}</h3>
      <div className="space-y-4 mb-8">
        <div>
          <p className={`text-[10px] font-black uppercase tracking-widest mb-1.5 ${c.category}`}>{project.category}</p>
          <p className={`text-sm leading-relaxed font-medium ${c.problem}`}>
            {project.problem}
          </p>
        </div>
        <div>
          <p className={`text-[10px] font-black uppercase tracking-widest mb-1.5 ${c.category}`}>Solution</p>
          <p className={`text-sm leading-relaxed ${c.solution}`}>
            {project.solution}
          </p>
        </div>
      </div>
      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className={`px-3 py-1 text-[10px] font-black rounded-full tracking-wide ${c.tag}`}>
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImpactCard;
