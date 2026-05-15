import React from 'react';
import { ExternalLink, Github, Server, Code, Brain, Video } from 'lucide-react';

const CodingProjects: React.FC = () => {
  const projects = [
    {
      category: 'DevOps',
      icon: Server,
      projects: [
        {
          title: 'CI/CD Pipeline Automation',
          description: 'Automated deployment pipeline using GitHub Actions and Docker',
          tools: ['GitHub Actions', 'Docker', 'AWS', 'Kubernetes'],
          link: 'https://github.com/asclepius15'
        },
        {
          title: 'Infrastructure as Code',
          description: 'Terraform scripts for cloud infrastructure management',
          tools: ['Terraform', 'AWS', 'CloudFormation', 'Ansible'],
          link: 'https://github.com/asclepius15'
        }
      ]
    },
    {
      category: 'Fullstack',
      icon: Code,
      projects: [
        {
          title: 'E-commerce Platform',
          description: 'Full-stack e-commerce solution with React and Node.js',
          tools: ['React', 'Node.js', 'MongoDB', 'Express'],
          link: 'https://github.com/asclepius15'
        },
        {
          title: 'Task Management System',
          description: 'Collaborative project management tool with real-time updates',
          tools: ['React', 'Django', 'PostgreSQL', 'WebSocket'],
          link: 'https://github.com/asclepius15'
        }
      ]
    },
    {
      category: 'Machine Learning',
      icon: Brain,
      projects: [
        {
          title: 'Computer Vision Analytics',
          description: 'Object detection and tracking system using OpenCV',
          tools: ['Python', 'OpenCV', 'TensorFlow', 'YOLO'],
          link: 'https://github.com/asclepius15'
        },
        {
          title: 'NLP Chatbot',
          description: 'Intelligent chatbot using HuggingFace transformers',
          tools: ['Python', 'HuggingFace', 'FastAPI', 'Streamlit'],
          link: 'https://github.com/asclepius15'
        }
      ]
    },
    {
      category: 'Video Projects',
      icon: Video,
      projects: [
        {
          title: 'Automated Video Editor',
          description: 'AI-powered video editing tool with scene detection',
          tools: ['Python', 'FFmpeg', 'OpenCV', 'ML'],
          link: 'https://github.com/asclepius15'
        },
        {
          title: 'Live Stream Dashboard',
          description: 'Real-time streaming analytics and control panel',
          tools: ['React', 'WebRTC', 'Node.js', 'Socket.io'],
          link: 'https://github.com/asclepius15'
        }
      ]
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 bg-gradient-to-b from-black to-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Coding Projects
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-white to-gray-400 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {projects.map((category, categoryIndex) => {
            const CategoryIcon = category.icon;
            return (
              <div key={categoryIndex} className="space-y-8">
                <div className="flex items-center space-x-4">
                  <CategoryIcon size={32} className="text-gray-400" />
                  <h3 className="text-3xl font-bold text-white">{category.category}</h3>
                </div>
                
                <div className="grid md:grid-cols-2 gap-8">
                  {category.projects.map((project, projectIndex) => (
                    <div
                      key={projectIndex}
                      className="group bg-gradient-to-br from-gray-800 to-gray-900 p-8 rounded-2xl border border-gray-700 hover:border-gray-600 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-2xl hover:shadow-white/10"
                    >
                      <h4 className="text-xl font-bold text-white mb-4 group-hover:text-gray-200 transition-colors">
                        {project.title}
                      </h4>
                      <p className="text-gray-300 mb-6 leading-relaxed">
                        {project.description}
                      </p>
                      
                      <div className="flex flex-wrap gap-2 mb-6">
                        {project.tools.map((tool, toolIndex) => (
                          <span
                            key={toolIndex}
                            className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm border border-gray-600"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                      
                      <div className="flex space-x-4">
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-white to-gray-300 text-black rounded-xl hover:from-gray-200 hover:to-gray-400 transition-all duration-300 font-medium group"
                        >
                          <Github size={18} />
                          <span>View Code</span>
                          <ExternalLink size={16} className="group-hover:translate-x-1 transition-transform" />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default CodingProjects;