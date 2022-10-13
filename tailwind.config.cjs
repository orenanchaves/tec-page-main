/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.tsx'],
  theme: {
    fontFamily: {
      sans: ['OkineSans', 'ui-sans-serif', 'system-ui']
    },
    extend: {
      backgroundImage: {
        delivery: "url('/assets/img-moto.png')",
        woman: "url('/assets/img-woman.png')",
        van: "url('/assets/img-van.png')",
        stock: "url('/assets/box.jpg')"
      },
      colors: {
        brand: {
          blue: '#051842',
          orange: '#ff8500',
          red: '#FF4E00',
          gray: '#4E4E4E',
          text: '#AFAFAF'
        }
      }
    }
  },
  plugins: [require('tailwind-scrollbar')]
}
