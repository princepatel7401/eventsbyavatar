// src/pages/landing-page/components/BenefitsSection.jsx
import React, { useState, useEffect, useRef } from "react";
import Icon from "../../../components/AppIcon";

const BenefitsSection = () => {
  const [visibleBenefits, setVisibleBenefits] = useState([]);
  const sectionRef = useRef(null);

  const benefits = [
    {
      icon: "Shield",
      title: "Stress-Free Planning",
      description:
        "Complete peace of mind with our proven planning process and dedicated project management",
      stats: {
        value: "95%",
        label: "Stress Reduction Reported",
        detail:
          "Clients report dramatically lower stress levels compared to self-planning",
      },
      features: [
        "Dedicated project manager assigned",
        "Weekly progress updates",
        "Emergency backup plans",
        "24/7 support during event",
      ],
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: "Network",
      title: "Exclusive Vendor Network",
      description:
        "Access to premium vendors with negotiated rates and priority booking guarantees",
      stats: {
        value: "200+",
        label: "Verified Partner Vendors",
        detail: "Exclusive partnerships built over 8+ years in Ahmedabad",
      },
      features: [
        "Pre-negotiated competitive rates",
        "Priority booking privileges",
        "Quality guarantee on all services",
        "Backup vendor arrangements",
      ],
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: "TrendingDown",
      title: "Budget Optimization",
      description:
        "Smart budget allocation and cost savings through strategic vendor partnerships",
      stats: {
        value: "25%",
        label: "Average Cost Savings",
        detail:
          "Clients save on average of 25% through our vendor relationships",
      },
      features: [
        "Transparent pricing breakdown",
        "Volume discount negotiations",
        "Cost-effective alternatives",
        "No hidden fees or markups",
      ],
      color: "bg-green-100 text-green-600",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleBenefits((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.2 }
    );

    const benefits = sectionRef.current?.querySelectorAll("[data-index]");
    benefits?.forEach((benefit) => observer.observe(benefit));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Why Choose Avatar Events?
            <span className="block text-primary">Proven Benefits</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Over 8 years in Ahmedabad, we've refined our approach to deliver
            maximum value with minimum stress for every client.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              data-index={index}
              className={`transform transition-all duration-700 delay-${
                index * 200
              } ${
                visibleBenefits.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-2xl p-8 shadow-custom-lg hover:shadow-custom-xl transition-all duration-300 h-full border border-border">
                {/* Icon & Title */}
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 rounded-full ${benefit.color} mb-4`}
                  >
                    <Icon
                      name={benefit.icon}
                      size={32}
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-text-secondary leading-relaxed">
                    {benefit.description}
                  </p>
                </div>

                {/* Statistics */}
                <div className="bg-surface rounded-xl p-6 mb-6 text-center">
                  <div className="text-4xl font-bold text-primary mb-2">
                    {benefit.stats.value}
                  </div>
                  <div className="text-lg font-semibold text-text-primary mb-1">
                    {benefit.stats.label}
                  </div>
                  <p className="text-sm text-text-secondary">
                    {benefit.stats.detail}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h4 className="font-semibold text-text-primary mb-4">
                    What You Get:
                  </h4>
                  <ul className="space-y-3">
                    {benefit.features.map((feature, featureIndex) => (
                      <li
                        key={featureIndex}
                        className="flex items-start"
                      >
                        <Icon
                          name="Check"
                          size={16}
                          className="text-success mr-2 mt-1 flex-shrink-0"
                        />
                        <span className="text-text-secondary text-sm">
                          {feature}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Supporting Statistics */}
        <div className="mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-display font-bold text-primary text-center mb-8">
              By the Numbers: Our Impact
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">10+</div>
                <p className="text-text-secondary text-sm">Successful Events</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">98%</div>
                <p className="text-text-secondary text-sm">On-Time Delivery</p>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">
                  4.8/5
                </div>
                <p className="text-text-secondary text-sm">Client Rating</p>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Table */}
        <div className="mt-16">
          <div className="bg-white rounded-xl shadow-custom-lg overflow-hidden border border-border">
            <div className="bg-primary text-white p-6 text-center">
              <h3 className="text-2xl font-display font-bold">
                Self-Planning vs Avatar Events Planning
              </h3>
            </div>

            <div className="p-6 overflow-x-auto">
              <div className="flex gap-6 min-w-[800px] md:min-w-full justify-center align-center">
                {/* Aspect Column */}
                <div className="text-center min-w-[30%] flex-shrink-0">
                  <h4 className="font-semibold text-text-primary mb-4">
                    Aspect
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-surface rounded-lg text-text-primary font-medium">
                      Time Investment
                    </div>
                    <div className="p-3 bg-surface rounded-lg text-text-primary font-medium">
                      Vendor Access
                    </div>
                    <div className="p-3 bg-surface rounded-lg text-text-primary font-medium">
                      Cost Control
                    </div>
                    <div className="p-3 bg-surface rounded-lg text-text-primary font-medium">
                      Stress Level
                    </div>
                    <div className="p-3 bg-surface rounded-lg text-text-primary font-medium">
                      Quality Assurance
                    </div>
                  </div>
                </div>

                {/* Self-Planning Column */}
                <div className="text-center min-w-[33.33%] flex-shrink-0">
                  <h4 className="font-semibold text-error mb-4">
                    Self-Planning
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-error-50 border border-error-200 rounded-lg text-error text-sm">
                      200+ hours over 6 months
                    </div>
                    <div className="p-3 bg-error-50 border border-error-200 rounded-lg text-error text-sm">
                      Limited local contacts
                    </div>
                    <div className="p-3 bg-error-50 border border-error-200 rounded-lg text-error text-sm">
                      Often exceeds budget
                    </div>
                    <div className="p-3 bg-error-50 border border-error-200 rounded-lg text-error text-sm">
                      High anxiety & overwhelm
                    </div>
                    <div className="p-3 bg-error-50 border border-error-200 rounded-lg text-error text-sm">
                      Hit or miss quality
                    </div>
                  </div>
                </div>

                {/* With EventCraft Column */}
                <div className="text-center min-w-[30%] flex-shrink-0">
                  <h4 className="font-semibold text-success mb-4">
                    With Avatar Events
                  </h4>
                  <div className="space-y-3">
                    <div className="p-3 bg-success-50 border border-success-200 rounded-lg text-success text-sm">
                      5–10 hours consultation
                    </div>
                    <div className="p-3 bg-success-50 border border-success-200 rounded-lg text-success text-sm">
                      Our trusted vendor team
                    </div>
                    <div className="p-3 bg-success-50 border border-success-200 rounded-lg text-success text-sm">
                      25% average savings
                    </div>
                    <div className="p-3 bg-success-50 border border-success-200 rounded-lg text-success text-sm">
                      Complete peace of mind
                    </div>
                    <div className="p-3 bg-success-50 border border-success-200 rounded-lg text-success text-sm">
                      Guaranteed excellence
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
