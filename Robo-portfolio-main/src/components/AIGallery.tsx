import React, { useState } from 'react';
import { X, ZoomIn, Sparkles, Flame } from 'lucide-react';

const AIGallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);
  const [selectedVideo, setSelectedVideo] = useState<number | null>(null);

  const images = [
    {
      title: 'Cyberpunk Control Cockpit 1',
      description: 'A cyberpunk-style futuristic control cockpit in vertical view (AI generated)',
      url: '/asset/Firefly_Portrait%20layout%20%E2%80%94%20A%20cyberpunk-style%20futuristic%20control%20cockpit%20in%20vertical%20view,%20cent%20127239.jpg',
      icon: Sparkles
    },
    {
      title: 'Cyberpunk Control Cockpit 2',
      description: 'A cyberpunk-style futuristic control cockpit in vertical view (AI generated)',
      url: '/asset/Firefly_Portrait%20layout%20%E2%80%94%20A%20cyberpunk-style%20futuristic%20control%20cockpit%20in%20vertical%20view,%20cent%20974315.jpg',
      icon: Sparkles
    },
    {
      title: 'Volcanic Meditation',
      description: 'A powerful humanoid figure meditating in a lotus pose, skin made of cracked volcanic rock (AI generated)',
      url: '/asset/Firefly_-A%20powerful%20humanoid%20figure%20meditating%20in%20a%20lotus%20pose,%20skin%20made%20of%20cracked%20volcanic%20903377%20(1).jpg',
      icon: Flame
    },
    {
      title: 'Minimalistic Ink Art',
      description: 'A poetic, minimalistic black-and-red-white scene inspired by Asian ink art (AI generated)',
      url: '/asset/Firefly%20a%20poetic,%20minimalistic%20black-and-red-white%20scene%20inspired%20by%20asian%20ink%20art.%20a%20female%20silhoue.jpg',
      icon: Sparkles
    }
  ];

  const videos = [
    {
      title: 'DevOps + Video Editor Fusion',
      description: 'A vertical cyberpunk-themed AI video prompt fusion.',
      thumbnail: '/asset/Firefly_Portrait%20layout%20%E2%80%94%20A%20cyberpunk-style%20futuristic%20control%20cockpit%20in%20vertical%20view,%20cent%20127239.jpg',
      url: '/asset/Firefly%20%20AI%20Video%20Prompt-DevOps%20%2B%20Video%20Editor%20Fusion%20(Portrait%20Format)_A%20vertical%20cyberpunk-themed.mp4'
    },
    {
      title: 'Volcanic Meditation (Video)',
      description: 'A powerful humanoid figure meditating in a lotus pose, body made of cracked volcanic rock (AI video).',
      thumbnail: '/asset/Firefly_-A%20powerful%20humanoid%20figure%20meditating%20in%20a%20lotus%20pose,%20skin%20made%20of%20cracked%20volcanic%20903377%20(1).jpg',
      url: '/asset/Firefly%20A%20powerful%20humanoid%20figure%20meditating%20in%20a%20lotus%20pose,%20body%20made%20of%20cracked%20volcanic%20rock%20wi%20(1).mp4'
    }
  ];

  return (
    <section id="gallery" className="py-20 px-6 bg-gradient-to-b from-gray-900 to-black">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            AI Gallery
          </h2>
          <p className="text-gray-400 text-lg mb-6">Imagined Realities & Synthetic Visions</p>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>

        {/* AI Images */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
            <Sparkles size={24} />
            <span>AI Generated Images</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.map((image, index) => {
              const Icon = image.icon;
              return (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
                  onClick={() => setSelectedImage(index)}
                >
                  <div className="relative aspect-square overflow-hidden">
                    <img
                      src={image.url}
                      alt={image.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <ZoomIn size={20} className="text-white" />
                      </div>
                    </div>
                    
                    <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Icon size={24} className="text-white" />
                    </div>
                  </div>
                  
                  <div className="p-6">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {image.title}
                    </h4>
                    <p className="text-gray-300 text-sm">
                      {image.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* AI Videos */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-3">
            <Flame size={24} />
            <span>AI Generated Videos</span>
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videos.map((video, index) => (
              <div
                key={index}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
                onClick={() => setSelectedVideo(index)}
              >
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                  
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                      <Flame size={24} className="text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h4 className="text-lg font-bold text-white mb-2">
                    {video.title}
                  </h4>
                  <p className="text-gray-300 text-sm">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Lightbox for Images */}
      {selectedImage !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedImage(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors z-10"
            >
              <X size={20} className="text-white" />
            </button>
            <img
              src={images[selectedImage].url}
              alt={images[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-xl font-bold text-white mb-2">{images[selectedImage].title}</h3>
              <p className="text-gray-300">{images[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox for Videos */}
      {selectedVideo !== null && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4" onClick={() => setSelectedVideo(null)}>
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 hover:bg-white/30 transition-colors z-10"
            >
              <X size={20} className="text-white" />
            </button>
            <video
              src={videos[selectedVideo].url}
              controls
              autoPlay
              className="max-w-full max-h-full rounded-2xl bg-black"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <h3 className="text-xl font-bold text-white mb-2">{videos[selectedVideo].title}</h3>
              <p className="text-gray-300">{videos[selectedVideo].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default AIGallery;