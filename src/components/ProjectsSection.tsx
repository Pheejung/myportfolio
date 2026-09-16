import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { EXPERIENCES, O2OZ_PROJECTS, VERTIGO_PROJECTS } from '../constants';
import { ImpactProject } from '../types';
import ImpactCard from './ImpactCard';
import LayoutSidebar from './LayoutSidebar';
import ProjectModal from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const COMPANIES = ['버티고우게임즈', '오투오즈'];

const COMPANY_SUMMARIES: Record<string, string> = {
  버티고우게임즈:
    '글로벌 게임 서비스의 이벤트·프로모션 웹부터 런칭 사이트와 백오피스까지 구축하고 운영했습니다.',
  오투오즈:
    'SI 환경에서 웹·모바일 프로젝트를 수행하며 구조 설계, 인증·결제, 데이터 시각화와 외부 API 연동을 담당했습니다.',
};

const ProjectsSection: React.FC = () => {
  const [modalProject, setModalProject] = useState<ImpactProject | null>(null);
  const [selectedCompany, setSelectedCompany] = useState('버티고우게임즈');
  const sectionRef = useRef<HTMLElement>(null);

  const projects = selectedCompany === '버티고우게임즈' ? VERTIGO_PROJECTS : O2OZ_PROJECTS;
  const selectedExperience = EXPERIENCES.find((experience) => experience.company === selectedCompany);

  useEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      gsap.from('[data-project-card]', {
        y: 24,
        autoAlpha: 0,
        duration: 0.6,
        stagger: 0.08,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 70%',
          once: true,
        },
      });
    }, sectionRef);

    return () => context.revert();
  }, [selectedCompany]);

  return (
    <section id="career" ref={sectionRef} className="border-b border-[#F3E7DC] bg-white px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden py-2 md:py-4">
          <div className="absolute left-0 top-0 flex gap-1.5">
            <span className="h-2.5 w-8 rounded-full bg-[#FF829A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD86B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8DD8BC]" />
          </div>
          <div>
            <p className="mb-5 mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#E94F70]">02 / Career</p>
            <h2 className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 max-lg:leading-[2] max-sm:leading-[1.22] sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              <span className="block">실제 운영 환경에서</span>
              <span className="mt-4 block bg-gradient-to-r from-[#FF5F7E] to-[#F3985B] bg-clip-text text-transparent max-lg:mt-3 max-sm:mt-2">
                비즈니스 가치를 만들었습니다.
              </span>
            </h2>
          </div>
          <p className="mt-6 max-w-5xl text-base font-medium leading-7 text-slate-500 md:text-lg md:leading-8">
            신규 서비스 런칭, 레거시 환경 대응, 디자인 시스템 구축까지 프로젝트의 시작과 운영 전반을 경험했습니다.
          </p>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto lg:hidden">
          {COMPANIES.map((company) => (
            <button
              key={company}
              type="button"
              onClick={() => setSelectedCompany(company)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold ${
                selectedCompany === company
                  ? 'bg-[#FF6685] text-white shadow-sm'
                  : 'border border-[#F1DED8] bg-white text-slate-500'
              }`}
            >
              {company}
            </button>
          ))}
        </div>

        <div className="mt-12 flex flex-col gap-12 lg:flex-row lg:gap-16">
          <aside className="hidden w-64 shrink-0 lg:block">
            <div className="sticky top-28">
              <LayoutSidebar selectedCompany={selectedCompany} setSelectedCompany={setSelectedCompany} />
            </div>
          </aside>

          <div className="min-w-0 flex-1">
            <div className="mb-8 rounded-3xl border border-[#F2E1D2] bg-white p-6 shadow-[0_10px_30px_rgba(112,76,55,0.05)]">
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="text-xs font-semibold text-slate-400">Selected company</p>
                  <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-800">{selectedCompany}</h3>
                  {selectedExperience && (
                    <p className="mt-2 text-xs font-semibold text-[#E94F70]">
                      {selectedExperience.role} · {selectedExperience.period}
                    </p>
                  )}
                </div>
                <span className="text-sm font-semibold text-slate-400">{String(projects.length).padStart(2, '0')} Projects</span>
              </div>
              <p className="mt-5 max-w-3xl text-sm font-medium leading-6 text-slate-600">
                {COMPANY_SUMMARIES[selectedCompany]}
              </p>
            </div>

            <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
              {projects.map((project) => (
                <button
                  key={project.id}
                  type="button"
                  data-project-card
                  onClick={() => setModalProject(project)}
                  className="text-left"
                  aria-label={`${project.title} 상세보기`}
                >
                  <ImpactCard project={project} />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>

      {modalProject && <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />}
    </section>
  );
};

export default ProjectsSection;
