/** @type {import("tailwindcss").Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "10px",
        sm: "10px",
        md: "15px",
        lg: "15px",
        xl: "0",
        "2xl": "10px",
      },
      screens: {
        DEFAULT: "100%",
        sm: "100%",
        md: "100%",
        lg: "100%",
        xl: "100%",
        "2xl": "1200px",
      },
    },
    extend: {
      colors: {
        "mm-main": "#0787EA",
        "mm-main-hover": "#2DA3FF",
        "mm-main-active": "#0D78CB",
        "mm-secondary": "#24A0FF",
        "mm-secondary-active": "#47D3FF",
        "mm-primaryText": "#333C49",
        "mm-milk": "#F9F9F9",
        "mm-cement": "#F5F5F5",
        "mm-grass": "#4FC98E4D",
        "mm-leaf": "#4FC98E",
        "mm-attention": "#FF2D2D",
        "mm-overlay": "rgba(51, 60, 73, 0.3)",
      },
      fontSize: {
        "mm-title-two": "42px",
      },
      boxShadow: {
        benefitsMainPage: "1px 1px 8px 8px rgba(230, 230, 230, .4)",
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
