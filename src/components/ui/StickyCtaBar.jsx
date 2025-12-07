// /home/ubuntu/app/eventcraft_ahmedabad/src/components/ui/StickyCtaBar.jsx
import React, { useState, useEffect } from "react";
import Icon from "../AppIcon";
import { openWhatsApp, WhatsAppMessages } from "../../utils/whatsapp";

const StickyCtaBar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showQuickNav, setShowQuickNav] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  const quickNavItems = [
    { label: "Services", anchor: "services", icon: "Star" },
    { label: "Gallery", anchor: "gallery", icon: "Image" },
    { label: "Process", anchor: "process", icon: "CheckCircle" },
    { label: "Contact", anchor: "contact", icon: "Phone" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const windowHeight = window.innerHeight;

      // Show bar after scrolling past hero section
      setIsVisible(currentScrollY > windowHeight * 0.5);

      // Toggle between CTA and quick nav based on scroll direction
      if (currentScrollY > lastScrollY && currentScrollY > windowHeight) {
        setShowQuickNav(true);
      } else {
        setShowQuickNav(false);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

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
  };

  const handleCtaClick = () => {
    openWhatsApp(WhatsAppMessages.contact);
  };

  const handleCallClick = () => {
    window.location.href = "tel:+919328822686";
  };

  const handleWhatsAppClick = () => {
    openWhatsApp(WhatsAppMessages.consultation);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-90 lg:hidden">
      {/* Quick Navigation Bar */}
      {showQuickNav ? (
        <div className="bg-white/95 backdrop-blur-md border-t border-border shadow-custom-lg animate-slide-up">
          <div className="flex items-center justify-around py-2">
            {quickNavItems.map((item) => (
              <button
                key={item.anchor}
                onClick={() => scrollToSection(item.anchor)}
                className="flex flex-col items-center space-y-1 p-2 text-text-secondary hover:text-primary transition-colors duration-200"
              >
                <Icon
                  name={item.icon}
                  size={20}
                />
                <span className="text-xs font-medium">{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      ) : (
        /* Primary CTA Bar */
        <div className="bg-white/95 backdrop-blur-md border-t border-border shadow-custom-lg animate-slide-up">
          <div className="px-4 py-3">
            <div className="flex items-center space-x-3">
              <button
                onClick={handleCtaClick}
                style={{ backgroundColor: "#3a7122" }}
                className="flex-1  text-white font-semibold py-2 sm:py-3 px-3 sm:px-4 rounded-lg shadow-md hover:bg-accent-600 transition-all duration-200 flex items-center justify-center space-x-2"
              >
                <span className="text-sm sm:text-base">Contact Us </span>
              </button>

              <button
                onClick={handleCallClick}
                className="bg-primary text-white p-2 sm:p-3 rounded-lg shadow-md hover:bg-primary-600 transition-all duration-200"
                aria-label="Call now"
              >
                <Icon
                  name="Phone"
                  size={18}
                  className="sm:w-5 sm:h-5 m-2"
                />
              </button>

              <button
                onClick={handleWhatsAppClick}
                className="bg-success text-white p-2 sm:p-3 rounded-lg shadow-md hover:bg-success-600 transition-all duration-200"
                aria-label="WhatsApp"
              >
                <Icon
                  name="MessageCircle"
                  size={18}
                  className="sm:w-5 sm:h-5 m-2"
                />
              </button>
            </div>

            {/* Trust indicator */}
            <div className="mt-2 flex items-center justify-center space-x-3 sm:space-x-4 text-xs text-text-secondary">
              <div className="flex items-center space-x-1">
                <Icon
                  name="Star"
                  size={10}
                  className="sm:w-3 sm:h-3"
                  color="#F59E0B"
                />
                <span>4.5/5 Rating</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon
                  name="Users"
                  size={10}
                  className="sm:w-3 sm:h-3"
                />
                <span>5+ Events</span>
              </div>
              <div className="flex items-center space-x-1">
                <Icon
                  name="Shield"
                  size={10}
                  className="sm:w-3 sm:h-3"
                />
                <span>Trusted Partner</span>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Safe area padding for devices with home indicator */}
      <div className="h-safe-area-inset-bottom bg-white/95" />
    </div>
  );
};

export default StickyCtaBar;
