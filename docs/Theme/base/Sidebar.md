---
title: 侧边栏
date: 2020-05-29
---

::: tip
主题将原有的侧边栏的中的多级标题移出，生成子侧边栏，放在页面的右侧。左边的侧边栏只有在自定义的侧边栏时才会出现，用于展示多篇文章的集合，而子侧边栏专注于当前文章的多级标题。
:::

![Sidebar](https://img-blog.csdnimg.cn/26e5e0542ff8469eae437526cf396108.png#pic_center)

## ***侧边栏***

侧边栏需要手动配置 `themeConfig.sidebar`，配置方法见[sidebarConfig]()。

## ***子侧边栏***

子侧边栏会根据文章标题自动生成，可以通过 `themeConfig.pageConfig` 和 `$page.subSidebar` 配置子侧边栏是否显示。