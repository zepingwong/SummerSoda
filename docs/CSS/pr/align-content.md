---
title: 'align-content'
tags:
 - CSS
categories:
 - CSS
date: 2019-10-22
---

## ***实例***

将行打包到弹性容器的中央：

```css
div {
  width: 70px;
  height: 300px;
  border: 1px solid #c3c3c3;
  display: flex;
  flex-wrap: wrap;
  align-content: center;
}
```

## ***定义和用法***

`align-content` 属性修改 `flex-wrap` 属性的行为。它与 `align-items` 相似，但是它不对齐弹性项目，而是对齐弹性线。

> ***注意***：必须有多行项目，此属性才能生效！
> 
> ***提示***：使用 `justify-content` 属性可将主轴上的项目（`main-axis`）水平对齐。

|项目|说明|
|-|-|
|**默认值**|stretch|
|**继承**||
|**动画制作**||
|**版本**|CSS3|
|**JS语法**|`object.style.alignContent="center"`|

## ***浏览器支持***

表格中的数字注明了完全支持该属性的首个浏览器版本。带 `-webkit-` 的数字表示使用前缀的首个个版本。

|![chrome.png](https://s2.loli.net/2022/05/21/RTA6GZxYme9I7Dk.png)|![explorer.png](https://s2.loli.net/2022/05/21/rAFgMpeDTyxhIYd.png)|![opera.png](https://s2.loli.net/2022/05/21/AtBKeGns563XO17.png)|
|-|-|-|-|
|21.0|11.0|12.1||