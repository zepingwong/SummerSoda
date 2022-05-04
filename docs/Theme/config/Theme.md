---
title: 主题配置
date: 2020-05-29
sidebar: 'auto'
---
## ***主题类型：type***
配置主题的类型，可以为`bolg`（博客）或`docs`（文档），默认配置为`docs`。
```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    type: 'blog'
  }
}
```

## ***网站logo：logo***
导航栏左侧可以显示网站logo, 需要以下配置。
```javascript
// .vuepress/config.js
module.exports = {
  themeConfig: {
    logo: '/head.png'
  }
}
```
> `themeConfig.logo`可以为本地图片，也可以为网络图片。


## ***searchConfig***

## ***sidebar***

## ***导航栏配置：navConfig***
博客导航栏（Navbar）按钮配置，包括主题内置菜单按钮和自定义菜单按钮。
### ***显示配置***
`$themeConfig.navConfig`中添加`isShow`，可以控制全局是否显示导航栏。
```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    navConfig: {
        isShow: false           // 默认为 true
    }
  }
}
```

### ***内置菜单***
`home`、`docs`、`category`、`tag`、`timeline`为五个内置配置项，如果不设置这些菜单，默认导航栏将不显示这些内容。内置菜单配置项如下：
```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    // 博客Navbar的home、docs、category、tag、timeline配置
    navConfig: {
      home: {
        location: 1,            // 在导航栏菜单中所占的位置，默认1
        text: 'Home',           // 默认显示 “主页”
        icon: 'icon-home'       // 默认显示“icon-home”
      },
      docs: {
        location: 2,            // 在导航栏菜单中所占的位置，默认2
        text: 'Docs',           // 默认显示 “文档”
        icon: 'icon-docs'       // 默认显示“icon-docs”
      },
      category: {
        location: 3,            // 在导航栏菜单中所占的位置，默认3
        text: 'Category',       // 默认显示 “分类”
        icon: 'icon-category'   // 默认显示“icon-category”
      },
      tag: {
        location: 4,            // 在导航栏菜单中所占的位置，默认4
        text: 'Tag',            // 默认显示 “标签”
        icon: 'icon-tag',       // 默认显示“icon-tag”
      },
      timeline: {
        location: 5,            // 在导航栏菜单中所占的位置，默认5
        text: 'Timeline',       // 默认显示 “时间轴”
        icon: 'icon-timeline'   // 默认显示“icon-timeline”
      }
    }
  }
}
```
- location 该菜单在导航栏中所占的位置，主题默认菜单顺序为`home`、`docs`、`category`、`tag`、`timeline`
- text 该菜单在导航栏中显示的名称
- icon 该菜单在导航栏中显示的图标
### ***自定义菜单***
导航栏自定义菜单按钮一般配置内容如下：
```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    navConfig: {
      custom: {
        text: 'Custom Menu',
        link: '/custom path/',
        icon: 'custom icon',
        location: 'custom location'
      },
      // ...
    }
  }
}
```
还有一种带有下拉框的导航菜单，配置方法如下：
```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    navConfig: {
      custom: {
        text: 'Custom Menu',
        items: [
          {
            text: 'Custom Text',
            link: '/custom path/'
          }, 
          // ...
        ],
        icon: 'custom icon',
        location: 'custom location'
      },
      // ...
    }
  }
}
```
- text 该菜单在导航栏中显示的名称
- icon 该菜单在导航栏中显示的图标
- location 默认自定义菜单位置在主题内置菜单之后，可以通过`location`修改该菜单在导航栏中的位置
- link 菜单按钮跳转路径
- items 带有下拉菜单的导航按钮的子菜单，每个`item`都要包括`text`和`link`两个参数
## ***作者信息：authorConfig***
```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    authorConfig: {
      // 作者姓名
      author: 'Author Name',
      // 作者头像
      authorAvatar: '/avatar.png',
      // 信息栏展示社交信息
      socialLinks: [
        { icon: 'reco-github', link: 'https://github.com/recoluan' }
      ],
      // 信息栏友情链接
      friendLink: [{
        "title": "午后南杂",
        "desc": "Enjoy when you can, and endure when you must.",
        "email": "1156743527@qq.com",
        "link": "https://www.recoluan.com"
      }]
    }
  }
}
```
### ***author***
### ***authorAvatar***
### ***socialLink***
- icon 社交信息图标，可以是本地图标，也可以是网络图标
- link 社交链接地址

### ***friendLink***
- title 友链标题
- desc 友链描述
- logo 友链 LOGO（本地图片或网络图片）
- email 如果没有设置 logo，将通过 Email获取到的 Gravatar 头像来设置 LOGO
- link 友链地址

## ***备案信息：recordConfig***

```yaml
module.exports = {
  themeConfig: {
    recordConfig: {
      // 备案信息
      record: 'ICP 备案文案',
      recordLink: 'ICP 备案指向链接',
      cyberSecurityRecord: '公安部备案文案',
      cyberSecurityLink: '公安部备案指向链接',
      // 项目开始时间，只填写年份
      startYear: '2017'
  }
}
```

