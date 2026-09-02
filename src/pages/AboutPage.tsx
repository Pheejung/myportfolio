import React from 'react';
import CertificationsSection from '../components/CertificationsSection';
import EducationSection from '../components/EducationSection';

const AboutPage: React.FC = () => {
  return (
    <section className="min-h-[calc(100vh-72px)] bg-[#fffdfb] px-6 pb-24 pt-32 md:px-10 md:pb-32 md:pt-40 lg:px-16">
      <div className="mx-auto max-w-7xl">
        <div className="border-b border-slate-300 pb-14">
          <div>
            <p className="mb-5 text-xs font-bold uppercase tracking-[0.2em] text-[#e9685a]">About / Background</p>
            <h1 className="max-w-5xl text-[1.75rem] font-extrabold leading-[1.45] tracking-[-0.035em] text-slate-800 sm:text-4xl md:text-[2.75rem] lg:text-5xl">
              <span className="block">꾸준히 배우고,</span>
              <span className="mt-3 block text-[#e9685a] md:mt-4">제품에 필요한 역량을 넓혀왔습니다.</span>
            </h1>
          </div>
          <p className="mt-6 max-w-3xl text-base font-bold leading-7 text-slate-600 md:text-lg md:leading-8">
            프론트엔드에 기반을 두고 모바일, 백엔드, 클라우드 환경까지 경험하며
            <br />
            제품 전체를 이해하는 개발자로 성장하고 있습니다.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-20 lg:grid-cols-2 lg:gap-24">
          <EducationSection />
          <CertificationsSection />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
