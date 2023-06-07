export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    fontFamily: {
      Inter: ['Inter'],
    },
    extend: {
      gradientColorStops: {
        'gradient-start': '#fff6e6',
        'gradient-end': 'rgba(248, 237, 216, 0)',
      },
      borderRadius: {
        'gradient-account': '0px 0px 32px 32px',
      },
    }
  },
  plugins: [],
}