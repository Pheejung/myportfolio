import React from 'react';
import { EDUCATION } from '../constants';

const EducationSection: React.FC = () => {
  return (
    <section className="mb-20">
      <h2 className="text-4xl font-black mb-12 tracking-tight">Education</h2>
      <div className="space-y-12">
        {EDUCATION.map((edu) => (
          <div key={edu.degree} className="relative pl-8 group">
            <div className={`absolute left-0 top-1 w-3 h-3 rounded-full ${edu.active ? 'bg-primary' : 'bg-gray-200'} group-hover:scale-125 transition-transform`}></div>
            <div className={`absolute left-[5.5px] top-4 w-[1px] h-full bg-gray-100 last:hidden`}></div>
            <h4 className="text-xl font-bold mb-1">{edu.degree}</h4>
            <p className="text-primary font-bold text-sm mb-2">{edu.institution}</p>
            <p className="text-sm text-gray-500 font-medium">{edu.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationSection;
