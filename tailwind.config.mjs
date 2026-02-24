/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "#0b1624",
        navy: "#0b1a2a",
        parchment: "#f6f0e6",
        parchment2: "#efe6d7",
        gold: "#c7a45b",
        gold2: "#e0c987",
        stone: "#e8e1d6",
      },
      fontFamily: {
        serif: ["\"EB Garamond\"", "Georgia", "serif"],
        display: ["\"Cinzel\"", "\"EB Garamond\"", "serif"],
        sans: ["system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial", "sans-serif"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(10,20,30,.16)",
        card: "0 10px 28px rgba(10,20,30,.14)",
      },
      backgroundImage: {
        grain: "radial-gradient(circle at 20% 0%, rgba(255,255,255,.07), transparent 45%), radial-gradient(circle at 80% 40%, rgba(255,255,255,.06), transparent 52%), radial-gradient(circle at 30% 90%, rgba(255,255,255,.05), transparent 48%)",
        parchment: "radial-gradient(circle at 10% 0%, rgba(255,255,255,.65), rgba(255,255,255,.0) 55%), radial-gradient(circle at 90% 30%, rgba(255,255,255,.55), rgba(255,255,255,.0) 50%), linear-gradient(180deg, #f8f2e8, #efe6d7)",
      }
    },
  },
  plugins: [],
};
