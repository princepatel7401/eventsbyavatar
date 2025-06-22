// /home/ubuntu/app/eventcraft_ahmedabad/src/pages/landing-page/components/HeroSection.jsx
import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import AppImage from "../../../components/AppImage";

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [eventsThisMonth, setEventsThisMonth] = useState(42);
  const [isVisible, setIsVisible] = useState(false);

  const heroImages = [
    {
      src: "https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop",
      alt: "Luxury Wedding Reception",
    },
    {
      src: "https://images.pixabay.com/photo/2017/07/15/10/34/wedding-2505493_1920.jpg",
      alt: "Corporate Event Setup",
    },
    {
      src: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=1920&h=1080",
      alt: "Traditional Indian Wedding",
    },
  ];

  useEffect(() => {
    setIsVisible(true);
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [heroImages.length]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
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

  const handleBookConsultation = () => {
    scrollToSection("contact");
  };

  const handleViewGallery = () => {
    scrollToSection("gallery");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background Image Slider */}
      <div className="absolute inset-0 z-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <AppImage
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/50" />
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center text-white">
          <div
            className={`transition-all duration-1000 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-4 sm:mb-6 leading-tight">
              Your Dream Event,{" "}
              <span className="bg-gradient-to-r from-accent to-accent-600 bg-clip-text text-transparent">
                Perfectly Executed
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 sm:mb-8 leading-relaxed">
              Ahmedabad's trusted event planners with{" "}
              <span className="font-semibold text-accent">
                10+ successful celebrations
              </span>{" "}
              and exclusive vendor partnerships
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-12">
              <button
                onClick={handleBookConsultation}
                className="w-full sm:w-auto btn-accent text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
              >
                Book Free Consultation
              </button>

              <button
                onClick={handleViewGallery}
                className="w-full sm:w-auto btn-outline border-white text-white hover:bg-white hover:text-primary text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 mt-3 sm:mt-0"
              >
                View Event Gallery
              </button>
            </div>
          </div>

          {/* Trust Bar */}
          <div
            className={`transition-all duration-1000 delay-500 transform ${
              isVisible
                ? "translate-y-0 opacity-100"
                : "translate-y-10 opacity-0"
            }`}
          >
            <div className="bg-white/10 backdrop-blur-md rounded-xl sm:rounded-2xl p-4 sm:p-6 border border-white/20">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 text-center">
                <div className="flex flex-col items-center py-2">
                  <div className="flex items-center text-accent mb-1 sm:mb-2">
                    <Icon
                      name="Trophy"
                      size={24}
                      className="sm:w-7 sm:h-7"
                    />
                    <span className="text-2xl sm:text-3xl font-bold ml-2">
                      {eventsThisMonth}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200">
                    Events Completed This Month
                  </p>
                </div>

                <div className="flex flex-col items-center py-2">
                  <div className="flex items-center text-accent mb-1 sm:mb-2">
                    <Icon
                      name="Star"
                      size={24}
                      className="sm:w-7 sm:h-7"
                    />
                    <span className="text-2xl sm:text-3xl font-bold ml-2">
                      4.8/5
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200">
                    Client Satisfaction Rating
                  </p>
                </div>

                <div className="flex flex-col items-center py-2">
                  <div className="flex items-center text-accent mb-1 sm:mb-2">
                    <Icon
                      name="Calendar"
                      size={24}
                      className="sm:w-7 sm:h-7"
                    />
                    <span className="text-2xl sm:text-3xl font-bold ml-2">
                      8+
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-gray-200">
                    Years of Local Experience
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce-gentle hidden sm:block">
        <Icon
          name="ChevronDown"
          size={32}
        />
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-12 sm:bottom-20 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-200 ${
              index === currentSlide ? "bg-accent" : "bg-white/50"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
