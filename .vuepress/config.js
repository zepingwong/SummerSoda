const themeConfig = require('./config/theme')
const head = require('./config/head')
const plugins = require('./config/plugins')
module.exports = {
  head: head,
  port: 8088,
  base: '/SummerSoda/',
  title: '汽水味的夏天',
  locales: {
    '/': {
      lang: 'zh-CN'
    },
    '/en/': {
      lang: 'en-US'
    }
  },
  // dest: '/usr/local/var/www/SummerSoda',
  themeConfig: themeConfig,
  markdown: {
    'lineNumbers': false,
    extendMarkdown: (md) => {
      md.use(require('markdown-it-katex'))
    }
  },
  plugins: plugins
}
