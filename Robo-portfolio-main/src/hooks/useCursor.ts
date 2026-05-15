import { useState, useEffect } from 'react';

export interface CursorSettings {
  simResolution: number;
  dyeResolution: number;
  densityDissipation: number;
  velocityDissipation: number;
  pressure: number;
  pressureIterations: number;
  curl: number;
  splatRadius: number;
  splatForce: number;
  shading: boolean;
  colorUpdateSpeed: number;
  backColor: { r: number; g: number; b: number };
  transparent: boolean;
}

export const useCursor = () => {
  const [cursorMode, setCursorMode] = useState<'off' | 'simple' | 'fluid'>('fluid');
  const [cursorSettings, setCursorSettings] = useState<CursorSettings>({
    simResolution: 128,
    dyeResolution: 1024,
    densityDissipation: 3.5,
    velocityDissipation: 2,
    pressure: 0.1,
    pressureIterations: 20,
    curl: 3,
    splatRadius: 0.2,
    splatForce: 6000,
    shading: true,
    colorUpdateSpeed: 10,
    backColor: { r: 0.5, g: 0, b: 0 },
    transparent: true,
  });

  useEffect(() => {
    const savedMode = localStorage.getItem('cursorMode') as 'off' | 'simple' | 'fluid' || 'fluid';
    const savedSettings = localStorage.getItem('cursorSettings');
    
    setCursorMode(savedMode);
    if (savedSettings) {
      try {
        setCursorSettings(JSON.parse(savedSettings));
      } catch {
        console.warn('Failed to parse saved cursor settings');
      }
    }
  }, []);

  const toggleCursorMode = () => {
    const modes: Array<'off' | 'simple' | 'fluid'> = ['off', 'simple', 'fluid'];
    const currentIndex = modes.indexOf(cursorMode);
    const nextIndex = (currentIndex + 1) % modes.length;
    const newMode = modes[nextIndex];
    
    setCursorMode(newMode);
    localStorage.setItem('cursorMode', newMode);
  };

  const updateCursorSettings = (newSettings: Partial<CursorSettings>) => {
    const updatedSettings = { ...cursorSettings, ...newSettings };
    setCursorSettings(updatedSettings);
    localStorage.setItem('cursorSettings', JSON.stringify(updatedSettings));
  };

  const applyPreset = (preset: 'water' | 'fire' | 'smoke' | 'neon') => {
    let newSettings: Partial<CursorSettings> = {};
    
    switch (preset) {
      case 'water':
        newSettings = {
          densityDissipation: 2.5,
          velocityDissipation: 1.5,
          curl: 4,
          splatRadius: 0.3,
          splatForce: 5000,
          backColor: { r: 0.0, g: 0.3, b: 0.8 },
        };
        break;
      case 'fire':
        newSettings = {
          densityDissipation: 4.5,
          velocityDissipation: 3,
          curl: 5,
          splatRadius: 0.15,
          splatForce: 8000,
          backColor: { r: 0.8, g: 0.2, b: 0.0 },
        };
        break;
      case 'smoke':
        newSettings = {
          densityDissipation: 2.0,
          velocityDissipation: 1.8,
          curl: 2,
          splatRadius: 0.25,
          splatForce: 4000,
          backColor: { r: 0.2, g: 0.2, b: 0.2 },
        };
        break;
      case 'neon':
        newSettings = {
          densityDissipation: 3.2,
          velocityDissipation: 2.5,
          curl: 4.5,
          splatRadius: 0.18,
          splatForce: 7000,
          backColor: { r: 0.6, g: 0.0, b: 0.9 },
        };
        break;
    }
    
    updateCursorSettings(newSettings);
  };

  return { 
    cursorMode, 
    toggleCursorMode, 
    cursorSettings, 
    updateCursorSettings,
    applyPreset
  };
};