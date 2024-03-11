/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.tsx",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif']
      },
      backgroundImage: {
        'cassino-background': "url('./public/background.png')",
      },
      animation: {
        'infinite-scroll-slow': 'infinite-scroll-mi 1s linear infinite',
        'infinite-scroll-fast': 'infinite-scroll .8s linear infinite',
        'infinite-scroll-faster': 'infinite-scroll-mi .6s linear infinite',
        'infinite-scroll-y-slow': 'infinite-scroll-y-mi 1s linear infinite',
        'infinite-scroll-y-fast': 'infinite-scroll-y .8s linear infinite',
        'infinite-scroll-y-faster': 'infinite-scroll-y-mi .6s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(1000%)' },
        },
        'infinite-scroll-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(1000%)' },
        },
        'infinite-scroll-mi': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1000%)' },
        },
        'infinite-scroll-y-mi': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-1000%)' },
        }
      }
    },
  },
  plugins: [],
}

