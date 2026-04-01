import React from 'react';
import HeroSection from './components/HeroSection';
import StatsSection from './components/StatsSection';
import BuySection from './components/BuySection';
import TokenomicsSection from './components/TokenomicsSection';
import CommunitySection from './components/CommunitySection';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

export default function LuckyLukaPage() {
  return (
    <main className="bg-bg min-h-screen overflow-x-hidden">
      <Header />
      <HeroSection />
      <StatsSection />
      <BuySection />
      <TokenomicsSection />
      <CommunitySection />
      <Footer />
    </main>
  );
}