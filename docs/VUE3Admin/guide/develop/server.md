---
title: 与后端交互
date: 2021-03-01
sidebar: auto
---

## 前端配置代理解决跨域

打开 vue.config.js 放开注释，就可以了（记住了，其他的啥都不用改，不用改动 settings.js 的 baseURL，框架会自动将 vab-mock-server 后缀代理到你的后台地址，此方式仅在开发环境临时解决跨域，建议直接后端配置，一劳永逸）

```javascript
proxy: {
  [baseURL]: {
    target: `http://你的后端接口地址`,
    ws: true,
    changeOrigin: true,
    pathRewrite: {
      ["^/" + baseURL]: "",
    },
  },
}
```

## 后端跨域的配置

各种后端语言不尽相同，后端语言具体请百度查看，我这里用的nginx，之前还搞过PHP

* nginx

```shell
location / {
    if ($request_method = OPTIONS ) {
        add_header Content-Type *;
        add_header Access-Control-Allow-Origin *;
        add_header Access-Control-Allow-Methods 'POST, GET, OPTIONS, PUT, DELETE';
        add_header Access-Control-Allow-Credentials true;
        add_header Access-Control-Allow-Headers *;
        return 200;
    }
}
```

* PHP

```php
/**
 * 解决跨域访问，nginx需要在伪静态里面添加“nginx伪静态.txt”规则
 */
header('Content-Type: *');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, GET, OPTIONS, PUT, DELETE');//设置允许访问的协议
header('Access-Control-Allow-Credentials: true'); // 设置是否允许发送 cookies
header('Access-Control-Allow-Headers: *');
```

## 前端请求示例

:::tip
强烈建议：所有请求放到 src/api 文件夹下
:::

```javascript
// post请求示例
import request from "@/utils/request";

export function getList(data) {
  return request({
    url: "/table/list",
    method: "post",
    data,
  });
}

// get请求示例
import request from "@/utils/request";

export function getList(params) {
  return request({
    url: "/table/list",
    method: "get",
    params,
  });
}
```

## 项目开发必要接口

## 前端请求约定

## 后端返回数据约定
