import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Navigation from './components/Navigation';
import About from './components/About';
import CodingProjects from './components/CodingProjects';
import VideoShowcase from './components/VideoShowcase';
import AIGallery from './components/AIGallery';
import Contact from './components/Contact';
// import ControlPanel from './components/ControlPanel';
import Preloader from './components/Preloader';
import CursorEffects from './components/CursorEffects';
import CursorSettingsPanel from './components/CursorSettingsPanel';
import PhotoSection from './components/PhotoSection';
import { useTheme } from './hooks/useTheme';
import BackgroundAudio from './components/BackgroundAudio';
// import { useAudio } from './hooks/useAudio';
// import { useCursor } from './hooks/useCursor';

function App() {
  const { theme } = useTheme();
  // const { isPlaying, toggleAudio } = useAudio();
  // const { cursorMode, toggleCursorMode } = useCursor();

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white ${theme === 'dark' ? 'dark' : ''}`}>
      <BackgroundAudio />
      <Preloader />
      <CursorEffects />
      <CursorSettingsPanel />
      <Header />
      <Navigation />
      <Hero />
      <About />
      <CodingProjects />
      <VideoShowcase />
      <PhotoSection />
      <AIGallery />
      <Contact />
    </div>
  );
}

export default App;