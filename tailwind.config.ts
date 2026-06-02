import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
    "./src/lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep coffee / forest green — the core brand color (logo background)
        forest: {
          50: "#EAF2EE",
          100: "#CFE0D8",
          200: "#9DBFB1",
          300: "#6B9D8B",
          400: "#3F7A66",
          500: "#1F6450",
          600: "#125141",
          700: "#0F4A3C",
          800: "#0B3B30",
          900: "#082C24",
          950: "#051E18",
          DEFAULT: "#0F4A3C",
        },
        // Warm gold — the "R" monogram & accents
        gold: {
          50: "#FBF6E9",
          100: "#F3E7C6",
          200: "#E7D199",
          300: "#D8BC77",
          400: "#C9A24B",
          500: "#B98B33",
          600: "#A87E2E",
          700: "#896626",
          800: "#6B4F1F",
          900: "#4E3A17",
          DEFAULT: "#C9A24B",
        },
        // Soft cream — page backgrounds
        cream: {
          50: "#FCFAF5",
          100: "#F8F2E8",
          200: "#F1E8D7",
          300: "#E8DAC2",
          400: "#DcC9A8",
          DEFAULT: "#F8F2E8",
        },
        // Elegant brown — body text on light, woody warmth
        coffee: {
          50: "#F3EEE8",
          100: "#E3D8CB",
          200: "#C7B09B",
          300: "#A8896B",
          400: "#8A6A4B",
          500: "#6E5238",
          600: "#574029",
          700: "#43301F",
          800: "#2F2115",
          900: "#1E140C",
          DEFAULT: "#43301F",
        },
        // Terracotta / copper — the decorative motif & spicy/heat accents
        copper: {
          DEFAULT: "#B5612F",
          light: "#C8794A",
          dark: "#8F4A22",
        },
        // Maroon — the script wordmark accent
        maroon: {
          DEFAULT: "#6E2230",
          dark: "#511620",
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "Cormorant Garamond", "Georgia", "serif"],
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        brand: "0.18em",
        wider2: "0.28em",
      },
      maxWidth: {
        container: "80rem",
      },
      boxShadow: {
        soft: "0 10px 40px -12px rgba(15, 74, 60, 0.18)",
        card: "0 14px 50px -18px rgba(30, 20, 12, 0.28)",
        glow: "0 0 0 1px rgba(201, 162, 75, 0.25)",
      },
      backgroundImage: {
        "hero-fade":
          "linear-gradient(to top, rgba(8,44,36,0.92) 0%, rgba(8,44,36,0.45) 45%, rgba(8,44,36,0.25) 100%)",
        "forest-veil":
          "linear-gradient(135deg, rgba(11,59,48,0.96) 0%, rgba(8,44,36,0.94) 100%)",
      },
      transitionTimingFunction: {
        brand: "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        "slow-zoom": {
          "0%": { transform: "scale(1)" },
          "100%": { transform: "scale(1.08)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
      animation: {
        "fade-in": "fade-in 0.8s ease-brand both",
        "slow-zoom": "slow-zoom 18s ease-out forwards",
        shimmer: "shimmer 2s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
