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
        // Base grafite profunda (quase-preto, levemente fria)
        graphite: {
          950: "#08090a",
          900: "#0c0d0f",
          850: "#101113",
          800: "#15171a",
          700: "#1c1f23",
          600: "#26292e",
          500: "#34383e",
        },
        // Texto / superfícies em platina (off-white frio -> prata)
        platinum: {
          50: "#f6f7f8",
          100: "#eceef0",
          200: "#d7dadd",
          300: "#b3b8bd",
          400: "#8a9095",
          500: "#5f656b",
          600: "#41464b",
        },
        // Acento único: branco-gelo (luz). Usado com extrema parcimônia.
        ice: "#f5f5f7",
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        // Sombras suaves, à la Apple (profundidade sem cor)
        soft: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -20px rgba(0,0,0,0.7)",
        lift: "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        "fade-in": "fade-in 1s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
