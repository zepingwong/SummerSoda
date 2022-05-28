---
title: 图标
date: 2020-05-29
---

## ***内置图标***

### ***使用方法***

引用图标时，需在图标名称前加上 `icon-`，如使用 `blog` 图标作为导航栏菜单按钮，需引用为 `icon-blog`。

### ***内置图标列表***

您可以使用主题的内置图标，所有内置的图标如下所示：

<ThemeDocs-IconList></ThemeDocs-IconList>

### ***本项目图标库***

```stylus
@font-face {
  font-family: 'iconfont';  /* project id 3372761 */
  src: url('');
  src: url('?#iefix') format('embedded-opentype'),
  url('//at.alicdn.com/t/font_3372761_ep41nmc9b8a.woff2') format('woff2'),
  url('//at.alicdn.com/t/font_3372761_ep41nmc9b8a.woff') format('woff'),
  url('//at.alicdn.com/t/font_3372761_ep41nmc9b8a.ttf') format('truetype'),
  url('//at.alicdn.com/t/font_3372761_ep41nmc9b8a.svg#iconfont') format('svg');
}
```

## ***外部图标***

### ***引入方法***

主题支持使用[iconfont-阿里巴巴矢量图标库](https://www.iconfont.cn/)引入图标。引入方法如下：

1. 将图标库中的图标下载到本地，并将其中的 `iconfont.css` 、 `iconfont.ttf` 、 `iconfont.woff` 和 `iconfont.woff2` 拷贝到 `.vuepress/public/fonts` 目录下。
2. `.vuepress` 目录下建立 `enhanceApp.js`， 并在该文件中引入第1步拷贝的 `iconfont.css` 文件。

```javascript
// .vuepress\enhanceApp.js

import './public/fonts/iconfont.css'
```

### ***目录结构***

引入外部图标的目录结构如下：

```
your project directory
├─ .vuepress
│  ├─ public
│  │  ├─ fonts
│  │  │  ├─ iconfont.css
│  │  │  ├─ iconfont.ttf
│  │  │  ├─ iconfont.woff
│  │  │  └─ iconfont.woff2
│  │  └─ ... 
│  ├─ ...
│  ├─ components
│  ├─ enhanceApp.js
│  └─ config.js
├─ ...
├─ README.md
└─ package.json
```

### ***注意***

使用 iconfont 图标时，需要注意图标的 `Unicode` 编码，`&#xff00;` 到 `&#xffff;` 已被内置图标占用，引用外置图标时要注意
