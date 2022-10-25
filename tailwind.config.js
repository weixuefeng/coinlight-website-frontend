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
        grayea: '#EAEAEA',
        gray999: '#999999',
        gray333: '#333333',
        gray3d: '#3D3D3D',
        gray666: '#666666',
        graydd: '#DDDDDD',
        grayd8: '#D8D8D8',
        grayee: '#EEEEEE',
        bluee6: '#E6EDFD',
        blue31: '#3165F4',
      },
      backgroundImage: {
        'icon-time': "url('/assets/image/icon_time.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}
