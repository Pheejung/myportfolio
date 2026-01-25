
import React from 'react';
import { EXPERIENCES } from '../constants';

const Sidebar: React.FC = () => {
  return (
    <div className="w-full lg:w-64 flex-shrink-0">
      <div className="sticky top-24 space-y-12">
        <section>
          <h2 className="text-xl font-bold text-gray-900 mb-1">Experience</h2>
          <p className="text-sm text-gray-400 font-medium mb-6">2018 — Present</p>
          
          <div className="relative pl-6 space-y-8 border-l border-gray-100">
            {EXPERIENCES.map((exp, idx) => (
              <div key={idx} className="relative">
                <div className={`absolute -left-[30px] top-1.5 w-2 h-2 rounded-full ${exp.active ? 'bg-red-500 ring-4 ring-white' : 'bg-gray-300 ring-4 ring-white'}`} />
                <h3 className={`text-sm font-bold ${exp.active ? 'text-red-500' : 'text-gray-900'}`}>
                  {exp.company}
                </h3>
                <p className="text-xs text-gray-400 font-medium">{exp.role} ({exp.period})</p>
              </div>
            ))}
          </div>
        </section>

        <section className="bg-red-50/50 p-5 rounded-xl border border-red-100/50">
          <h3 className="text-[10px] font-black text-red-500/60 uppercase tracking-widest mb-3">Core Tech Stack</h3>
          <div className="flex flex-wrap gap-2">
            {['React', 'Three.js', 'Next.js', 'TypeScript'].map((tech) => (
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
