// src/pages/landing-page/components/FAQSection.jsx
import React, { useState } from "react";
import Icon from "../../../components/AppIcon";
import { openWhatsApp, WhatsAppMessages } from "../../../utils/whatsapp";

const FAQSection = () => {
  const [expandedFaq, setExpandedFaq] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");

  const faqCategories = [
    { id: "all", label: "All Questions", icon: "HelpCircle" },
    { id: "pricing", label: "Pricing & Packages", icon: "DollarSign" },
    { id: "planning", label: "Event Planning", icon: "Calendar" },
    { id: "vendors", label: "Vendors & Services", icon: "Users" },
    { id: "logistics", label: "Logistics & Timeline", icon: "Clock" },
  ];

  const faqs = [
    {
      id: 1,
      category: "pricing",
      question: "What are your package prices and what's included?",
      answer:
        "Our packages range from ₹2-5 lakhs (Essential) to ₹20+ lakhs (Luxury). Each package includes event planning, vendor coordination, decoration, and day-of management. Premium and Luxury packages include additional services like photography, entertainment booking, and luxury transportation. All packages offer 25% average savings through our vendor partnerships.",
      videoExplanation: true,
      relatedQuestions: [
        "Do you charge any hidden fees?",
        "Can I customize packages?",
      ],
    },
    {
      id: 2,
      category: "pricing",
      question: "Do you charge any hidden fees or markups?",
      answer:
        "Absolutely not. We believe in complete transparency. Our package prices include all coordination fees. We pass vendor discounts directly to you and don't add markups. Any additional costs (like venue or catering) are paid directly to vendors with full transparency.",
      videoExplanation: false,
      relatedQuestions: [
        "What payment methods do you accept?",
        "When do I need to make payments?",
      ],
    },
    {
      id: 3,
      category: "planning",
      question: "How far in advance should I book your services?",
      answer:
        "For weddings and large events (200+ guests), we recommend booking 4-6 months in advance. Corporate events typically need 2-3 months. However, we've successfully planned events with just 2-3 weeks notice. Early booking ensures better vendor availability and more time for detailed planning.",
      videoExplanation: false,
      relatedQuestions: [
        "What if I need to change my event date?",
        "Can you handle last-minute requests?",
      ],
    },
    {
      id: 4,
      category: "planning",
      question: "Can you work with my preferred venues and vendors?",
      answer:
        "Yes! We're happy to work with your preferred venues and vendors. We'll coordinate with them and ensure they meet our quality standards. If they're new to us, we'll conduct a quality assessment. We can also suggest alternatives from our verified network if needed.",
      videoExplanation: true,
      relatedQuestions: [
        "Do you have exclusive venue partnerships?",
        "What if my preferred vendor is unavailable?",
      ],
    },
    {
      id: 5,
      category: "vendors",
      question: "How do you select and verify your vendor partners?",
      answer:
        "Our 200+ vendor network is carefully curated through a rigorous selection process. We evaluate quality of work, reliability, pricing, and customer service. All vendors must pass background checks and provide references. We regularly audit performance and maintain only top-tier partnerships.",
      videoExplanation: true,
      relatedQuestions: [
        "Can I meet vendors before hiring?",
        "What if I'm not satisfied with a vendor?",
      ],
    },
    {
      id: 6,
      category: "logistics",
      question: "What happens if something goes wrong on the event day?",
      answer:
        "We always have comprehensive backup plans for every aspect of your event. Our team includes emergency coordinators who can handle last-minute issues. We maintain relationships with backup vendors and have contingency arrangements for common problems like weather, vendor no-shows, or technical issues.",
      videoExplanation: false,
      relatedQuestions: [
        "Do you provide insurance for events?",
        "How do you handle weather-related issues?",
      ],
    },
    {
      id: 7,
      category: "planning",
      question: "Do you handle destination weddings outside Ahmedabad?",
      answer:
        "Yes, we specialize in destination weddings across Gujarat, Rajasthan, and popular destinations like Goa, Udaipur, and Jaipur. We have local partnerships in these locations and handle all logistics including guest transportation, accommodation, and local vendor coordination.",
      videoExplanation: false,
      relatedQuestions: [
        "What about international destination weddings?",
        "Do you arrange guest travel?",
      ],
    },
    {
      id: 8,
      category: "logistics",
      question: "How do you ensure events stay on timeline?",
      answer:
        "We create detailed runsheets with precise timing for every activity. Our coordinators use real-time communication systems to keep everyone synchronized. We build buffer time into schedules and have protocols for keeping events on track even when delays occur.",
      videoExplanation: true,
      relatedQuestions: [
        "What if the event runs over time?",
        "How do you coordinate with multiple vendors?",
      ],
    },
    {
      id: 9,
      category: "vendors",
      question: "Can I get references from previous clients?",
      answer:
        "Absolutely! We provide references from recent clients who have had similar events. You can also check our testimonials page for LinkedIn-verified reviews. Many clients are happy to share their experiences directly. We can arrange calls with previous clients if needed.",
      videoExplanation: false,
      relatedQuestions: [
        "Do you have a portfolio of previous events?",
        "Can I visit ongoing events?",
      ],
    },
    {
      id: 10,
      category: "pricing",
      question: "What's your cancellation and refund policy?",
      answer:
        "Our cancellation policy varies by timeline: 90+ days notice: 90% refund, 60-90 days: 70% refund, 30-60 days: 50% refund, less than 30 days: 25% refund. However, we work with clients on rescheduling when possible. Force majeure events like natural disasters have special consideration.",
      videoExplanation: false,
      relatedQuestions: [
        "Can I reschedule instead of canceling?",
        "What happens to vendor deposits?",
      ],
    },
  ];

  const filteredFaqs = faqs.filter((faq) => {
    const matchesSearch =
      faq.question.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || faq.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const toggleFaq = (faqId) => {
    setExpandedFaq(expandedFaq === faqId ? null : faqId);
  };

  return (
    <section className="section-padding bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Frequently Asked
            <span className="block text-primary">Questions</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Get answers to common questions about our services, pricing, and
            process. Can't find what you're looking for? Contact us directly.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Search and Filter */}
          <div className="mb-8">
            {/* Search Bar */}
            <div className="relative mb-6">
              <Icon
                name="Search"
                size={20}
                className="absolute left-3 top-1/2 transform -translate-y-1/2 text-text-secondary"
              />
              <input
                type="text"
                placeholder="Search FAQs..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-border rounded-lg focus:border-primary focus:ring-2 focus:ring-primary-100 transition-all duration-200 bg-white"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3 justify-center">
              {faqCategories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-primary text-white shadow-md"
                      : "bg-white text-text-primary hover:bg-primary-50 border border-border"
                  }`}
                >
                  <Icon
                    name={category.icon}
                    size={16}
                  />
                  <span className="text-sm">{category.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* FAQ List */}
          <div className="space-y-4">
            {filteredFaqs.length === 0 ? (
              <div className="text-center py-12">
                <Icon
                  name="Search"
                  size={48}
                  className="text-text-muted mx-auto mb-4"
                />
                <h3 className="text-xl font-semibold text-text-primary mb-2">
                  No FAQs found
                </h3>
                <p className="text-text-secondary">
                  Try adjusting your search terms or category filter
                </p>
              </div>
            ) : (
              filteredFaqs.map((faq) => (
                <div
                  key={faq.id}
                  className="bg-white rounded-xl shadow-custom border border-border overflow-hidden transition-all duration-200 hover:shadow-custom-lg"
                >
                  <button
                    onClick={() => toggleFaq(faq.id)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-surface-50 transition-colors duration-200"
                  >
                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-1">
                        <h3 className="text-lg font-semibold text-text-primary pr-4">
                          {faq.question}
                        </h3>
                        {faq.videoExplanation && (
                          <Icon
                            name="Video"
                            size={16}
                            className="text-accent"
                          />
                        )}
                      </div>
                      <span
                        className={`inline-block px-2 py-1 text-xs rounded-full ${
                          faq.category === "pricing"
                            ? "bg-green-100 text-green-600"
                            : faq.category === "planning"
                            ? "bg-blue-100 text-blue-600"
                            : faq.category === "vendors"
                            ? "bg-purple-100 text-purple-600"
                            : "bg-orange-100 text-orange-600"
                        }`}
                      >
                        {
                          faqCategories.find((cat) => cat.id === faq.category)
                            ?.label
                        }
                      </span>
                    </div>
                    <Icon
                      name={
                        expandedFaq === faq.id ? "ChevronUp" : "ChevronDown"
                      }
                      size={24}
                      className="text-text-secondary flex-shrink-0"
                    />
                  </button>

                  {expandedFaq === faq.id && (
                    <div className="px-6 pb-6 border-t border-border">
                      <div className="pt-4">
                        <p className="text-text-secondary leading-relaxed mb-4">
                          {faq.answer}
                        </p>

                        {faq.videoExplanation && (
                          <div className="mb-4">
                            <button className="flex items-center text-accent hover:text-accent-600 transition-colors duration-200">
                              <Icon
                                name="Play"
                                size={16}
                                className="mr-2"
                              />
                              <span className="text-sm">
                                Watch video explanation
                              </span>
                            </button>
                          </div>
                        )}

                        {faq.relatedQuestions &&
                          faq.relatedQuestions.length > 0 && (
                            <div>
                              <p className="text-sm font-semibold text-text-primary mb-2">
                                Related Questions:
                              </p>
                              <ul className="space-y-1">
                                {faq.relatedQuestions.map((relatedQ, index) => (
                                  <li key={index}>
                                    <button
                                      onClick={() => {
                                        const relatedFaq = faqs.find(
                                          (f) => f.question === relatedQ
                                        );
                                        if (relatedFaq)
                                          toggleFaq(relatedFaq.id);
                                      }}
                                      className="text-sm text-primary hover:text-primary-600 transition-colors duration-200"
                                    >
                                      • {relatedQ}
                                    </button>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          )}
                      </div>
                    </div>
                  )}
                </div>
              ))
            )}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 text-center">
            <div className="bg-white rounded-2xl p-8 shadow-custom-lg border border-border">
              <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                Still have questions?
              </h3>
              <p className="text-text-secondary mb-6">
                Our event planning experts are here to help with personalized
                answers
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button
                  onClick={() => openWhatsApp(WhatsAppMessages.chat)}
                  className="btn-primary flex items-center"
                >
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="mr-2"
                  />
                  Chat with Expert
                </button>
                <button
                  onClick={() => openWhatsApp(WhatsAppMessages.scheduleCall)}
                  className="btn-outline flex items-center"
                >
                  <Icon
                    name="Phone"
                    size={20}
                    className="mr-2"
                  />
                  Schedule Call
                </button>
                <button
                  onClick={() => openWhatsApp(WhatsAppMessages.emailQuestions)}
                  className="btn-ghost flex items-center"
                >
                  <Icon
                    name="Mail"
                    size={20}
                    className="mr-2"
                  />
                  Email Questions
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
