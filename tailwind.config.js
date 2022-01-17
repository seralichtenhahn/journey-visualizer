module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        serif: ['Arvo', 'serif'],
        sans: ['DM Sans', 'sans-serif'],
      },
      colors: {
        primary: {
          default: '#98EBD2',
          200: '#D6F7ED',
          300: '#C1F3E4',
          400: '#ADEFDB',
          500: '#98EBD2',
          600: '#89D4BD',
          700: '#7ABCA8',
        },
        gray: {
          default: '#9D9D9F',
          100: '#FDFCFC',
          200: '#EBEAEA',
          300: '#D1D1D2',
          400: '#BABBBC',
          500: '#9D9D9F',
          600: '#717171',
          700: '#48494C',
          800: '#1a1b1f',
          900: '#000000',
        },
        icons: '#696969',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
