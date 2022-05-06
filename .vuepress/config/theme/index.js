const sidebar = require('../sidebar/')
const navConfig = require('../nav')
const recordConfig = require('../record')
const valineConfig = require('../valine')
const authorConfig = require('../author')
const pageConfig = require('../page')
const modeConfig = require('../mode')
module.exports = {
  type: 'blog',
  logo: "/logo.svg",
  locales: {
    '/': {
      customLocales: {
        homeBlog: {}
      },
      navConfig: navConfig,
    },
    '/en/': {
      customLocales: {
        homeBlog: {}
      },
      navConfig: navConfig,
    }
  },
  search: true,
  // 自动形成侧边导航
  subSidebar: 'auto',
  searchMaxSuggestions: 10,
  sidebar: sidebar,
  // modeConfig
  modeConfig: modeConfig,
  // pageConfig
  pageConfig: pageConfig,
  // authorConfig
  authorConfig: authorConfig,
  // recordConfig：备案信息配置
  recordConfig: recordConfig,
  // valine
  valineConfig: valineConfig
}
