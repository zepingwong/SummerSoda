---
title: 全局配置
date: 2021-02-05
sidebar: auto
---

## 修改配置

:::tip
！！！最好不要直接修改`src/config/default`下的`*.config.js`！！！  
需要修改全局配置时，可以直接在`src/config`设置配置变量
:::

```javascript
/**
 * @description 导出自定义配置
 **/
const config = {
  // 比如要修改，是否开启右侧悬浮窗时，这样修改就可以了
  showThemeSetting: false
}
module.exports = config
```

## config 目录结构

```shell
src/config
│   config.js
│   index.js
│
└───default
        cli.config.js
        index.js
        net.config.js
        setting.config.js
        theme.config.js
```

## cli.config.js

```javascript
/**
 * @description 导出vue/cli配置
 */
module.exports = {
  // 开发以及部署时的URL，hash模式时在不确定二级目录名称的情况下建议使用""代表相对路径或者"/二级目录/"，history模式默认使用"/"或者"/二级目录/"
  publicPath: '',
  // 生产环境构建文件的目录名
  outputDir: 'dist',
  // 放置生成的静态资源 (js、css、img、fonts) 的 (相对于 outputDir 的) 目录。
  assetsDir: 'static',
  // 开发环境每次保存时是否输出为eslint编译警告
  lintOnSave: true,
  // 进行编译的依赖
  transpileDependencies: ['resize-detector'],
  // 开发环境端口号
  devPort: '8080',
  // 需要自动注入并加载的模块
  providePlugin: {},
  // npm run build时是否自动生成7z压缩包
  build7z: false,
  // npm run build时是否生成gzip
  buildGzip: false,
  // npm run build时是否开启图片压缩，由于国内网路原因image-webpack-loader必须使用cnpm安装，如无法使用cnpm，请配置false
  imageCompression: false
}
```

## theme.config.js

```javascript
/**
 * @description 导出主题配置，注意事项：此配置下的项修改后需清理浏览器缓存！！！
 */
module.exports = {
  // 布局种类：横向布局horizontal、纵向布局vertical、分栏布局column、综合布局comprehensive、常规布局common
  layout: 'column',
  // 主题名称：默认default、海洋之心ocean、绿荫草场green、碰触纯白white
  themeName: 'default',
  // 分栏风格(仅针对分栏布局column时生效)：横向风格horizontal、纵向风格vertical、卡片风格card
  columnStyle: 'vertical',
  // 是否固定头部固定
  fixedHeader: true,
  // 是否开启顶部进度条
  showProgressBar: true,
  // 是否开启标签页
  showTabs: true,
  // 显示标签页时标签页样式：卡片风格card、灵动风格smart、圆滑风格smooth
  tabsBarStyle: 'smooth',
  // 是否标签页图标
  showTabsBarIcon: true,
  // 是否开启语言选择组件
  showLanguage: true,
  // 是否开启刷新组件
  showRefresh: true,
  // 是否开启搜索组件
  showSearch: true,
  // 是否开启主题组件
  showTheme: true,
  // 是否开启通知组件
  showNotice: true,
  // 是否开启全屏组件
  showFullScreen: true,
  // 是否开启右侧悬浮窗
  showThemeSetting: true,
  // 是否开启页脚
  showFooter: true,
  // 是否开启面包屑导航
  showBreadcrumb: true,
  // 是否开启清楚缓存按钮
  showClean: true,
  // 是否显示面包屑导航图标
  showBreadcrumbIcon: true,
  // vertical column comprehensive common布局时是否只保持一个子菜单的展开
  uniqueOpened: true,
  // 分栏布局和综合布局时，是否点击一级菜单默认开启第一个二级菜单
  openFirstMenu: true
}
```

## net.config.js

```javascript
/**
 * @description 导出网络配置
 **/
module.exports = {
  // 默认的接口地址，开发环境和生产环境走/
  // 当然你也可以选择自己配置成需要的接口地址，如"https://api.xxx.com"
  // 问号后边代表开发环境，冒号后边代表生产环境
  baseURL:
    process.env.NODE_ENV === 'development' ? 'mock-server' : 'mock-server',
  // axios 是否携带cookies
  withCredentials: false,
  // 配后端数据的接收方式application/json;charset=UTF-8 或 application/x-www-form-urlencoded;charset=UTF-8
  contentType: 'application/json;charset=UTF-8',
  // 最长请求时间
  requestTimeout: 10000,
  // 操作正常code，支持String、Array、int多种类型
  successCode: [200, 0, '200', '0'],
  // 数据状态的字段名称
  statusName: 'code',
  // 状态信息的字段名称
  messageName: 'message'
}
```

## setting.config.js

```javascript
/**
 * @description 导出通用配置
 */
module.exports = {
  // 标题，此项修改后需要重启项目 (包括初次加载雪花屏的标题 页面的标题 浏览器的标题)
  websiteTitle: 'vue3-admin',
  // 标题分隔符
  titleSeparator: ' - ',
  // 标题是否反转
  // 如果为false: "page - title"
  // 如果为ture : "title - page"
  titleReverse: false,
  // 简写
  abbreviation: 'vue3-admin',
  // copyright
  copyright: 'WangZeping zepingwong@gmail.com',
  // 缓存路由的最大数量
  keepAliveMaxNum: 20,
  // 不经过token校验的路由，白名单路由建议配置到与login页面同级，如果需要放行带传参的页面，请使用query传参，配置时只配置path即可
  routesWhiteList: ['/login', '/register', '/callback', '/404', '/403'],
  // 加载时显示文字
  loadingText: '',
  // token名称
  tokenName: 'token',
  // token在localStorage、sessionStorage、cookie存储的key的名称
  tokenTableName: 'vue3-admin-token',
  // token存储位置localStorage sessionStorage cookie
  storage: 'localStorage',
  // token失效回退到登录页时是否记录本次的路由
  recordRoute: false,
  // 是否开启logo，不显示时设置false，请填写src/assets/icons路径下的图标名称
  websiteLogo: 'false',
  // 语言类型zh-cn、en
  language: 'zh-cn',
  // 消息框消失时间
  messageDuration: 3000,
  // 在哪些环境下显示高亮错误
  errorLog: ['development'/* , 'production' */],
  // 是否开启登录拦截
  loginInterception: false,
  // 是否开启登录RSA加密
  loginRSA: true,
  // intelligence(前端导出路由)和all(后端导出路由)两种方式
  authentication: 'intelligence',
  // 是否支持游客模式，支持情况下，访问白名单，可查看所有asyncRoutes
  supportVisit: false,
  // 是否开启roles字段进行角色权限控制(如果是all模式后端完全处理角色并进行json组装，可设置false不处理路由中的roles字段)
  rolesControl: true,
  // 开放注册
  allowRegister: false,
  // vertical column comprehensive common布局时默认展开的菜单path，使用逗号隔开建议只展开一个
  defaultOpeneds: ['/index'],
  // 需要加loading层的请求，防止重复提交
  debounce: ['doEdit'],
  // 代码生成机生成在view下的文件夹名称
  templateFolder: 'project',
  // 开发工具控制台名字显示
  webpackBarName: 'vue3-admin',
  // 浏览器注释显示
  webpackBanner: ' build: vue3-admin \n copyright: WangZeping zepingwong@gmail.com \n time: '
}
```
