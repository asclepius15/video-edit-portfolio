import React, { useEffect, useState } from 'react';

const Preloader: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(() => setLoading(false), 500);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
      <div className="text-center space-y-8">
        <div className="text-4xl font-bold text-white mb-4">
          PS VERSE
        </div>
        
        <div className="text-lg text-gray-400 mb-8">
          Initializing PS VERSE...
        </div>
        
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-white to-gray-300 transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>
        
        <div className="text-sm text-gray-500">
          {progress}% Complete
        </div>
        
        <div className="w-16 h-16 border-2 border-gray-800 border-t-white rounded-full animate-spin mx-auto"></div>
      </div>
    </div>
  );
};

export default Preloader;