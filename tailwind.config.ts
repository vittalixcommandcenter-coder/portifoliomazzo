import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Base escura sofisticada (Obsidian)
        obsidian: {
          950: "#0a0a0b",
          900: "#0e0f11",
          800: "#16181c",
          700: "#1d2024",
          600: "#272b30",
        },
        // Off-white / cinzas de leitura
        ash: {
          100: "#f4f4f3",
          200: "#e4e4e2",
          300: "#c7c8c4",
          400: "#9a9c97",
          500: "#6f716c",
        },
        // Acento Âmbar
        amber: {
          DEFAULT: "#f59e0b",
          soft: "#fbbf24",
          deep: "#d97706",
        },
        // Acento Esmeralda
        emerald: {
          DEFAULT: "#10b981",
          soft: "#34d399",
          deep: "#059669",
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        "glow-amber": "0 0 40px -8px rgba(245, 158, 11, 0.45)",
        "glow-emerald": "0 0 40px -8px rgba(16, 185, 129, 0.45)",
      },
      keyframes: {
        "gradient-pan": {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
      },
      animation: {
        "gradient-pan": "gradient-pan 8s ease infinite",
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
