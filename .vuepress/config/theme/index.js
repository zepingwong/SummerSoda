const sidebar = require('../sidebar/')
const navConfig = require('../nav')
const recordConfig = require('../record')
const valineConfig = require('../valine')
const authorConfig = require('../author')
const pageConfig = require('../page')
module.exports = {
  type: 'blog',
  logo: "/logo.svg",
  locales: {
    '/': {
      navConfig: navConfig,
    }
  },
  localeConfig: {
    'zh-CN': {
      homeBlog: {
        article: '美文',      // 默认 文章
        tag: '标识',          // 默认 标签
        category: '类别',     // 默认 分类
        friendLink: '友链'    // 默认 友情链接
      }
    },
    'en-US': {
      homeBlog: {
        article: 'Articles',    // 默认 Articles
        tag: 'Tags',            // 默认 Tags
        friendLink: 'Friends'   // 默认 Friend Links
      }
    }
  },
  search: true,
  // 自动形成侧边导航
  subSidebar: 'auto',
  searchMaxSuggestions: 10,
  sidebar: sidebar,
  // pageConfig
  pageConfig: pageConfig,
  // authorConfig
  authorConfig: authorConfig,
  // recordConfig：备案信息配置
  recordConfig: recordConfig,
  // valine
  valineConfig: valineConfig
}
