import React from 'react';
import { VERTIGO_PROJECTS, O2OZ_PROJECTS, SECONDARY_PROJECTS } from '../constants';
import ImpactCard from './ImpactCard';
import ProjectListItem from './ProjectListItem';

const ProjectsSection: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row gap-16">
      <main className="flex-1 space-y-24">
        {/* Hero Header */}
        <section>
          <h1 className="text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Architectural Impact
          </h1>
          <p className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed">
            Showcasing technical excellence and measurable business results across scalable frontend infrastructures.
          </p>
        </section>

        {/* Section: Vertigo Games */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-red-500 rounded-full" />
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">Vertigo Games</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VERTIGO_PROJECTS.map((project) => (
              <ImpactCard key={project.id} project={project} />
            ))}
          </div>
        </section>

        {/* Section: O2Oz Logistics */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-gray-200 rounded-full" />
            <h2 className="text-3xl font-black text-gray-900 tracking-tight">O2Oz Logistics</h2>
          </div>
          <div className="space-y-4">
            {O2OZ_PROJECTS.map((project) => (
              <ProjectListItem key={project.id} project={project} />
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {SECONDARY_PROJECTS.map((proj, idx) => (
              <div key={idx} className="p-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
                <h4 className="font-bold text-sm text-gray-900 mb-1">{proj.title}</h4>
                <p className="text-xs text-gray-400 font-medium">{proj.description}</p>
              </div>
            ))}
            <div className="flex items-center justify-center p-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
              <p className="text-xs font-bold text-red-500 italic">+2 Internal Tooling Apps</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default ProjectsSection;
