import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImpactProject } from '../types';

interface ImpactCardProps {
  project: ImpactProject;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ project }) => {
  return (
    <article className="group flex h-full min-h-[360px] flex-col border border-[#eadfd9] bg-white p-6 transition duration-300 hover:-translate-y-1 hover:border-[#efb5aa] hover:shadow-[0_18px_50px_rgba(180,108,92,0.09)] md:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#e9685a]">{project.category}</p>
          {project.period && <p className="mt-2 text-xs font-medium text-slate-400">{project.period}</p>}
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#eadfd9] text-slate-400 transition group-hover:border-[#f2c5bc] group-hover:bg-[#fff0eb] group-hover:text-[#e9685a]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <h3 className="mt-8 text-lg font-bold leading-[1.65] tracking-[-0.02em] text-slate-800 md:text-xl">
        {project.title}
      </h3>
      <p className="mt-4 text-sm font-medium leading-6 text-slate-500">{project.subject}</p>

      <div className="mt-auto pt-8">
        {project.impact && (
          <div className="mb-6 border-l-2 border-[#ef6f61] pl-3">
            <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-slate-400">Outcome</p>
            <p className="mt-1 text-sm font-bold text-slate-800">{project.impact}</p>
          </div>
        )}
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full bg-slate-100 px-3 py-1.5 text-[11px] font-semibold text-slate-600">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ImpactCard;
