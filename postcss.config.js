module.exports = (ctx) => ({
  map: { inline: true },
  plugins: {
    'autoprefixer': {},
    'postcss-import': { root: ctx.file.dirname },
    'postcss-url': {
      url: 'copy',
      useHash: true,
      assetsPath: 'assets'
    },
    'postcss-browser-reporter': {},
    'postcss-reporter': {}
  }
})
