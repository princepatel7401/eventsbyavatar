// src/pages/landing-page/index.jsx
import React from "react";
import { Helmet } from "react-helmet";
import Header from "../../components/ui/Header";
import StickyCtaBar from "../../components/ui/StickyCtaBar";
import HeroSection from "./components/HeroSection";
import ProblemSection from "./components/ProblemSection";
import SolutionSection from "./components/SolutionSection";
import EventTypesSection from "./components/EventTypesSection";
import GallerySection from "./components/GallerySection";
import TestimonialsSection from "./components/TestimonialsSection";
import BenefitsSection from "./components/BenefitsSection";
import ServicePackagesSection from "./components/ServicePackagesSection";
import ProcessSection from "./components/ProcessSection";
import FAQSection from "./components/FAQSection";
import UrgencySection from "./components/UrgencySection";
import BookingSection from "./components/BookingSection";

const LandingPage = () => {
  return (
    <>
      <Helmet>
        <title>Avatar Events</title>
        <meta
          name="description"
          content="Ahmedabad's trusted event planners with 500+ successful celebrations. Expert wedding planning, corporate events & social functions."
        />
        <meta
          name="keywords"
          content="event management ahmedabad, wedding planners ahmedabad, corporate events, event planning services, destination weddings gujarat"
        />
        <meta
          property="og:title"
          content="Avatar Events Ahmedabad - Your Dream Event, Perfectly Executed"
        />
        <meta
          property="og:description"
          content="Stress-free event planning with 500+ successful celebrations in Ahmedabad."
        />
        <meta
          property="og:type"
          content="website"
        />
        <meta
          property="og:url"
          content="https://eventcraftahmedabad.com/landing-page"
        />
        <meta
          name="twitter:card"
          content="summary_large_image"
        />
        <link
          rel="canonical"
          href="https://eventcraftahmedabad.com/landing-page"
        />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />

        <main>
          <HeroSection />
          <ProblemSection />
          <SolutionSection />
          <EventTypesSection />
          <GallerySection />
          {/* <TestimonialsSection /> */}
          <BenefitsSection />
          {/* <ServicePackagesSection /> */}
          <ProcessSection />
          <FAQSection />
          {/* <UrgencySection /> */}
          <BookingSection />
        </main>

        <StickyCtaBar />
      </div>
    </>
  );
};

export default LandingPage;
