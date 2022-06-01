---
title: 构建和发布
date: 2021-03-01
sidebar: auto
---

## 安装命令

```shell
# 项目根目录
npm install
```

## 运行命令

```shell
# 项目根目录
npm run serve
```

## 打包命令

```shell
# 项目根目录
npm run build
```

## 打包注意事项

* 由于演示环境使用的是 `mock.js`，而非真实的后端，在你打包时需要注意注释掉`src/main.js`下相关的 mock 代码

```shell
/* if (process.env.NODE_ENV === "production") {
  const { mockXHR } = require("@/utils/static");
  mockXHR();
} */
```

* 如果包图片压缩插件报错 `Cannot find module 'gifsicle'`，请使用使用 cnpm 安装，_**一定 cnpm 安装**_

```shell
# 项目根目录
cnpm i image-webpack-loader -D
```
