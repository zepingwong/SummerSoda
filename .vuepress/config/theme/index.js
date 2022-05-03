const sidebar = require('../sidebar/')
const navConfig = require('../nav')
const recordConfig = require('../record')
const valineConfig = require('../valine')
const authorConfig = require('../author')
const pageConfig = require('../page')
module.exports = {
  logo: "/logo.svg",
  search: true,
  locales: {
    '/': {
      customLocales: {
        homeBlog: {
          article: '美文',      // 默认 文章
          tag: '标识',          // 默认 标签
          category: '类别',     // 默认 分类
          friendLink: '友链'    // 默认 友情链接
        },
        pagation: {
          prev: '上一页',
          next: '下一页',
          go: '前往',
          jump: '跳转至'
        }
      },
    }
  },
  // 自动形成侧边导航
  subSidebar: 'auto',
  searchMaxSuggestions: 10,
  sidebar: sidebar,
  // pageConfig
  pageConfig: pageConfig,
  // authorConfig
  authorConfig: authorConfig,
  // Navbar: home、categories、tag、timeline
  navConfig: navConfig,
  // recordConfig：备案信息配置
  recordConfig: recordConfig,
  // valine
  valineConfig: valineConfig
}
