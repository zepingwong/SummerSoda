---
title: 看板娘
date: 2020-05-29
---


## Details

> Vuepress 看板娘插件

|使用位置|值|
|-|-|
|plugin name|@vuepress-reco/vuepress-plugin-kan-ban-niang|
|component name|KanBanNiang（自动出现在页面中，无需添加额外代码）|

## Buttons

|按钮|作用|默认提示语|
|-|-|-|
|home|回到博客主页|心里的花，我想要带你回家。|
|message|显示主人寄语|'欢迎来到 ' + 您的站点名称（$site.title）|
|theme|更换模型主题|好吧，希望你能喜欢我的其他小伙伴。|
|close|关闭看板娘|你知道我喜欢吃什么吗？痴痴地望着你。|
|info|跳转插件github|想知道关于我的更多信息吗？|

## ***Options***

> 以下为 `themeConfig.KanBanNiang` 的配置项

### ***Attributes***

|参数|说明|类型|可选值|
|-|-|-|-|-|
|theme|默认模型主题|Array|['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16']|-|
|isShowBtns|是否开启所有按钮|Boolean|true/false|
|messages|按钮提示语|Object|welcome,home,theme,close|
|messageStyle|自定义消息框样式|Object|right, bottom|
|modelStyle|自定义模型样式|Object|right, bottom, opacity|
|btnStyle|自定义按钮样式|Object|right, bottom}|
|width|模型宽度|Number|-|
|height|模型高度|Number|-|

### ***Config***

```javascript
// .vuepress/config.js

module.exports = {
  themeConfig: {
    theme: ['blackCat', 'whiteCat', 'haru1', 'haru2', 'haruto', 'koharu', 'izumi', 'shizuku', 'wanko', 'miku', 'z16'],
    isShowBtns: true,                                  // 默认为 true
    messages: {
      welcome: '欢迎来到'+$site.title,                  // '欢迎来到'+站点名称
      home: '心里的花,我想要带你回家',                     // 默认值
      theme: '好吧,希望你能喜欢我的其他小伙伴',              // 默认值
      close: '你知道我喜欢吃什么吗?痴痴地望着你'             // 默认值
    },
    messageStyle: {
      right: '68px',
      bottom: '190px'
    },
    modelStyle: {
      right: '90px',
      bottom: '-20px',
      opacity: '0.9'
    },
    btnStyle: {
      right: '90px',
      bottom: '40px'
    },
    width: 150,     // 模型宽度
    height: 220     // 模型高度
  }
}
```

## About

- 参考插件: [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/vuepress-plugin-cat
- 模型库： [@Qi](https://github.com/QiShaoXuan) https://github.com/QiShaoXuan/live2DModel
- 模型加载失败时会自动隐藏
- 加载静态资源速度不稳定
- 想使用本插件之外的其他模型可以将插件下载到本地引入更换模型url
