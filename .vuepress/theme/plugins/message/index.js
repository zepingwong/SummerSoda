const { path } = require('@vuepress/shared-utils')

module.exports = (options = {}) => ({
  name: 'plugin-message',
  define() {
    const {
      time = 3000,
      content = '消息内容',
      title = 'Tips'
    } = options
    return {
      time,
      content,
      title
    }
  },
  enhanceAppFiles: [path.resolve(__dirname, 'enhanceAppFile.js')],
})
