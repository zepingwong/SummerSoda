const sidebar = require('../sidebar/')
const navConfig = require('../nav')
const recordConfig = require('../record')
const valineConfig = require('../valine')
const authorConfig = require('../author')
const pageConfig = require('../page')
module.exports = {
  logo: "/logo.svg",
  search: true,
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
