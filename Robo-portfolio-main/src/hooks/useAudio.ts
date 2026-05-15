import { useState, useEffect, useRef } from 'react';

export const useAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    // In a real application, you would load an actual audio file here
    // For now, we'll just simulate audio functionality
    audioRef.current = new Audio();
    
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current = null;
      }
    };
  }, []);

  const toggleAudio = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        // In a real app, you would play the audio here
        // audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return { isPlaying, toggleAudio };
};