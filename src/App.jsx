import React from 'react';
import Hero from './components/Hero';
import FeaturesAndArchitecture from './components/FeaturesAndArchitecture';
import RoleCards from './components/RoleCards';
import JourneyAndPitch from './components/JourneyAndPitch';

function App() {
  return (
    <div className="min-h-screen w-full bg-[#060913] font-inter text-white">
      <Hero />
      <FeaturesAndArchitecture />
      <RoleCards />
      <JourneyAndPitch />
      <footer className="w-full bg-[#060913] py-10 text-center text-xs text-white/50">
        <div className="mx-auto max-w-7xl px-6">
          Built with an AI mentor at the core — adaptive, ethical, and collaborative.
        </div>
      </footer>
    </div>
  );
}

export default App;
