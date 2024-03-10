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
        'cassino-background': "url('./src/assets/background.png')",
      },
      animation: {
        'infinite-scroll-slow': 'infinite-scroll 1s linear infinite',
        'infinite-scroll-fast': 'infinite-scroll .8s linear infinite',
        'infinite-scroll-faster': 'infinite-scroll .6s linear infinite',
        'infinite-scroll-y-slow': 'infinite-scroll-y 1s linear infinite',
        'infinite-scroll-y-fast': 'infinite-scroll-y .8s linear infinite',
        'infinite-scroll-y-faster': 'infinite-scroll-y .6s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-1000%)' },
        },
        'infinite-scroll-y': {
          from: { transform: 'translateY(0)' },
          to: { transform: 'translateY(-1000%)' },
        }
      }
    },
  },
  plugins: [],
}

