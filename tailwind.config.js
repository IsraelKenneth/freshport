/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sanse: ['Roboto', 'sans-serif'],
      serif: ['Domine', 'serif'],
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#131424',
        secondary: "#301ABE",
        tertiary: "#151030",
        "white-100": "#f3f3f3",
        accent: '#F13024',
      },
      backgroundImage: {
        explosion: 'url("/bg-explosion.png")',
        circles: 'url("/bg-circles.png")',
        circleStar: 'url("/circle-star.svg")',
        site: 'url("/site-bg.svg")',
        astronaut: "url('/assets/banner-bg.png')",
        'gradient-dark': 'linear-gradient(to bottom, #0A0E14, #1C2533)',
        'gradient-deep-purple': 'linear-gradient(to bottom, #120136, #2D0653)',


        'gradient-soft': 'linear-gradient(to bottom, #FFF3E0, #FFCC80)',
        'gradient-daylight': 'linear-gradient(to bottom, #FAFAFA, #E0E0E0)',
        'gradient-elegant': 'linear-gradient(to bottom,  #E6F7E9, #9CE2C9)',
        'gradient-meadow': 'linear-gradient(to bottom, #FFF3E6, #FFD3B6)',
        'gradient-sunny': 'linear-gradient(to bottom, #EAF2FF, #CDDDEC)',


      },
      animation: {
        'spin-slow': 'spin 6s linear infinite',
      },
      fontFamily: {
        poppins: [`var(--font-poppins)`, 'sans-serif'],
        sora: [`var(--font-sora)`, 'sans-serif'],
      },
    },
  },
  container: {
    padding: {
      DEFAULT: '15px',
    },
  },
  plugins: [require('tailwind-scrollbar')],
  
};
