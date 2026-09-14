import React from 'react';
import CertificationsSection from '../components/CertificationsSection';
import EducationSection from '../components/EducationSection';

const AboutPage: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-72px)] bg-white px-6 py-24 md:px-10 md:py-32 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden py-2 md:py-4">
          <div className="absolute left-0 top-0 flex gap-1.5">
            <span className="h-2.5 w-8 rounded-full bg-[#FF829A]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#FFD86B]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#8DD8BC]" />
          </div>
          <div>
            <p className="mb-5 mt-7 text-xs font-bold uppercase tracking-[0.2em] text-[#E94F70]">About / Background</p>
            <h1 className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              <span className="block">꾸준히 배우고,</span>
              <span className="mt-3 block bg-gradient-to-r from-[#FF5F7E] to-[#F3985B] bg-clip-text text-transparent md:mt-4">
                프로젝트에 필요한 역량을 넓혀왔습니다.
              </span>
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-base font-medium leading-7 text-slate-500 md:text-lg md:leading-8">
            프론트엔드에 기반을 두고 모바일, 백엔드, 클라우드 환경까지 경험하며
            <br />
            프로젝트 전체를 이해하는 개발자로 성장하고 있습니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-20">
          <EducationSection />
          <CertificationsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
