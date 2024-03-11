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
        'infinite-scroll-fast': 'infinite-scroll .13s linear infinite',
        'infinite-scroll-y-fast': 'infinite-scroll-y .13s linear infinite',
      },
      keyframes: {
        'infinite-scroll': {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(-500%)' },
        },
        'infinite-scroll-y': {
          from: { transform: 'translateY(100%)' },
          to: { transform: 'translateY(-500%)' },
        },        
      }
    },
  },
  plugins: [],
}

