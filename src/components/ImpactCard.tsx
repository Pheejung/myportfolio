import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ImpactProject } from '../types';

interface ImpactCardProps {
  project: ImpactProject;
}

const ImpactCard: React.FC<ImpactCardProps> = ({ project }) => {
  return (
    <article className="group flex h-full min-h-[360px] flex-col rounded-[1.75rem] border border-[#F1E3DA] bg-[#FFFDF9] p-6 shadow-[0_8px_30px_rgba(105,76,55,0.05)] transition duration-300 hover:-translate-y-1 hover:border-[#F4BEC9] hover:shadow-[0_18px_45px_rgba(105,76,55,0.1)] md:p-8">
      <div className="flex items-start justify-between gap-6">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.16em] text-[#E94F70]">{project.category}</p>
          {project.period && <p className="mt-2 text-xs font-medium text-slate-400">{project.period}</p>}
        </div>
        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-[#F1E0D8] bg-white text-slate-400 transition group-hover:-rotate-3 group-hover:border-[#FFD1DA] group-hover:bg-[#FFF0F3] group-hover:text-[#E94F70]">
          <ArrowUpRight className="h-4 w-4" />
        </span>
      </div>

      <h3 className="mt-8 text-[1.05rem] font-bold leading-[1.65] tracking-[-0.02em] text-slate-800 md:text-[1.15rem]">
        {project.title}
      </h3>
      <p className="mt-4 text-sm font-normal leading-6 text-slate-500">{project.subject}</p>

      <div className="mt-auto pt-8">
        <div className="flex flex-wrap gap-2">
          {project.tags.map((tag) => (
            <span key={tag} className="rounded-full border border-[#D7EEE4] bg-[#F0FAF5] px-3 py-1.5 text-[11px] font-semibold text-[#347A63]">
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
};

export default ImpactCard;
