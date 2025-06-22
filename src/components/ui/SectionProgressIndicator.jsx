import React, { useState, useEffect } from 'react';

const SectionProgressIndicator = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  const sections = [
    { id: 'hero', label: 'Home', color: 'primary' },
    { id: 'services', label: 'Services', color: 'primary' },
    { id: 'gallery', label: 'Gallery', color: 'secondary' },
    { id: 'process', label: 'Process', color: 'accent' },
    { id: 'testimonials', label: 'Reviews', color: 'success' },
    { id: 'contact', label: 'Contact', color: 'primary' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // Calculate overall scroll progress
      const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scrolled = (winScroll / height) * 100;
      setScrollProgress(scrolled);

      // Determine active section
      const sectionElements = sections.map(section => ({
        ...section,
        element: document.getElementById(section.id)
      })).filter(section => section.element);

      const currentSection = sectionElements.find(section => {
        const rect = section.element.getBoundingClientRect();
        return rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2;
      });

      if (currentSection) {
        setActiveSection(currentSection.id);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Initial call
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      {/* Desktop Progress Indicator */}
      <div className="hidden lg:block fixed left-6 top-1/2 transform -translate-y-1/2 z-80">
        <div className="flex flex-col space-y-4">
          {/* Overall Progress Bar */}
          <div className="w-1 h-32 bg-surface-200 rounded-full overflow-hidden">
            <div 
              className="w-full bg-gradient-to-b from-primary to-accent transition-all duration-300 ease-out rounded-full"
              style={{ height: `${scrollProgress}%` }}
            />
          </div>
          
          {/* Section Indicators */}
          <div className="flex flex-col space-y-3">
            {sections.map((section, index) => (
              <button
                key={section.id}
                onClick={() => scrollToSection(section.id)}
                className={`group relative w-3 h-3 rounded-full transition-all duration-300 ${
                  activeSection === section.id
                    ? `bg-${section.color} scale-125 shadow-lg`
                    : 'bg-surface-200 hover:bg-text-muted hover:scale-110'
                }`}
                title={section.label}
              >
                {/* Tooltip */}
                <div className="absolute left-6 top-1/2 transform -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-text-primary text-white text-xs px-2 py-1 rounded whitespace-nowrap">
                    {section.label}
                  </div>
                  <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1 w-2 h-2 bg-text-primary rotate-45" />
                </div>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Mobile Progress Bar */}
      <div className="lg:hidden fixed top-20 left-0 right-0 z-80">
        <div className="h-1 bg-surface-200">
          <div 
            className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-300 ease-out"
            style={{ width: `${scrollProgress}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default SectionProgressIndicator;