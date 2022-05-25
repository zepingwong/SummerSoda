const themeConfig = require('./config/theme')
const head = require('./config/head')
const plugins = require('./config/plugins')
module.exports = {
  head: head,
  title: '汽水味的夏天',
  base: '/SummerSoda/',
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },
  themeConfig: themeConfig,
  markdown: {
    'lineNumbers': true
  },
  plugins: plugins
}
