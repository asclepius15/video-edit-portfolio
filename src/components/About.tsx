import React from 'react';
import { Download, Video, Palette } from 'lucide-react';

const About: React.FC = () => {
  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/asset/resume.pdf';
    link.download = 'PINTOO_SAFI_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const skills = [
    { category: 'Video Editing', icon: Video, items: ['Adobe Premiere Pro', 'After Effects', 'DaVinci Resolve', 'CapCut'] },
    { category: 'Design', icon: Palette, items: ['Adobe Creative Suite', 'Figma', 'Photoshop', 'Illustrator'] },
    
  ];

  const experience = [
    {
      title: 'Junior Video Editor',
      company: 'ACIC VGU Jaipur',
      description: 'Creating engaging video content for educational and promotional purposes'
    },
    {
      title: 'Video Editor',
      company: 'DopeFelix Event Management',
      description: 'Produced high-quality event videos and promotional content'
    }
  ];

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Creative</h3>
              <p className="text-gray-300 leading-relaxed">
              Hi, I’m Pintoo Safi — a video editor who turns raw footage into bold, story-driven visuals. I blend sharp cuts, modern pacing, and cinematic flair to craft edits that don’t just tell stories — they make people feel them.
              </p>
            </div>

            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-4 text-white">Experience</h3>
              <div className="space-y-4">
                {experience.map((exp, index) => (
                  <div key={index} className="border-l-2 border-gray-700 pl-4">
                    <h4 className="font-semibold text-white">{exp.title}</h4>
                    <p className="text-gray-400 text-sm">{exp.company}</p>
                    <p className="text-gray-300 text-sm mt-1">{exp.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-gray-900 to-black p-8 rounded-2xl border border-gray-800">
              <h3 className="text-2xl font-bold mb-6 text-white">Skills & Expertise</h3>
              <div className="grid grid-cols-1 gap-6">
                {skills.map((skill, index) => {
                  const Icon = skill.icon;
                  return (
                    <div key={index} className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <Icon size={20} className="text-gray-400" />
                        <h4 className="font-semibold text-white">{skill.category}</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {skill.items.map((item, itemIndex) => (
                          <span
                            key={itemIndex}
                            className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm border border-gray-700"
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            <button 
              onClick={handleResumeDownload}
              className="w-full bg-gradient-to-r from-white to-gray-300 text-black font-semibold py-4 px-8 rounded-xl hover:from-gray-200 hover:to-gray-400 transition-all duration-300 flex items-center justify-center space-x-2 group"
            >
              <Download size={20} className="group-hover:animate-bounce" />
              <span>Download Resume</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;