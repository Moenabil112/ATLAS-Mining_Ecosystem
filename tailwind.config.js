/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Deep graphite backgrounds
        graphite: {
          950: "#0b0d0f",
          900: "#101316",
          850: "#14181c",
          800: "#1a1f24",
          700: "#232a31",
          600: "#2f3942",
          500: "#3d4954",
        },
        // Copper accent lines
        copper: {
          50: "#fbf1e7",
          100: "#f1d9c0",
          200: "#e3b489",
          300: "#d49356",
          400: "#c47b38",
          500: "#b87333",
          600: "#9c5e28",
          700: "#7c4a20",
        },
        // Dark mineral green highlights
        mineral: {
          50: "#e7f0ec",
          200: "#9bc1b3",
          400: "#4f8a76",
          500: "#3a6b5a",
          600: "#2f5d50",
          700: "#244a40",
          800: "#1b372f",
        },
        // Warm sand text accents
        sand: {
          50: "#f6efe2",
          100: "#ece0cb",
          200: "#dcc8a4",
          300: "#cbb084",
          400: "#b89a6a",
        },
      },
      fontFamily: {
        sans: [
          "Alexandria",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        panel: "0 1px 2px rgba(0,0,0,0.4), 0 8px 24px rgba(0,0,0,0.35)",
        copper: "0 0 0 1px rgba(184,115,51,0.35)",
      },
      backgroundImage: {
        "copper-line":
          "linear-gradient(90deg, transparent, rgba(184,115,51,0.55), transparent)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0", transform: "translateY(6px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.4s ease-out both",
      },
    },
  },
  plugins: [],
};
