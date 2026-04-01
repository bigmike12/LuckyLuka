/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          gold: '#FDB927',
          'gold-light': '#FFE066',
          'gold-dark': '#D4961F',
          purple: {
            DEFAULT: '#552583',
            light: '#7B3FBE',
            dark: '#3D1A5E',
            deep: '#1E0D32',
          },
          bg: {
            DEFAULT: '#0A0608',
            card: '#110D14',
            elevated: '#1A1220',
          },
        },
        fontFamily: {
          display: ['Syncopate', 'sans-serif'],
          sans: ['DM Sans', 'sans-serif'],
          mono: ['JetBrains Mono', 'monospace'],
        },
        animation: {
          'float-up': 'floatUp 7s ease-in-out infinite',
          'float-down': 'floatDown 8s ease-in-out infinite 1s',
          'pulse-gold': 'pulseGold 3s ease-in-out infinite',
          'rotate-ring': 'rotateRing 8s linear infinite',
          'shimmer': 'shimmer 3s linear infinite',
          'fade-slide-up': 'fadeSlideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
          'bounce-subtle': 'bounce-subtle 2.5s ease-in-out infinite',
        },
        backgroundImage: {
          'gold-gradient': 'linear-gradient(135deg, #FDB927, #FFE066)',
          'purple-gradient': 'linear-gradient(135deg, #552583, #7B3FBE)',
          'hero-gradient': 'linear-gradient(135deg, rgba(85,37,131,0.6) 0%, rgba(10,6,8,0.2) 50%, rgba(253,185,39,0.15) 100%)',
        },
        boxShadow: {
          'gold': '0 4px 24px rgba(253,185,39,0.4)',
          'gold-lg': '0 8px 40px rgba(253,185,39,0.5)',
          'purple': '0 4px 24px rgba(85,37,131,0.4)',
          'glow-gold': '0 0 30px rgba(253,185,39,0.6)',
          'glow-purple': '0 0 30px rgba(85,37,131,0.6)',
        },
      },
    },
    plugins: [],
  };