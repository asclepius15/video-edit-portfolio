import React, { useState } from 'react';
import { Settings, Moon, Sun, Volume2, VolumeX, Sparkles, X } from 'lucide-react';

interface ControlPanelProps {
  theme: string;
  onThemeToggle: () => void;
  isAudioPlaying: boolean;
  onAudioToggle: () => void;
  cursorMode: 'off' | 'simple' | 'fluid';
  onCursorToggle: () => void;
}

const ControlPanel: React.FC<ControlPanelProps> = ({
  theme,
  onThemeToggle,
  isAudioPlaying,
  onAudioToggle,
  cursorMode,
  onCursorToggle,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const getCursorModeLabel = (mode: 'off' | 'simple' | 'fluid') => {
    switch (mode) {
      case 'off':
        return 'Disabled';
      case 'simple':
        return 'Simple Trail';
      case 'fluid':
        return 'Fluid Effect';
      default:
        return 'Disabled';
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Control Panel */}
      <div className={`transition-all duration-500 transform ${
        isOpen ? 'translate-y-0 opacity-100' : 'translate-y-full opacity-0 pointer-events-none'
      }`}>
        <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl shadow-black/50 mb-4 overflow-hidden">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-6 py-4 border-b border-gray-600/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white tracking-wider">CONTROL PANEL</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <X size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          {/* Controls */}
          <div className="p-6 space-y-6">
            {/* Theme Control */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Theme</label>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-600/30">
                <span className="text-white font-medium">
                  {theme === 'dark' ? 'Dark Mode' : 'Light Mode'}
                </span>
                <button
                  onClick={onThemeToggle}
                  className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 border border-gray-500/30"
                >
                  {theme === 'dark' ? 
                    <Moon size={18} className="text-blue-300" /> : 
                    <Sun size={18} className="text-yellow-300" />
                  }
                </button>
              </div>
            </div>
            
            {/* Audio Control */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Audio</label>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-600/30">
                <span className="text-white font-medium">
                  {isAudioPlaying ? 'Playing' : 'Muted'}
                </span>
                <button
                  onClick={onAudioToggle}
                  className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 border border-gray-500/30"
                >
                  {isAudioPlaying ? 
                    <Volume2 size={18} className="text-green-300" /> : 
                    <VolumeX size={18} className="text-red-300" />
                  }
                </button>
              </div>
            </div>
            
            {/* Cursor Effects Control */}
            <div className="space-y-3">
              <label className="text-sm font-medium text-gray-300 uppercase tracking-wider">Cursor Effects</label>
              <div className="flex items-center justify-between p-3 bg-gray-800/50 rounded-xl border border-gray-600/30">
                <span className="text-white font-medium">
                  {getCursorModeLabel(cursorMode)}
                </span>
                <button
                  onClick={onCursorToggle}
                  className="p-2 rounded-lg bg-gradient-to-r from-gray-700 to-gray-600 hover:from-gray-600 hover:to-gray-500 transition-all duration-300 border border-gray-500/30"
                >
                  {cursorMode === 'off' ? 
                    <X size={18} className="text-gray-400" /> :
                    cursorMode === 'simple' ?
                    <Sparkles size={18} className="text-blue-300" /> :
                    <Sparkles size={18} className="text-purple-300" />
                  }
                </button>
              </div>
            </div>
          </div>
          
          {/* Status Footer */}
          <div className="bg-gradient-to-r from-gray-800/30 to-gray-700/30 px-6 py-3 border-t border-gray-600/30">
            <div className="flex items-center justify-between">
              <div className="text-xs text-gray-400 uppercase tracking-wider">System Status</div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-xs text-green-400 font-medium">ONLINE</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-16 h-16 bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl border border-gray-600/50 hover:border-gray-500/70 transition-all duration-300 flex items-center justify-center group hover:shadow-2xl hover:shadow-white/10 backdrop-blur-sm"
      >
        <Settings 
          size={24} 
          className={`text-gray-300 group-hover:text-white transition-all duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`} 
        />
      </button>
    </div>
  );
};

export default ControlPanel;
