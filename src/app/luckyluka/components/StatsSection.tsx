'use client';
import React, { useEffect, useRef } from 'react';

const stats = [
  { value: '33.8', label: 'Points Per Game', sub: 'PPG', emoji: '🏀', color: 'gold' },
  { value: '7.8', label: 'Rebounds Per Game', sub: 'RPG', emoji: '💪', color: 'purple' },
  { value: '8.3', label: 'Assists Per Game', sub: 'APG', emoji: '🎯', color: 'gold' },
  { value: '1.6', label: 'Steals Per Game', sub: 'STL', emoji: '⚡', color: 'purple' },
];

const highlights = [
  {
    title: 'First Season with the Lakers',
    desc: 'Luka Doncic made his Lakers debut in 2024-25, instantly becoming the face of the franchise and leading the team back to championship contention.',
    icon: '🌟',
  },
  {
    title: '2025 NBA All-Star Selection',
    desc: 'Named to the 2025 NBA All-Star Game, continuing his streak as one of the most dominant players in the league.',
    icon: '⭐',
  },
  {
    title: 'Elite Scoring Performances',
    desc: 'Multiple 40+ point games in his debut Lakers season, including a jaw-dropping 52-point masterclass against the Celtics.',
    icon: '🔥',
  },
  {
    title: 'Triple-Double Machine',
    desc: 'Recorded 18 triple-doubles in his first Lakers season, cementing himself as the engine of the purple and gold.',
    icon: '👑',
  },
];

export default function StatsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.15, rootMargin: '0px 0px -60px 0px' }
    );
    const els = sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right');
    els?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="stats" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Bg glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(ellipse, rgba(85,37,131,0.15) 0%, transparent 70%)', filter: 'blur(40px)' }} />
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16 reveal">
          <span className="font-mono-custom text-xs tracking-[0.4em] uppercase text-gold/60 block mb-4">2025–26 Season</span>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tighter mb-4">
            <span className="text-white">THE </span>
            <span className="gold-gradient-text">NUMBERS</span>
          </h2>
          <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, #552583, #FDB927)' }} />
        </div>

        {/* Big stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats?.map((s, i) => (
            <div
              key={s?.sub}
              className={`stat-card glass-card rounded-2xl p-6 text-center reveal delay-${(i + 1) * 100}`}
            >
              <div className="text-3xl mb-3">{s?.emoji}</div>
              <div className={`font-display text-4xl sm:text-5xl font-bold mb-2 ${s?.color === 'gold' ? 'gold-gradient-text' : 'text-purple-light'}`}>
                {s?.value}
              </div>
              <div className="font-mono-custom text-xs tracking-[0.3em] uppercase text-white/40 mb-1">{s?.sub}</div>
              <div className="text-white/60 text-sm">{s?.label}</div>
            </div>
          ))}
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {highlights?.map((h, i) => (
            <div
              key={h?.title}
              className={`glass-card rounded-2xl p-6 stat-card ${i % 2 === 0 ? 'reveal-left' : 'reveal-right'} delay-${(i + 1) * 100}`}
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center text-2xl"
                  style={{ background: 'linear-gradient(135deg, rgba(253,185,39,0.15), rgba(85,37,131,0.15))', border: '1px solid rgba(253,185,39,0.2)' }}>
                  {h?.icon}
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold text-gold tracking-wide mb-2 uppercase">{h?.title}</h3>
                  <p className="text-white/55 text-sm leading-relaxed">{h?.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom badge */}
        <div className="text-center mt-12 reveal">
          <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-card">
            <span className="text-gold text-lg">🏆</span>
            <span className="font-display text-sm tracking-widest uppercase text-white/80">
              Luka Doncic · Los Angeles Lakers · 2025–26
            </span>
            <span className="text-gold text-lg">🏆</span>
          </div>
        </div>
      </div>
    </section>
  );
}