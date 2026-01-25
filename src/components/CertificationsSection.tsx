import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);
import { CERTIFICATIONS } from '../constants';

const CertificationsSection: React.FC = () => {
  const headingRef = useRef<HTMLHeadingElement>(null);
  const certRefs = useRef<Array<HTMLDivElement | null>>([]);

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
    certRefs.current.forEach((block, i) => {
      if (block) {
        gsap.fromTo(
          block,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: i * 0.10,
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
    <section className="mb-12">
      <h2 ref={headingRef} className="text-4xl font-black mb-12 tracking-tight">Certifications</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {CERTIFICATIONS.map((cert, i) => (
          <div key={cert.title} ref={el => certRefs.current[i] = el} className="bg-primary/5 border border-primary/10 rounded-xl p-5 flex items-center gap-3 hover:bg-primary/10 hover:border-primary/30 hover:-translate-y-1 transition-all cursor-default group">
            <span className="material-symbols-outlined text-primary text-lg group-hover:scale-110 transition-transform">verified</span>
            <span className="font-bold text-sm text-gray-800">{cert.title}</span>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CertificationsSection;
