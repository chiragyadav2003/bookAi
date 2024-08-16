import React from 'react';
import Navbar from './components/Navbar';
import PricingSection from './components/PricingSection';
import { ThemeProvider } from './contexts/ThemeContext';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-gray-100 dark:bg-gray-900 transition-colors duration-200">
        <Navbar />
        <main className="py-12 px-4 sm:px-6 lg:px-8">
          <PricingSection />
        </main>
      </div>
    </ThemeProvider>
  );
};

export default App;