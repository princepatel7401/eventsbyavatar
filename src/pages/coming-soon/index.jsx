import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import Icon from "../../components/AppIcon";
import Header from "../../components/ui/Header";
import StickyCtaBar from "../../components/ui/StickyCtaBar";

const ComingSoonPage = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Set target date to wedding season (November 2024)
  const targetDate = new Date("2024-11-01T00:00:00");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate.getTime() - now;

      if (distance > 0) {
        setTimeLeft({
          days: Math.floor(distance / (1000 * 60 * 60 * 24)),
          hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
          minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
          seconds: Math.floor((distance % (1000 * 60)) / 1000),
        });
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const upcomingProjects = [
    {
      type: "Wedding Season",
      title: "Royal Wedding Collection",
      description: "Exclusive wedding packages for the upcoming season",
      features: [
        "Traditional & Modern Ceremonies",
        "Destination Wedding Planning",
        "Cultural Authenticity",
        "Premium Vendor Network",
      ],
      timeline: "November 2024 - March 2025",
      priority: "High",
      color: "bg-pink-100 text-pink-600",
      icon: "Heart",
    },
    {
      type: "Corporate Events",
      title: "Corporate Excellence Series",
      description: "Professional event solutions for businesses",
      features: [
        "Annual Conferences",
        "Product Launch Events",
        "Team Building Activities",
        "Brand Activations",
      ],
      timeline: "October 2024 - December 2024",
      priority: "High",
      color: "bg-blue-100 text-blue-600",
      icon: "Building",
    },
    {
      type: "Social Functions",
      title: "Celebration Packages",
      description: "Complete event solutions for all occasions",
      features: [
        "Birthday Celebrations",
        "Anniversary Parties",
        "Festival Celebrations",
        "Family Gatherings",
      ],
      timeline: "Available Year-Round",
      priority: "Medium",
      color: "bg-green-100 text-green-600",
      icon: "Users",
    },
  ];

  const focusAreas = [
    {
      title: "Wedding Season Focus",
      description: "Preparing for the peak wedding season with exclusive packages",
      icon: "Calendar",
      stats: "500+",
      label: "Weddings Planned",
      color: "text-pink-600",
    },
    {
      title: "Corporate Excellence",
      description: "Building strong partnerships with corporate clients",
      icon: "TrendingUp",
      stats: "200+",
      label: "Corporate Events",
      color: "text-blue-600",
    },
    {
      title: "Vendor Network",
      description: "Expanding our network of premium vendors and partners",
      icon: "Network",
      stats: "300+",
      label: "Verified Vendors",
      color: "text-green-600",
    },
  ];

  return (
    <>
      <Helmet>
        <title>Coming Soon - EventCraft Ahmedabad</title>
        <meta
          name="description"
          content="Exciting new projects coming soon! Focus on wedding season and corporate events. Stay tuned for our latest event planning solutions."
        />
      </Helmet>

      <Header />

      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-primary via-primary-600 to-accent flex items-center justify-center relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-20 w-32 h-32 bg-white rounded-full"></div>
          <div className="absolute top-40 right-32 w-24 h-24 bg-white rounded-full"></div>
          <div className="absolute bottom-32 left-1/4 w-16 h-16 bg-white rounded-full"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            {/* Main Heading */}
            <div className="mb-8">
              <Icon
                name="Clock"
                size={64}
                className="text-white mx-auto mb-6 opacity-80"
              />
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-6">
                Exciting Projects
                <span className="block text-accent">Coming Soon!</span>
              </h1>
              <p className="text-xl sm:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
                We're working hard to bring you the most amazing event experiences.
                Focus on wedding season and corporate excellence.
              </p>
            </div>

            {/* Countdown Timer */}
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 mb-12 border border-white/20">
              <h3 className="text-2xl font-semibold text-white mb-6">
                Wedding Season Launch
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {Object.entries(timeLeft).map(([unit, value]) => (
                  <div
                    key={unit}
                    className="bg-white/20 rounded-xl p-4 text-center"
                  >
                    <div className="text-3xl md:text-4xl font-bold text-white">
                      {value.toString().padStart(2, '0')}
                    </div>
                    <div className="text-white/80 text-sm capitalize">
                      {unit}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="btn-accent text-lg px-8 py-4 shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200">
                <Icon name="Bell" size={20} className="mr-2" />
                Get Notified
              </button>
              <button className="btn-outline border-white text-white hover:bg-white hover:text-primary text-lg px-8 py-4">
                <Icon name="MessageCircle" size={20} className="mr-2" />
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Focus Areas Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-2 text-text-primary mb-6">
              What We're
              <span className="block text-primary">Focusing On</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              While we prepare our latest projects, here's what we're working on to bring you the best event experiences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {focusAreas.map((area, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-8 shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="text-center mb-6">
                  <div className={`inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-100 ${area.color} mb-4`}>
                    <Icon name={area.icon} size={32} />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                    {area.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {area.description}
                  </p>
                </div>

                <div className="text-center">
                  <div className={`text-4xl font-bold ${area.color} mb-2`}>
                    {area.stats}
                  </div>
                  <div className="text-text-secondary font-medium">
                    {area.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Projects Section */}
      <section className="section-padding bg-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-display-2 text-text-primary mb-6">
              Upcoming
              <span className="block text-primary">Projects</span>
            </h2>
            <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
              We're developing comprehensive event solutions that will revolutionize how you plan your special occasions.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {upcomingProjects.map((project, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 transform hover:scale-105"
              >
                <div className="p-8">
                  <div className="flex items-center justify-between mb-6">
                    <div className={`inline-flex items-center justify-center w-12 h-12 rounded-full ${project.color} bg-opacity-20`}>
                      <Icon name={project.icon} size={24} />
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      project.priority === 'High' ? 'bg-error-100 text-error' : 'bg-warning-100 text-warning'
                    }`}>
                      {project.priority} Priority
                    </span>
                  </div>

                  <h3 className="text-xl font-display font-bold text-text-primary mb-2">
                    {project.title}
                  </h3>
                  <p className="text-text-secondary mb-4">
                    {project.description}
                  </p>

                  <div className="mb-6">
                    <h4 className="font-semibold text-text-primary mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-center text-text-secondary">
                          <Icon name="Check" size={16} className="text-success mr-2 flex-shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="border-t border-border pt-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-sm text-text-secondary">Timeline</div>
                        <div className="font-semibold text-text-primary">{project.timeline}</div>
                      </div>
                      <Icon name="ArrowRight" size={20} className="text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Wait Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-primary-100 rounded-2xl p-8 border border-primary-200">
              <Icon
                name="Star"
                size={48}
                className="text-primary mx-auto mb-6"
              />
              <h2 className="text-3xl font-display font-bold text-text-primary mb-6">
                Why Wait for Our New Projects?
              </h2>
              <p className="text-xl text-text-secondary mb-8 leading-relaxed">
                While we're preparing our latest offerings, you can still benefit from our expertise.
                Start planning your event today with our proven process and dedicated team.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                <div className="text-center">
                  <Icon name="Shield" size={32} className="text-success mx-auto mb-4" />
                  <h3 className="font-semibold text-text-primary mb-2">Proven Process</h3>
                  <p className="text-text-secondary text-sm">
                    Our 6-step planning process ensures success
                  </p>
                </div>
                <div className="text-center">
                  <Icon name="Users" size={32} className="text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-text-primary mb-2">Expert Team</h3>
                  <p className="text-text-secondary text-sm">
                    Dedicated professionals with 8+ years experience
                  </p>
                </div>
                <div className="text-center">
                  <Icon name="Network" size={32} className="text-accent mx-auto mb-4" />
                  <h3 className="font-semibold text-text-primary mb-2">Vendor Network</h3>
                  <p className="text-text-secondary text-sm">
                    Access to 200+ verified premium vendors
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <button className="btn-accent text-lg px-8 py-4">
                  <Icon name="Calendar" size={20} className="mr-2" />
                  Book Free Consultation
                </button>
                <button className="btn-outline text-lg px-8 py-4">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Call Us Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <StickyCtaBar />
    </>
  );
};

export default ComingSoonPage;