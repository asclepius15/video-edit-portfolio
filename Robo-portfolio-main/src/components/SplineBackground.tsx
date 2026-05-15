import React from 'react';

const SplineBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 w-full h-full">
      <iframe 
        src="https://my.spline.design/nexbotrobotcharacterconcept-OgKuijNw2OhynLzsmxJrUxUu/" 
        frameBorder="0" 
        width="100%" 
        height="100%"
        className="absolute inset-0 w-full h-full"
        style={{ border: 'none' }}
        title="3D Robot Character"
        loading="lazy"
        onError={() => {
          console.log('Spline iframe failed to load, showing fallback');
        }}
      />
      
      {/* Overlay for text readability */}
      <div className="absolute inset-0 bg-black/20 z-10 pointer-events-none" />
    </div>
  );
};

export default SplineBackground;