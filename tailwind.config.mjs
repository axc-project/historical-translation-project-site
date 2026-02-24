/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          900: "#071523",
          850: "#0a1b2c",
          800: "#0c2238",
          750: "#0f2a44"
        },
        gold: {
          500: "#d4af37",
          450: "#bfa14a"
        }
      },
      boxShadow: {
        soft: "0 18px 40px rgba(0,0,0,.35)",
        glow: "0 0 0 1px rgba(212,175,55,.15), 0 20px 60px rgba(0,0,0,.45)"
      },
      borderRadius: {
        xl2: "20px"
      },
      fontFamily: {
        serif: ["Georgia", "ui-serif", "serif"],
        sans: ["ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Helvetica", "Arial"]
      }
    }
  },
  plugins: []
};
