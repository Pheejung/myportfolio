
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { ImpactProject } from '../types';
import { getIcon } from '../constants';

const ProjectListItem: React.FC<{ project: ImpactProject }> = ({ project }) => {
  return (
    <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm flex items-center justify-between hover:border-red-100 transition-colors cursor-pointer group">
      <div className="flex items-center gap-5">
        <div className="p-3 bg-red-50 rounded-lg text-red-500">
          {getIcon(project.iconType, "w-6 h-6")}
        </div>
        <div>
          <h4 className="text-lg font-bold text-gray-900 group-hover:text-red-500 transition-colors">{project.title}</h4>
          <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest">{project.category}</p>
        </div>
      </div>
      
      <div className="flex items-center gap-6">
        <div className="text-right">
          <p className="text-[10px] font-black text-gray-300 uppercase tracking-widest">Core Impact</p>
          <p className="text-sm font-black text-red-500">{project.impact}</p>
        </div>
        <ChevronDown className="w-5 h-5 text-gray-200 group-hover:text-red-500 transition-colors" />
      </div>
    </div>
  );
};

export default ProjectListItem;
