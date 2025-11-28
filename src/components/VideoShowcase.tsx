import React, { useState } from 'react';
import { Play, ExternalLink, Instagram, Linkedin } from 'lucide-react';

const VideoShowcase: React.FC = () => {
  const [hoveredVideo, setHoveredVideo] = useState<number | null>(null);

  const videos = [
    {
      title: 'PANACHE S\'15 – Aditya Rikhari Live Performance',
      description: 'Live performance video editing with dynamic cuts and audio sync',
      thumbnail: 'https://images.pexels.com/photos/1763075/pexels-photo-1763075.jpeg?auto=compress&cs=tinysrgb&w=600',
      url: 'https://www.instagram.com/reel/DHYIpMmhKjm/?igsh=bmJ4YmxtN3ZxMDFn',
      platform: 'instagram'
    },
    {
      title: 'Code Red 4.0 - Aftermovie',
      description: 'Dynamic social media content with motion graphics',
      thumbnail: '/asset/DSC00214.JPG',
      url: 'https://www.instagram.com/reel/DBrPRJqPRwL/?igsh=eWkycWpwOWs3b291',
      platform: 'instagram'
    },
    {
      title: 'Full Rap Scene',
      description: 'Professional video editing with color grading and effects',
      thumbnail: 'asset/IMG_3540.jpg',
      url: 'https://www.instagram.com/reel/DBioLYog6cP/?igsh=OHFzZGJ6OXZlcTU4',
      platform: 'instagram'
    },
    {
      title: 'Code Red 3.0 - Recap',
      description: 'Event coverage with seamless transitions and audio mixing',
      thumbnail: '/asset/Screenshot 2025-09-23 231653.png',
      url: 'https://www.instagram.com/reel/DATLRL9gg4V/?igsh=MXBqM2l3Z3A2N2d6Yw==',
      platform: 'instagram'
    },
    {
      title: 'Code Red 3.0 - Aftermovie',
      description: 'Corporate video content with professional editing',
      thumbnail:'/asset/Screenshot 2025-09-23 231653.png' ,
      url: 'https://www.linkedin.com/posts/pintoo-safi-3b8b56277_acic-videoediting-gratitude-ugcPost-7131686770932383744-1HnP',
      platform: 'linkedin'
    },
    {
      title: 'Yougami Youth Fest',
      description: 'Artistic video editing with creative transitions',
      thumbnail: '/asset/thumb65153aa250e2f.webp',
      url: 'https://www.instagram.com/reel/C1PuXFmo4Ig/?igsh=dGYwdTk2MDU5a25r',
      platform: 'instagram'
    },
    {
      title: 'Yougami Youth Fest - Paradox Live Performance',
      description: 'Fast-paced editing with rhythm and visual effects',
      thumbnail: '/asset/Paradox.jpg',
      url: 'https://www.instagram.com/reel/C1pjECxh_eX/?igsh=emFpbnBiN3A2emQ5',
      platform: 'instagram'
    }
  ];

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case 'instagram':
        return <Instagram size={20} />;
      case 'linkedin':
        return <Linkedin size={20} />;
      default:
        return <Play size={20} />;
    }
  };

  return (
    <section id="videos" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Video Showcase
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
              onMouseEnter={() => setHoveredVideo(index)}
              onMouseLeave={() => setHoveredVideo(null)}
            >
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-colors duration-300" />
                
                {hoveredVideo === index && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:scale-110 transition-transform duration-300">
                      <Play size={24} className="text-white ml-1" />
                    </div>
                  </div>
                )}
              </div>
              
              <div className="p-6">
                <h3 className="text-lg font-bold text-white mb-2 line-clamp-2">
                  {video.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">
                  {video.description}
                </p>
                
                <a
                  href={video.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-white to-gray-300 text-black rounded-lg hover:from-gray-200 hover:to-gray-400 transition-all duration-300 font-medium text-sm group"
                >
                  {getPlatformIcon(video.platform)}
                  <span>Watch Now</span>
                  <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default VideoShowcase;