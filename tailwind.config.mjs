/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          950: '#071426',
          900: '#0B1B33',
          800: '#0F2545',
          700: '#173158'
        },
        parchment: {
          50: '#FBF7EE',
          100: '#F7F0DE',
          200: '#EFE3C4'
        },
        gold: {
          50: '#FFF7E0',
          200: '#F7DFA1',
          400: '#E7C36C',
          600: '#C99C3A'
        }
      },
      fontFamily: {
        serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
        sans: ['ui-sans-serif', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Helvetica', 'Arial', '"Apple Color Emoji"', '"Segoe UI Emoji"']
      },
      boxShadow: {
        soft: '0 12px 30px rgba(7,20,38,0.12)',
        glow: '0 0 0 1px rgba(201,156,58,0.18), 0 12px 30px rgba(7,20,38,0.18)'
      },
      backgroundImage: {
        'navy-radial': 'radial-gradient(1200px circle at 20% 10%, rgba(231,195,108,0.16), transparent 55%), radial-gradient(1000px circle at 90% 25%, rgba(231,195,108,0.10), transparent 60%), linear-gradient(180deg, #071426 0%, #0B1B33 55%, #071426 100%)',
        'parchment': 'linear-gradient(180deg, rgba(251,247,238,1) 0%, rgba(247,240,222,1) 55%, rgba(239,227,196,1) 100%)'
      }
    }
  },
  plugins: []
};
