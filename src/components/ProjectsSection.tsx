import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { VERTIGO_PROJECTS, O2OZ_PROJECTS, SECONDARY_PROJECTS } from '../constants';
import ImpactCard from './ImpactCard';
import ProjectListItem from './ProjectListItem';
import LayoutSidebar from './LayoutSidebar';
import ProjectModal from './ProjectModal';

const ProjectsSection: React.FC = () => {
  // Refs for headings and cards
  const [modalProject, setModalProject] = React.useState(null);
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
        }
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
        }
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
        }
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
        }
      );
    }
    // O2Oz heading
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
        }
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
          }
        );
      }
    });
    // O2Oz cards
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
          }
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
            delay: i * 0.10,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 98%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 pt-32 pb-24 flex flex-col lg:flex-row gap-16">
      {/* Sidebar: sticky on large screens */}
      <aside ref={sidebarRef} className="hidden lg:block w-64 shrink-0 sticky top-32 self-start">
        <LayoutSidebar />
      </aside>
      {/* Main content */}
      <main className="flex-1 space-y-24">
        {/* Hero Header */}
        <section>
          <h1 ref={mainHeadingRef} className="text-6xl font-black text-gray-900 leading-[1.1] mb-6 tracking-tight">
            Work Experience
          </h1>
          <p ref={heroDescRef} className="text-lg text-gray-500 max-w-2xl font-medium leading-relaxed">
            Showcasing technical excellence and measurable business results across scalable frontend infrastructures.
          </p>
        </section>

        {/* Section: Vertigo Games */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-red-500 rounded-full" />
            <h2 ref={vertigoHeadingRef} className="text-3xl font-black text-gray-900 tracking-tight">Vertigo Games</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {VERTIGO_PROJECTS.map((project, i) => (
              <div key={project.id} ref={el => vertigoCardsRef.current[i] = el}>
                <div onClick={() => setModalProject(project)} className="cursor-pointer">
                  <ImpactCard project={project} />
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Section: O2Oz Logistics */}
        <section>
          <div className="flex items-center gap-4 mb-10">
            <div className="h-1 w-12 bg-gray-200 rounded-full" />
            <h2 ref={o2ozHeadingRef} className="text-3xl font-black text-gray-900 tracking-tight">O2Oz Logistics</h2>
          </div>
          <div className="space-y-4">
            {O2OZ_PROJECTS.map((project, i) => (
              <div key={project.id} ref={el => o2ozCardsRef.current[i] = el}>
                <div onClick={() => setModalProject(project)} className="cursor-pointer">
                  <ProjectListItem project={project} />
                </div>
              </div>
            ))}
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-10">
            {SECONDARY_PROJECTS.map((proj, idx) => (
              <div key={idx} ref={el => secondaryCardsRef.current[idx] = el}>
                <div onClick={() => setModalProject(proj)} className="p-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200 cursor-pointer">
                  <h4 className="font-bold text-sm text-gray-900 mb-1">{proj.title}</h4>
                  <p className="text-xs text-gray-400 font-medium">{proj.description}</p>
                </div>
              </div>
            ))}
            <div className="flex items-center justify-center p-6 bg-gray-50/50 rounded-xl border border-dashed border-gray-200">
              <p className="text-xs font-bold text-red-500 italic">+2 Internal Tooling Apps</p>
            </div>
          </div>
        </section>
      </main>
    {modalProject && (
      <ProjectModal project={modalProject} onClose={() => setModalProject(null)} />
    )}
    </div>
  );
};

export default ProjectsSection;
