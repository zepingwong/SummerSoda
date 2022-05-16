const { resolve } = require('path')

module.exports = (options, context) => ({
  define () {
    const { modelStyle } = options
    return {
      MODEL_STYLE: modelStyle || {
        right: '90px',
        bottom: '-20px',
        opacity: '0.9'
      },
    }
  },
  name: 'plugin-kan-ban-niang',
  enhanceAppFiles: resolve(__dirname, './enhanceAppFile.js'),
  globalUIComponents: 'KanBanNiang'
})
