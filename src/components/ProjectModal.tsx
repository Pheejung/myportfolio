import React from 'react';
import { ImpactProject } from '../types';

interface ProjectModalProps {
  project: ImpactProject;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-8 relative animate-fadeIn">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-2xl font-bold"
          aria-label="Close"
        >
          ×
        </button>
        <div className="mb-6">
          <h2 className="text-2xl font-black text-red-500 mb-2">{project.title}</h2>
          <p className="text-sm text-gray-500 mb-2">{project.category}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-red-500 text-[10px] font-black text-white rounded-full tracking-wide">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="mb-4">
          <p className="text-xs font-bold text-red-500 uppercase mb-1">Impact</p>
          <p className="text-lg font-black text-red-500">{project.impact}</p>
        </div>
        <div className="mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Problem</p>
          <p className="text-sm text-gray-700 leading-relaxed">{project.problem}</p>
        </div>
        <div>
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Solution</p>
          <p className="text-sm text-gray-500 leading-relaxed">{project.solution}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectModal;
