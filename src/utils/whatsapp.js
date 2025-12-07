// WhatsApp utility function
const WHATSAPP_NUMBER = "9328822686"; // Your WhatsApp number

/**
 * Opens WhatsApp with a pre-filled message
 * @param {string} message - The message to send
 */
export const openWhatsApp = (message = "Hi! I would like to know more about Avatar Events.") => {
  const encodedMessage = encodeURIComponent(message);
  window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodedMessage}`, "_blank");
};

/**
 * Pre-defined messages for different actions
 */
export const WhatsAppMessages = {
  consultation: "Hi! I would like to book a free consultation for my event.",
  quote: (eventType = "event") => `Hi! I would like to get a quote for ${eventType}.`,
  contact: "Hi! I would like to contact Avatar Events for more information.",
  gallery: "Hi! I saw your gallery and would like to know more about similar events.",
  chat: "Hi! I have some questions about your event planning services.",
  scheduleCall: "Hi! I would like to schedule a call to discuss my event requirements.",
  emailQuestions: "Hi! I have some questions about your event planning services.",
};

