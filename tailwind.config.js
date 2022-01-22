module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        rust: '#a54a3bff',
        blackHue: '#000000bb',
        light: "#dde8efff",
        dark: "#0f1415ff"
      },
      width: {
        'video': '265px',
        'myFull': '1100px',
        '30': '30%'
      },
      maxWidth: {
        myFull: "1100px",
        swipe: '390px'
      },
      minWidth: {
        myFull: "1100px"
      },
      fontSize: {
        '2xs': '.6rem'
      },
      screens: {
        'myFull': "1100px",
        'stats': '978px',
        'stats2': '889px',
        'mv': "833px",
        'phone': '400px'
      }
    },
  },
  plugins: [],
}
