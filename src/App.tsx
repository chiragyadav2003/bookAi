import React from 'react';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import { LightParticleBackground } from './components/lightParticleBackground';
import { DarkParticleBackground } from './components/darkParticleBackground';
import { useTheme } from './contexts/ThemeContext';

const App: React.FC = () => {
  const { isDarkMode } = useTheme();
  return (
    <>
      <div className="relative min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        {
          isDarkMode ? <DarkParticleBackground /> : <LightParticleBackground />
        }
        <div className="relative z-10"> {/* Ensure z-index is higher here */}
          <Navbar />
          <main className="py-12 px-4 sm:px-6 lg:px-8">
            <PricingSection />
          </main>
        </div>
      </div>
    </>
  );
};

export default App;
