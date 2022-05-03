---
title: 博客首页配置
date: 2020-05-29
sidebar: 'auto'
---
![HomeBlog](https://img-blog.csdnimg.cn/86f28fe665fe44d5a3b414d2ba9d1ebf.png#pic_center)
## ***Front Matter 设置***
### ***指定主页类型***
首先，配置当前页`home`为`true`，然后设置此页类型为`HomeBlog`：
```yaml
---
home: true
type: HomeBlog
---
```

### ***heroText***
可以通过`heroText`配置当前页页面中间的标题。
>1. 当`heroText`设置为`null`时，`heroText`不显示；
>2. 当`heroText`设置为空或不设置时，`heroText`显示为[原生配置](/docs/Theme/config/native.md#title)的`title`。
### ***tagline***
可以通过`tagline`配置当前页页面中间的副标题（页面描述）。
>1. 当`tagline`设置为`null`时，`tagline`不显示；
>2. 当`tagline`设置为空或不设置时，`tagline`显示为[原生配置](/docs/Theme/config/native.md#description)的`description`。
```yaml
---
home: true
type: HomeBlog
heroText: My Blog
tagline: A Beautiful Blog Style
---
```
![设置标题和简介](https://img-blog.csdnimg.cn/d7e3571616c84c33928f19bd746774ad.png#pic_center)


### ***heroImage***
`heroImage`可以为服务器本地图片，也可以为网络图片的url。一般`heroImage`带有鲜明特色，一般为网站logo或网站名称+网站简介。
>如果您的`heroImage`设置的图片具有网站标题，则可以设置 `heroText`为`null`以使标题不再显示；`tagline`设置相同。
>
```yaml
---
home: true
type: HomeBlog
heroImage: /hero.png
heroImageStyle: {
  maxWidth: '600px',
  width: '100%',
  display: block,
  margin: '9rem auto 2rem',
  background: '#fff',
  borderRadius: '1rem'
}
---
```
![heroImage](https://img-blog.csdnimg.cn/3a44e766d07a484d94679ea63694af0a.png#pic_center)

### ***bgImage***
通过`bgImage`设置首页的背景图片，如果想改变 `bgImage` 的风格，可以设置值 `bgImageStyle` 来实现想要的效果
```yaml
---
home: true
type: HomeBlog
bgImage: '/bg.png'
bgImageStyle: {
    height: '350px'
}
---
```
## ***themeConfig***

### ***authorAvatar***
通过[主题配置](/docs/Theme/config/theme.md#authoravatar)中的`authorAvatar`设置博客首页右侧信息栏的头像

### ***friendLink***
通过[主题配置](/docs/Theme/config/theme.md#friendlink)中的`friendLink`添加博客首页右侧信息栏的友情链接