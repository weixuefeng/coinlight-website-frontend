module.exports = {
  content: [
    // './public/**/*.html',
    './src/**/*.{js,jsx,ts,tsx,css,scss}',
  ],
  darkMode: 'class', // 'media' is the default, change to 'class' if you want to use dark mode in with class names
  theme: {
    extend: {
      colors: {
        whitefb: '#FBFBFB',
        whitef1: '#F1F1F1',
        whitef8: '#F8F8F8',
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
