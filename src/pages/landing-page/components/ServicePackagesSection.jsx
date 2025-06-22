// /home/ubuntu/app/eventcraft_ahmedabad/src/pages/landing-page/components/ServicePackagesSection.jsx
import React, { useState } from 'react';
import Icon from '../../../components/AppIcon';

const ServicePackagesSection = () => {
  const [selectedPackage, setSelectedPackage] = useState(1); // Default to 'Most Popular'
  const [expandedInclusions, setExpandedInclusions] = useState({});

  const packages = [
    {
      id: 0,
      name: 'Essential',
      subtitle: 'Perfect for intimate celebrations',
      price: '₹2-5 lakhs',
      originalPrice: '₹6+ lakhs',
      savings: 'Save ₹1+ lakh',
      popular: false,
      bestFor: 'Birthday parties, small anniversaries, intimate gatherings',
      guestCapacity: 'Up to 100 guests',
      features: [
        'Event planning consultation',
        'Venue selection assistance',
        'Vendor coordination (3-5 vendors)',
        'Basic decoration setup',
        'Day-of coordination',
        'Post-event cleanup'
      ],
      inclusions: {
        'Planning & Coordination': [
          '2 planning meetings',
          'Timeline creation',
          'Vendor management',
          'Day-of coordination (6 hours)'
        ],
        'Decoration & Setup': [
          'Basic flower arrangements',
          'Table setting',
          'Entrance decoration',
          'Photo backdrop'
        ],
        'Support Services': [
          'Setup & breakdown crew',
          'Coordination support',
          'Emergency backup plan'
        ]
      },
      ctaText: 'Start Planning',
      badge: null
    },
    {
      id: 1,
      name: 'Premium',
      subtitle: 'Most comprehensive solution',
      price: '₹8-15 lakhs',
      originalPrice: '₹18+ lakhs',
      savings: 'Save ₹3+ lakhs',
      popular: true,
      bestFor: 'Weddings, corporate events, large celebrations',
      guestCapacity: '100-500 guests',
      features: [
        'Complete event management',
        'Premium vendor network access',
        'Custom decoration design',
        'Professional photography included',
        'Guest management system',
        'Multi-day coordination',
        'Post-event video highlights'
      ],
      inclusions: {
        'Planning & Coordination': [
          'Unlimited planning meetings',
          'Detailed timeline & runsheet',
          'Complete vendor management',
          'Multi-day coordination',
          'Rehearsal coordination'
        ],
        'Design & Decoration': [
          'Custom theme development',
          'Premium floral arrangements',
          'Lighting design',
          'Stage & backdrop design',
          'Entrance archway'
        ],
        'Photography & Media': [
          '8-hour photography coverage',
          '4-hour videography',
          'Drone shots (if applicable)',
          'Same-day highlight reel',
          'Professional editing'
        ],
        'Guest Services': [
          'Registration management',
          'Welcome coordination',
          'VIP guest assistance',
          'Transportation coordination'
        ],
        'Additional Services': [
          'Emergency backup plans',
          '24/7 support hotline',
          'Post-event cleanup',
          'Vendor payment management'
        ]
      },
      ctaText: 'Choose Premium',
      badge: 'Most Popular'
    },
    {
      id: 2,
      name: 'Luxury',
      subtitle: 'Ultra-premium experience',
      price: '₹20+ lakhs',
      originalPrice: '₹35+ lakhs',
      savings: 'Save ₹5+ lakhs',
      popular: false,
      bestFor: 'Destination weddings, high-profile events, luxury celebrations',
      guestCapacity: '200+ guests',
      features: [
        'Luxury event curation',
        'Exclusive venue partnerships',
        'Celebrity chef catering',
        'Professional entertainment booking',
        'Luxury transportation',
        'Personal event assistant',
        'Custom gift curation',
        'International vendor access'
      ],
      inclusions: {
        'Luxury Planning': [
          'Dedicated luxury event manager',
          'Personal assistant throughout',
          'VIP vendor access',
          'Custom experience design'
        ],
        'Premium Design': [
          'Celebrity decorator collaboration',
          'Imported decoration elements',
          'Custom furniture & props',
          'Signature installation pieces'
        ],
        'Entertainment & Media': [
          'Professional entertainment booking',
          'Celebrity photographer',
          'Cinematic videography team',
          'Live streaming setup',
          'Social media management'
        ],
        'Luxury Services': [
          'Luxury transportation fleet',
          'Personal shopping assistance',
          'Guest concierge services',
          'Custom gift curation',
          'Spa & wellness coordination'
        ],
        'Exclusive Access': [
          'Heritage venue bookings',
          'Celebrity chef arrangements',
          'International vendor imports',
          'Government liaison services'
        ]
      },
      ctaText: 'Inquire Luxury',
      badge: 'Ultra Premium'
    }
  ];

  const toggleInclusionExpansion = (packageId, category) => {
    setExpandedInclusions(prev => ({
      ...prev,
      [`${packageId}-${category}`]: !prev[`${packageId}-${category}`]
    }));
  };

  return (
    <section id="services" className="section-padding bg-surface">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-8 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-display font-bold text-text-primary mb-4 sm:mb-6">
            Service Packages
            <span className="block text-primary">Clear Value, Transparent Pricing</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Choose the perfect package for your event size and requirements. 
            All prices in lakhs notation with transparent inclusions.
          </p>
        </div>

        {/* Package Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {packages.map((pkg, index) => (
            <div
              key={pkg.id}
              className={`relative bg-white rounded-xl sm:rounded-2xl shadow-custom-lg border-2 transition-all duration-300 transform hover:scale-105 ${
                pkg.popular 
                  ? 'border-accent shadow-custom-xl scale-105 md:scale-105' 
                  : selectedPackage === pkg.id
                    ? 'border-primary' :'border-border hover:border-primary-200'
              }`}
              onClick={() => setSelectedPackage(pkg.id)}
            >
              {/* Badge */}
              {pkg.badge && (
                <div className={`absolute -top-3 sm:-top-4 left-1/2 transform -translate-x-1/2 px-4 sm:px-6 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-semibold text-white ${
                  pkg.popular ? 'bg-accent' : 'bg-primary'
                }`}>
                  {pkg.badge}
                </div>
              )}

              <div className="p-4 sm:p-6 md:p-8">
                {/* Header */}
                <div className="text-center mb-4 sm:mb-6">
                  <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-1 sm:mb-2">
                    {pkg.name}
                  </h3>
                  <p className="text-text-secondary mb-3 sm:mb-4">{pkg.subtitle}</p>
                  
                  <div className="mb-3 sm:mb-4">
                    <div className="text-2xl sm:text-4xl font-bold text-primary mb-1">{pkg.price}</div>
                    <div className="text-xs sm:text-sm text-text-secondary line-through">{pkg.originalPrice}</div>
                    <div className="text-xs sm:text-sm font-semibold text-success">{pkg.savings}</div>
                  </div>
                  
                  <div className="text-xs sm:text-sm text-text-secondary">
                    <p className="mb-1">{pkg.bestFor}</p>
                    <p className="font-semibold">{pkg.guestCapacity}</p>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4 sm:mb-6">
                  <ul className="space-y-2 sm:space-y-3">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <Icon name="Check" size={16} className="text-success mr-2 mt-1 flex-shrink-0" />
                        <span className="text-text-secondary text-xs sm:text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <button 
                  className={`w-full py-2 sm:py-3 px-4 sm:px-6 rounded-lg font-semibold transition-all duration-200 ${
                    pkg.popular
                      ? 'bg-accent text-white hover:bg-accent-600 shadow-md'
                      : 'bg-primary text-white hover:bg-primary-600 shadow-md'
                  }`}
                >
                  {pkg.ctaText}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Detailed Inclusions for Selected Package */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl sm:rounded-2xl shadow-custom-lg p-4 sm:p-8 border border-border">
            <h3 className="text-xl sm:text-2xl font-display font-bold text-text-primary mb-4 sm:mb-6 text-center">
              {packages[selectedPackage].name} Package - Detailed Inclusions
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
              {Object.entries(packages[selectedPackage].inclusions).map(([category, items]) => (
                <div key={category} className="border border-border rounded-lg overflow-hidden">
                  <button
                    onClick={() => toggleInclusionExpansion(selectedPackage, category)}
                    className="w-full flex items-center justify-between p-3 sm:p-4 bg-surface hover:bg-surface-100 transition-colors duration-200"
                  >
                    <h4 className="font-semibold text-sm sm:text-base text-text-primary">{category}</h4>
                    <Icon 
                      name={expandedInclusions[`${selectedPackage}-${category}`] ? "ChevronUp" : "ChevronDown"} 
                      size={20} 
                      className="text-text-secondary" 
                    />
                  </button>
                  
                  {expandedInclusions[`${selectedPackage}-${category}`] && (
                    <div className="p-3 sm:p-4 border-t border-border">
                      <ul className="space-y-1 sm:space-y-2">
                        {items.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start">
                            <Icon name="ArrowRight" size={14} className="text-primary mr-2 mt-1 flex-shrink-0" />
                            <span className="text-text-secondary text-xs sm:text-sm">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-6 sm:mt-8 text-center">
              <div className="bg-accent-100 rounded-lg p-3 sm:p-4 mb-4 sm:mb-6 border border-accent-200">
                <p className="text-text-primary font-semibold mb-1 sm:mb-2 text-sm sm:text-base">
                  Ready to book {packages[selectedPackage].name} package?
                </p>
                <p className="text-text-secondary text-xs sm:text-sm">
                  Get a detailed quote with timeline and vendor allocation
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
                <button className="btn-accent py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base">
                  <Icon name="Calendar" size={18} className="mr-2" />
                  Book Free Consultation
                </button>
                <button className="btn-outline border-primary text-primary py-2 sm:py-3 px-4 sm:px-6 text-sm sm:text-base mt-2 sm:mt-0">
                  <Icon name="Download" size={18} className="mr-2" />
                  Download Package Details
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-8 sm:mt-12 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-custom border border-border text-center">
            <Icon name="Shield" size={24} className="sm:w-8 sm:h-8 text-primary mx-auto mb-2 sm:mb-4" />
            <h4 className="font-semibold text-text-primary mb-1 sm:mb-2 text-sm sm:text-base">Money Back Guarantee</h4>
            <p className="text-text-secondary text-xs sm:text-sm">100% satisfaction guaranteed or full refund</p>
          </div>
          
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-custom border border-border text-center">
            <Icon name="Clock" size={24} className="sm:w-8 sm:h-8 text-accent mx-auto mb-2 sm:mb-4" />
            <h4 className="font-semibold text-text-primary mb-1 sm:mb-2 text-sm sm:text-base">Flexible Payments</h4>
            <p className="text-text-secondary text-xs sm:text-sm">Pay in installments as per event timeline</p>
          </div>
          
          <div className="bg-white rounded-lg sm:rounded-xl p-4 sm:p-6 shadow-custom border border-border text-center">
            <Icon name="Users" size={24} className="sm:w-8 sm:h-8 text-success mx-auto mb-2 sm:mb-4" />
            <h4 className="font-semibold text-text-primary mb-1 sm:mb-2 text-sm sm:text-base">Dedicated Team</h4>
            <p className="text-text-secondary text-xs sm:text-sm">Personal project manager for every event</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicePackagesSection;