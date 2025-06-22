// /home/ubuntu/app/eventcraft_ahmedabad/src/components/ui/Header.jsx
import React, { useState, useEffect } from "react";
import Icon from "../AppIcon";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [isScrolled, setIsScrolled] = useState(false);

  const navigationItems = [
    { label: "Services", anchor: "services", icon: "Star" },
    { label: "Gallery", anchor: "gallery", icon: "Image" },
    { label: "Process", anchor: "process", icon: "CheckCircle" },
    { label: "Contact", anchor: "contact", icon: "Phone" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Update active section based on scroll position
      const sections = navigationItems.map((item) => item.anchor);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (anchor) => {
    const element = document.getElementById(anchor);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-100 transition-all duration-300 ${
          isScrolled
            ? "bg-white/95 backdrop-blur-md shadow-custom"
            : "bg-white/90 backdrop-blur-sm"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-20">
            {/* Logo */}
            <div className="flex-shrink-0">
              <button
                onClick={() => scrollToSection("hero")}
                className="flex items-center space-x-2 group"
              >
                <div className="w-24 sm:w-32 p-2">
                  <img
                    src="public/assets/images/Avatar_Logo.png"
                    alt="Business Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </button>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-6 lg:space-x-8">
              {navigationItems.map((item) => (
                <button
                  key={item.anchor}
                  onClick={() => scrollToSection(item.anchor)}
                  className={`nav-link font-medium text-sm transition-all duration-200 hover:text-primary ${
                    activeSection === item.anchor
                      ? "nav-link-active border-b-2 border-primary"
                      : ""
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>

            {/* CTA Button */}
            <div className="hidden md:flex items-center">
              <button
                onClick={() => scrollToSection("contact")}
                className="btn-primary text-sm font-semibold px-4 py-2 sm:px-6 sm:py-3"
              >
                Contact us
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={toggleMenu}
                className="p-2 rounded-lg text-text-primary hover:bg-surface transition-colors duration-200"
                aria-label="Toggle menu"
              >
                <Icon
                  name={isMenuOpen ? "X" : "Menu"}
                  size={24}
                />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      {isMenuOpen && (
        <div className="fixed inset-0 z-200 md:hidden">
          <div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsMenuOpen(false)}
          />
          <div className="fixed top-0 right-0 h-full w-[85%] max-w-sm bg-white shadow-custom-xl animate-slide-down overflow-y-auto">
            <div className="flex items-center justify-between p-4 sm:p-6 border-b border-border">
              <div className="flex items-center space-x-2">
                <div className="w-24 sm:w-32 p-2">
                  <img
                    src="public/assets/images/Avatar_Logo.png"
                    alt="Business Logo"
                    className="w-full h-auto object-contain"
                  />
                </div>
              </div>
              <button
                onClick={() => setIsMenuOpen(false)}
                className="p-2 rounded-lg text-text-primary hover:bg-surface transition-colors duration-200"
              >
                <Icon
                  name="X"
                  size={20}
                />
              </button>
            </div>

            <nav className="p-4 sm:p-6">
              <div className="space-y-2 sm:space-y-4">
                {navigationItems.map((item) => (
                  <button
                    key={item.anchor}
                    onClick={() => scrollToSection(item.anchor)}
                    className={`w-full flex items-center space-x-3 p-3 rounded-lg text-left transition-all duration-200 hover:bg-surface ${
                      activeSection === item.anchor
                        ? "bg-primary-50 text-primary border-l-4 border-primary"
                        : "text-text-primary"
                    }`}
                  >
                    <Icon
                      name={item.icon}
                      size={20}
                    />
                    <span className="font-medium">{item.label}</span>
                  </button>
                ))}
              </div>

              <div className="mt-6 pt-4 sm:pt-6 border-t border-border">
                <button
                  onClick={() => scrollToSection("contact")}
                  className="w-full btn-primary text-center py-3"
                >
                  Contact Us{" "}
                </button>

                <div className="mt-4 flex items-center justify-center space-x-4">
                  <a
                    href="tel:+919876543210"
                    className="flex items-center space-x-2 text-text-secondary hover:text-primary transition-colors duration-200 p-2"
                  >
                    <Icon
                      name="Phone"
                      size={16}
                    />
                    <span className="text-sm">Call Now</span>
                  </a>
                  <a
                    href="https://wa.me/919876543210"
                    className="flex items-center space-x-2 text-text-secondary hover:text-success transition-colors duration-200 p-2"
                  >
                    <Icon
                      name="MessageCircle"
                      size={16}
                    />
                    <span className="text-sm">WhatsApp</span>
                  </a>
                </div>
              </div>
            </nav>
          </div>
        </div>
      )}
    </>
  );
};

export default Header;
