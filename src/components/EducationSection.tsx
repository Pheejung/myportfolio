import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { EDUCATION } from '../constants';

const EducationSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const eduRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (headingRef.current) {
      gsap.fromTo(
        headingRef.current,
        { y: 40, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: headingRef.current,
            start: 'top 90%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }
    eduRefs.current.forEach((block, i) => {
      if (block) {
        gsap.fromTo(
          block,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: i * 0.12,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: block,
              start: 'top 95%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    });
  }, []);

  return (
  <section id="education" className="mb-20">
      <h2 ref={headingRef} className="text-4xl font-black mb-12 tracking-tight">Education</h2>
      <div className="space-y-12">
        {EDUCATION.map((edu, i) => (
          <div key={edu.degree} ref={el => eduRefs.current[i] = el} className="relative pl-8 group">
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
