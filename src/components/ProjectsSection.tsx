import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { O2OZ_PROJECTS, VERTIGO_PROJECTS } from '../constants';
import { ImpactProject } from '../types';
import ImpactCard from './ImpactCard';
import LayoutSidebar from './LayoutSidebar';
import ProjectModal from './ProjectModal';

gsap.registerPlugin(ScrollTrigger);

const COMPANIES = ['버티고우게임즈', '오투오즈'];

const ProjectsSection: React.FC = () => {
  const [modalProject, setModalProject] = useState<ImpactProject | null>(null);
  const [selectedCompany, setSelectedCompany] = useState('버티고우게임즈');
  const sectionRef = useRef<HTMLElement>(null);

  const projects = selectedCompany === '버티고우게임즈' ? VERTIGO_PROJECTS : O2OZ_PROJECTS;

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
    <section id="experience" ref={sectionRef} className="border-b border-[#eee3dd] bg-[#fff9f6] px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-slate-300 pb-14">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e9685a]">02 / Work Experience</p>
            <h2 className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              <span className="block">실제 운영 환경에서</span>
              <span className="mt-3 block text-[#e9685a] md:mt-4">비즈니스 가치를 만들었습니다.</span>
            </h2>
          </div>
          <p className="mt-6 max-w-3xl text-base font-bold leading-7 text-slate-600 md:text-lg md:leading-8">
            신규 서비스 런칭, 레거시 환경 대응, 디자인 시스템 구축까지 제품의 시작과 운영 전반을 경험했습니다.
          </p>
        </div>

        <div className="mt-12 flex gap-2 overflow-x-auto lg:hidden">
          {COMPANIES.map((company) => (
            <button
              key={company}
              type="button"
              onClick={() => setSelectedCompany(company)}
              className={`whitespace-nowrap rounded-full px-5 py-2.5 text-sm font-semibold ${
                selectedCompany === company ? 'bg-[#ffebe6] text-[#d95749]' : 'border border-[#e6d9d3] bg-white text-slate-500'
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
            <div className="mb-8 flex items-end justify-between border-b border-slate-300 pb-5">
              <div>
                <p className="text-xs font-semibold text-slate-400">Selected company</p>
                <h3 className="mt-1 text-xl font-bold tracking-tight text-slate-800">{selectedCompany}</h3>
              </div>
              <span className="text-sm font-semibold text-slate-400">{String(projects.length).padStart(2, '0')} Projects</span>
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
