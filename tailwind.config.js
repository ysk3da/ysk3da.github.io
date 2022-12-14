/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    colors: {
      transparent: 'transparent',
      black: '#0A0904',
      white: '#fff',
      yellow: 'FCF16E',
      gray: {
        100: '#f7fafc',
        // ...
        900: '#1a202c',
      },
    },
    // spacing: {
    //   0: '0',
    //   0.5: '0.125rem',
    //   1: '0.25rem',
    // },
    borderRadius: {
      'none': '0',
      'sm': '.125rem',
      DEFAULT: '.25rem',
      'lg': '.5rem',
      'full': '9999px',
    },
    extend: {
      fontFamily: {
        zendots: ['var(--font-zendots)'],
        bizudg: ['var(--font-bizudg)'],
      },
      animation: {
        "tracking-in-expand": "tracking-in-expand 0.7s cubic-bezier(0.215, 0.610, 0.355, 1.000)   both"
      },
      keyframes: {
          "tracking-in-expand": {
              "0%": {
                  "letter-spacing": "-.5em",
                  opacity: "0"
              },
              "40%": {
                  opacity: ".6"
              },
              to: {
                  opacity: "1"
              }
          }
      }
    },
  },
  plugins: [
    // Official plugins
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
}
