---
title: system
date: 2021-01-03
sidebar: auto
---


## setting

### getSystemSettings

* 接口地址：/system/setting/getSystemSettings
* 返回格式：json/xml
* 请求方式：http get
* 接口备注：获取后台设置
* 请求参数说明：
* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|
|`data`|`array`|返回数据|

### changeSystemSettings

* 接口地址：/system/setting/changeSystemSettings
* 返回格式：json/xml
* 请求方式：http post
* 接口备注：修改后台设置
* 请求参数说明：`Object{ 目标字段: 值 }`
* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|
|`data`|`object`|`object{目标字段: 值}`|

## rolesManagement

### getRolesList

* 接口地址：/system/rolesManagement/getRolesList
* 返回格式：json/xml
* 请求方式：http get
* 接口备注：获取角色列表
* 请求参数说明：

|名称|类型|必填|说明|
|:----|:----|:----|:----|
|`role`|`string`|否|角色名称|
|`pageNo`|`int`|否|页码|
|`pageSize`|`int`|否|每页显示数量|

* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|
|`data`|`array`|`[id: int, role: string, parentRole: string, children: [id: int, role: string, parentRole: string]]`|

### deleteRole

* 接口地址：/system/rolesManagement/deleteRole
* 返回格式：json/xml
* 请求方式：http post
* 接口备注：删除角色或角色组
* 请求参数说明：`object{roles: string,string,string}`
* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|

### addRole

* 接口地址：/system/rolesManagement/addRole
* 返回格式：json/xml
* 请求方式：http post
* 接口备注：添加角色或角色组
* 请求参数说明：

|名称|类型|必填|说明|
|:----|:----|:----|:----|
|`id`|`int`|否|角色ID|
|`role`|`string`|是|角色名称|
|`label`|`string`|是|角色说明|
|`parentRole`|`string`|是|角色组|

* 返回参数说明：  

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|

### editRole

* 接口地址：/system/rolesManagement/editRole
* 返回格式：json/xml
* 请求方式：http get
* 接口备注：编辑角色信息
* 请求参数说明：

|名称|类型|必填|说明|
|:----|:----|:----|:----|
|`id`|`int`|是|角色ID|
|`role`|`string`|是|角色名称|
|`label`|`string`|是|角色说明|
|`parentRole`|`string`|是|角色组|

* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|

## menuManagement

### getRouterList

* 接口地址：/system/menuManagement/getRouterList
* 返回格式：json/xml
* 请求方式：http get
* 接口备注：获取路由列表
* 请求参数说明：

|名称|类型|必填|说明|
|:----|:----|:----|:----|
|`role`|`string`|否|角色名称|

* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|
|`data`|`array`|`[{path: string, name: string, hidden: boolean, alwaysShow: boolean, redirect: string, redirect: string, meta: { affix: boolean, title: string, isCustomSvg: boolean, icon: string, roles: [], badge: string, dot: boolean, tabHidden: boolean, dynamicNewTab: boolean, noKeepAlive: boolean, activeMenu: boolean }, children: [] }]`|

### getRouterComponents

* 接口地址：/system/menuManagement/getRouterComponents
* 返回格式：json/xml
* 请求方式：http get
* 接口备注：获取路由组件
* 请求参数说明：
* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|
|`data`|`array`|`[{ label: string, component: string }]`|

### addRouter

* 接口地址：/system/menuManagement/addRouter
* 返回格式：json/xml
* 请求方式：http post
* 接口备注：添加路由
* 请求参数说明：

|名称|类型|必填|说明|
|:----|:----|:----|:----|
|`name`|`string`|是|路由名称|
|`path`|`string`|是|路由路径|
|`hidden`|`boolean`|是|是否隐藏menu|
|`alwaysShow`|`boolean`|是|是否始终显示当前节点|
|`component`|`string`|是|组件路径|
|`redirect`|`string`|是|重定向|
|`affix`|`boolean`|是|是否固定|
|`title`|`string`|是|标题|
|`isCustomSvg`|`boolean`|是|是否使用自定义图标|
|`icon`|`string`|是|图标名称|
|`roles`|`string`|是|角色权限|
|`badge`|`string`|是|徽章|
|`dot`|`boolean`|是|点|
|`tabHidden`|`boolean`|是|是否隐藏标签页|
|`dynamicNewTab`|`boolean`|是|路由传参是否开启新标签|
|`noKeepAlive`|`boolean`|是|是否不缓存|
|`activeMenu`|`boolean`|是|是否高亮该菜单|
|`parentName`|`string`|是|父级路由名称|

* 返回参数说明：  

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|

### editRouter

* 接口地址：/system/menuManagement/editRouter
* 返回格式：json/xml
* 请求方式：http post
* 接口备注：修改路由
* 请求参数说明：

|名称|类型|必填|说明|
|:----|:----|:----|:----|
|`id`|`int`|是|路由ID|
|`name`|`string`|是|路由名称|
|`path`|`string`|是|路由路径|
|`hidden`|`boolean`|是|是否隐藏menu|
|`alwaysShow`|`boolean`|是|是否始终显示当前节点|
|`component`|`string`|是|组件路径|
|`redirect`|`string`|是|重定向|
|`affix`|`boolean`|是|是否固定|
|`title`|`string`|是|标题|
|`isCustomSvg`|`boolean`|是|是否使用自定义图标|
|`icon`|`string`|是|图标名称|
|`roles`|`string`|是|角色权限|
|`badge`|`string`|是|徽章|
|`dot`|`boolean`|是|点|
|`tabHidden`|`boolean`|是|是否隐藏标签页|
|`dynamicNewTab`|`boolean`|是|路由传参是否开启新标签|
|`noKeepAlive`|`boolean`|是|是否不缓存|
|`activeMenu`|`boolean`|是|是否高亮该菜单|
|`parentName`|`string`|是|父级路由名称|

* 返回参数说明：  

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|

### deleteRouter

* 接口地址：/system/menuManagement/deleteRouter
* 返回格式：json/xml
* 请求方式：http post
* 接口备注：删除角色或角色组
* 请求参数说明：`object{names: string,string,string}`
* 返回参数说明：

|名称|类型|说明|
|:----|:----|:----|
|`code`|`int`|返回码|
|`message`|`string`|返回信息|
