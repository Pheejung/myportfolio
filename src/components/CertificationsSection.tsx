import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const CertificationsSection: React.FC = () => {
  return (
    <section>
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#E94F70]">04 / Credentials</p>
      <h2 className="text-2xl font-extrabold leading-[1.65] tracking-[-0.035em] text-slate-800 md:text-3xl">Certifications</h2>

      <div className="mt-8 space-y-3">
        {CERTIFICATIONS.map((certification) => (
          <article key={certification.title} className="flex items-center justify-between gap-5 rounded-2xl border border-[#D6EBE1] bg-[#F7FCF9] p-5 shadow-[0_6px_20px_rgba(105,76,55,0.04)] transition-all hover:-translate-y-0.5 hover:border-[#A8DCC5]">
            <span className="text-base font-semibold text-slate-800">{certification.title}</span>
            <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#DDF5E9]">
              <BadgeCheck className="h-5 w-5 text-[#278165]" strokeWidth={1.8} />
            </span>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
