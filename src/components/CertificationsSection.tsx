import React from 'react';
import { BadgeCheck } from 'lucide-react';
import { CERTIFICATIONS } from '../constants';

const CertificationsSection: React.FC = () => {
  return (
    <section>
      <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e9685a]">04 / Credentials</p>
      <h2 className="text-2xl font-extrabold leading-[1.65] tracking-[-0.035em] text-slate-800 md:text-3xl">Certifications</h2>

      <div className="mt-10 border-t border-slate-300">
        {CERTIFICATIONS.map((certification) => (
          <article key={certification.title} className="flex items-center justify-between gap-5 border-b border-slate-200 py-6">
            <span className="text-base font-bold text-slate-900">{certification.title}</span>
            <BadgeCheck className="h-5 w-5 shrink-0 text-[#e9685a]" strokeWidth={1.8} />
          </article>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
