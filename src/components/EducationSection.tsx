import React from 'react';
import { EDUCATION } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section>
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e9685a]">03 / Background</p>
      <h2 className="text-2xl font-extrabold leading-[1.65] tracking-[-0.035em] text-slate-800 md:text-3xl">Education</h2>

      <div className="mt-10 border-t border-slate-300">
        {EDUCATION.map((education, index) => (
          <article key={education.degree} className="grid gap-3 border-b border-slate-200 py-6 sm:grid-cols-[2rem_1fr]">
            <span className="text-xs font-bold text-slate-300">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="text-base font-bold leading-snug text-slate-900">{education.degree}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-[#d95749]">{education.institution}</span>
                <span className="hidden h-1 w-1 rounded-full bg-slate-300 sm:block" />
                <span className="font-medium text-slate-400">{education.description}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
