'use client';
import React, { useEffect, useRef } from 'react';

// BENTO GRID AUDIT (4-col grid):
// Row 1: [Total Supply col-span-2] + [Tax col-span-2] = 4/4 ✓
// Row 2: [LP Burned col-span-1] + [Renounced col-span-1] + [Community col-span-2] = 4/4 ✓

const tokenCards = [
  {
    id: 'supply',
    colSpan: 'col-span-2',
    title: 'Total Supply',
    value: '1,000,000,000',
    sub: '1 Billion $LUKA',
    icon: '💰',
    color: 'gold',
    desc: 'Fixed supply. No minting. No inflation.',
  },
  {
    id: 'tax',
    colSpan: 'col-span-2',
    title: 'Buy / Sell Tax',
    value: '0% / 0%',
    sub: 'Zero Tax',
    icon: '✅',
    color: 'purple',
    desc: 'No hidden fees. Pure community token.',
  },
  {
    id: 'lp',
    colSpan: 'col-span-1',
    title: 'Liquidity',
    value: 'Burned',
    sub: '100% LP Burned',
    icon: '🔥',
    color: 'gold',
    desc: 'Locked forever.',
  },
  {
    id: 'renounced',
    colSpan: 'col-span-1',
    title: 'Contract',
    value: 'Renounced',
    sub: 'No Dev Control',
    icon: '🔒',
    color: 'purple',
    desc: 'Fully decentralized.',
  },
  {
    id: 'community',
    colSpan: 'col-span-2',
    title: 'Community Owned',
    value: '100%',
    sub: 'For the People',
    icon: '👥',
    color: 'gold',
    desc: 'No team allocation. No VC. $LUKA belongs to the community.',
  },
];

export default function TokenomicsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.1 }
    );
    sectionRef?.current?.querySelectorAll('.reveal')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="tokenomics" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Bg accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(253,185,39,0.08) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14 reveal">
          <span className="font-mono-custom text-xs tracking-[0.4em] uppercase text-gold/60 block mb-4">On-Chain Details</span>
          <h2 className="font-display text-4xl sm:text-5xl font-bold tracking-tighter mb-4">
            <span className="gold-gradient-text">TOKENOMICS</span>
          </h2>
          <div className="w-16 h-1 mx-auto" style={{ background: 'linear-gradient(90deg, #FDB927, #552583)' }} />
        </div>

        {/* Bento grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {tokenCards?.map((card, i) => (
            <div
              key={card?.id}
              className={`
                ${card?.colSpan?.includes('2') ? 'col-span-2' : 'col-span-1'}
                token-card glass-card rounded-2xl p-6 reveal delay-${(i + 1) * 100}
              `}
            >
              <div className="flex items-start justify-between mb-4">
                <span className="text-2xl">{card?.icon}</span>
                <span className={`font-mono-custom text-xs tracking-widest uppercase px-2 py-1 rounded-full ${
                  card?.color === 'gold' ?'bg-gold/10 text-gold/80' :'bg-purple-light/10 text-purple-light/80'
                }`}>
                  {card?.sub}
                </span>
              </div>
              <div className={`font-display text-2xl sm:text-3xl font-bold mb-1 ${
                card?.color === 'gold' ? 'gold-gradient-text' : 'text-purple-light'
              }`}>
                {card?.value}
              </div>
              <div className="font-display text-xs font-bold tracking-widest uppercase text-white/50 mb-2">{card?.title}</div>
              <p className="text-white/40 text-xs leading-relaxed">{card?.desc}</p>
            </div>
          ))}
        </div>

        {/* Distribution visual */}
        <div className="mt-10 reveal delay-300">
          <div className="glass-card rounded-2xl p-6">
            <div className="font-mono-custom text-xs tracking-[0.3em] uppercase text-gold/50 mb-4">Token Distribution</div>
            <div className="flex flex-col gap-3">
              {[
                { label: 'Community & Trading', pct: 93, color: '#FDB927' },
                { label: 'Liquidity Pool', pct: 5, color: '#7B3FBE' },
                { label: 'Marketing', pct: 2, color: '#552583' },
              ]?.map((item) => (
                <div key={item?.label} className="flex items-center gap-4">
                  <div className="w-28 sm:w-36 text-white/50 text-sm font-medium flex-shrink-0">{item?.label}</div>
                  <div className="flex-1 h-3 rounded-full bg-white/5 overflow-hidden">
                    <div
                      className="h-full rounded-full transition-all duration-1000"
                      style={{ width: `${item?.pct}%`, background: item?.color, boxShadow: `0 0 8px ${item?.color}60` }}
                    />
                  </div>
                  <div className="w-10 text-right font-mono-custom text-sm font-bold" style={{ color: item?.color }}>
                    {item?.pct}%
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}