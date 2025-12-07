// src/pages/landing-page/components/ProcessSection.jsx
import React, { useState, useEffect, useRef } from "react";
import Icon from "../../../components/AppIcon";
import { openWhatsApp, WhatsAppMessages } from "../../../utils/whatsapp";

const ProcessSection = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [visibleSteps, setVisibleSteps] = useState([]);
  const sectionRef = useRef(null);
  const touchStartX = useRef(null);
  const touchEndX = useRef(null);

  const processSteps = [
    {
      id: 1,
      title: "Free Consultation",
      duration: "60 minutes",
      description:
        "Understanding your vision, requirements, and budget through detailed consultation",
      icon: "MessageCircle",
      details: [
        "Event vision & theme discussion",
        "Budget planning & allocation",
        "Guest list & venue requirements",
        "Timeline & milestone setting",
        "Initial vendor recommendations",
      ],
      deliverables: [
        "Event planning checklist",
        "Preliminary budget breakdown",
        "Venue shortlist with pros/cons",
        "Detailed project timeline",
      ],
      clientActions: [
        "Share event inspiration & preferences",
        "Provide guest count estimates",
        "Define must-have elements",
        "Approve initial timeline",
      ],
    },
    {
      id: 2,
      title: "Design & Planning",
      duration: "1-2 weeks",
      description:
        "Creating detailed event design, vendor selection, and comprehensive planning",
      icon: "Palette",
      details: [
        "Custom theme & design development",
        "Vendor selection & negotiations",
        "Detailed timeline creation",
        "Logistics planning",
        "Contingency planning",
      ],
      deliverables: [
        "3D venue design mockups",
        "Complete vendor lineup",
        "Detailed event runsheet",
        "Emergency backup plans",
      ],
      clientActions: [
        "Review & approve designs",
        "Select preferred vendors",
        "Finalize guest list",
        "Approve final timeline",
      ],
    },
    {
      id: 3,
      title: "Vendor Coordination",
      duration: "2-4 weeks",
      description:
        "Managing all vendor relationships, contracts, and coordination meetings",
      icon: "Users",
      details: [
        "Vendor contract negotiations",
        "Payment schedule coordination",
        "Quality assurance checks",
        "Delivery timeline management",
        "Regular progress updates",
      ],
      deliverables: [
        "Signed vendor contracts",
        "Payment schedule breakdown",
        "Quality guarantee certificates",
        "Weekly progress reports",
      ],
      clientActions: [
        "Approve vendor contracts",
        "Make scheduled payments",
        "Attend key meetings",
        "Review progress updates",
      ],
    },
    {
      id: 4,
      title: "Pre-Event Setup",
      duration: "3-7 days",
      description: "Final preparations, rehearsals, and setup coordination",
      icon: "Settings",
      details: [
        "Venue setup & decoration",
        "Sound & lighting checks",
        "Catering arrangements",
        "Staff briefing sessions",
        "Final rehearsals",
      ],
      deliverables: [
        "Complete venue transformation",
        "Technical system checks",
        "Staff coordination plan",
        "Final event checklist",
      ],
      clientActions: [
        "Attend final rehearsal",
        "Approve final setup",
        "Brief key family/team members",
        "Prepare for event day",
      ],
    },
    {
      id: 5,
      title: "Event Execution",
      duration: "Event day(s)",
      description:
        "Seamless event management with real-time coordination and support",
      icon: "Play",
      details: [
        "Real-time event coordination",
        "Guest management & assistance",
        "Vendor supervision",
        "Timeline adherence",
        "Emergency response",
      ],
      deliverables: [
        "Flawless event execution",
        "Real-time problem solving",
        "Guest satisfaction",
        "Memorable experiences",
      ],
      clientActions: [
        "Enjoy your perfect event",
        "Focus on guests & moments",
        "Trust our professional team",
        "Create lasting memories",
      ],
    },
    {
      id: 6,
      title: "Post-Event Support",
      duration: "1-2 weeks",
      description: "Cleanup, vendor settlements, and follow-up services",
      icon: "CheckCircle",
      details: [
        "Complete venue cleanup",
        "Vendor payment settlements",
        "Feedback collection",
        "Photo/video compilation",
      ],
      deliverables: [
        "Pristine venue return",
        "Final expense report",
        "Event highlight reel",
        "Guest feedback summary",
      ],
      clientActions: [
        "Review final expenses",
        "Share event feedback",
        "Approve photo releases",
        "Plan future events!",
      ],
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setVisibleSteps((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.3 }
    );

    const steps = sectionRef.current?.querySelectorAll("[data-index]");
    steps?.forEach((step) => observer.observe(step));

    return () => observer.disconnect();
  }, []);

  // Swipe handlers for mobile
  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    touchEndX.current = null;
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const onTouchMove = (e) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const onTouchEnd = () => {
    if (!touchStartX.current || !touchEndX.current) return;

    const distance = touchStartX.current - touchEndX.current;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe && activeStep < processSteps.length - 1) {
      setActiveStep(activeStep + 1);
    }
    if (isRightSwipe && activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <section
      id="process"
      ref={sectionRef}
      className="section-padding bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Our Proven
            <span className="block text-primary">Event Planning Process</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            From consultation to celebration, follow our 6-step process that
            ensures every detail is perfect and every moment is memorable.
          </p>
        </div>

        {/* Interactive Timeline */}
        <div className="max-w-6xl mx-auto">
          {/* Desktop Timeline */}
          <div className="hidden lg:block">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute top-20 left-0 right-0 h-1 bg-surface-200">
                <div
                  className="h-full bg-primary transition-all duration-1000"
                  style={{
                    width: `${(activeStep + 1) * (100 / processSteps.length)}%`,
                  }}
                />
              </div>

              {/* Step Indicators */}
              <div className="flex justify-between mb-12">
                {processSteps.map((step, index) => (
                  <div
                    key={step.id}
                    className="flex flex-col items-center cursor-pointer"
                    onClick={() => setActiveStep(index)}
                  >
                    <div
                      className={`w-16 h-16 rounded-full flex items-center justify-center border-4 transition-all duration-300 ${
                        index <= activeStep
                          ? "bg-primary border-primary text-white"
                          : "bg-white border-surface-200 text-text-secondary"
                      }`}
                    >
                      <Icon
                        name={step.icon}
                        size={24}
                      />
                    </div>
                    <div className="text-center mt-5 max-w-32">
                      <h4
                        className={`font-semibold text-sm ${
                          index === activeStep
                            ? "text-primary"
                            : "text-text-secondary"
                        }`}
                      >
                        {step.title}
                      </h4>
                      <p className="text-xs text-text-muted mt-1">
                        {step.duration}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Step Details - Desktop */}
          <div className="hidden lg:block bg-white rounded-2xl shadow-custom-lg p-8 border border-border">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                    <Icon
                      name={processSteps[activeStep].icon}
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-text-primary">
                      Step {processSteps[activeStep].id}:{" "}
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-text-secondary">
                      {processSteps[activeStep].duration}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div>
                  <h4 className="font-semibold text-text-primary mb-4">
                    What We Do:
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                      >
                        <Icon
                          name="ArrowRight"
                          size={16}
                          className="text-primary mr-2 mt-1 flex-shrink-0"
                        />
                        <span className="text-text-secondary text-sm">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-4">
                    You'll Receive:
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].deliverables.map(
                      (deliverable, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-success mr-2 mt-1 flex-shrink-0"
                          />
                          <span className="text-text-secondary text-sm">
                            {deliverable}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-4">
                    Your Part:
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].clientActions.map(
                      (action, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <Icon
                            name="User"
                            size={16}
                            className="text-accent mr-2 mt-1 flex-shrink-0"
                          />
                          <span className="text-text-secondary text-sm">
                            {action}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Step Details - Mobile (Swipeable) */}
          <div
            className="lg:hidden bg-white rounded-2xl shadow-custom-lg p-8 border border-border"
            onTouchStart={onTouchStart}
            onTouchMove={onTouchMove}
            onTouchEnd={onTouchEnd}
          >
            <div className="grid grid-cols-1 gap-8">
              <div>
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center mr-4">
                    <Icon
                      name={processSteps[activeStep].icon}
                      size={24}
                    />
                  </div>
                  <div>
                    <h3 className="text-2xl font-display font-bold text-text-primary">
                      Step {processSteps[activeStep].id}:{" "}
                      {processSteps[activeStep].title}
                    </h3>
                    <p className="text-text-secondary">
                      {processSteps[activeStep].duration}
                    </p>
                  </div>
                </div>

                <p className="text-lg text-text-secondary mb-6 leading-relaxed">
                  {processSteps[activeStep].description}
                </p>

                <div>
                  <h4 className="font-semibold text-text-primary mb-4">
                    What We Do:
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].details.map((detail, index) => (
                      <li
                        key={index}
                        className="flex items-start"
                      >
                        <Icon
                          name="ArrowRight"
                          size={16}
                          className="text-primary mr-2 mt-1 flex-shrink-0"
                        />
                        <span className="text-text-secondary text-sm">
                          {detail}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <h4 className="font-semibold text-text-primary mb-4">
                    You'll Receive:
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].deliverables.map(
                      (deliverable, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <Icon
                            name="Check"
                            size={16}
                            className="text-success mr-2 mt-1 flex-shrink-0"
                          />
                          <span className="text-text-secondary text-sm">
                            {deliverable}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>

                <div>
                  <h4 className="font-semibold text-text-primary mb-4">
                    Your Part:
                  </h4>
                  <ul className="space-y-2">
                    {processSteps[activeStep].clientActions.map(
                      (action, index) => (
                        <li
                          key={index}
                          className="flex items-start"
                        >
                          <Icon
                            name="User"
                            size={16}
                            className="text-accent mr-2 mt-1 flex-shrink-0"
                          />
                          <span className="text-text-secondary text-sm">
                            {action}
                          </span>
                        </li>
                      )
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Step Navigation */}
          <div className="lg:hidden mt-8">
            <div className="flex justify-between items-center">
              <button
                onClick={() => setActiveStep(Math.max(0, activeStep - 1))}
                disabled={activeStep === 0}
                className="flex items-center px-4 py-2 text-primary disabled:text-text-muted disabled:cursor-not-allowed"
              >
                <Icon
                  name="ChevronLeft"
                  size={20}
                  className="mr-1"
                />
                Previous
              </button>

              <div className="flex space-x-1 sm:space-x-2">
                {processSteps.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setActiveStep(index)}
                    className={`w-5 h-5 rounded-full ${
                      index === activeStep ? "bg-primary" : "bg-surface-200"
                    }`}
                  />
                ))}
              </div>

              <button
                onClick={() =>
                  setActiveStep(
                    Math.min(processSteps.length - 1, activeStep + 1)
                  )
                }
                disabled={activeStep === processSteps.length - 1}
                className="flex items-center px-4 py-2 text-primary disabled:text-text-muted disabled:cursor-not-allowed"
              >
                Next
                <Icon
                  name="ChevronRight"
                  size={20}
                  className="ml-1"
                />
              </button>
            </div>
          </div>
        </div>

        {/* Process Benefits */}
        <div className="mt-16">
          <div className="bg-primary-50 rounded-2xl p-8 border border-primary-200">
            <h3 className="text-2xl font-display font-bold text-primary text-center mb-8">
              Why Our Process Works
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <Icon
                  name="Clock"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h4 className="font-semibold text-text-primary mb-2">
                  Time Efficient
                </h4>
                <p className="text-text-secondary text-sm">
                  Structured approach saves you 200+ hours of planning time
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Shield"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h4 className="font-semibold text-text-primary mb-2">
                  Risk-Free
                </h4>
                <p className="text-text-secondary text-sm">
                  Proven process with backup plans for every scenario
                </p>
              </div>
              <div className="text-center">
                <Icon
                  name="Target"
                  size={32}
                  className="text-primary mx-auto mb-4"
                />
                <h4 className="font-semibold text-text-primary mb-2">
                  Results Guaranteed
                </h4>
                <p className="text-text-secondary text-sm">
                  98% on-time delivery with 100% client satisfaction
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <div className="bg-primary-100 rounded-xl p-6 max-w-2xl mx-auto border border-primary-200">
            <h3 className="text-xl font-semibold text-text-primary mb-4">
              Ready to Start Your Event Journey?
            </h3>
            <p className="text-text-secondary mb-6">
              Begin with a free consultation and experience our proven process
              firsthand
            </p>
            <div className="flex justify-center">
              <button
                onClick={() => openWhatsApp(WhatsAppMessages.consultation)}
                className="btn-accent flex items-cente text-lg"
              >
                <Icon
                  name="Play"
                  size={20}
                  className="mr-2 mt-1"
                />
                Start Step 1: Free Consultation
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
