import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

const HeroSection: React.FC = () => {
  const [fontLoaded, setFontLoaded] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLSpanElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const cardsRef = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    if (document.fonts) {
      document.fonts.load('1em "Material Symbols Outlined"').then(() => {
        setFontLoaded(true);
      });
    } else {
      setFontLoaded(true); // fallback for browsers without document.fonts
    }
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
        },
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
        },
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
        },
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
          },
        );
      }
    });
  }, []);

  return (
    <section
      id="about"
      className="min-h-screen flex items-center pt-40 md:pt-24 pb-20 px-6 md:px-20 lg:px-40 bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
      ref={sectionRef}
    >
      <div className="max-w-6xl mx-auto">
        <h1
          ref={headingRef}
          className="text-3xl md:text-[2.8rem] font-black leading-[1.1] tracking-tight mb-8"
        >
          안녕하세요! 👋 <br />
          <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 bg-clip-text text-transparent">
            프론트엔드 개발자
          </span>{' '}
          <span className="text-gray-800">박희정</span>입니다.
        </h1>
        <p
          ref={descRef}
          className="text-base md:text-xl text-gray-600 font-medium max-w-3xl leading-relaxed mb-10 md:mb-16"
        >
          최신 기술을 활용해 다양한 분야의 서비스를 설계하고 구현했습니다.
          <br />
          기술과 경험을 바탕으로, 복잡한 요구도 쉽고 빠르게 풀어내는 개발을
          지향합니다.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
          <>
            {['speed', 'architecture', 'insights'].map((icon, i) => (
              <div
                key={icon}
                ref={(el) => (cardsRef.current[i] = el)}
                className="w-56 h-56 md:w-72 md:h-72 rounded-full bg-gradient-to-br from-pink-100 via-purple-100 to-blue-100 shadow-lg hover:scale-[1.08] hover:shadow-2xl hover:rotate-3 transition-all duration-300 group flex flex-col items-center justify-center text-center mx-auto border-4 border-white"
              >
                <span className="flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-full mb-3 bg-white border-4 border-pink-200 shadow-md group-hover:animate-bounce">
                  {fontLoaded && (
                    <span
                      translate="no"
                      className="notranslate material-symbols-outlined text-transparent bg-gradient-to-br from-pink-400 to-purple-400 bg-clip-text text-4xl md:text-5xl group-hover:scale-110 transition-transform"
                    >
                      {icon === 'speed'
                        ? 'diversity_3'
                        : icon === 'architecture'
                          ? 'schema'
                          : 'groups_3'}
                    </span>
                  )}
                </span>
                <h3 className="font-black text-sm md:text-lg mb-2 text-gray-800 drop-shadow-sm px-2">
                  {icon === 'speed'
                    ? '사용자 경험 최적화'
                    : icon === 'architecture'
                      ? '확장성 아키텍처'
                      : '커뮤니케이션 & 협업'}
                </h3>
                <p className="text-xs md:text-[14px] text-gray-600 leading-relaxed font-normal px-4 md:px-6">
                  {icon === 'speed'
                    ? '직관적이고 일관된 UI/UX를 설계하며, 사용자 중심의 경험을 만들어왔습니다.'
                    : icon === 'architecture'
                      ? '대규모 트래픽과 변화에 유연하게 대응할 수 있는 구조 설계와 성능 개선에 집중해왔습니다.'
                      : '원활한 협업과 소통으로 다양한 직군과 함께 더 나은 결과를 만들어왔습니다.'}
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
