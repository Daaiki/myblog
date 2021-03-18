module.exports = {
  future: {
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true,
  },
  purge: [],
  theme: {
    extend: {
      colors: {
        'pale-green': '#d7e9c3',
        'pale-gray': '#969383',
        'hover-gray': '#444444',
        'pale-white': '#fafafa',
        'pale-pink': '#f2edd9',
      },
    },
    screens: {
      xs: '475px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1280px',
    },
  },
  variants: {},
  plugins: [],
}
