import React from 'react';
import { Hero } from './components/Hero';
import { TourCatalog } from './components/TourCatalog';
import { Location } from './components/Location';
import { WhatsAppButton } from './components/WhatsAppButton';
import { Footer } from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <TourCatalog />
      <Location />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
