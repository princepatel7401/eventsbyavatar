// src/pages/landing-page/components/UrgencySection.jsx
import React, { useState, useEffect } from "react";
import Icon from "../../../components/AppIcon";

const UrgencySection = () => {
  const [consultationSlots, setConsultationSlots] = useState(7);
  const [timeRemaining, setTimeRemaining] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  // Simulate real-time slot reduction
  useEffect(() => {
    const slotTimer = setInterval(() => {
      if (Math.random() < 0.1 && consultationSlots > 2) {
        // 10% chance every 30 seconds
        setConsultationSlots((prev) => Math.max(2, prev - 1));
      }
    }, 30000);

    return () => clearInterval(slotTimer);
  }, [consultationSlots]);

  // Month-end countdown
  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date();
      const endOfMonth = new Date(
        now.getFullYear(),
        now.getMonth() + 1,
        0,
        23,
        59,
        59
      );
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeRemaining({ days, hours, minutes, seconds });
      }
    };

    updateCountdown();
    const timer = setInterval(updateCountdown, 1000);
    return () => clearInterval(timer);
  }, []);

  // Determine seasonal messaging
  const getSeasonalMessage = () => {
    const month = new Date().getMonth();
    if (month >= 9 && month <= 2) {
      // Oct-Feb (Wedding season in India)
      return {
        title: "Wedding Season Rush",
        message: "Peak wedding season in Gujarat - our calendars fill quickly",
        urgency: "Book now to secure your preferred dates before they're taken",
        badge: "Peak Season",
      };
    } else if (month >= 3 && month <= 5) {
      // Mar-May (Corporate events)
      return {
        title: "Corporate Event Season",
        message: "Prime time for corporate conferences and product launches",
        urgency: "Many venues already booking for next quarter",
        badge: "Corporate Season",
      };
    } else {
      // Jun-Sep (Festival season)
      return {
        title: "Festival Season Planning",
        message: "Preparing for Navratri, Diwali, and celebration season",
        urgency: "Early planning ensures premium vendor availability",
        badge: "Festival Season",
      };
    }
  };

  const seasonalInfo = getSeasonalMessage();

  const scrollToBooking = () => {
    const element = document.getElementById("contact");
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

  return (
    <section className="section-padding bg-gradient-to-r from-primary to-primary-600 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='4'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            backgroundSize: "30px 30px",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Seasonal Badge */}
          <div className="inline-flex items-center bg-accent text-white px-4 py-2 rounded-full text-sm font-semibold mb-6">
            <Icon
              name="Clock"
              size={16}
              className="mr-2"
            />
            {seasonalInfo.badge}
          </div>

          <h2 className="text-display-2 text-white mb-6">
            {seasonalInfo.title}
            <span className="block text-accent">Limited Availability</span>
          </h2>

          <p className="text-xl text-white/90 mb-4 leading-relaxed">
            {seasonalInfo.message}
          </p>

          <p className="text-lg text-accent mb-12 font-semibold">
            {seasonalInfo.urgency}
          </p>

          {/* Availability Counter */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Consultation Slots */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="flex items-center justify-center mb-4">
                <Icon
                  name="Calendar"
                  size={32}
                  className="text-accent mr-3"
                />
                <div className="text-center">
                  <div className="text-4xl font-bold text-white">
                    {consultationSlots}
                  </div>
                  <p className="text-white/80 text-sm">Consultation Slots</p>
                </div>
              </div>
              <p className="text-white/90 text-center">Available this month</p>
              <div className="mt-4 bg-white/20 rounded-full h-2">
                <div
                  className="bg-accent rounded-full h-2 transition-all duration-500"
                  style={{ width: `${(consultationSlots / 15) * 100}%` }}
                />
              </div>
            </div>

            {/* Month-end Countdown */}
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="text-center mb-4">
                <Icon
                  name="Timer"
                  size={32}
                  className="text-accent mx-auto mb-2"
                />
                <p className="text-white/80 text-sm">This Month Ends In</p>
              </div>
              <div className="grid grid-cols-4 gap-2 text-center">
                <div>
                  <div className="text-2xl font-bold text-white">
                    {timeRemaining.days}
                  </div>
                  <div className="text-xs text-white/70">Days</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {timeRemaining.hours}
                  </div>
                  <div className="text-xs text-white/70">Hours</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {timeRemaining.minutes}
                  </div>
                  <div className="text-xs text-white/70">Min</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">
                    {timeRemaining.seconds}
                  </div>
                  <div className="text-xs text-white/70">Sec</div>
                </div>
              </div>
            </div>
          </div>

          {/* Urgency Messages */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            <div className="text-center">
              <div className="bg-warning-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon
                  name="TrendingUp"
                  size={24}
                  className="text-white"
                />
              </div>
              <h4 className="font-semibold text-white mb-2">High Demand</h4>
              <p className="text-white/80 text-sm">
                3 events booked this week alone
              </p>
            </div>

            <div className="text-center">
              <div className="bg-error-500 w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon
                  name="Users"
                  size={24}
                  className="text-white"
                />
              </div>
              <h4 className="font-semibold text-white mb-2">Limited Team</h4>
              <p className="text-white/80 text-sm">
                Premium planners manage max 2 events/month
              </p>
            </div>

            <div className="text-center">
              <div className="bg-accent w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-3">
                <Icon
                  name="MapPin"
                  size={24}
                  className="text-white"
                />
              </div>
              <h4 className="font-semibold text-white mb-2">Venue Rush</h4>
              <p className="text-white/80 text-sm">
                Premium venues booking 6 months ahead
              </p>
            </div>
          </div>

          {/* Exclusive Offer */}
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20 mb-8">
            <div className="flex items-center justify-center mb-4">
              <Icon
                name="Gift"
                size={24}
                className="text-accent mr-2"
              />
              <h3 className="text-2xl font-display font-bold text-white">
                Limited Time Offer
              </h3>
            </div>
            <p className="text-lg text-white/90 mb-4">
              Book your consultation this month and receive:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
              {/* <div className="flex items-center">
                <Icon name="Check" size={16} className="text-accent mr-2 flex-shrink-0" />
                <span className="text-white/90 text-sm">₹25,000 decoration upgrade</span>
              </div> */}
              <div className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-accent mr-2 flex-shrink-0"
                />
                <span className="text-white/90 text-sm">
                  Free premium vendor consultations
                </span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-accent mr-2 flex-shrink-0"
                />
                <span className="text-white/90 text-sm">
                  Priority booking privileges
                </span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Check"
                  size={16}
                  className="text-accent mr-2 flex-shrink-0"
                />
                <span className="text-white/90 text-sm">
                  Extended planning timeline
                </span>
              </div>
            </div>
          </div>

          {/* Main CTA */}
          <div className="space-y-4">
            <button
              onClick={scrollToBooking}
              className="bg-accent hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-xl shadow-lg hover:shadow-xl transform hover:scale-105 transition-all duration-200"
            >
              <Icon
                name="Calendar"
                size={24}
                className="mr-2"
              />
              Secure Your Consultation Slot
            </button>

            <p className="text-white/80 text-sm">
              ⚡ Only {consultationSlots} slots remaining this month
            </p>

            <div className="flex items-center justify-center space-x-6 text-sm text-white/70">
              <div className="flex items-center">
                <Icon
                  name="Shield"
                  size={16}
                  className="mr-1"
                />
                <span>No commitment</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Clock"
                  size={16}
                  className="mr-1"
                />
                <span>60-min consultation</span>
              </div>
              <div className="flex items-center">
                <Icon
                  name="Star"
                  size={16}
                  className="mr-1"
                />
                <span>100% free</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default UrgencySection;
