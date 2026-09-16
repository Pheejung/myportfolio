import React, { useEffect, useRef } from 'react';
import { ArrowRight, Mail, MoveUpRight } from 'lucide-react';
import { gsap } from 'gsap';
import { getRouteHref, navigateToRoute } from '../router';

const EXPERTISE = [
  {
    number: '01',
    title: 'Project Ownership',
    description: '요구사항을 화면 구현에 그치지 않고 사용자와 운영 관점의 문제로 해석합니다.',
    cardClass: 'border-[#FFDDE5] bg-[#FFF7F9] hover:border-[#FFC4D0]',
    accentClass: 'bg-[#FFE3EA] text-[#E94F70]',
  },
  {
    number: '02',
    title: 'Scalable UI',
    description: '디자인 시스템과 재사용 구조로 서비스가 커져도 흔들리지 않는 기반을 만듭니다.',
    cardClass: 'border-[#F3E4AD] bg-[#FFFCF0] hover:border-[#EED47A]',
    accentClass: 'bg-[#FFF1B8] text-[#9A7410]',
  },
  {
    number: '03',
    title: 'Reliable Delivery',
    description: '런칭부터 운영·개선까지 책임지고 프로젝트의 완성도를 높입니다.',
    cardClass: 'border-[#CFEBDD] bg-[#F5FCF8] hover:border-[#A8DCC5]',
    accentClass: 'bg-[#DDF5E9] text-[#278165]',
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

    }, sectionRef);

    return () => context.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative min-h-screen overflow-hidden border-b border-[#F3E7DC] bg-gradient-to-br from-[#FFF8ED] via-[#FFFDF9] to-[#FFF2F6] px-6 pb-16 pt-32 md:px-10 md:pb-20 md:pt-40 lg:px-16"
    >
      <div className="pointer-events-none absolute inset-0 hero-grid" />
      <div className="pointer-events-none absolute -right-28 top-14 h-96 w-96 rounded-full bg-[#FFE9A9]/45 blur-3xl" />
      <div className="pointer-events-none absolute -left-24 bottom-10 h-72 w-72 rounded-full bg-[#FFDCE5]/45 blur-3xl" />
      <div className="pointer-events-none absolute right-[12%] top-36 h-16 w-16 rotate-12 rounded-[1.5rem] bg-[#DDF5E9]/80" />
      <span className="pointer-events-none absolute right-[8%] top-28 text-2xl text-[#FF9AB0] md:text-3xl">✦</span>

      <div className="relative mx-auto flex min-h-[calc(100vh-10rem)] max-w-7xl flex-col justify-between">
        <div>
          <h1
            data-hero-reveal
            className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 max-lg:leading-[2] max-sm:leading-[1.22] sm:text-4xl md:text-[2.75rem] lg:text-5xl"
          >
            <span className="block">안녕하세요!</span>
            <span className="mt-4 block max-lg:mt-3 max-sm:mt-2">
              프론트엔드 개발자{' '}
              <span className="text-[#E94F70]">박희정</span>입니다.
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
              href={getRouteHref('/career')}
              onClick={(event) => {
                if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
                event.preventDefault();
                navigateToRoute('/career');
              }}
              className="group inline-flex items-center gap-3 rounded-full bg-[#FF6685] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(255,102,133,0.25)] transition hover:-translate-y-0.5 hover:bg-[#F45677] hover:shadow-[0_14px_28px_rgba(255,102,133,0.3)] focus:outline-none focus:ring-2 focus:ring-[#FF9DB1] focus:ring-offset-2"
            >
              프로젝트 살펴보기
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="mailto:gmlwjd2116@gmail.com"
              className="group inline-flex items-center gap-3 rounded-full border border-[#F0DCD5] bg-white/80 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm transition hover:-translate-y-0.5 hover:border-[#F2B9C5] hover:text-[#E94F70] focus:outline-none focus:ring-2 focus:ring-[#FF9DB1] focus:ring-offset-2"
            >
              Contact me
              <Mail className="h-4 w-4 transition-transform group-hover:scale-110" />
            </a>
          </div>
        </div>

        <div className="mt-20 grid gap-4 md:grid-cols-3 lg:mt-28">
          {EXPERTISE.map((item) => (
            <article
              key={item.number}
              className={`group relative rounded-3xl border p-6 shadow-[0_10px_30px_rgba(96,69,52,0.06)] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(96,69,52,0.1)] md:p-7 ${item.cardClass}`}
            >
              <div className="mb-6 flex items-center justify-between">
                <span className={`flex h-8 w-8 items-center justify-center rounded-xl text-[11px] font-bold ${item.accentClass}`}>{item.number}</span>
                <MoveUpRight className="h-4 w-4 text-slate-300 transition group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-[#FF6685]" />
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
