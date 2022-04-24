module.exports = {
  content:  ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      'sch-1': '400px',
      'sch-2': '1440px',
      'sch-3': '1440px',
      'sch-4': '1440px',
      'sch-5': '1440px',
      'sch-6': '1440px',
      'sch-7': '1440px',
    },
    colors: {
      'blue': '#1fb6ff',
      'purple': '#7e5bef',
      'pink': '#ff49db',
      'orange': '#ff7849',
      'green': 'rgb(27, 102, 15, 0.7)',
      'todayGreen': '#228B22',
      'yellow': '#ffc82c',
      'gray-dark': '#273444',
      'red': '#DA0000',
      'gray-light': '#d3dce6',
      'white':"#FFFFFF",
      'black':"#000601",
      'clearBlack':"rgb(9, 0, 12, .8)",
      'clear':"transparent",
    },
    extend: {
      spacing: {
        '128': '32rem',
        '144': '36rem',
        '5': '5px',
        '7': '7px',
        '8': '8px',
        '9': '9px',
        '10': '10px',
        '20': '20px',
        '1k': '1000px',
        '600': '600px',
        '500': '500px',
        '400': '400px',
        '300': '300px',
        '220': '220px',
        '210': '210px',
        '200': '200px',
        '140': '140px',
        '120': '120px',
        '110': '110px',
        '100': '100px',
        '25': '25px',
        '35': '35px',
        '22': '22px',
        '60': '60px',
        '70': '70px',
        '80': '80px',
        '.01': '1%',
        '.02': '2%',
        '.05': '5%',
        '.1': '10%',
        '.25': '25%',
        '.30': '30%',
        '.35': '35%',
        '.40': '40%',
        '.45': '45%',
        '.5': '50%',
        '.55': '55%',
        '.6': '60%',
        '.65': '65%',
        '.7': '70%',
        '.75': '75%',
        '.8': '80%',
        '.85': '85%',
        '.9': '90%',
        '.95': '95%',
      },
      borderRadius: {
        '4xl': '2rem',
      }
    },
  },
  plugins: [],
}
