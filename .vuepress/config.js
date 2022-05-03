const themeConfig = require('./config/theme')
const head = require('./config/head')
const plugins = require('./config/plugins')
module.exports = {
  head: head,
  locales: {
    '/': {
      lang: 'zh-CN',
      title: '汽水味的夏天'
    },
    '/en/': {
      lang: 'en-US',
      title: 'Summer Soda'
    }
  },
  themeConfig: themeConfig,
  markdown: {
    "lineNumbers": true
  },
  plugins: plugins
}
