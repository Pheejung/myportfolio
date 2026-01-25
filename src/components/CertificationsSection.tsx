import React from 'react';
import { CERTIFICATIONS } from '../constants';

const CertificationsSection: React.FC = () => {
  return (
    <section className="mb-12">
      <h2 className="text-4xl font-black mb-12 tracking-tight">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((cert) => (
          <div key={cert.title} className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex items-center gap-3 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all cursor-default group">
            <span className="material-symbols-outlined text-primary text-lg group-hover:scale-110 transition-transform">verified</span>
            <span className="font-bold text-sm text-gray-800">{cert.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
