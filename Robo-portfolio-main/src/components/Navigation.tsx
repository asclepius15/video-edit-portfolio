import React, { useState, useEffect } from 'react';
import { Home, User, Code, Video, Mail, Palette, Camera } from 'lucide-react';

const Navigation: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');

  const navItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'about', label: 'About', icon: User },
    { id: 'projects', label: 'Coding Projects', icon: Code },
    { id: 'videos', label: 'Video Projects', icon: Video },
    { id: 'photos', label: 'Photo Gallery', icon: Camera },
    { id: 'gallery', label: 'AI Gallery', icon: Palette },
    { id: 'contact', label: 'Contact', icon: Mail },
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      let found = false;
      for (let i = 0; i < navItems.length; i++) {
        const section = document.getElementById(navItems[i].id);
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom > 120) {
            setActiveSection(navItems[i].id);
            found = true;
            break;
          }
        }
      }
      // If no section is found, default to home
      if (!found) setActiveSection('home');
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // set on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed left-6 top-1/2 -translate-y-1/2 z-40 hidden lg:block" style={{ width: '56px' }}>
      <div className="bg-black/40 backdrop-blur-md rounded-xl p-2 border border-gray-800">
        <div className="flex flex-col space-y-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className={`p-2 rounded-lg transition-all duration-300 group relative ${
                  activeSection === item.id
                    ? 'bg-white text-black shadow-lg shadow-white/20'
                    : 'text-gray-400 hover:text-white hover:bg-gray-800'
                }`}
              >
                <Icon size={18} />
                <span className="absolute left-12 top-1/2 -translate-y-1/2 px-2 py-1 bg-black/90 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap">
                  {item.label}
                </span>
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;