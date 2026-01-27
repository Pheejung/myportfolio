import React, { useEffect, useRef } from 'react';
import { ImpactProject } from '../types';

interface ProjectModalProps {
  project: ImpactProject;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // ESC 키로 닫기
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // 외부 클릭 시 닫기
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, [onClose]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div ref={modalRef} className="bg-white rounded-2xl shadow-2xl max-w-3xl w-full p-10 relative animate-fadeIn">
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
        <div className="mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">Solution</p>
          <p className="text-sm text-gray-500 leading-relaxed">{project.solution}</p>
        </div>
        {Array.isArray(project.details) && project.details.length > 0 && (
          <div className="mb-2">
            <p className="text-xs font-bold text-gray-400 uppercase mb-1">주요 업무 및 성과</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {project.details.map((item, idx) => (
                <li key={idx}>{item}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
