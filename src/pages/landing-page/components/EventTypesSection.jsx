// /home/ubuntu/app/eventcraft_ahmedabad/src/pages/landing-page/components/EventTypesSection.jsx
import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import AppImage from "../../../components/AppImage";
import { openWhatsApp, WhatsAppMessages } from "../../../utils/whatsapp";

const EventTypesSection = () => {
  const [selectedType, setSelectedType] = useState(0);

  const eventTypes = [
    {
      title: "Weddings",
      icon: "Heart",
      budgetRange: "₹8-25 lakhs",
      timeline: "3-6 months",
      beforeImage:
        "https://images.pexels.com/photos/2959192/pexels-photo-2959192.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      afterImage:
        "https://images.pexels.com/photos/1729799/pexels-photo-1729799.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop",
      testimonial: {
        name: "Priya & Anand Patel",
        text: "Avatar Events turned our dream wedding into reality. Every detail was perfect!",
        rating: 5,
      },
      features: [
        "Traditional & contemporary ceremonies",
        "Venue decoration & setup",
        "Catering with authentic Gujarati cuisine",
        "Photography & videography",
        "Guest management",
      ],
    },
    {
      title: "Corporate Events",
      icon: "Building",
      budgetRange: "₹5-15 lakhs",
      timeline: "1-3 months",
      beforeImage:
        "https://images.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1920.jpg",
      afterImage:
        "https://images.pixabay.com/photo/2017/07/21/23/57/concert-2527495_1920.jpg",
      testimonial: {
        name: "Rajesh Kumar, TechCorp",
        text: "Professional execution that impressed our 300+ attendees and stakeholders.",
        rating: 5,
      },
      features: [
        "Conference & seminar management",
        "Product launch events",
        "Corporate celebrations",
        "Team building activities",
        "Brand activations",
      ],
    },
    {
      title: "Social Functions",
      icon: "Users",
      budgetRange: "₹2-8 lakhs",
      timeline: "2-8 weeks",
      beforeImage:
        "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=400&h=300",
      afterImage:
        "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=400&h=300",
      testimonial: {
        name: "Mehta Family",
        text: "Our 25th anniversary celebration was magical thanks to Avatar Events team.",
        rating: 5,
      },
      features: [
        "Birthday & anniversary parties",
        "Festival celebrations",
        "Baby showers & naming ceremonies",
        "Retirement parties",
        "Family reunions",
      ],
    },
  ];

  return (
    <section
      id="event-types"
      className="section-padding bg-surface"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4 sm:mb-6">
            Event Types We
            <span className="block text-primary">Specialize In</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From intimate celebrations to grand spectacles, see how we transform
            ordinary venues into extraordinary experiences.
          </p>
        </div>

        {/* Event Type Tabs */}
        <div className="flex flex-wrap justify-center mb-8 sm:mb-12 gap-2 sm:gap-4">
          {eventTypes.map((type, index) => (
            <button
              key={index}
              onClick={() => setSelectedType(index)}
              className={`flex items-center space-x-1 sm:space-x-2 px-3 sm:px-6 py-2 sm:py-3 rounded-lg text-sm sm:text-base font-semibold transition-all duration-200 ${
                selectedType === index
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-primary hover:bg-primary-50 border border-border"
              }`}
            >
              <Icon
                name={type.icon}
                size={16}
                className="sm:w-5 sm:h-5"
              />
              <span>{type.title}</span>
            </button>
          ))}
        </div>

        {/* Selected Event Type Details */}
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:gap-12 items-center">
            {/* Before/After Gallery */}


            {/* Features & Testimonial */}
            <div className="space-y-4 sm:space-y-8 lg:max-w-2xl lg:mx-auto">
              {/* Features */}
              <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-custom border border-border">
                <h4 className="text-lg sm:text-xl font-semibold text-text-primary mb-3 sm:mb-4 flex items-center">
                  <Icon
                    name="CheckCircle"
                    size={20}
                    className="sm:w-6 sm:h-6 text-success mr-2"
                  />
                  What's Included
                </h4>
                <ul className="space-y-2 sm:space-y-3">
                  {eventTypes[selectedType].features.map((feature, index) => (
                    <li
                      key={index}
                      className="flex items-start"
                    >
                      <Icon
                        name="Check"
                        size={14}
                        className="sm:w-4 sm:h-4 text-success mr-2 mt-1 flex-shrink-0"
                      />
                      <span className="text-text-secondary text-sm">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Testimonial Preview */}
              <div className="bg-primary-50 rounded-lg sm:rounded-xl p-4 sm:p-6 border border-primary-200">
                <div className="flex items-center mb-2 sm:mb-4">
                  <div className="flex space-x-1 mr-2 sm:mr-4">
                    {[
                      ...Array(eventTypes[selectedType].testimonial.rating),
                    ].map((_, i) => (
                      <Icon
                        key={i}
                        name="Star"
                        size={14}
                        className="sm:w-4 sm:h-4 text-accent fill-current"
                      />
                    ))}
                  </div>
                  <span className="font-semibold text-text-primary text-sm sm:text-base">
                    {eventTypes[selectedType].testimonial.name}
                  </span>
                </div>
                <p className="text-text-secondary text-xs sm:text-sm italic leading-relaxed">
                  "{eventTypes[selectedType].testimonial.text}"
                </p>
              </div>

              {/* CTA */}
              <div className="bg-primary-100 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center border border-primary-200">
                <h5 className="text-base sm:text-lg font-semibold text-text-primary mb-1 sm:mb-2">
                  Ready to transform your{" "}
                  {eventTypes[selectedType].title.toLowerCase()}?
                </h5>
                <p className="text-text-secondary text-xs sm:text-sm mb-3 sm:mb-4">
                  Get a personalized quote and timeline for your event
                </p>
                <div className="flex justify-center">
                  <button
                    onClick={() => openWhatsApp(WhatsAppMessages.quote(eventTypes[selectedType].title))}
                    className="btn-accent py-2 sm:py-3 px-4 sm:px-6 flex items-center text-sm sm:text-base"
                  >
                    <Icon
                      name="MessageCircle"
                      size={16}
                      className="sm:w-5 sm:h-5 mr-2"
                    />
                    Get {eventTypes[selectedType].title} Quote
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

export default EventTypesSection;
