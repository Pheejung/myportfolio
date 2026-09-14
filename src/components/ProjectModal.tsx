import React, { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { ExternalLink, X } from 'lucide-react';
import { ImpactProject } from '../types';

interface ProjectModalProps {
  project: ImpactProject;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  const role = project.id.startsWith('v') ? 'Frontend Developer' : 'FullStack Developer';

  return createPortal(
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-700/35 p-4 backdrop-blur-sm md:p-8"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="project-modal-title"
        className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[2rem] border border-[#F1DED7] bg-white shadow-[0_24px_80px_rgba(91,58,45,0.18)]"
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-[#F3E7DC] bg-white/95 px-6 py-4 backdrop-blur md:px-10">
          <span className="text-xs font-bold uppercase tracking-[0.18em] text-[#E94F70]">Project Detail</span>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-slate-200 text-slate-500 transition hover:border-slate-400 hover:text-slate-950"
            aria-label="프로젝트 상세 닫기"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <div className="px-6 py-8 md:px-10 md:py-10">
          <p className="text-sm font-semibold text-slate-400">{project.period}</p>
          <h2 id="project-modal-title" className="mt-4 text-lg font-extrabold leading-[1.65] tracking-[-0.03em] text-slate-800 md:text-[1.75rem]">
            {project.title}
          </h2>
          <div className="mt-5 flex flex-wrap items-center gap-x-3 gap-y-2 text-sm">
            <span className="font-bold text-slate-800">{role}</span>
            <span className="h-1 w-1 rounded-full bg-slate-300" />
            <span className="font-medium text-slate-500">{project.category}</span>
          </div>

          <div className="mt-8 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span key={tag} className="rounded-full border border-[#D7EEE4] bg-[#F0FAF5] px-3 py-1.5 text-xs font-semibold text-[#347A63]">
                {tag}
              </span>
            ))}
          </div>

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 text-sm font-bold text-[#E94F70] hover:text-[#C93F5E]"
            >
              프로젝트 바로가기
              <ExternalLink className="h-4 w-4" />
            </a>
          )}

          <div className="mt-10 grid gap-5 rounded-2xl border border-[#D6EBE1] bg-[#F5FCF8] p-6 md:grid-cols-[140px_1fr] md:gap-8">
            <h3 className="text-xs font-bold tracking-[0.14em] text-slate-400">프로젝트 개요</h3>
            <p className="text-sm font-normal leading-7 text-slate-600">{project.subject}</p>
          </div>

          {project.details && project.details.length > 0 && (
            <div className="mt-4 grid gap-6 rounded-2xl border border-[#FFDDE5] bg-[#FFF7F9] p-6 md:grid-cols-[140px_1fr] md:gap-8">
              <h3 className="text-xs font-bold tracking-[0.14em] text-slate-400">주요 기여</h3>
              <ul className="space-y-4">
                {project.details.map((item, index) => (
                  <li key={index} className="flex gap-3 text-sm font-normal leading-6 text-slate-600">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#FF6685]" />
                    <span>
                      {typeof item === 'string' ? item : item.type === 'strong' ? <strong>{item.text}</strong> : null}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>,
    document.body,
  );
};

export default ProjectModal;
