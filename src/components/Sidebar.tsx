
import React from 'react';
import { EXPERIENCES } from '../constants';

interface SidebarProps {
  selectedCompany: string;
  setSelectedCompany: (company: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ selectedCompany, setSelectedCompany }) => {
  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-12">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Experience</h2>
          <p className="text-sm text-gray-400 font-medium mb-6"></p>
          <div className="relative pl-6 space-y-8 border-l border-gray-100">
            {EXPERIENCES.map((exp, idx) => {
              const isActive = selectedCompany === exp.company;
              // 모든 회사 active 색상을 red로 통일
              return (
                <div key={idx} className="relative cursor-pointer" onClick={() => setSelectedCompany(exp.company)}>
                  <div
                    className={`absolute -left-[30px] top-1.5 w-2 h-2 rounded-full ${isActive ? 'bg-red-500 ring-4 ring-red-200' : 'bg-gray-300 ring-4 ring-white'}`}
                  />
                  <h3
                    className={`text-sm font-bold transition-colors duration-150 ${isActive ? 'text-red-500 underline' : 'text-gray-900'}`}
                  >
                    {exp.company}
                  </h3>
                  <p className={`text-xs font-medium ${isActive ? 'text-red-400' : 'text-gray-400'}`}>{exp.role}</p>
                  <p className={`text-xs font-medium ${isActive ? 'text-red-400' : 'text-gray-400'}`}>({exp.period})</p>
                </div>
              );
            })}
          </div>
        </section>
        <section className="bg-red-50/50 p-5 rounded-xl border border-red-100/50">
          <h3 className="text-[10px] font-black text-red-500/60 uppercase tracking-widest mb-3">Core Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {(selectedCompany === '버티고우게임즈'
              ? ['Next.js', 'TypeScript', 'TailwindCSS', 'SCSS', 'Cloudflare Pages']
              : selectedCompany === '오투오즈'
                ? ['Angular', 'React', 'JavaScript', 'CSS', 'PHP', 'MySQL']
                : []
            ).map((tech) => (
              <span key={tech} className="px-2 py-1 bg-white border border-red-100 text-[10px] font-bold text-gray-700 rounded shadow-sm">
                {tech}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Sidebar;
