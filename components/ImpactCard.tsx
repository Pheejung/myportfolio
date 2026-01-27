
import React from 'react';
import { ImpactProject } from '../src/types';

const ImpactCard: React.FC<{ project: ImpactProject }> = ({ project }) => {
  return (
    <div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-8">
      
        <div className="text-right">
          <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">Impact</p>
          <p className="text-2xl font-black text-red-500 tracking-tight">{project.impact}</p>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-gray-900 mb-6">{project.title}</h3>
      
      <div className="space-y-4 mb-8">
        <div>
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest mb-1.5">{project.category}</p>
          <p className="text-sm text-gray-700 leading-relaxed font-medium">
            {project.subject}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-2">
        {project.tags.map((tag) => (
          <span key={tag} className="px-3 py-1 bg-red-500 text-[10px] font-black text-white rounded-full tracking-wide">
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ImpactCard;
