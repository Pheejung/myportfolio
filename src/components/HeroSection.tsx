import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, MoveUpRight } from 'lucide-react';
import { gsap } from 'gsap';

const EXPERTISE = [
  {
    number: '01',
    title: 'Product-minded',
    description: '요구사항을 화면 구현에 그치지 않고 사용자와 운영 관점의 문제로 해석합니다.',
  },
  {
    number: '02',
    title: 'Scalable UI',
    description: '디자인 시스템과 재사용 구조로 서비스가 커져도 흔들리지 않는 기반을 만듭니다.',
  },
  {
    number: '03',
    title: 'Reliable Delivery',
    description: '런칭부터 운영·개선까지 책임지고 안정적인 제품 경험을 완성합니다.',
  },
];

const HeroSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const context = gsap.context(() => {
      gsap.from('[data-hero-reveal]', {
        y: 28,
        autoAlpha: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: 'power3.out',
      });

      gsap.from('[data-expertise-card]', {
        y: 24,
        autoAlpha: 0,
        duration: 0.7,
        delay: 0.35,
        stagger: 0.08,
        ease: 'power3.out',
      });
    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-b border-[#eee3dd] bg-[#fffaf7] px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <div className="pointer-events-none absolute -right-36 top-20 h-96 w-96 rounded-full bg-[#ffd8cf]/55 blur-3xl" />

      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-between">
        <div>
          <h1
            data-hero-reveal
            className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 sm:text-4xl md:text-[2.75rem] lg:text-5xl"
          >
            <span className="block">안녕하세요!</span>
            <span className="mt-3 block md:mt-4">
              프론트엔드 개발자 <span className="text-[#e9685a]">박희정</span>입니다.
            </span>
          </h1>

          <p
            data-hero-reveal
            className="mt-8 max-w-3xl text-base font-bold leading-7 text-slate-600 md:text-lg md:leading-8"
          >
            최신 기술을 활용해 다양한 분야의 서비스를 설계하고 구현했습니다.
            <br />
            기술과 경험을 바탕으로, 복잡한 요구도 쉽고 빠르게 풀어내는 개발을 지향합니다.
          </p>

          <div data-hero-reveal className="mt-10 flex flex-wrap items-center gap-3">
            <a
              href="#/experience"
              className="group inline-flex items-center gap-3 rounded-full bg-[#ef6f61] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_30px_rgba(239,111,97,0.22)] transition hover:bg-[#df5c4e] focus:outline-none focus:ring-2 focus:ring-[#ef6f61] focus:ring-offset-2"
            >
              프로젝트 살펴보기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:gmlwjd2116@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full border border-[#e8cfc8] bg-white/70 px-6 py-3.5 text-sm font-semibold text-slate-700 transition hover:border-[#ef6f61] hover:text-[#d95749] focus:outline-none focus:ring-2 focus:ring-[#ef6f61] focus:ring-offset-2"
            >
              Contact me
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid border-y border-slate-300 md:grid-cols-3 lg:mt-28">
          {EXPERTISE.map((item) => (
            <article
              key={item.number}
              data-expertise-card
              className="group relative border-b border-slate-300 px-1 py-7 last:border-b-0 md:border-b-0 md:border-r md:px-7 md:first:pl-0 md:last:border-r-0 md:last:pr-0"
            >
              <div className="mb-6 flex items-center justify-between">
                <span className="text-xs font-bold text-[#e9685a]">{item.number}</span>
                <MoveUpRight className="h-4 w-4 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#e9685a]" />
              </div>
              <h2 className="text-lg font-bold tracking-tight text-slate-900">{item.title}</h2>
              <p className="mt-2 max-w-sm text-sm leading-6 text-slate-500">{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
