const themeConfig = require('./config/theme')
const head = require('./config/head')
const plugins = require('./config/plugins')
module.exports = {
  title: '汽水味的夏天',
  head: head,
  themeConfig: themeConfig,
  markdown: {
    "lineNumbers": true
  },
  plugins: plugins
}
