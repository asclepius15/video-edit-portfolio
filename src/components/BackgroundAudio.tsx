import React, { useRef, useEffect, useState } from 'react';
import backgroundAudio from '/asset/background1.mp3';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.3); // Lower default volume for better UX
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
      
      // Set up audio properties for better autoplay
      audio.loop = true;
      audio.preload = 'auto';
      
      // Try to autoplay when component mounts
      const attemptAutoplay = async () => {
        try {
          await audio.play();
          setIsPlaying(true);
        } catch {
          console.log('Autoplay prevented by browser policy. User interaction required.');
          // Audio will start when user first interacts with the page
        }
      };
      
      attemptAutoplay();
    }
  }, [isMuted, volume]);

  // Handle user interaction to enable audio
  useEffect(() => {
    const handleUserInteraction = async () => {
      if (!hasUserInteracted && audioRef.current && !isPlaying) {
        try {
          await audioRef.current.play();
          setIsPlaying(true);
          setHasUserInteracted(true);
        } catch (error) {
          console.log('Failed to start audio on user interaction:', error);
        }
      }
    };

    // Listen for various user interactions
    const events = ['click', 'touchstart', 'keydown', 'scroll'];
    events.forEach(event => {
      document.addEventListener(event, handleUserInteraction, { once: true });
    });

    return () => {
      events.forEach(event => {
        document.removeEventListener(event, handleUserInteraction);
      });
    };
  }, [hasUserInteracted, isPlaying]);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
    }
  }, [volume, isMuted]);

  const handlePlayPause = async () => {
    const audio = audioRef.current;
    if (!audio) return;
    
    try {
      if (isPlaying) {
        audio.pause();
        setIsPlaying(false);
      } else {
        await audio.play();
        setIsPlaying(true);
        setHasUserInteracted(true);
      }
    } catch (error) {
      console.log('Error toggling audio:', error);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={backgroundAudio}
        loop
        hidden
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        onError={(e) => console.log('Audio error:', e)}
        preload="auto"
      />
      {/* Floating audio controls */}
      <div
        className="fixed bottom-6 left-6 z-50 flex flex-col items-center"
        onMouseEnter={() => setShowControls(true)}
        onMouseLeave={() => setShowControls(false)}
      >
        <div className="flex space-x-2 mb-2">
          <button
            onClick={handlePlayPause}
            className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 border border-gray-400 dark:border-gray-700 flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all"
            aria-label={isPlaying ? 'Pause background music' : 'Play background music'}
          >
            {isPlaying ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 12L6 6V18Z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-gray-700 dark:text-gray-200">
                <rect x="6" y="6" width="4" height="12" rx="1" />
                <rect x="14" y="6" width="4" height="12" rx="1" />
              </svg>
            )}
          </button>
          <button
            onClick={() => setIsMuted((m) => !m)}
            className="w-10 h-10 rounded-full bg-white/80 dark:bg-gray-900/80 border border-gray-400 dark:border-gray-700 flex items-center justify-center shadow-lg hover:bg-white hover:scale-105 transition-all"
            aria-label={isMuted ? 'Unmute background music' : 'Mute background music'}
          >
            {isMuted ? (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-red-500">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l6 6m0-6l-6 6M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            ) : (
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6 text-green-600">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 19V6l-2 2H5a2 2 0 00-2 2v4a2 2 0 002 2h2l2 2zm7-7a4 4 0 00-4-4m4 4a4 4 0 01-4 4m4-4h.01" />
              </svg>
            )}
          </button>
        </div>
        {showControls && (
          <input
            type="range"
            min={0}
            max={1}
            step={0.01}
            value={isMuted ? 0 : volume}
            onChange={(e) => {
              setVolume(Number(e.target.value));
              if (Number(e.target.value) === 0) setIsMuted(true);
              else setIsMuted(false);
            }}
            className="w-32 h-2 bg-gray-300 dark:bg-gray-700 rounded-lg appearance-none cursor-pointer accent-green-600"
            aria-label="Background music volume"
          />
        )}
      </div>
    </>
  );
};

export default BackgroundAudio; 