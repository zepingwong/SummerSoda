---
title: 消息提示插件
date: 2020-05-29
---

## ***样式***

主题内置了侧边消息提示框，有 `normal`、`success`、`warning`、`error` 四种类型，样式如下：

<MessageBoxDemo></MessageBoxDemo>

## ***参数说明***

|参数|说明|类型|默认值|
|-|-|-|-|
|time|消息提示框持续时间|Number|3000|
|title|消息提示框标题|String|`Tips`|
|content|消息提示内容|String|`消息内容`|
|type|消息提示框类型|String|`normal`|

## ***调用方法***

```javascript
this.$message({
  time: 3000,            // 默认值 3000
  content: '消息内容',    // 默认值 消息内容
  title: 'Tips',        // 默认值 Tips
  type: 'normal'        // 默认值 normal
})
```