import React, { useState } from 'react';
import { Camera, ZoomIn, X } from 'lucide-react';

const PhotoSection: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  const photos = [
    {
      title: 'Professional Portrait',
      description: 'Studio photography with professional lighting',
      url: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Portrait'
    },
    {
      title: 'Creative Workspace',
      description: 'Behind the scenes of video editing setup',
      url: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Workspace'
    },
    {
      title: 'Event Photography',
      description: 'Capturing moments at tech conferences',
      url: 'https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Events'
    },
    {
      title: 'Tech Setup',
      description: 'Modern development environment',
      url: 'https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Tech'
    },
    {
      title: 'Creative Process',
      description: 'Video editing and post-production work',
      url: 'https://images.pexels.com/photos/3992739/pexels-photo-3992739.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Creative'
    },
    {
      title: 'Team Collaboration',
      description: 'Working with creative teams on projects',
      url: 'https://images.pexels.com/photos/3184357/pexels-photo-3184357.jpeg?auto=compress&cs=tinysrgb&w=800',
      category: 'Team'
    }
  ];

  return (
    <section id="photos" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Photo Gallery
          </h2>
          <p className="text-gray-400 text-lg mb-6">Capturing moments & creative processes</p>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {photos.map((photo, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10 cursor-pointer"
              onClick={() => setSelectedImage(index)}
            >
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                    <ZoomIn size={20} className="text-white" />
                  </div>
                </div>
                
                <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <Camera size={24} className="text-white" />
                </div>
                
                <div className="absolute top-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="px-3 py-1 bg-black/50 backdrop-blur-sm text-white text-xs rounded-full border border-white/20">
                    {photo.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <h4 className="text-lg font-bold text-white mb-2">
                  {photo.title}
                </h4>
                <p className="text-gray-300 text-sm">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox */}
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
              src={photos[selectedImage].url}
              alt={photos[selectedImage].title}
              className="max-w-full max-h-full object-contain rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-2xl">
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-xl font-bold text-white">{photos[selectedImage].title}</h3>
                <span className="px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-sm rounded-full">
                  {photos[selectedImage].category}
                </span>
              </div>
              <p className="text-gray-300">{photos[selectedImage].description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PhotoSection;