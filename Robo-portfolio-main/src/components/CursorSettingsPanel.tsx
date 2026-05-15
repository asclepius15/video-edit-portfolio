import React, { useState } from 'react';
import { Settings, X, Palette, Zap, Droplets, Flame } from 'lucide-react';
import { useCursor } from '../hooks/useCursor';

const CursorSettingsPanel: React.FC = () => {
  const { cursorMode, cursorSettings, updateCursorSettings, applyPreset } = useCursor();
  const [isOpen, setIsOpen] = useState(false);
  const [activeTab, setActiveTab] = useState<'basic' | 'advanced' | 'presets'>('basic');

  if (cursorMode !== 'fluid') return null;

  const handleSliderChange = (name: keyof typeof cursorSettings, value: number) => {
    updateCursorSettings({ [name]: value });
  };

  const handleColorChange = (component: 'r' | 'g' | 'b', value: number) => {
    updateCursorSettings({
      backColor: {
        ...cursorSettings.backColor,
        [component]: value / 100,
      },
    });
  };

  return (
    <div className="fixed top-6 right-6 z-50">
      {/* Settings Panel */}
      <div className={`transition-all duration-500 transform ${
        isOpen ? 'translate-x-0 opacity-100' : 'translate-x-full opacity-0 pointer-events-none'
      }`}>
        <div className="bg-gradient-to-br from-gray-900/95 to-black/95 backdrop-blur-xl rounded-3xl border border-gray-700/50 shadow-2xl shadow-black/50 overflow-hidden w-80">
          {/* Header */}
          <div className="bg-gradient-to-r from-gray-800/50 to-gray-700/50 px-6 py-4 border-b border-gray-600/30">
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white tracking-wider">CURSOR SETTINGS</h3>
              <button
                onClick={() => setIsOpen(false)}
                className="p-1 rounded-lg hover:bg-gray-700/50 transition-colors"
              >
                <X size={16} className="text-gray-400" />
              </button>
            </div>
          </div>
          
          {/* Tabs */}
          <div className="flex border-b border-gray-600/30">
            <button
              onClick={() => setActiveTab('basic')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'basic' 
                  ? 'text-white bg-gray-700/50' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Basic
            </button>
            <button
              onClick={() => setActiveTab('advanced')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'advanced' 
                  ? 'text-white bg-gray-700/50' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Advanced
            </button>
            <button
              onClick={() => setActiveTab('presets')}
              className={`flex-1 px-4 py-3 text-sm font-medium transition-colors ${
                activeTab === 'presets' 
                  ? 'text-white bg-gray-700/50' 
                  : 'text-gray-400 hover:text-white'
              }`}
            >
              Presets
            </button>
          </div>
          
          {/* Content */}
          <div className="p-6 space-y-4 max-h-96 overflow-y-auto">
            {activeTab === 'basic' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Density Dissipation: {cursorSettings.densityDissipation.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="5"
                    step="0.1"
                    value={cursorSettings.densityDissipation}
                    onChange={(e) => handleSliderChange('densityDissipation', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Velocity Dissipation: {cursorSettings.velocityDissipation.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="0.5"
                    max="4"
                    step="0.1"
                    value={cursorSettings.velocityDissipation}
                    onChange={(e) => handleSliderChange('velocityDissipation', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Splat Radius: {cursorSettings.splatRadius.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.1"
                    max="0.5"
                    step="0.01"
                    value={cursorSettings.splatRadius}
                    onChange={(e) => handleSliderChange('splatRadius', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Splat Force: {cursorSettings.splatForce}
                  </label>
                  <input
                    type="range"
                    min="1000"
                    max="10000"
                    step="100"
                    value={cursorSettings.splatForce}
                    onChange={(e) => handleSliderChange('splatForce', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      R: {(cursorSettings.backColor.r * 100).toFixed(0)}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={cursorSettings.backColor.r * 100}
                      onChange={(e) => handleColorChange('r', parseInt(e.target.value))}
                      className="w-full h-2 bg-red-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      G: {(cursorSettings.backColor.g * 100).toFixed(0)}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={cursorSettings.backColor.g * 100}
                      onChange={(e) => handleColorChange('g', parseInt(e.target.value))}
                      className="w-full h-2 bg-green-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-300">
                      B: {(cursorSettings.backColor.b * 100).toFixed(0)}%
                    </label>
                    <input
                      type="range"
                      min="0"
                      max="100"
                      step="1"
                      value={cursorSettings.backColor.b * 100}
                      onChange={(e) => handleColorChange('b', parseInt(e.target.value))}
                      className="w-full h-2 bg-blue-700 rounded-lg appearance-none cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'advanced' && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Curl: {cursorSettings.curl.toFixed(1)}
                  </label>
                  <input
                    type="range"
                    min="0"
                    max="10"
                    step="0.1"
                    value={cursorSettings.curl}
                    onChange={(e) => handleSliderChange('curl', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Pressure: {cursorSettings.pressure.toFixed(2)}
                  </label>
                  <input
                    type="range"
                    min="0.01"
                    max="0.5"
                    step="0.01"
                    value={cursorSettings.pressure}
                    onChange={(e) => handleSliderChange('pressure', parseFloat(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Pressure Iterations: {cursorSettings.pressureIterations}
                  </label>
                  <input
                    type="range"
                    min="10"
                    max="50"
                    step="1"
                    value={cursorSettings.pressureIterations}
                    onChange={(e) => handleSliderChange('pressureIterations', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-300">
                    Color Update Speed: {cursorSettings.colorUpdateSpeed}
                  </label>
                  <input
                    type="range"
                    min="1"
                    max="20"
                    step="1"
                    value={cursorSettings.colorUpdateSpeed}
                    onChange={(e) => handleSliderChange('colorUpdateSpeed', parseInt(e.target.value))}
                    className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer"
                  />
                </div>
              </div>
            )}

            {activeTab === 'presets' && (
              <div className="grid grid-cols-2 gap-4">
                <button
                  onClick={() => applyPreset('water')}
                  className="h-20 flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-blue-600/20 to-blue-800/20 rounded-xl border border-blue-500/30 hover:border-blue-400/50 transition-all"
                >
                  <Droplets size={20} className="text-blue-400" />
                  <span className="text-sm font-medium text-white">Water</span>
                </button>

                <button
                  onClick={() => applyPreset('fire')}
                  className="h-20 flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-red-600/20 to-orange-800/20 rounded-xl border border-red-500/30 hover:border-red-400/50 transition-all"
                >
                  <Flame size={20} className="text-red-400" />
                  <span className="text-sm font-medium text-white">Fire</span>
                </button>

                <button
                  onClick={() => applyPreset('smoke')}
                  className="h-20 flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-gray-600/20 to-gray-800/20 rounded-xl border border-gray-500/30 hover:border-gray-400/50 transition-all"
                >
                  <Zap size={20} className="text-gray-400" />
                  <span className="text-sm font-medium text-white">Smoke</span>
                </button>

                <button
                  onClick={() => applyPreset('neon')}
                  className="h-20 flex flex-col gap-2 items-center justify-center bg-gradient-to-br from-purple-600/20 to-pink-800/20 rounded-xl border border-purple-500/30 hover:border-purple-400/50 transition-all"
                >
                  <Palette size={20} className="text-purple-400" />
                  <span className="text-sm font-medium text-white">Neon</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
      
      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 bg-gradient-to-br from-purple-800 to-purple-900 rounded-xl border border-purple-600/50 hover:border-purple-500/70 transition-all duration-300 flex items-center justify-center group hover:shadow-2xl hover:shadow-purple-500/20 backdrop-blur-sm"
      >
        <Settings 
          size={20} 
          className={`text-purple-300 group-hover:text-white transition-all duration-300 ${
            isOpen ? 'rotate-45' : ''
          }`} 
        />
      </button>
    </div>
  );
};

export default CursorSettingsPanel; 