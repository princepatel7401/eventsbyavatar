// src/pages/landing-page/components/SolutionSection.jsx
import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import AppImage from "../../../components/AppImage";

const SolutionSection = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [

    {
      id: "corporate",
      title: "Corporate Events",
      icon: "Building",
      description:
        "Professional conferences, product launches, and team building events",
      capabilities: [
        "Conference management",
        "Product launch events",
        "Team building activities",
        "Corporate celebrations",
        "Brand activations",
      ],
      recentProject: {
        title: "Corporate Events - Coming Soon",
        image:
          "https://images.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1920.jpg",
        budget: "Coming Soon",
        guests: "Planning Phase",
        venue: "Corporate Season 2024",
      },
      color: "bg-blue-100 text-blue-600",
    },
     {
      id: "weddings",
      title: "Weddings",
      icon: "Heart",
      description:
        "Traditional & destination weddings with complete cultural authenticity",
      capabilities: [
        "Venue selection & decoration",
        "Catering & menu planning",
        "Photography & videography",
        "Entertainment & music",
        "Guest accommodation",
      ],
      recentProject: {
        title: "Wedding Season - Coming Soon",
        image:
          "https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop",
        budget: "Coming Soon",
        guests: "Planning Phase",
        venue: "Wedding Season 2024-25",
      },
      color: "bg-pink-100 text-pink-600",
    },
    {
      id: "social",
      title: "Social Functions",
      icon: "Users",
      description:
        "Birthday parties, anniversaries, festivals, and family celebrations",
      capabilities: [
        "Birthday celebrations",
        "Anniversary parties",
        "Festival celebrations",
        "Baby showers",
        "Retirement parties",
      ],
      recentProject: {
        title: "Social Events - Coming Soon",
        image:
          "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=800&h=600",
        budget: "Coming Soon",
        guests: "Planning Phase",
        venue: "Year-Round Availability",
      },
      color: "bg-green-100 text-green-600",
    },
  ];

  return (
    <section
      id="services"
      className="section-padding bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Upcoming Event Solutions
            <span className="block text-primary">Planning for Wedding Season</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            We're preparing comprehensive event packages for the upcoming wedding season and corporate events.
            Get ready for exceptional planning experiences.
          </p>
        </div>Our Event
Gallery

        {/* Interactive Service Wheel */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Service Selection */}
            <div className="space-y-6">
              <h3 className="text-2xl font-display font-bold text-text-primary mb-8">
                Select Event Type
              </h3>

              {services.map((service, index) => (
                <div
                  key={service.id}
                  className={`cursor-pointer transition-all duration-300 transform hover:scale-105 ${
                    activeService === index ? "scale-105" : ""
                  }`}
                  onClick={() => setActiveService(index)}
                >
                  <div
                    className={`p-6 rounded-xl border-2 transition-all duration-300 ${
                      activeService === index
                        ? "border-primary bg-primary-50 shadow-custom-lg"
                        : "border-border bg-white hover:border-primary-200 shadow-custom"
                    }`}
                  >
                    <div className="flex items-center space-x-4">
                      <div
                        className={`w-12 h-12 rounded-lg flex items-center justify-center ${
                          activeService === index
                            ? "bg-primary text-white"
                            : service.color
                        }`}
                      >
                        <Icon
                          name={service.icon}
                          size={24}
                        />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-semibold text-text-primary mb-1">
                          {service.title}
                        </h4>
                        <p className="text-text-secondary text-sm">
                          {service.description}
                        </p>
                      </div>
                      <div
                        className={`transition-transform duration-300 ${
                          activeService === index ? "rotate-90" : ""
                        }`}
                      >
                        <Icon
                          name="ChevronRight"
                          size={20}
                          className="text-text-secondary"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Service Details */}
            <div className="lg:sticky lg:top-24">
              <div className="bg-white rounded-2xl shadow-custom-lg p-8 border border-border">
                <div className="mb-6">
                  <AppImage
                    src={services[activeService].recentProject.image}
                    alt={services[activeService].recentProject.title}
                    className="w-full h-48 object-cover rounded-lg mb-4"
                  />
                  <h4 className="text-xl font-semibold text-text-primary mb-2">
                    Planning Phase:{" "}
                    {services[activeService].recentProject.title}
                  </h4>
                  <div className="grid grid-cols-2 gap-4 text-sm text-text-secondary">
                    {/* <div>
                      <Icon
                        name="DollarSign"
                        size={16}
                        className="inline mr-1"
                      />
                      {services[activeService].recentProject.budget}
                    </div> */}
                    <div>
                      <Icon
                        name="Users"
                        size={16}
                        className="inline mr-1"
                      />
                      {services[activeService].recentProject.guests}
                    </div>
                    <div className="col-span-2">
                      <Icon
                        name="MapPin"
                        size={16}
                        className="inline mr-1"
                      />
                      {services[activeService].recentProject.venue}
                    </div>
                  </div>
                </div>

                <div>
                  <h5 className="font-semibold text-text-primary mb-4">
                    Our {services[activeService].title} Capabilities:
                  </h5>
                  <ul className="space-y-2">
                    {services[activeService].capabilities.map(
                      (capability, index) => (
                        <li
                          key={index}
                          className="flex items-center text-text-secondary"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-success mr-2 flex-shrink-0"
                          />
                          {capability}
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button className="btn-primary w-full flex items-center justify-center">
                    <Icon
                      name="ArrowRight"
                      size={20}
                      className="mr-6"
                    />
                    Get Quote for {services[activeService].title}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
