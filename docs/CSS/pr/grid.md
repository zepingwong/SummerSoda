---
title: 'grid'
tags:
 - CSS
categories:
 - CSS
date: 2019-10-22
---

## ***定义和用法***

grid 属性是以下属性的简写属性：

- grid-template-rows
- grid-template-columns
- grid-template-areas
- grid-auto-rows
- grid-auto-columns
- grid-auto-flow

|项目|说明|
|-|-|
|**默认值**|none none none auto auto row|
|**继承**|否|
|**动画制作**|yes|
|**版本**|CSS Grid Layout Module Level 1|
|**JS语法**|`object.style.grid="250px / auto auto auto"`|


## ***浏览器支持***

<div class="center">

|![chrome.png](https://s2.loli.net/2022/05/21/RTA6GZxYme9I7Dk.png)|![explorer.png](https://s2.loli.net/2022/05/21/rAFgMpeDTyxhIYd.png)|![Firefox.png](https://s2.loli.net/2022/05/21/YgnPxjZISlkEHG1.png)|![Safari.png](https://s2.loli.net/2022/05/21/gucApfZsotr5xKh.png)|![opera.png](https://s2.loli.net/2022/05/21/AtBKeGns563XO17.png)|
|-|-|-|-|-|
|57|16|52|10|44|

</div>

## ***CSS 语法***

```
grid: none|grid-template-rows / grid-template-columns|grid-template-areas|grid-template-rows / [grid-auto-flow] grid-auto-columns|[grid-auto-flow] grid-auto-rows / grid-template-columns|initial|inherit;
```

## ***属性值***

|值|描述|
|-|-|
|none|默认值。不定义行或列的尺寸。|
|grid-template-rows / grid-template-columns|	规定列和行的尺寸。|
|grid-template-areas|	规定使用命名项目的网格布局。|
|grid-template-rows / grid-auto-columns|	规定行的尺寸（高度），以及列的自动尺寸。|
|grid-auto-rows / grid-template-columns|	规定行的自动尺寸，并设置 grid-template-columns 属性。|
|grid-template-rows / grid-auto-flow grid-auto-columns|	规定行的尺寸（高度），以及如何放置自动就位的项目，和列的自动尺寸。|
|grid-auto-flow grid-auto-rows / grid-template-columns|	规定如何放置自动就位的项目，和行的自动尺寸，以及设置 grid-template-columns 属性。|
|initial|	将此属性设置为其默认值。参阅 initial。|
|inherit|	从其父元素继承此属性。参阅 inherit。|

## ***相关内容***

- [网格容器 Live Demo](/docs/CSS/live/grid.md)
- [grid-template-areas 属性](/docs/CSS/pr/grid-template-areas.md)
- [grid-template-rows 属性](/docs/CSS/pr/grid-template-rows.md)
- [grid-template-columns 属性](/docs/CSS/pr/grid-template-columns.md)
- [grid-auto-rows 属性](/docs/CSS/pr/grid-auto-rows.md)
- [grid-auto-columns 属性](/docs/CSS/pr/grid-auto-columns.md)
- [grid-auto-flow 属性](/docs/CSS/pr/grid-auto-flow.md)
- [grid-row-gap 属性](/docs/CSS/pr/grid-row-gap.md)
- [grid-row-end 属性](/docs/CSS/pr/grid-row-end.md)
- [grid-column-gap 属性](/docs/CSS/pr/grid-column-gap.md)
- [grid-column-end 属性](/docs/CSS/pr/grid-column-end.md)

<style>
.center {
  text-align: center;
}
</style>