module.exports = {
  'zh': Object.assign({}, {
    '/docs/Theme/base/': [{
      title: '首页',
      path: '/docs/Theme/'
    }, {
      title: '基础',
      // path: '/docs/Theme/base/',
      collapsable: false,
      children: [
        'BlogAndDocs',
        'CategoryAndTag',
        'Navbar',
        'Sidebar',
        'Layouts',
        'Icon',
        'FrontMatter',
        'Markdown',
        'About'
      ]
    }, {
      title: '配置',
      path: '/docs/Theme/config/'
    }, {
      title: '插件',
      path: '/docs/Theme/plugins/'
    }, {
      title: '日志',
      path: '/docs/Theme/log/'
    }],
    '/docs/Theme/config/': [{
      title: '首页',
      path: '/docs/Theme/'
    }, {
      title: '基础',
      path: '/docs/Theme/base/',
    }, {
      title: '配置',
      // path: '/docs/Theme/config/',
      collapsable: false,
      children: [
        'Native',
        'Theme',
        'HomeBlog',
        'HomeDocs',
      ]
    }, {
      title: '插件',
      path: '/docs/Theme/plugins/'
    }, {
        title: '日志',
        path: '/docs/Theme/log/'
    }],
    '/docs/Theme/plugins/': [{
      title: '首页',
      path: '/docs/Theme/'
    }, {
      title: '基础',
      path: '/docs/Theme/base/',
    }, {
      title: '配置',
      path: '/docs/Theme/config/',
    }, {
      title: '插件',
      // path: '/docs/Theme/plugins/',
      collapsable: false,
      children: [
        'back-to-top',
        'pagination',
        'loading-page',
        'code',
        'extract-code',
        'comments'
      ]
    }, {
        title: '日志',
        path: '/docs/Theme/log/'
    }],
    '/docs/Theme/log/': [{
      title: '首页',
      path: '/docs/Theme/'
    }, {
      title: '基础',
      path: '/docs/Theme/base/',
    }, {
      title: '配置',
      path: '/docs/Theme/config/',
    }, {
      title: '插件',
      path: '/docs/Theme/plugins/'
    }, {
      title: '日志',
      path: '/docs/Theme/log/'
    }]
  })
}
