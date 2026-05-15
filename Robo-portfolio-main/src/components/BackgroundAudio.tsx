import React, { useRef, useEffect, useState } from 'react';

const BackgroundAudio: React.FC = () => {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.5);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(false);

  useEffect(() => {
    const audio = audioRef.current;
    if (audio) {
      audio.volume = volume;
      audio.muted = isMuted;
    }
  }, [volume, isMuted]);

  const handlePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play();
      setIsPlaying(true);
    }
  };

  return (
    <>
      <audio
        ref={audioRef}
        src="/asset/background.mp3"
        loop
        hidden
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
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