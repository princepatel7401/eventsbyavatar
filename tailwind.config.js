/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        // Primary Brand Color
        primary: "#3a7122",
        "primary-50": "#edf6ec",
        "primary-100": "#d4e9cd",
        "primary-200": "#aacd9f",
        "primary-500": "#3a7122", // main brand
        "primary-600": "#335f1d", // hover/darker
        "primary-800": "#254516",
        "primary-900": "#1a3110",

        // Secondary Brand Color
        secondary: "#f2f1df",
        "secondary-100": "#f9f9f2",
        "secondary-200": "#ecebce",
        "secondary-500": "#f2f1df",
        "secondary-600": "#deddbc",

        // Accent (Optional CTA or Alert)
        accent: "#F59E0B", // amber-500
        "accent-100": "#FEF3C7",
        "accent-200": "#FDE68A",
        "accent-500": "#F59E0B",
        "accent-600": "#D97706",
        "accent-700": "#B45309",

        // Background and Surface
        background: "#FFFFFF",
        surface: "#F8FAFC",
        "surface-100": "#F1F5F9",
        "surface-200": "#E2E8F0",

        // Text Colors
        "text-primary": "#1F2937",
        "text-secondary": "#6B7280",
        "text-muted": "#9CA3AF",

        // Status Colors
        success: "#10B981",
        "success-100": "#D1FAE5",
        "success-600": "#059669",

        warning: "#F59E0B",
        "warning-100": "#FEF3C7",
        "warning-600": "#D97706",

        error: "#EF4444",
        "error-100": "#FEE2E2",
        "error-600": "#DC2626",

        // Borders
        border: "#E5E7EB",
        "border-focus": "#F59E0B",
      },

      fontFamily: {
        display: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"],
        sans: ["Inter", "sans-serif"],
        serif: ["Playfair Display", "serif"],
      },

      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
      },

      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },

      boxShadow: {
        custom: "0 4px 6px -1px rgba(0, 0, 0, 0.1)",
        "custom-lg": "0 10px 15px -3px rgba(0, 0, 0, 0.1)",
        "custom-xl": "0 20px 25px -5px rgba(0, 0, 0, 0.1)",
      },

      animation: {
        "fade-in": "fadeIn 300ms ease-in-out",
        "slide-up": "slideUp 300ms ease-in-out",
        "slide-down": "slideDown 300ms ease-in-out",
        "bounce-gentle": "bounceGentle 2s infinite",
      },

      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        slideDown: {
          "0%": { transform: "translateY(-20px)", opacity: "0" },
          "100%": { transform: "translateY(0)", opacity: "1" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },

      transitionDuration: {
        150: "150ms",
        200: "200ms",
        250: "250ms",
        350: "350ms",
      },

      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
        200: "200",
        300: "300",
      },
    },
  },

  plugins: [require("@tailwindcss/forms"), require("@tailwindcss/typography")],
};
