import React from 'react';

const HeroSection: React.FC = () => {
  return (
    <section id="about" className="pt-48 pb-24 px-6 md:px-20 lg:px-40 bg-white">
      <div className="max-w-6xl mx-auto">
        <span className="text-primary font-black uppercase tracking-[0.2em] text-xs mb-6 block animate-pulse">Frontend Architect</span>
        <h1 className="text-6xl md:text-[8rem] font-black leading-[0.9] tracking-tighter mb-10">
          Building <span className="text-primary">Scalable</span> <br className="hidden md:block"/> Digital Frontiers.
        </h1>
        <p className="text-xl md:text-2xl text-gray-500 font-medium max-w-3xl leading-relaxed mb-16">
          I am Park Hee-jung, a Senior Frontend Developer specializing in high-performance WebGL environments and enterprise logistics systems. I transform complex architectural problems into seamless, measurable user experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-8 rounded-2xl border border-primary/5 bg-primary/[0.02] hover:bg-primary/[0.05] transition-colors group">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">speed</span>
            <h3 className="font-black text-lg mb-2">Performance First</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Expert in WASM, Web Workers, and rendering optimization to hit 60FPS consistently.</p>
          </div>
          <div className="p-8 rounded-2xl border border-primary/5 bg-primary/[0.02] hover:bg-primary/[0.05] transition-colors group">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">architecture</span>
            <h3 className="font-black text-lg mb-2">Clean Architecture</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Designing modular, testable frontend infrastructures for 50k+ daily active users.</p>
          </div>
          <div className="p-8 rounded-2xl border border-primary/5 bg-primary/[0.02] hover:bg-primary/[0.05] transition-colors group">
            <span className="material-symbols-outlined text-primary mb-4 text-3xl group-hover:scale-110 transition-transform">insights</span>
            <h3 className="font-black text-lg mb-2">Impact Driven</h3>
            <p className="text-sm text-gray-500 leading-relaxed font-medium">Proven track record of reducing latency by 40% and operational risk by 30% through technical innovation.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
