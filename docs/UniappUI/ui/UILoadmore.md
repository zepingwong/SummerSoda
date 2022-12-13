---
title: ui-loadmore 加载更多
date: 2021-03-08
sidebar: auto
tag:
- uni-app
isShowComments: false
---

::: tip 介绍
加载更多，一般可用于分页加载时等待效果。
:::

## ***引入***

### ***手动引入***

```javascript
import UILoadmore from "@/components/ui-loadmore/ui-loadmore"
export default {
	components:{
    UILoadmore
	}
}
```

### ***easycom组件模式***


## ***代码演示***

### ***显示文本***

通过 `text` 属性设置显示的文本,默认值为 `正在加载...`

```html
<ui-loadmore text="加载中..."></ui-loadmore>
```