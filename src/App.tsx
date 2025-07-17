// Revert to single-page app: remove React Router and render all sections in order
import Header from './components/Header';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import CodingProjects from './components/CodingProjects';
import VideoShowcase from './components/VideoShowcase';
import AIGallery from './components/AIGallery';
import Contact from './components/Contact';
import Preloader from './components/Preloader';
import PhotoSection from './components/PhotoSection';
import { useTheme } from './hooks/useTheme';
import BackgroundAudio from './components/BackgroundAudio';
// import FAQBot from './components/FAQBot';
// import ChatBot3D from './components/ChatBot3D';

function App() {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-300 bg-white text-black dark:bg-black dark:text-white ${theme === 'dark' ? 'dark' : ''}`}>
      <BackgroundAudio />
      <Preloader />
      <Header />
      <Navigation />
      <Hero />
      <About />
      <CodingProjects />
      <VideoShowcase />
      <PhotoSection />
      <AIGallery />
      <Contact />
      {/* <FAQBot /> */}
    </div>
  );
}

export default App;