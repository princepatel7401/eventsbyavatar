// src/pages/landing-page/components/GallerySection.jsx
import React, { useState, useCallback, useMemo } from "react";
import Icon from "../../../components/AppIcon";
import AppImage from "../../../components/AppImage";
import { openWhatsApp, WhatsAppMessages } from "../../../utils/whatsapp";

const GallerySection = () => {
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const galleryImages = [
    {
      id: 1,
      src: "/images/Eventsbyavatar/6796193f-e9b3-46b9-96a5-cbbfc958bfdc.jpg",
      category: "wedding",
      title: "Elegant Wedding Celebration",
      venue: "Ahmedabad",
      budgetRange: "₹15-20L",
      venueSize: "500 guests",
    },
    {
      id: 2,
      src: "/images/Eventsbyavatar/ae44b045-1a1c-4492-9f65-99d4dfb1daa7.jpg",
      category: "wedding",
      title: "Traditional Wedding Ceremony",
      venue: "Ahmedabad",
      budgetRange: "₹12-15L",
      venueSize: "400 guests",
    },
    {
      id: 3,
      src: "/images/Eventsbyavatar/IMG_0404.JPG",
      category: "wedding",
      title: "Grand Wedding Reception",
      venue: "Ahmedabad",
      budgetRange: "₹18-22L",
      venueSize: "600 guests",
    },
    {
      id: 4,
      src: "/images/Eventsbyavatar/040A4888.jpeg",
      category: "wedding",
      title: "Beautiful Wedding Setup",
      venue: "Ahmedabad",
      budgetRange: "₹10-15L",
      venueSize: "350 guests",
    },
    {
      id: 5,
      src: "/images/Eventsbyavatar/040A4479.jpeg",
      category: "wedding",
      title: "Luxury Wedding Event",
      venue: "Ahmedabad",
      budgetRange: "₹20-25L",
      venueSize: "500 guests",
    },
    {
      id: 6,
      src: "/images/Eventsbyavatar/IMG_9097.JPG",
      category: "corporate",
      title: "Corporate Event",
      venue: "Ahmedabad",
      budgetRange: "₹8-12L",
      venueSize: "300 attendees",
    },
    {
      id: 7,
      src: "/images/Eventsbyavatar/52414a7f-6792-40e1-a7a6-0b8763c02c1a.jpg",
      category: "wedding",
      title: "Wedding Decoration",
      venue: "Ahmedabad",
      budgetRange: "₹12-18L",
      venueSize: "450 guests",
    },
    {
      id: 8,
      src: "/images/Eventsbyavatar/ce0dd0c1-0c8c-4659-b961-318772835465.jpg",
      category: "social",
      title: "Social Celebration",
      venue: "Ahmedabad",
      budgetRange: "₹5-8L",
      venueSize: "200 guests",
    },
    {
      id: 9,
      src: "/images/Eventsbyavatar/f70c417d-5b5a-45be-b716-a70899ac1b9d.jpg",
      category: "wedding",
      title: "Wedding Reception",
      venue: "Ahmedabad",
      budgetRange: "₹15-20L",
      venueSize: "500 guests",
    },
    {
      id: 10,
      src: "/images/Eventsbyavatar/1f0a086a-6583-4c96-9e26-ca23b068a1fb.jpg",
      category: "social",
      title: "Anniversary Celebration",
      venue: "Ahmedabad",
      budgetRange: "₹4-7L",
      venueSize: "150 guests",
    },
    {
      id: 11,
      src: "/images/Eventsbyavatar/b02fab0d-e55d-4df6-a53d-7ff6c73a4d32.jpg",
      category: "corporate",
      title: "Corporate Gathering",
      venue: "Ahmedabad",
      budgetRange: "₹6-10L",
      venueSize: "250 attendees",
    },
    {
      id: 12,
      src: "/images/Eventsbyavatar/53a31636-7f81-4dca-9f61-48229c5bb966.jpg",
      category: "wedding",
      title: "Wedding Ceremony",
      venue: "Ahmedabad",
      budgetRange: "₹10-15L",
      venueSize: "400 guests",
    },
    {
      id: 13,
      src: "/images/Eventsbyavatar/166285df-1a25-440e-959a-5e72d13dac3a.jpg",
      category: "wedding",
      title: "Elegant Wedding Setup",
      venue: "Ahmedabad",
      budgetRange: "₹18-22L",
      venueSize: "550 guests",
    },
    {
      id: 14,
      src: "/images/Eventsbyavatar/b05888a1-8a92-4f3c-bd01-437c798ac7bb.jpg",
      category: "wedding",
      title: "Grand Wedding Event",
      venue: "Ahmedabad",
      budgetRange: "₹20-25L",
      venueSize: "600 guests",
    },
    {
      id: 15,
      src: "/images/Eventsbyavatar/1c5c58d0-4ed9-4cd0-a7de-ad4ae29e45b3.jpg",
      category: "social",
      title: "Social Function",
      venue: "Ahmedabad",
      budgetRange: "₹5-8L",
      venueSize: "180 guests",
    },
    {
      id: 16,
      src: "/images/Eventsbyavatar/64d1f9af-6d93-4849-8308-279601df2da6.jpg",
      category: "corporate",
      title: "Corporate Event Setup",
      venue: "Ahmedabad",
      budgetRange: "₹7-11L",
      venueSize: "200 attendees",
    },
  ];

  const filterOptions = [
    { id: "all", label: "All Events", icon: "Grid" },
    { id: "wedding", label: "Weddings", icon: "Heart" },
    { id: "corporate", label: "Corporate", icon: "Building" },
    { id: "social", label: "Social", icon: "Users" },
  ];

  const filteredImages = useMemo(() => {
    return selectedFilter === "all"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedFilter);
  }, [selectedFilter, galleryImages]);

  const handleFilterChange = useCallback(async (filter) => {
    setIsLoading(true);
    setSelectedFilter(filter);
    // Simulate loading for smooth UX
    setTimeout(() => setIsLoading(false), 300);
  }, []);

  const openImageModal = useCallback((image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  }, []);

  const closeImageModal = useCallback(() => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  }, []);

  return (
    <section
      id="gallery"
      className="section-padding bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Our Event
            <span className="block text-primary">Gallery</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Explore our portfolio of successful events across Ahmedabad. Filter
            by event type, budget, or venue size to find inspiration.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center mb-12 gap-4">
          {filterOptions.map((option) => (
            <button
              key={option.id}
              onClick={() => handleFilterChange(option.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-lg font-semibold transition-all duration-200 ${
                selectedFilter === option.id
                  ? "bg-primary text-white shadow-md"
                  : "bg-white text-text-primary hover:bg-primary-50 border border-border"
              }`}
            >
              <Icon
                name={option.icon}
                size={20}
              />
              <span>{option.label}</span>
              {option.id !== "all" && (
                <span className="bg-white/20 text-xs px-2 py-1 rounded-full">
                  {
                    galleryImages.filter((img) => img.category === option.id)
                      .length
                  }
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="relative">
          {isLoading && (
            <div className="absolute inset-0 bg-white/70 flex items-center justify-center z-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image, index) => (
              <div
                key={image.id}
                className={`group cursor-pointer transform transition-all duration-500 hover:scale-105 ${
                  isLoading ? "opacity-50" : "opacity-100"
                }`}
                style={{ animationDelay: `${index * 100}ms` }}
                onClick={() => openImageModal(image)}
              >
                <div className="relative overflow-hidden rounded-xl shadow-custom hover:shadow-custom-lg transition-shadow duration-300">
                  <AppImage
                    src={image.src}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  />

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                      <h4 className="font-semibold mb-1">{image.title}</h4>
                      <div className="flex items-center text-sm space-x-4">
                        <span className="flex items-center">
                          <Icon
                            name="MapPin"
                            size={14}
                            className="mr-1"
                          />
                          {image.venue}
                        </span>
                      </div>
                      <div className="flex items-center justify-between mt-2 text-sm">
                        {/* <span className="flex items-center">
                          <Icon
                            name="DollarSign"
                            size={14}
                            className="mr-1"
                          />
                          {image.budgetRange}
                        </span> */}
                        <span className="flex items-center">
                          <Icon
                            name="Users"
                            size={14}
                            className="mr-1"
                          />
                          {image.venueSize}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Expand Icon */}
                  <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Icon
                      name="Expand"
                      size={20}
                      color="white"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Load More Button */}
        <div className="text-center mt-12">
          {/* <button className="btn-outline">
            <Icon name="Download" size={20} className="mr-2" />
            View Complete Portfolio
          </button> */}
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-300 p-4">
          <div className="relative max-w-4xl max-h-full">
            <button
              onClick={closeImageModal}
              className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2 text-white hover:bg-white/30 transition-colors duration-200 z-10"
            >
              <Icon
                name="X"
                size={24}
              />
            </button>

            <div className="bg-white rounded-xl overflow-hidden shadow-custom-xl">
              <AppImage
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-96 object-cover"
              />

              <div className="p-6">
                <h3 className="text-2xl font-display font-bold text-text-primary mb-4">
                  {selectedImage.title}
                </h3>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-primary mr-2"
                    />
                    <div>
                      <p className="text-sm text-text-secondary">Venue</p>
                      <p className="font-semibold text-text-primary">
                        {selectedImage.venue}
                      </p>
                    </div>
                  </div>

                  {/* <div className="flex items-center">
                    <Icon
                      name="DollarSign"
                      size={20}
                      className="text-accent mr-2"
                    />
                    <div>
                      <p className="text-sm text-text-secondary">
                        Budget Range
                      </p>
                      <p className="font-semibold text-text-primary">
                        {selectedImage.budgetRange}
                      </p>
                    </div>
                  </div> */}

                  <div className="flex items-center">
                    <Icon
                      name="Users"
                      size={20}
                      className="text-success mr-2"
                    />
                    <div>
                      <p className="text-sm text-text-secondary">Capacity</p>
                      <p className="font-semibold text-text-primary">
                        {selectedImage.venueSize}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <button
                    onClick={() => openWhatsApp(WhatsAppMessages.gallery)}
                    className="btn-primary w-full flex items-center justify-center"
                  >
                    <Icon
                      name="MessageCircle"
                      size={20}
                      className="mr-2"
                    />
                    Get Similar Event Quote
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default GallerySection;
