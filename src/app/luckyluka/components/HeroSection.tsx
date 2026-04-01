'use client';
import React, { useEffect, useRef } from 'react';
import AppImage from '../../../components/ui/AppImage';

export default function HeroSection() {
  const cursorRef = useRef<HTMLDivElement>(null);
  let mouseX = 0, mouseY = 0, cursorX = 0, cursorY = 0;

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };
    window.addEventListener('mousemove', handleMouseMove);

    const animate = () => {
      cursorX += (mouseX - cursorX) * 0.15;
      cursorY += (mouseY - cursorY) * 0.15;
      if (cursorRef.current) {
        cursorRef.current.style.left = cursorX + 'px';
        cursorRef.current.style.top = cursorY + 'px';
      }
      requestAnimationFrame(animate);
    };
    animate();
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden grid-bg noise pt-24 pb-12"
    >
      {/* Cursor */}
      <div ref={cursorRef} className="cursor-dot hidden md:block" style={{ transform: 'translate(-50%, -50%)' }} />

      {/* Ambient glows */}
      <div className="absolute top-0 left-1/4 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(85,37,131,0.35) 0%, transparent 70%)', filter: 'blur(60px)' }} />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(253,185,39,0.2) 0%, transparent 70%)', filter: 'blur(60px)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">

          {/* Left: Text */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            {/* Coin Logo */}
            <div className="flex items-center mb-6">
              <AppImage
                src="/assets/images/luckyluka.PNG"
                alt="LuckyLuka coin logo"
                width={80}
                height={80}
                className="rounded-full ring-2 ring-gold/40 shadow-lg"
                priority
              />
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <span className="inline-block w-8 h-px bg-gold" />
              <span className="font-mono-custom text-xs tracking-[0.4em] uppercase text-gold/80 font-medium">
                Lakers Era Memecoin
              </span>
              <span className="inline-block w-8 h-px bg-gold" />
            </div>

            {/* Main headline */}
            <h1 className="font-display leading-none mb-4">
              <span
                className="block text-outline-gold"
                style={{ fontSize: 'clamp(4rem, 14vw, 13rem)', lineHeight: 0.85 }}
              >
                LUCKY
              </span>
              <span
                className="block shimmer-text gold-glow"
                style={{ fontSize: 'clamp(4rem, 14vw, 13rem)', lineHeight: 0.85 }}
              >
                LUKA
              </span>
            </h1>

            {/* Ticker */}
            <div className="flex items-center gap-4 my-6">
              <span className="font-display text-2xl sm:text-3xl text-gold font-bold tracking-wider">$LULUKA</span>
              <span className="text-white/20 text-2xl">·</span>
              <span className="font-mono-custom text-sm text-white/40 tracking-widest uppercase">On Solana</span>
            </div>

            <p className="text-white/60 text-lg leading-relaxed max-w-lg mb-8 font-light">
              The luckiest coin in the NBA. Luka Doncic brought his magic to LA and the Lakers will never be the same.
              <span className="text-gold font-semibold"> $LULUKA</span> — for the culture, for the championship run.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#buy"
                className="btn-gold px-8 py-4 text-sm font-display font-bold tracking-widest rounded-none inline-flex items-center justify-center gap-3"
              >
                Buy $LULUKA
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
              <a
                href="https://t.me/luckyluka_memecoin"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline-gold px-8 py-4 text-sm font-display font-bold tracking-widest rounded-none inline-flex items-center justify-center gap-3"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.562 8.248l-2.04 9.613c-.148.658-.537.818-1.084.508l-3-2.21-1.447 1.394c-.16.16-.295.295-.605.295l.213-3.053 5.56-5.023c.242-.213-.054-.333-.373-.12L7.88 14.49 5.1 13.63c-.652-.204-.665-.652.136-.965l10.868-4.19c.543-.196 1.018.132.843.963l-.385-.19z" />
                </svg>
                Join Telegram
              </a>
            </div>

            {/* Quick stats bar */}
            <div className="flex flex-wrap gap-6 mt-10 pt-8 border-t border-white/5">
              {[
                { label: 'PPG', value: '33.8' },
                { label: 'APG', value: '8.3' },
                { label: 'RPG', value: '7.8' },
              ].map((s) => (
                <div key={s.label} className="flex flex-col">
                  <span className="font-display text-2xl font-bold text-gold">{s.value}</span>
                  <span className="font-mono-custom text-xs text-white/40 tracking-widest uppercase">{s.label}</span>
                </div>
              ))}
              <div className="flex flex-col">
                <span className="font-display text-2xl font-bold text-purple-light">All-Star</span>
                <span className="font-mono-custom text-xs text-white/40 tracking-widest uppercase">2026</span>
              </div>
            </div>
          </div>

          {/* Right: Luka Photo */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            {/* Floating stat cards */}
            <div className="absolute -left-4 top-16 z-20 glass-card rounded-xl px-4 py-3 animate-float-up hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-gold animate-pulse-gold" />
                <div>
                  <div className="font-display text-lg font-bold text-gold">33.8</div>
                  <div className="font-mono-custom text-xs text-white/40 tracking-widest">PPG</div>
                </div>
              </div>
            </div>

            <div className="absolute -right-2 top-1/3 z-20 glass-card-purple rounded-xl px-4 py-3 animate-float-down hidden sm:block">
              <div className="flex items-center gap-3">
                <div className="w-2 h-2 rounded-full bg-purple-light animate-pulse-purple" />
                <div>
                  <div className="font-display text-lg font-bold text-purple-light">All-Star</div>
                  <div className="font-mono-custom text-xs text-white/40 tracking-widest">2025-26</div>
                </div>
              </div>
            </div>

            <div className="absolute left-0 bottom-8 z-20 glass-card rounded-xl px-4 py-3 animate-float-slow hidden sm:block">
              <div className="flex items-center gap-3">
                <span className="text-gold text-lg">🏀</span>
                <div>
                  <div className="font-display text-base font-bold text-white">Lakers</div>
                  <div className="font-mono-custom text-xs text-white/40 tracking-widest">Season 1</div>
                </div>
              </div>
            </div>

            {/* Photo container */}
            <div className="relative w-full max-w-sm lg:max-w-full">
              {/* Outer glow ring */}
              <div className="absolute inset-0 rounded-2xl animate-pulse-purple" style={{ background: 'linear-gradient(135deg, rgba(85,37,131,0.4), rgba(253,185,39,0.2))', filter: 'blur(20px)', transform: 'scale(1.05)' }} />

              {/* Gold accent border */}
              <div className="absolute -inset-1 rounded-2xl" style={{ background: 'linear-gradient(135deg, #FDB927, #552583, #FDB927)', padding: '2px', zIndex: 0 }}>
                <div className="w-full h-full rounded-2xl bg-bg" />
              </div>

              <div className="relative z-10 rounded-2xl overflow-hidden" style={{ aspectRatio: '3/4' }}>
                <AppImage
                  src="/assets/images/IMG_7923.jpg"
                  alt="Luka Doncic in Lakers uniform during the 2024-25 NBA season"
                  fill
                  className="object-cover object-top"
                  priority
                  sizes="(max-width: 768px) 90vw, 40vw"
                />
                {/* Gradient overlay on photo */}
                <div className="absolute inset-0" style={{ background: 'linear-gradient(to top, rgba(10,6,8,0.8) 0%, rgba(85,37,131,0.2) 40%, transparent 70%)' }} />

                {/* Bottom label on photo */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="font-display text-xs tracking-[0.3em] uppercase text-gold/80 mb-1">LA Lakers · #77</div>
                  <div className="font-display text-xl font-bold text-white">Luka Dončić</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce-subtle">
        <span className="font-mono-custom text-xs text-white/20 tracking-[0.4em] uppercase">Scroll</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="rgba(253,185,39,0.4)" strokeWidth="2">
          <path d="M12 5v14M5 12l7 7 7-7" />
        </svg>
      </div>
    </section>
  );
}