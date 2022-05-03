---
title: 语言配置
date: 2020-05-29
sidebar: 'auto'
---
## ***语言支持***
| 名称   | 语言代码                    |
|------|-------------------------|
| 简体中文 | `zh-CN`、`zh-SG`         |
| 繁体中文 | `zh-HK`、`zh-MO`、`zh-TW` |
| 日语	  | `ja-JP`                 |
| 韩语   | `ko-KR`                 |
| 英语   | `en-US`                 |

## ***单一语言配置***
### ***修改默认语言***
`vuepress` 的默认语言代码为 `en-US`，如果您需要改成简体中文，需要通过站点多语言配置来修改：
```javascript
// .vuepress/config.js

module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  }
}
```
### ***修改语言配置***
如果您觉得主题内置的术语不符合您的喜好，可以这样修改：
```javascript
// .vuepress/config.js
module.exports = {
  locales: {
    '/': {
      lang: 'zh-CN'
    }
  },
  themeConfig: {
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
        }
      }
    }
  }
}
```
## ***多语言配置***

