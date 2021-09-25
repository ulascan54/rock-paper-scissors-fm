module.exports = {
  mode:'jit',
  purge: ['./content/**/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors:{
        'Dark-Text': 'hsl(229, 25%, 31%)',
        'Score-Text': 'hsl(229, 64%, 46%)',
        'Header-Outline': 'hsl(217, 16%, 45%)'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
