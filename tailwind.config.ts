import type { Config } from "tailwindcss";

/* Cores baseadas em CSS variables -> permitem tema claro/escuro
   trocando as variáveis em :root e .light. Use com /opacity normalmente. */
const withVar = (v: string) => `rgb(var(${v}) / <alpha-value>)`;

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Superfícies (fundo, cartões)
        graphite: {
          950: withVar("--c-bg"),
          900: withVar("--c-surface"),
          850: withVar("--c-surface-2"),
          800: withVar("--c-surface-3"),
          700: withVar("--c-surface-4"),
          600: withVar("--c-surface-5"),
          500: withVar("--c-surface-6"),
        },
        // Texto (do mais forte ao mais fraco)
        platinum: {
          50: withVar("--c-text-0"),
          100: withVar("--c-text-1"),
          200: withVar("--c-text-2"),
          300: withVar("--c-text-3"),
          400: withVar("--c-text-4"),
          500: withVar("--c-text-5"),
          600: withVar("--c-text-6"),
        },
        ice: withVar("--c-ice"),
        // Acento cobre (igual nos dois temas, com leve ajuste de tom)
        copper: {
          DEFAULT: withVar("--c-copper"),
          soft: withVar("--c-copper-soft"),
          deep: withVar("--c-copper-deep"),
        },
      },
      fontFamily: {
        display: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      letterSpacing: {
        tightest: "-0.045em",
      },
      boxShadow: {
        soft: "0 1px 0 0 rgba(255,255,255,0.04) inset, 0 20px 50px -20px rgba(0,0,0,0.7)",
        lift: "0 30px 80px -30px rgba(0,0,0,0.8)",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
      animation: {
        float: "float 7s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
