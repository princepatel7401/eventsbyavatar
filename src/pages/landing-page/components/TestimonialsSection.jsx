// src/pages/landing-page/components/TestimonialsSection.jsx
import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";
import AppImage from "../../../components/AppImage";

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: "Priya & Anand Patel",
      role: "Bride & Groom",
      company: "Wedding - Heritage Palace",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "EventCraft made our dream wedding come true! From the initial consultation to the last dance, every detail was perfectly executed. Their team understood our vision and brought it to life with such creativity and professionalism.",
      eventDetails: {
        type: "Traditional Gujarati Wedding",
        guests: 500,
        budget: "₹15 lakhs",
        satisfaction: "100%",
      },
      outcomes: [
        "Zero stress during planning phase",
        "All vendors coordinated perfectly",
        "Stayed within budget with upgrades",
      ],
      linkedinVerified: true,
      videoTestimonial: true,
    },
    {
      id: 2,
      name: "Rajesh Kumar",
      role: "Event Manager",
      company: "TechCorp Solutions",
      image:
        "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Our annual conference was a huge success thanks to EventCraft. They handled 300+ attendees flawlessly, managed all technical requirements, and even helped us secure additional sponsorships. Truly professional service.",
      eventDetails: {
        type: "Corporate Conference",
        guests: 300,
        budget: "₹12 lakhs",
        satisfaction: "98%",
      },
      outcomes: [
        "Secured 3 additional sponsors",
        "Positive feedback from all attendees",
        "Delivered under budget",
      ],
      linkedinVerified: true,
      videoTestimonial: false,
    },
    {
      id: 3,
      name: "Mehta Family",
      role: "Event Hosts",
      company: "25th Anniversary Celebration",
      image:
        "https://images.pexels.com/photos/1181690/pexels-photo-1181690.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "For our silver jubilee celebration, EventCraft created an atmosphere that brought tears of joy to our eyes. The attention to detail, from the photo displays to the music selection, made it truly memorable for our entire family.",
      eventDetails: {
        type: "Anniversary Party",
        guests: 150,
        budget: "₹6 lakhs",
        satisfaction: "100%",
      },
      outcomes: [
        "Created lasting family memories",
        "Guests still talk about the event",
        "Perfect blend of tradition & modernity",
      ],
      linkedinVerified: false,
      videoTestimonial: true,
    },
    {
      id: 4,
      name: "Neha Shah",
      role: "Marketing Director",
      company: "Fashion Forward Pvt Ltd",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
      rating: 5,
      text: "Our product launch event exceeded all expectations. EventCraft not only managed the logistics perfectly but also contributed creative ideas that enhanced our brand presentation. The ROI was exceptional.",
      eventDetails: {
        type: "Product Launch",
        guests: 200,
        budget: "₹8 lakhs",
        satisfaction: "95%",
      },
      outcomes: [
        "40% increase in pre-orders",
        "Extensive media coverage",
        "Enhanced brand positioning",
      ],
      linkedinVerified: true,
      videoTestimonial: false,
    },
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);

    return () => clearInterval(timer);
  }, [isAutoPlaying, testimonials.length]);

  const handleTestimonialChange = (index) => {
    setCurrentTestimonial(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const currentData = testimonials[currentTestimonial];

  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Client Success
            <span className="block text-primary">Stories</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Real testimonials from real clients who trusted us with their most
            important events. See the tangible outcomes we delivered.
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Testimonial Content */}
            <div className="order-2 lg:order-1">
              <div className="bg-white rounded-2xl p-8 shadow-custom-lg border border-border">
                {/* Header */}
                <div className="flex items-start space-x-4 mb-6">
                  <AppImage
                    src={currentData.image}
                    alt={currentData.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-1">
                      <h4 className="text-xl font-semibold text-text-primary">
                        {currentData.name}
                      </h4>
                      {currentData.linkedinVerified && (
                        <Icon
                          name="CheckCircle"
                          size={20}
                          className="text-blue-500"
                        />
                      )}
                      {currentData.videoTestimonial && (
                        <Icon
                          name="Video"
                          size={20}
                          className="text-accent"
                        />
                      )}
                    </div>
                    <p className="text-text-secondary text-sm">
                      {currentData.role} • {currentData.company}
                    </p>
                    <div className="flex items-center mt-2">
                      {[...Array(currentData.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={16}
                          className="text-accent fill-current"
                        />
                      ))}
                    </div>
                  </div>
                </div>

                {/* Testimonial Text */}
                <blockquote className="text-lg text-text-primary leading-relaxed mb-6 italic">
                  "{currentData.text}"
                </blockquote>

                {/* Event Details */}
                <div className="grid grid-cols-2 gap-4 mb-6 p-4 bg-surface rounded-lg">
                  <div>
                    <p className="text-sm text-text-secondary">Event Type</p>
                    <p className="font-semibold text-text-primary">
                      {currentData.eventDetails.type}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Guests</p>
                    <p className="font-semibold text-text-primary">
                      {currentData.eventDetails.guests}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Budget</p>
                    <p className="font-semibold text-text-primary">
                      {currentData.eventDetails.budget}
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-text-secondary">Satisfaction</p>
                    <p className="font-semibold text-success">
                      {currentData.eventDetails.satisfaction}
                    </p>
                  </div>
                </div>

                {/* Outcomes */}
                <div>
                  <h5 className="font-semibold text-text-primary mb-3">
                    Key Outcomes Achieved:
                  </h5>
                  <ul className="space-y-2">
                    {currentData.outcomes.map((outcome, index) => (
                      <li
                        key={index}
                        className="flex items-center text-text-secondary"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-success mr-2 flex-shrink-0"
                        />
                        {outcome}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Testimonial Navigation & Stats */}
            <div className="order-1 lg:order-2">
              {/* Overall Stats */}
              <div className="bg-primary-50 rounded-2xl p-8 mb-8 border border-primary-200">
                <h3 className="text-2xl font-display font-bold text-primary mb-6 text-center">
                  Client Satisfaction Metrics
                </h3>
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      4.8/5
                    </div>
                    <p className="text-text-secondary text-sm">
                      Average Rating
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      98%
                    </div>
                    <p className="text-text-secondary text-sm">
                      Would Recommend
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      500+
                    </div>
                    <p className="text-text-secondary text-sm">
                      Events Completed
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      90%
                    </div>
                    <p className="text-text-secondary text-sm">
                      Repeat Clients
                    </p>
                  </div>
                </div>
              </div>

              {/* Testimonial Navigation */}
              <div className="space-y-4">
                <h4 className="font-semibold text-text-primary">
                  More Client Stories
                </h4>
                {testimonials.map((testimonial, index) => (
                  <button
                    key={testimonial.id}
                    onClick={() => handleTestimonialChange(index)}
                    className={`w-full flex items-center space-x-3 p-4 rounded-lg transition-all duration-200 text-left ${
                      currentTestimonial === index
                        ? "bg-primary text-white shadow-md"
                        : "bg-white hover:bg-surface border border-border"
                    }`}
                  >
                    <AppImage
                      src={testimonial.image}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center space-x-2">
                        <p
                          className={`font-semibold truncate ${
                            currentTestimonial === index
                              ? "text-white"
                              : "text-text-primary"
                          }`}
                        >
                          {testimonial.name}
                        </p>
                        {testimonial.videoTestimonial && (
                          <Icon
                            name="Video"
                            size={16}
                            className="text-accent"
                          />
                        )}
                      </div>
                      <p
                        className={`text-sm truncate ${
                          currentTestimonial === index
                            ? "text-white/80"
                            : "text-text-secondary"
                        }`}
                      >
                        {testimonial.eventDetails.type}
                      </p>
                    </div>
                    <div className="flex items-center">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Icon
                          key={i}
                          name="Star"
                          size={12}
                          className="text-accent fill-current"
                        />
                      ))}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-accent-100 rounded-2xl p-8 max-w-2xl mx-auto border border-accent-200">
            <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
              Ready to Join Our Success Stories?
            </h3>
            <p className="text-text-secondary mb-6">
              Book your free consultation and let's plan your perfect event
              together
            </p>
            <div className="flex justify-center">
              <button className="btn-accent text-lg flex items-center">
                <Icon
                  name="Calendar"
                  size={20}
                  className="mr-2"
                />
                Schedule Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
