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
          <h2 className="text-2xl font-black text-black-500 mb-2">{project.title}</h2>
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-2 mb-2">
            {project.period && (
              <span className="text-xs text-gray-400 font-semibold">{project.period}</span>
            )}
            {(project.period && (project.id.startsWith('v') || project.id.startsWith('o'))) && (
              <span className="mx-1 text-gray-300 font-bold">|</span>
            )}
            {project.id.startsWith('v') && (
              <span className="text-xs text-black font-bold">Frontend Developer</span>
            )}
            {project.id.startsWith('o') && (
              <span className="text-xs text-black font-bold">FullStack Developer</span>
            )}
          </div>
          <p className="text-sm text-gray-500 mb-2">{project.category}</p>
          <div className="flex flex-wrap gap-2 mb-2">
            {project.tags.map((tag) => (
              <span key={tag} className="px-3 py-1 bg-white text-[10px] font-black text-black rounded-full tracking-wide border border-red-400">
                {tag}
              </span>
            ))}
          </div>
          {project.link && (
            <div className="mb-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer" className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold rounded hover:bg-primary/20 transition">
                프로젝트 바로가기 ↗
              </a>
            </div>
          )}
        </div>
        <div className="mb-4">
          <p className="text-xs font-bold text-gray-400 uppercase mb-1">프로젝트 설명</p>
          <p className="text-sm text-gray-700 leading-relaxed">{project.subject}</p>
        </div>
        {Array.isArray(project.details) && project.details.length > 0 && (
          <div className="mb-2">
            <p className="text-xs font-bold text-gray-400 uppercase mb-1">주요 업무</p>
            <ul className="list-disc pl-5 space-y-1 text-sm text-gray-700">
              {project.details.map((item, idx) => (
                <li key={idx}>
                  {typeof item === 'string'
                    ? item
                    : item.type === 'strong'
                      ? <strong>{item.text}</strong>
                      : null}
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProjectModal;
