import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import {
  VERTIGO_PROJECTS,
  O2OZ_PROJECTS,
  SECONDARY_PROJECTS,
} from '../constants';
import ImpactCard from './ImpactCard';
import ProjectListItem from './ProjectListItem';
import LayoutSidebar from './LayoutSidebar';
import ProjectModal from './ProjectModal';

const ProjectsSection: React.FC = () => {
  // Refs for headings and cards
  const [modalProject, setModalProject] = React.useState(null);
  const [selectedCompany, setSelectedCompany] =
    React.useState('버티고우게임즈');
  const mainHeadingRef = useRef<HTMLHeadingElement>(null);
  const heroDescRef = useRef<HTMLParagraphElement>(null);
  const sidebarRef = useRef<HTMLDivElement>(null);
  const vertigoHeadingRef = useRef<HTMLHeadingElement>(null);
  const o2ozHeadingRef = useRef<HTMLHeadingElement>(null);
  const vertigoCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const o2ozCardsRef = useRef<Array<HTMLDivElement | null>>([]);
  const secondaryCardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    // Sidebar animation
    if (sidebarRef.current) {
      gsap.fromTo(
        sidebarRef.current,
        { x: -40, autoAlpha: 0 },
        {
          x: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: sidebarRef.current,
            start: 'top 95%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );
    }
    // Hero description animation
    if (heroDescRef.current) {
      gsap.fromTo(
        heroDescRef.current,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: heroDescRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );
    }
    // Main heading
    if (mainHeadingRef.current) {
      gsap.fromTo(
        mainHeadingRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: mainHeadingRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );
    }
    // Vertigo heading
    if (vertigoHeadingRef.current) {
      gsap.fromTo(
        vertigoHeadingRef.current,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: vertigoHeadingRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );
    }
    // O2OZ heading
    if (o2ozHeadingRef.current) {
      gsap.fromTo(
        o2ozHeadingRef.current,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: o2ozHeadingRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        },
      );
    }
    // Vertigo cards
    vertigoCardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      }
    });
    // O2OZ cards
    o2ozCardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 95%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      }
    });
    // Secondary cards
    secondaryCardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: i * 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 98%',
              toggleActions: 'play none none none',
              once: true,
            },
          },
        );
      }
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row lg:gap-16">
      {/* 모바일/태블릿: 상단 탭 */}
      <div className="flex gap-2 mb-6 lg:hidden">
        {['버티고우게임즈', '오투오즈'].map((company) => (
          <button
            key={company}
            className={`px-4 py-2 rounded-full font-bold text-sm transition-colors border ${selectedCompany === company ? 'bg-red-100 text-red-600 border-red-300' : 'bg-white text-gray-500 border-gray-200'}`}
            onClick={() => setSelectedCompany(company)}
          >
            {company}
          </button>
        ))}
      </div>
      {/* Sidebar: sticky on large screens */}
      <aside
        ref={sidebarRef}
        className="hidden lg:block w-64 shrink-0 sticky top-32 self-start"
      >
        <LayoutSidebar
          selectedCompany={selectedCompany}
          setSelectedCompany={setSelectedCompany}
        />
      </aside>
      {/* Main content */}
      <main className="flex-1 space-y-24">
        {/* Hero Header */}
        <section id="experience">
          <h1
            ref={mainHeadingRef}
            className="text-4xl md:text-[2.8rem] font-black text-gray-900 leading-[1.1] mb-6 tracking-tight"
          >
            Work Experience
          </h1>
          <p
            ref={heroDescRef}
            className="text-lg text-gray-500 max-w-3xl font-medium leading-relaxed"
          >
            다양한 규모의 서비스에서 기술적 리더십과 비즈니스 가치를 만들어낸
            프로젝트 경험을 소개합니다.
          </p>
        </section>

        {/* Section: 회사별 프로젝트 카드형 */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 rounded-full bg-red-300" />
            <h2 className="text-3xl font-black tracking-tight text-red-600">
              {selectedCompany}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {(selectedCompany === '버티고우게임즈'
              ? VERTIGO_PROJECTS
              : selectedCompany === '오투오즈'
                ? O2OZ_PROJECTS
                : []
            ).map((project, i) => (
              <div
                key={project.id}
                ref={(el) => (vertigoCardsRef.current[i] = el)}
              >
                <div
                  onClick={() => setModalProject(project)}
                  className="cursor-pointer"
                >
                  <ImpactCard project={project} color="red" />
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
      {modalProject && (
        <ProjectModal
          project={modalProject}
          onClose={() => setModalProject(null)}
        />
      )}
    </div>
  );
};

export default ProjectsSection;
