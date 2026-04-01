'use client';
import React, { useEffect, useRef } from 'react';

export default function CommunitySection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    sectionRef?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="community" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      <div className="divider-gold mb-20 max-w-7xl mx-auto" />
      {/* Glows */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(85,37,131,0.25) 0%, transparent 65%)' }} />
      <div className="max-w-3xl mx-auto text-center relative z-10">
        <div className="reveal">
          <div className="text-5xl mb-6">🏀</div>
          <span className="font-mono-custom text-xs tracking-[0.4em] uppercase text-gold/60 block mb-4">Join the Movement</span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter mb-6">
            THE <span className="gold-gradient-text">COMMUNITY</span>
          </h2>
          <p className="text-white/55 text-lg leading-relaxed mb-10 max-w-xl mx-auto">
            $LUKA is more than a coin — it's a movement. Lakers fans, Luka believers, and memecoin degens unite.
            Join our Telegram and be part of history.
          </p>
        </div>

        <div className="reveal delay-200">
          <a
            href="https://t.me/luckyluka_memecoin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-12 py-5 text-base font-display font-bold tracking-widest rounded-none inline-flex items-center justify-center gap-4 mb-6"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.04 9.613c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.88 14.49 5.1 13.63c-.652-.204-.665-.652.136-.965l10.868-4.19c.543-.196 1.018.132.843.963l-.385-.19z" />
            </svg>
            Join Telegram Now
          </a>
        </div>

        {/* Social proof placeholder */}
        <div className="reveal delay-300 flex flex-wrap justify-center gap-6 mt-8">
          {[
            { icon: '🌍', label: 'Global Community' },
            { icon: '🔥', label: 'Degen Energy' },
            { icon: '💜', label: 'Lakers Pride' },
            { icon: '🚀', label: 'To The Moon' },
          ]?.map((item) => (
            <div key={item?.label} className="flex items-center gap-2 px-4 py-2 glass-card rounded-full">
              <span>{item?.icon}</span>
              <span className="font-mono-custom text-xs text-white/60 tracking-widest uppercase">{item?.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}