// src/pages/landing-page/components/BookingSection.jsx
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import Icon from "../../../components/AppIcon";

const BookingSection = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formProgress, setFormProgress] = useState(0);
  const [showThankYou, setShowThankYou] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    setValue,
    getValues,
  } = useForm();

  const watchedValues = watch();

  // Calculate form progress
  useEffect(() => {
    const totalFields = 10; // Approximate total fields across all steps
    const filledFields = Object.keys(watchedValues).filter(
      (key) => watchedValues[key] && watchedValues[key] !== ""
    ).length;
    setFormProgress((filledFields / totalFields) * 100);
  }, [watchedValues]);

  // Progressive disclosure based on current step
  const getVisibleFields = () => {
    switch (currentStep) {
      case 1:
        return ["firstName", "lastName", "email", "phone"];
      case 2:
        return ["eventType", "estimatedBudget", "tentativeDate", "guestCount"];
      case 3:
        return ["consultationMethod", "preferredTime", "specificRequirements"];
      default:
        return [];
    }
  };

  const canProceedToNext = () => {
    const requiredFields = getVisibleFields();
    return requiredFields.every((field) => {
      const value = getValues(field);
      return value && value !== "";
    });
  };

  const nextStep = () => {
    if (canProceedToNext()) {
      setCurrentStep((prev) => Math.min(3, prev + 1));
    }
  };

  const prevStep = () => {
    setCurrentStep((prev) => Math.max(1, prev - 1));
  };

  const onSubmit = async (data) => {
    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Save form progress to localStorage
      localStorage.setItem("eventCraftFormProgress", JSON.stringify(data));

      setShowThankYou(true);
    } catch (error) {
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  // Auto-detect company/event type based on email domain
  useEffect(() => {
    const email = watchedValues.email;
    if (email && email.includes("@")) {
      const domain = email.split("@")[1];
      if (
        domain &&
        !domain.includes("gmail") &&
        !domain.includes("yahoo") &&
        !domain.includes("hotmail")
      ) {
        setValue("eventType", "corporate");
      }
    }
  }, [watchedValues.email, setValue]);

  const handleWhatsAppBooking = () => {
    const message = `Hi! I'd like to book a consultation for my event.
Name: ${getValues("firstName")} ${getValues("lastName")}
Event Type: ${getValues("eventType") || "Not specified"}
Budget: ${getValues("estimatedBudget") || "Not specified"}
Guests: ${getValues("guestCount") || "Not specified"}`;
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/9328822686?text=${encodedMessage}`, "_blank");
  };

  if (showThankYou) {
    return (
      <section
        id="contact"
        className="section-padding bg-background"
      >
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <div className="bg-white rounded-2xl shadow-custom-lg p-8 border border-border">
              <div className="w-16 h-16 bg-success rounded-full flex items-center justify-center mx-auto mb-6">
                <Icon
                  name="CheckCircle"
                  size={32}
                  className="text-white"
                />
              </div>

              <h2 className="text-3xl font-display font-bold text-text-primary mb-4">
                Consultation Confirmed!
              </h2>

              <p className="text-lg text-text-secondary mb-6">
                Thank you for choosing EventCraft Ahmedabad. We've received your
                consultation request and will contact you within 2 hours to
                schedule your session.
              </p>

              <div className="bg-surface rounded-lg p-6 mb-6">
                <h3 className="font-semibold text-text-primary mb-4">
                  What happens next?
                </h3>
                <div className="space-y-3 text-left">
                  <div className="flex items-start">
                    <Icon
                      name="Phone"
                      size={16}
                      className="text-success mr-2 mt-1"
                    />
                    <span className="text-text-secondary text-sm">
                      Our team will call you within 2 hours to confirm your
                      consultation
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Mail"
                      size={16}
                      className="text-success mr-2 mt-1"
                    />
                    <span className="text-text-secondary text-sm">
                      You'll receive a preparation checklist via email
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="Calendar"
                      size={16}
                      className="text-success mr-2 mt-1"
                    />
                    <span className="text-text-secondary text-sm">
                      Calendar invite will be sent for your consultation slot
                    </span>
                  </div>
                  <div className="flex items-start">
                    <Icon
                      name="FileText"
                      size={16}
                      className="text-success mr-2 mt-1"
                    />
                    <span className="text-text-secondary text-sm">
                      Preliminary event plan will be shared before the meeting
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex justify-center"></div>
                <button
                  onClick={() => (window.location.href = "tel:+919328822686")}
                  className="btn-primary flex-1 flex items-center justify-center gap-2 text-center"
                >
                  <Icon
                    name="Phone"
                    size={20}
                    className="mr-2"
                  />
                  Call Us Now
                </button>
                <button
                  onClick={handleWhatsAppBooking}
                  className="btn-outline flex-1 flex items-center justify-center gap-2 text-center"
                >
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="mr-2"
                  />
                  WhatsApp
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="contact"
      className="section-padding bg-background"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-display-2 text-text-primary mb-6">
            Book Your Free
            <span className="block text-primary">Consultation</span>
          </h2>
          <p className="text-xl text-text-secondary max-w-3xl mx-auto leading-relaxed">
            Start your stress-free event planning journey. Get personalized
            recommendations, budget planning, and timeline creation - completely
            free.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Form */}
            <div className="bg-white rounded-2xl shadow-custom-lg p-8 border border-border">
              {/* Progress Bar */}
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-text-primary">
                    Progress
                  </span>
                  <span className="text-sm text-text-secondary">
                    {formProgress > 100 ? "100" : Math.round(formProgress)}%
                    Complete
                  </span>
                </div>
                <div className="w-full bg-surface-200 rounded-full h-2">
                  <div
                    className="bg-primary rounded-full h-2 transition-all duration-500"
                    style={{
                      width: `${formProgress > 100 ? 100 : formProgress}%`,
                    }}
                  />
                </div>
              </div>

              {/* Step Indicator */}
              <div className="flex items-center justify-between mb-8">
                {[1, 2, 3].map((step) => (
                  <div
                    key={step}
                    className="flex items-center"
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold ${
                        currentStep >= step
                          ? "bg-primary text-white"
                          : "bg-surface-200 text-text-secondary"
                      }`}
                    >
                      {step}
                    </div>
                    {step < 3 && (
                      <div
                        className={`w-12 h-1 mx-2 ${
                          currentStep > step ? "bg-primary" : "bg-surface-200"
                        }`}
                      />
                    )}
                  </div>
                ))}
              </div>

              <div className="px-4 sm:px-8 md:px-4 lg:px-4 py-8 max-w-3xl mx-auto">
                <form onSubmit={handleSubmit(onSubmit)}>
                  {currentStep === 1 && (
                    <div className="space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                        Let's start with your details
                      </h3>

                      <div className="grid grid-cols-1 sm:grid-cols-1 gap-4">
                        <div>
                          <label className="form-label">First Name *</label>
                          <input
                            {...register("firstName", {
                              required: "First name is required",
                            })}
                            className="form-input w-full"
                            placeholder="Your first name"
                          />
                          {errors.firstName && (
                            <p className="form-error">
                              {errors.firstName.message}
                            </p>
                          )}
                        </div>

                        <div>
                          <label className="form-label">Last Name *</label>
                          <input
                            {...register("lastName", {
                              required: "Last name is required",
                            })}
                            className="form-input w-full"
                            placeholder="Your last name"
                          />
                          {errors.lastName && (
                            <p className="form-error">
                              {errors.lastName.message}
                            </p>
                          )}
                        </div>
                      </div>

                      <div>
                        <label className="form-label">Email Address *</label>
                        <input
                          {...register("email", {
                            required: "Email is required",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Invalid email address",
                            },
                          })}
                          type="email"
                          className="form-input w-full"
                          placeholder="your.email@example.com"
                        />
                        {errors.email && (
                          <p className="form-error">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <label className="form-label">Phone Number *</label>
                        <input
                          {...register("phone", {
                            required: "Phone number is required",
                            pattern: {
                              value: /^[6-9]\d{9}$/,
                              message: "Enter valid 10-digit mobile number",
                            },
                          })}
                          type="tel"
                          className="form-input w-full"
                          placeholder="9876543210"
                        />
                        {errors.phone && (
                          <p className="form-error">{errors.phone.message}</p>
                        )}
                      </div>
                    </div>
                  )}

                  {currentStep === 2 && (
                    <div className="space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                        Tell us about your event
                      </h3>

                      <div>
                        <label className="form-label">Event Type *</label>
                        <select
                          {...register("eventType", {
                            required: "Please select event type",
                          })}
                          className="form-input w-full"
                        >
                          <option value="">Select event type</option>
                          <option value="wedding">Wedding</option>
                          <option value="corporate">Corporate Event</option>
                          <option value="social">Social Function</option>
                          <option value="other">Other</option>
                        </select>
                        {errors.eventType && (
                          <p className="form-error">
                            {errors.eventType.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="form-label">Estimated Budget *</label>
                        <select
                          {...register("estimatedBudget", {
                            required: "Please select budget range",
                          })}
                          className="form-input w-full"
                        >
                          <option value="">Select budget range</option>
                          <option value="2-5L">₹2-5 Lakhs</option>
                          <option value="5-10L">₹5-10 Lakhs</option>
                          <option value="10-15L">₹10-15 Lakhs</option>
                          <option value="15-25L">₹15-25 Lakhs</option>
                          <option value="25L+">₹25+ Lakhs</option>
                        </select>
                        {errors.estimatedBudget && (
                          <p className="form-error">
                            {errors.estimatedBudget.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="form-label">
                          Tentative Event Date
                        </label>
                        <input
                          {...register("tentativeDate")}
                          type="date"
                          className="form-input w-full"
                          min={new Date().toISOString().split("T")[0]}
                        />
                      </div>

                      <div>
                        <label className="form-label">
                          Expected Guest Count *
                        </label>
                        <select
                          {...register("guestCount", {
                            required: "Please select guest count",
                          })}
                          className="form-input w-full"
                        >
                          <option value="">Select guest count</option>
                          <option value="<50">Less than 50</option>
                          <option value="50-100">50-100 guests</option>
                          <option value="100-200">100-200 guests</option>
                          <option value="200-500">200-500 guests</option>
                          <option value="500+">500+ guests</option>
                        </select>
                        {errors.guestCount && (
                          <p className="form-error">
                            {errors.guestCount.message}
                          </p>
                        )}
                      </div>
                    </div>
                  )}

                  {currentStep === 3 && (
                    <div className="space-y-6">
                      <h3 className="text-lg sm:text-xl font-semibold text-text-primary">
                        Consultation preferences
                      </h3>

                      <div>
                        <label className="form-label w-full">
                          Preferred Consultation Method *
                        </label>
                        <div className="space-y-3">
                          {["in-person", "video-call", "phone-call"].map(
                            (method) => (
                              <label
                                key={method}
                                className="flex items-center space-x-3 cursor-pointer"
                              >
                                <input
                                  {...register("consultationMethod", {
                                    required:
                                      "Please select consultation method",
                                  })}
                                  type="radio"
                                  value={method}
                                  className="text-primary focus:ring-primary"
                                />
                                <Icon
                                  name={
                                    method === "in-person"
                                      ? "Users"
                                      : method === "video-call"
                                      ? "Video"
                                      : "Phone"
                                  }
                                  size={20}
                                  className="text-text-secondary"
                                />
                                <span className="text-text-primary capitalize">
                                  {method.replace("-", " ")}
                                </span>
                              </label>
                            )
                          )}
                        </div>
                        {errors.consultationMethod && (
                          <p className="form-error">
                            {errors.consultationMethod.message}
                          </p>
                        )}
                      </div>

                      <div>
                        <label className="form-label">
                          Preferred Time Slot
                        </label>
                        <select
                          {...register("preferredTime")}
                          className="form-input w-full"
                        >
                          <option value="">Select preferred time</option>
                          <option value="morning">
                            Morning (9 AM - 12 PM)
                          </option>
                          <option value="afternoon">
                            Afternoon (12 PM - 4 PM)
                          </option>
                          <option value="evening">Evening (4 PM - 8 PM)</option>
                          <option value="flexible">Flexible</option>
                        </select>
                      </div>

                      <div>
                        <label className="form-label">
                          Specific Requirements
                        </label>
                        <textarea
                          {...register("specificRequirements")}
                          rows="4"
                          className="form-input resize-none w-full"
                          placeholder="Any specific requirements, themes, or questions you'd like to discuss..."
                        />
                      </div>
                    </div>
                  )}

                  {/* Navigation */}
                  <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-8">
                    <button
                      type="button"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="flex items-center px-4 py-2 text-text-secondary disabled:opacity-50 disabled:cursor-not-allowed hover:text-primary transition-colors duration-200"
                    >
                      <Icon
                        name="ChevronLeft"
                        size={20}
                        className="mr-1"
                      />
                      Previous
                    </button>

                    {currentStep < 3 ? (
                      <button
                        type="button"
                        onClick={nextStep}
                        disabled={!canProceedToNext()}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        Next Step
                        <Icon
                          name="ChevronRight"
                          size={20}
                          className="ml-2"
                        />
                      </button>
                    ) : (
                      <button
                        type="submit"
                        disabled={isSubmitting || !canProceedToNext()}
                        className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                      >
                        {isSubmitting ? (
                          <>
                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                            Submitting...
                          </>
                        ) : (
                          <>
                            <Icon
                              name="Calendar"
                              size={20}
                              className="mr-2"
                            />
                            Book Consultation
                          </>
                        )}
                      </button>
                    )}
                  </div>
                </form>
              </div>
            </div>

            {/* Information Panel */}
            <div className="space-y-6">
              {/* WhatsApp Option */}
              <div className="bg-success-50 rounded-2xl p-6 border border-success-200">
                <div className="flex items-center mb-4">
                  <Icon
                    name="MessageCircle"
                    size={24}
                    className="text-success mr-3"
                  />
                  <h3 className="text-lg font-semibold text-text-primary">
                    Prefer WhatsApp?
                  </h3>
                </div>
                <p className="text-text-secondary mb-4">
                  Get instant responses and quick consultation booking through
                  WhatsApp
                </p>
                <button
                  onClick={handleWhatsAppBooking}
                  className="btn-accent w-full flex items-center"
                >
                  <Icon
                    name="MessageCircle"
                    size={20}
                    className="mr-2"
                  />
                  Book via WhatsApp
                </button>
              </div>

              {/* Contact Information */}
              <div className="bg-white rounded-2xl p-6 shadow-custom border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Direct Contact
                </h3>
                <div className="space-y-4">
                  <div className="flex items-center">
                    <Icon
                      name="Phone"
                      size={20}
                      className="text-primary mr-3"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">
                        +91 93288 22686
                      </p>
                      <p className="text-text-secondary text-sm">
                        Everyday, 9 AM - 8 PM
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Icon
                      name="Mail"
                      size={20}
                      className="text-primary mr-3"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">
                        ask@eventsbyavatar.com
                      </p>
                      <p className="text-text-secondary text-sm">
                        Quick response within 2 hours
                      </p>
                    </div>
                  </div>

                  <div className="flex items-center">
                    <Icon
                      name="MapPin"
                      size={20}
                      className="text-primary mr-3"
                    />
                    <div>
                      <p className="font-semibold text-text-primary">
                        Ahmedabad Office
                      </p>
                      <p className="text-text-secondary text-sm">
                        SG Highway, Ahmedabad
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Trust Indicators */}
              <div className="bg-white rounded-2xl p-6 shadow-custom border border-border">
                <h3 className="text-lg font-semibold text-text-primary mb-4">
                  Why Trust EventCraft?
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Icon
                      name="Shield"
                      size={16}
                      className="text-success mr-2"
                    />
                    <span className="text-text-secondary text-sm">
                      100% confidential consultation
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Clock"
                      size={16}
                      className="text-success mr-2"
                    />
                    <span className="text-text-secondary text-sm">
                      No time commitment required
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Star"
                      size={16}
                      className="text-success mr-2"
                    />
                    <span className="text-text-secondary text-sm">
                      10+ successful events
                    </span>
                  </div>
                  <div className="flex items-center">
                    <Icon
                      name="Award"
                      size={16}
                      className="text-success mr-2"
                    />
                    <span className="text-text-secondary text-sm">
                      2+ years in Ahmedabad & Beyond
                    </span>
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

export default BookingSection;
