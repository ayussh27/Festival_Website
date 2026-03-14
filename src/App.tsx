import React from 'react';
import StarsBackground from './components/StarsBackground';
import AmbientParticles from './components/AmbientParticles';
import Navigation from './components/Navigation';
import HeroSection from './sections/HeroSection';
import OurStorySection from './sections/OurStorySection';
import GallerySection from './sections/GallerySection';
import TimelineSection from './sections/TimelineSection';
import GratitudeSection from './sections/GratitudeSection';
import EidLetterSection from './sections/EidLetterSection';
import VoiceNoteSection from './sections/VoiceNoteSection';
import SecretMoonSection from './sections/SecretMoonSection';
import ClosingSection from './sections/ClosingSection';

const App: React.FC = () => {
  return (
    <div
      style={{
        background: '#060d1a',
        minHeight: '100vh',
        position: 'relative',
        overflowX: 'hidden',
      }}
    >
      {/* Global stars background */}
      <StarsBackground />

      {/* Ambient floating particles */}
      <AmbientParticles />

      {/* Navigation */}
      <Navigation />

      {/* Sections */}
      <main>
        <HeroSection />
        <OurStorySection />
        <GallerySection />
        <TimelineSection />
        <GratitudeSection />
        <EidLetterSection />
        <VoiceNoteSection />
        <SecretMoonSection />
        <ClosingSection />
      </main>
    </div>
  );
};

export default App;
