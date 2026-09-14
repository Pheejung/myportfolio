import React from 'react';
import { EDUCATION } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section>
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E94F70]">03 / Background</p>
      <h2 className="text-2xl font-extrabold leading-[1.65] tracking-[-0.035em] text-slate-800 md:text-3xl">Education</h2>

      <div className="mt-8 space-y-3">
        {EDUCATION.map((education, index) => (
          <article key={education.degree} className="grid gap-3 rounded-2xl border border-[#F2E2DA] bg-[#FFFDF9] p-5 shadow-[0_6px_20px_rgba(105,76,55,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#F4BEC9] sm:grid-cols-[2rem_1fr]">
            <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-[#FFF0F3] text-[11px] font-bold text-[#E94F70]">{String(index + 1).padStart(2, '0')}</span>
            <div>
              <h3 className="text-base font-semibold leading-relaxed text-slate-800">{education.degree}</h3>
              <div className="mt-2 flex flex-wrap items-center gap-x-3 gap-y-1 text-sm">
                <span className="font-semibold text-[#E94F70]">{education.institution}</span>
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
