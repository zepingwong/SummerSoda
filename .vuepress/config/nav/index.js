module.exports = {
  home: {
    location: 1,     // 在导航栏菜单中所占的位置，默认1
    text: '主页'      // 默认文案 “主页”
  },
  docs: {
    location: 2,     // 在导航栏菜单中所占的位置，默认2
    text: '文档',      // 默认文案 “文档”
    items: [{
      name: '主题开发笔记',
      description: '一个好看的笔记博客主题',
      link: '/docs/Theme/'
    }]
  },
  category: {
    location: 3,     // 在导航栏菜单中所占的位置，默认3
    text: '分类'      // 默认文案 “分类”
  },
  tag: {
    location: 4,     // 在导航栏菜单中所占的位置，默认4
    text: '标签'      // 默认文案 “标签”
  },
  timeline: {
    location: 5,     // 在导航栏菜单中所占的位置，默认5
    text: '时间轴'      // 默认文案 “时间轴”
  },
  tools: {
    text: '工具集',
    link: '/blogs/other/tools.md',
    icon: 'icon-tools'
  }
}
