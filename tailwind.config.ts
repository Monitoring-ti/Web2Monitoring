import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#332A83",
          50: "#E9E4F7",
          100: "#DCE0F2",
          200: "#C1CBE6",
          300: "#A5B2D9",
          400: "#8899CD",
          500: "#6B82C0",
          600: "#4E5F9D",
          700: "#3A4A7B",
          800: "#2B375C",
          900: "#1A1B2E",
        },
        accent: {
          DEFAULT: "#F09321",
          50: "#FEF1DD",
          100: "#FBD9A6",
          200: "#F5C279",
          300: "#F09A4B",
          400: "#E8872C",
          500: "#F09321",
          600: "#C94B18",
          700: "#A83C12",
          800: "#872F0D",
          900: "#662208",
        },
        navy: "#1A1B2E",
        surface: "#F8FAFC",
        muted: "#5B6070",
        border: "#E2E8F0",
        white: "#FFFFFF",
        celeste: "#36A9DF",
        lavanda: "#97AFD1",
        "fondo-claro": "#EEF0F8",
        tinta: "#1A1B2E",
        "gris-pizarra": "#5B6070",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "Open Sans", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Montserrat", "Nunito Sans", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        hero: "linear-gradient(135deg, #06142B 0%, #332A83 45%, #36A9DF 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.7s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
        "stagger": "stagger 0.5s ease-out both",
      },
      keyframes: {
        fadeIn: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        slideUp: { "0%": { opacity: "0", transform: "translateY(24px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
        slideRight: { "0%": { opacity: "0", transform: "translateX(-16px)" }, "100%": { opacity: "1", transform: "translateX(0)" } },
        countUp: { "0%": { opacity: "0" }, "100%": { opacity: "1" } },
        stagger: { "0%": { opacity: "0", transform: "translateY(12px)" }, "100%": { opacity: "1", transform: "translateY(0)" } },
      },
      boxShadow: {
        card: "0 4px 20px rgba(51, 42, 131, 0.08)",
        "card-hover": "0 12px 40px rgba(51, 42, 131, 0.16)",
        glow: "0 0 40px rgba(240, 147, 33, 0.25)",
        "glow-accent": "0 0 30px rgba(240, 147, 33, 0.2)",
        soft: "0 2px 12px rgba(51, 42, 131, 0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
