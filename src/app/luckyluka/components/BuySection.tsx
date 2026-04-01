'use client';
import React, { useState, useEffect, useRef } from 'react';

export default function BuySection() {
  const [copied, setCopied] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const CA = 'CA: TBA';

  const handleCopy = () => {
    navigator.clipboard?.writeText('TBA')?.then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );
    sectionRef?.current?.querySelectorAll('.reveal, .reveal-left, .reveal-right')?.forEach((el) => observer?.observe(el));
    return () => observer?.disconnect();
  }, []);

  return (
    <section id="buy" ref={sectionRef} className="relative py-20 px-4 sm:px-6 lg:px-12 overflow-hidden">
      {/* Divider */}
      <div className="divider-gold mb-20 max-w-7xl mx-auto" />
      {/* Purple glow */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(85,37,131,0.2) 0%, transparent 70%)' }} />
      <div className="max-w-4xl mx-auto text-center relative z-10">
        {/* Header */}
        <div className="reveal mb-12">
          <span className="font-mono-custom text-xs tracking-[0.4em] uppercase text-gold/60 block mb-4">Get In Early</span>
          <h2 className="font-display text-4xl sm:text-6xl font-bold tracking-tighter mb-4">
            BUY <span className="gold-gradient-text">$LULUKA</span>
          </h2>
          <p className="text-white/50 text-lg max-w-xl mx-auto leading-relaxed">
            Don't miss the shot. $LULUKA is the memecoin of Luka's legendary Lakers chapter.
            Early community members ride the wave together.
          </p>
        </div>

        {/* CA Box */}
        <div className="reveal delay-200 mb-8">
          <div className="ca-box rounded-2xl p-6 max-w-2xl mx-auto">
            <div className="font-mono-custom text-xs tracking-[0.3em] uppercase text-gold/50 mb-3">Contract Address</div>
            <div className="flex items-center justify-between gap-4 flex-wrap">
              <span className="font-mono-custom text-white/90 text-sm sm:text-base break-all flex-1">{CA}</span>
              <button
                onClick={handleCopy}
                className={`flex-shrink-0 px-4 py-2 rounded-lg text-xs font-display font-bold tracking-widest uppercase transition-all duration-300 ${
                  copied
                    ? 'bg-green-500/20 border border-green-500/50 text-green-400' :'btn-gold'
                }`}
              >
                {copied ? '✓ Copied' : 'Copy'}
              </button>
            </div>
            <div className="mt-4 pt-4 border-t border-white/5">
              <span className="font-mono-custom text-xs text-white/30 tracking-widest">
                ⚠ Contract address will be updated at launch. Stay tuned on Telegram.
              </span>
            </div>
          </div>
        </div>

        {/* How to Buy steps */}
        <div className="reveal delay-300 mb-10">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
            {[
              { step: '01', title: 'Get a Wallet', desc: 'Download Phantom or Solflare wallet for Solana' },
              { step: '02', title: 'Buy SOL', desc: 'Purchase SOL on Coinbase, Binance, or any exchange' },
              { step: '03', title: 'Swap for $LULUKA', desc: 'Go to Raydium or Jupiter, paste CA, and swap!' },
            ]?.map((item) => (
              <div key={item?.step} className="glass-card rounded-xl p-5 text-left token-card">
                <div className="font-display text-3xl font-bold text-gold/20 mb-2">{item?.step}</div>
                <div className="font-display text-sm font-bold text-white uppercase tracking-wide mb-2">{item?.title}</div>
                <div className="text-white/45 text-sm leading-relaxed">{item?.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Main CTA buttons */}
        <div className="reveal delay-400 flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="https://raydium.io"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-10 py-4 text-sm font-display font-bold tracking-widest rounded-none w-full sm:w-auto text-center inline-block"
          >
            Buy on Raydium 🚀
          </a>
          <a
            href="https://t.me/luckyluka_memecoin"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-gold px-10 py-4 text-sm font-display font-bold tracking-widest rounded-none w-full sm:w-auto text-center inline-block"
          >
            Join Telegram Community
          </a>
        </div>
      </div>
      <div className="divider-gold mt-20 max-w-7xl mx-auto" />
    </section>
  );
}