// src/pages/landing-page/components/ProblemSection.jsx
import React, { useState, useEffect, useRef } from "react";
import Icon from "../../../components/AppIcon";

const ProblemSection = () => {
  const [visibleItems, setVisibleItems] = useState([]);
  const sectionRef = useRef(null);

  const problems = [
    {
      icon: "AlertTriangle",
      title: "Event Planning Stress",
      description:
        "Endless vendor calls, timeline confusion, and sleepless nights worrying about every detail",
      scenario:
        "Priya spent 3 months calling 50+ vendors for her wedding, only to find half were unavailable on her date",
      color: "text-error",
    },
    {
      icon: "Users",
      title: "Vendor Coordination Nightmares",
      description:
        "Unreliable vendors, miscommunication, and last-minute cancellations ruining your special day",
      scenario:
        "Rajesh's corporate event decorator canceled 2 days before the event, leaving 200 guests disappointed",
      color: "text-warning",
    },
    {
      icon: "TrendingUp",
      title: "Budget Overruns",
      description:
        "Hidden costs, price inflation, and unexpected expenses destroying your financial planning",
      scenario:
        "The Sharma family's save cost more than they expected due to hidden vendor charges",
      color: "text-error",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleItems((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const items = sectionRef.current?.querySelectorAll("[data-index]");
    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding bg-surface"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Are You Tired of Event Planning{" "}
            <span className="text-error">Nightmares</span>?
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Every year in Ahmedabad, thousands of events fail due to poor
            planning. Don't let yours be one of them.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {problems.map((problem, index) => (
            <div
              key={index}
              data-index={index}
              className={`transform transition-all duration-700 delay-${
                index * 200
              } ${
                visibleItems.includes(index)
                  ? "translate-y-0 opacity-100"
                  : "translate-y-20 opacity-0"
              }`}
            >
              <div className="bg-white rounded-xl p-8 shadow-custom-lg hover:shadow-custom-xl transition-shadow duration-300 h-full">
                <div className="text-center mb-6">
                  <div
                    className={`inline-flex items-center justify-center w-12 h-12 rounded-full bg-error-100 ${problem.color} mb-4`}
                  >
                    <Icon
                      name={problem.icon}
                      size={24}
                    />
                  </div>
                  <h3 className="text-2xl font-display font-bold text-text-primary mb-3">
                    {problem.title}
                  </h3>
                </div>

                <p className="text-text-secondary mb-6 leading-relaxed">
                  {problem.description}
                </p>

                <div className="bg-error-50 rounded-lg p-4 border-l-4 border-error">
                  <p className="text-sm text-text-primary italic">
                    <Icon
                      name="Quote"
                      size={16}
                      className="inline mr-2 text-error"
                    />
                    {problem.scenario}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div
            className="bg-primary-100
 rounded-lg p-6 max-w-2xl mx-auto border border-warning-200"
          >
            <div className="flex items-center mb-4">
              <span className="text-lg font-semibold text-text-primary align-middle">
                Don't waste months planning what we can perfect in weeks
              </span>
            </div>
            <p className="text-text-secondary">
              While others struggle with vendors and budgets, our clients enjoy
              stress-free planning
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
