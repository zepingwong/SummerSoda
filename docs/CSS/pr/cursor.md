---
title: 'cursor'
tags:
 - CSS
categories:
 - CSS
date: 2019-10-22
---

## ***样式***

<CSS-cursor-index></CSS-cursor-index>

## ***浏览器支持***

<div class="center">

|![chrome.png](https://s2.loli.net/2022/05/21/RTA6GZxYme9I7Dk.png)|![explorer.png](https://s2.loli.net/2022/05/21/rAFgMpeDTyxhIYd.png)|![Firefox.png](https://s2.loli.net/2022/05/21/YgnPxjZISlkEHG1.png)|![Safari.png](https://s2.loli.net/2022/05/21/gucApfZsotr5xKh.png)|![opera.png](https://s2.loli.net/2022/05/21/AtBKeGns563XO17.png)|
|-|-|-|-|-|
|5.0|5.5|4.0|5.0|9.6|

</div>

> ***注释***：Opera 9.3 和 Safari 3 不支持 url 值。

## ***定义和用法***

`cursor` 属性规定要显示的光标的类型（形状）。

该属性定义了鼠标指针放在一个元素边界范围内时所用的光标形状（不过 `CSS2.1` 没有定义由哪个边界确定这个范围）。

|项目|说明|
|-|-|
|**默认值**|auto|
|**继承**|yes|
|**版本**|CSS2|
|**JS语法**|`object.style.cursor="crosshair"`|

## ***可选的值***

|值|描述|
|-|-|
|url| 需使用的自定义光标的 URL。 ***注释***：请在此列表的末端始终定义一种普通的光标，以防没有由 URL 定义的可用光标。|
|default|默认光标（通常是一个箭头）|
|auto|默认。浏览器设置的光标|
|crosshair|光标呈现为十字线|
|pointer|光标呈现为指示链接的指针（一只手）|
|move|此光标指示某对象可被移动|
|e-resize|此光标指示矩形框的边缘可被向右（东）移动|
|ne-resize|此光标指示矩形框的边缘可被向上及向右移动（北/东）|
|nw-resize|此光标指示矩形框的边缘可被向上及向左移动（北/西）|
|n-resize|此光标指示矩形框的边缘可被向上（北）移动|
|se-resize|此光标指示矩形框的边缘可被向下及向右移动（南/东）|
|sw-resize|此光标指示矩形框的边缘可被向下及向左移动（南/西）|
|s-resize|此光标指示矩形框的边缘可被向下移动（南）|
|w-resize|此光标指示矩形框的边缘可被向左移动（西）|
|text|此光标指示文本|
|wait|此光标指示程序正忙（通常是一只表或沙漏）|
|help|此光标指示可用的帮助（通常是一个问号或一个气球）|



<style>
.center {
  text-align: center;
}
</style>