import React from 'react';
import { ChevronDown } from 'lucide-react';
import SplineBackground from './SplineBackground';

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden custom-hero bg-gradient-to-b from-blue-100 to-white dark:bg-gradient-to-b dark:from-gray-900 dark:to-black transition-colors duration-300">
      <SplineBackground />
      {/* Split names on shoulders */}
      <h1 className="absolute z-30 left-[6%] top-[15%] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent animate-pulse drop-shadow-2xl select-none pointer-events-none tracking-tight">
        PINTOO
      </h1>
      <h1 className="absolute z-30 right-[18%] top-[15%] text-5xl md:text-7xl lg:text-8xl xl:text-9xl font-bold bg-gradient-to-r from-gray-600 via-gray-800 to-black bg-clip-text text-transparent animate-pulse drop-shadow-2xl select-none pointer-events-none tracking-tight text-right">
        SAFI
      </h1>
      {/* Subtitle and tagline in upward blank area above robot head */}
      <div className="absolute z-30 left-1/2 -translate-x-1/2 top-[3%] flex flex-col items-center w-full">
        <div className="text-xl lg:text-2xl bg-gradient-to-r from-gray-500 to-gray-700 bg-clip-text text-transparent font-light tracking-wider drop-shadow-lg mb-1">
        Video Editor
        </div>
        <div className="text-lg lg:text-xl bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent max-w-2xl mx-auto px-6 drop-shadow-lg">
          "Where imagination meets the timeline"
        </div>
      </div>
      {/* Status buttons stacked at bottom right, slightly lower */}
      <div className="absolute bottom-4 right-2 z-30 flex flex-col items-end space-y-3">
        <div className="px-6 py-3 bg-gradient-to-r from-gray-800/80 to-gray-900/80 backdrop-blur-sm rounded-full border border-gray-700 text-sm font-medium drop-shadow-lg">
          SYSTEM: ONLINE
        </div>
        <div className="px-6 py-3 bg-gradient-to-r from-white/90 to-gray-300/90 backdrop-blur-sm text-black rounded-full text-sm font-medium drop-shadow-lg">
          STATUS: READY
        </div>
      </div>
      {/* Chevron */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce z-20">
        <ChevronDown size={32} className="text-gray-600" />
      </div>
    </section>
  );
};

export default Hero;