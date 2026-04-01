'use client';
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '../components/ui/AppLogo';

export default function Footer() {
  const [year, setYear] = useState('');

  useEffect(() => {
    setYear(new Date()?.getFullYear()?.toString());
  }, []);

  return (
    <footer className="relative py-10 px-4 sm:px-6 lg:px-12 border-t" style={{ borderColor: 'rgba(253,185,39,0.1)' }}>
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
        {/* Logo + brand */}
        <Link href="/luckyluka" className="flex items-center gap-2" aria-label="LuckyLuka">
          <AppLogo size={28} />
          <span className="font-display text-sm font-bold tracking-widest text-gold">
            LUCKY<span className="text-white">LUKA</span>
          </span>
        </Link>

        {/* Links */}
        <div className="flex items-center gap-6">
          <a href="#buy" className="font-mono-custom text-xs tracking-widest uppercase text-white/40 hover:text-gold transition-colors">Buy</a>
          <a href="#tokenomics" className="font-mono-custom text-xs tracking-widest uppercase text-white/40 hover:text-gold transition-colors">Tokenomics</a>
          <a href="https://t.me/+yG3YTjBO6k82MmQ8" target="_blank" rel="noopener noreferrer" className="font-mono-custom text-xs tracking-widest uppercase text-white/40 hover:text-gold transition-colors">Telegram</a>
        </div>

        {/* Copyright */}
        <div className="font-mono-custom text-xs text-white/20 tracking-widest">
          {year && <span>© {year} $LUKA · Not financial advice</span>}
        </div>
      </div>
    </footer>
  );
}