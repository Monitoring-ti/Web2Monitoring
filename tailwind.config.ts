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
          DEFAULT: "#0A2540",
          50: "#E8F0FA",
          100: "#C5D8F4",
          200: "#8EB4E9",
          300: "#5890DE",
          400: "#2B6DD3",
          500: "#1A56CC",
          600: "#1244B0",
          700: "#0D3390",
          800: "#0A2540",
          900: "#061829",
        },
        accent: {
          DEFAULT: "#E85D26",
          50: "#FEF2EC",
          100: "#FDE0CE",
          200: "#FBBF9D",
          300: "#F89E6C",
          400: "#F47D3B",
          500: "#E85D26",
          600: "#C94B18",
          700: "#A83C12",
          800: "#872F0D",
          900: "#662208",
        },
        navy: "#0A2540",
        surface: "#F8FAFC",
        muted: "#64748B",
        border: "#E2E8F0",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-sora)", "Sora", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "hero-pattern":
          "linear-gradient(135deg, #0A2540 0%, #0D3A6E 50%, #0A2540 100%)",
      },
      animation: {
        "fade-in": "fadeIn 0.6s ease-out forwards",
        "slide-up": "slideUp 0.7s ease-out forwards",
        "slide-right": "slideRight 0.6s ease-out forwards",
        "count-up": "countUp 2s ease-out forwards",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideRight: {
          "0%": { opacity: "0", transform: "translateX(-20px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
      },
      boxShadow: {
        card: "0 4px 20px rgba(10, 37, 64, 0.08)",
        "card-hover": "0 8px 32px rgba(10, 37, 64, 0.14)",
        glow: "0 0 40px rgba(232, 93, 38, 0.2)",
      },
    },
  },
  plugins: [],
};
export default config;
