import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (!sectionRef.current) return;
    // Heading animation
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
            start: 'top 80%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }
    // Subtitle animation
    if (subtitleRef.current) {
      gsap.fromTo(
        subtitleRef.current,
        { y: 20, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.7,
          delay: 0.1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: subtitleRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }
    // Description animation
    if (descRef.current) {
      gsap.fromTo(
        descRef.current,
        { y: 30, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.8,
          delay: 0.2,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: descRef.current,
            start: 'top 85%',
            toggleActions: 'play none none none',
            once: true,
          },
        }
      );
    }
    // Cards animation
    cardsRef.current.forEach((card, i) => {
      if (card) {
        gsap.fromTo(
          card,
          { y: 40, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.7,
            delay: i * 0.15 + 0.2,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: card,
              start: 'top 90%',
              toggleActions: 'play none none none',
              once: true,
            },
          }
        );
      }
    });
  }, []);

  return (
    <section id="about" className="pt-48 pb-24 px-6 md:px-20 lg:px-40 bg-white" ref={sectionRef}>
      <div className="max-w-6xl mx-auto">
        <h1 ref={headingRef} className="text-6xl md:text-[4rem] font-black leading-[0.9] tracking-tighter mb-10" style={{ lineHeight: '70px' }}>
          안녕하세요. <br />프론트엔드 개발자 <span className="text-primary">박희정</span>입니다.
        </h1>
        <p ref={descRef} className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl leading-relaxed mb-16">
          최신 기술을 활용해 다양한 분야의 서비스를 설계하고 구현했습니다.<br />
          기술과 경험을 바탕으로, 복잡한 요구도 쉽고 빠르게 풀어내는 개발을 지향합니다.
        </p>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <>
            {["speed", "architecture", "insights"].map((icon, i) => (
              <div
                key={icon}
                ref={el => cardsRef.current[i] = el}
                className="p-8 rounded-2xl border border-primary/5 bg-primary/[0.02] hover:bg-primary/[0.05] transition-colors group"
              >
                <span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">
                  {icon === "speed"
                    ? "diversity_3" // 사용자 경험 최적화: 다양성, 사람 중심
                    : icon === "architecture"
                    ? "schema" // 확장성 아키텍처: 구조, 설계
                    : "groups_3" // 커뮤니케이션 & 협업: 협업, 그룹
                  }
                </span>
                <h3 className="font-black text-lg mb-2">
                  {icon === "speed" ? "사용자 경험 최적화" : icon === "architecture" ? "확장성 아키텍처" : "커뮤니케이션 & 협업"}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed font-medium">
                  {icon === "speed"
                    ? "직관적이고 일관된 UI/UX를 설계하며, 사용자 중심의 경험을 만들어왔습니다."
                    : icon === "architecture"
                    ? "대규모 트래픽과 변화에 유연하게 대응할 수 있는 구조 설계와 성능 개선에 집중해왔습니다."
                    : "원활한 협업과 소통으로 다양한 직군과 함께 더 나은 결과를 만들어왔습니다."}
                </p>
              </div>
            ))}
          </>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
