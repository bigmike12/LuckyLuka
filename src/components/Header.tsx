'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '../components/ui/AppLogo';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#stats', label: 'Stats' },
    { href: '#buy', label: 'Buy' },
    { href: '#tokenomics', label: 'Tokenomics' },
    { href: '#community', label: 'Community' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? 'py-3' : 'py-5'
      }`}
      style={{
        background: scrolled ? 'rgba(10,6,8,0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(253,185,39,0.1)' : 'none',
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/luckyluka" className="flex items-center gap-2 group" aria-label="LuckyLuka home">
          <AppLogo size={32} />
          <span className="font-display text-base font-bold tracking-widest text-gold group-hover:gold-glow transition-all">
            LUCKY<span className="text-white">LUKA</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="font-mono-custom text-xs tracking-[0.3em] uppercase text-white/50 hover:text-gold transition-colors duration-300"
            >
              {link?.label}
            </a>
          ))}
        </nav>

        {/* CTA */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://t.me/+yG3YTjBO6k82MmQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-5 py-2.5 text-xs font-display font-bold tracking-widest rounded-none"
          >
            Buy $LUKA
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={menuOpen}
        >
          <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-gold transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>
      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="md:hidden fixed inset-0 top-0 z-[-1] flex flex-col items-center justify-center gap-8"
          style={{ background: 'rgba(10,6,8,0.97)', backdropFilter: 'blur(20px)' }}
          onClick={() => setMenuOpen(false)}
        >
          {navLinks?.map((link) => (
            <a
              key={link?.href}
              href={link?.href}
              className="font-display text-2xl font-bold tracking-widest uppercase text-white hover:text-gold transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {link?.label}
            </a>
          ))}
          <a
            href="https://t.me/+yG3YTjBO6k82MmQ8"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-gold px-8 py-4 text-sm font-display font-bold tracking-widest rounded-none mt-4"
            onClick={() => setMenuOpen(false)}
          >
            Buy $LUKA
          </a>
        </div>
      )}
    </header>
  );
}