export default {
  content: ["./src/**/*.{astro,html,js,jsx,ts,tsx,md,mdx}"],
  theme: {
    extend: {
      colors: {
        navy: "#0B1D33",
        gold: "#C7A44A",
        parchment: "#F7F4EE",
        ink: "#101215",
        muted: "#4B5563",
        line: "#D6D3CE",
        card: "#FFFFFF",
      },
      fontFamily: {
        serif: ['"Fraunces"', "ui-serif", "Georgia", "serif"],
        sans: ['"Inter"', "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "Arial"],
      },
      boxShadow: {
        soft: "0 12px 40px rgba(11,29,51,0.10)",
        glow: "0 0 0 1px rgba(199,164,74,0.25), 0 18px 50px rgba(11,29,51,0.18)",
      },
      borderRadius: { xl2: "1.25rem" },
    },
  },
  plugins: [],
};
