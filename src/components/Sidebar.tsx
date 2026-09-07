import React from 'react';
import { EXPERIENCES } from '../constants';

interface SidebarProps {
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCompany, setSelectedCompany }) => {
  const techStack = selectedCompany === '버티고우게임즈'
    ? ['Next.js', 'TypeScript', 'TailwindCSS', 'SCSS', 'Cloudflare']
    : ['Angular', 'React', 'JavaScript', 'PHP', 'MySQL'];

  return (
    <div className="w-full lg:w-64">
      <p className="mb-6 text-xs font-bold uppercase tracking-[0.18em] text-slate-400">Career Timeline</p>
      <div className="border-l border-slate-300">
        {EXPERIENCES.map((experience) => {
          const isActive = selectedCompany === experience.company;

          return (
            <button
              key={experience.company}
              type="button"
              onClick={() => setSelectedCompany(experience.company)}
              className="group relative block w-full py-1 pb-8 pl-6 text-left last:pb-2"
            >
              <span className={`absolute -left-[5px] top-2 h-2.5 w-2.5 rounded-full border-2 border-white transition-colors ${isActive ? 'bg-[#ef6f61]' : 'bg-slate-300 group-hover:bg-slate-400'}`} />
              <span className={`block text-sm font-bold transition-colors ${isActive ? 'text-[#d95749]' : 'text-slate-700'}`}>
                {experience.company}
              </span>
              <span className="mt-1 block text-xs font-medium text-slate-500">{experience.role}</span>
              <span className="mt-1 block text-xs text-slate-400">{experience.period}</span>
            </button>
          );
        })}
      </div>

      <div className="mt-10 border-t border-slate-300 pt-6">
        <p className="mb-4 text-[10px] font-bold uppercase tracking-[0.18em] text-slate-400">Core Stack</p>
        <div className="flex flex-wrap gap-2">
          {techStack.map((tech) => (
            <span key={tech} className="rounded-full border border-slate-300 px-2.5 py-1 text-[10px] font-semibold text-slate-600">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
