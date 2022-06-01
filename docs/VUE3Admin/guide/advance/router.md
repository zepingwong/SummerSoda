---
title: 路由配置
date: 2021-02-05
sidebar: auto
---

## 路由加载方案

:::tip
路由加载实现 3 种方案：

* 前端进行拦截，路由写在`src/router/index.js`下，角色权限清晰不会随意变更时，`authentication: "intelligence"`，`rolesControl:true`

* 后端返回路由但由前端过滤权限拦截，`authentication: "all"`，`rolesControl:true`，后端返回接口格式可参照`mock/controller/router.js`

* 后端返回处理好权限逻辑的路由，`authentication: "all"`，`rolesControl:false`，路由 JSON 无需再返回 roles 字段
:::

## 路由模式

* all 后端加载路由
* intelligence 前端加载路由

## 路由配置项

```javascript
{
  "hidden": true, //是否显示在菜单中显示隐藏路由（默认值：false）
  "menuHidden": false, //是否显示在菜单中显示隐藏一级路由（默认值：false，除分栏布局有效）
  "alwaysShow": true, //当只有一级子路由时是否显示父路由是否显示在菜单中显示路由（默认值：false）
  "name": "Demo", //首字母大写，一定要与vue文件的name对应起来，用于noKeepAlive缓存控制（该项特别重要）
  "meta": {
    "title": "title", //菜单、面包屑、多标签页显示的名称
    "roles": ["admin", "..."], //当config/settings.js中rolesControl配置开启时，用于控制角色（简写）
    "roles": { //当config/settings.js中rolesControl配置开启时，用于控制角色（全写）
      "role": ["admin", "..."],
      "ability": ["READ", "WRITE", "DELETE"], //ability: ["READ","WRITE"],
      "mode": "allOf" //allOf: 数组内所有角色都拥有，返回True oneOf: 数组内拥有任一角色，返回True(等价第1种数据) except: 不拥有数组内任一角色，返回True(取反)
    },
    "icon": "", //路由图标
    "isCustomSvg": false, //是否是自定义svg图标（默认值：false，如果设置true，那么需要把你的svg拷贝到assets/icons/目录下下，然后icon字段配置上你的图标名）
    "noKeepAlive": true, //当前路由是否不缓存（默认值：false）
    "affix": true, //当前路由是否固定多标签页
    "badge": "New", //badge小标签（只支持子级）
    "tabHidden": true, //当前路由是否不显示多标签页
    "activeMenu": "", //高亮指定菜单
    "dot": false, //小圆点
    "dynamicNewTab": false // 动态传参路由是否新开标签页
  },
  "children": []
}
```
