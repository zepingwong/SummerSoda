---
title: 垂直居中
tags:
- CSS
categories:
- CSS
date: 2019-10-22
---

## 未知父元素高度

### ***方法一***

```stylus
.parentElement {
  position: relative;
  .childElement {
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
  }
}
```

### ***方法二***

```stylus
.parentElement {
  position: relative;
  .childElement {
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
  }
}
```

## ***已知父元素高度***

> 此方法在仅有一个子元素时生效

```stylus
.parentElement {
  height: 100px;
  .childElement {
    position: relative;
    top: 50%;
    transform: translateY(-50%);
  }
}
```

## ***弹性布局***

```stylus
.parentElement{
  display: flex;
  align-items: center;
}
```

## ***伪元素***

```stylus
.parentElement {
  display: block;
  &:before {
    content: " ";
    display: inline-block;
    vertical-align: middle;
    height: 100%;
  }
  .childElement {
    display: inline-block;
    vertical-align: middle;
  }
}
```

## ***隐藏节点***

```stylus
.parentElement {
  background: blue;
  width: 100%;
  height: 100px;
  .hide {
    width: 20%;
    height: 35%; //隐藏节点的高为 (父级高 - 去子级高)/2
  }
  .childElement {
    background: yellow;
    width: 20%;
    height: 30%;
  }
}
```

## ***表格布局***

```stylus
.parentElement {
  display: table;
  .childElement {
    display: table-cell;
    vertical-align: middle;
  }
  .grandsonElement {}
}
```