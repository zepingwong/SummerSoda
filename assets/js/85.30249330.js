(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{633:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"油猴插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#油猴插件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("油猴插件")])])]),t._v(" "),s("p",[s("strong",[t._v("浏览器必须装Tampermonkey")]),t._v("，"),s("a",{attrs:{href:"https://chrome.google.com/webstore/category/extensions?hl=zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("chrome应用商店"),s("OutboundLink")],1),t._v("搜索【"),s("a",{attrs:{href:"https://chrome.google.com/webstore/search/Tampermonkey?hl=zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Tampermonkey"),s("OutboundLink")],1),t._v("】")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/12/25/z7c3V9sAR6KUCiG.png",alt:"油猴插件.png"}})]),t._v(" "),s("blockquote",[s("p",[t._v("注意需要安装不带 BETA 的这个")])]),t._v(" "),s("h2",{attrs:{id:"安装脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装脚本"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("安装脚本")])])]),t._v(" "),s("h3",{attrs:{id:"搜索脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索脚本"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("搜索脚本")])])]),t._v(" "),s("p",[t._v("打开【"),s("a",{attrs:{href:"http://greasyfork.org/zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("脚本搜索网站"),s("OutboundLink")],1),t._v("】，在搜索框里输入【百度网盘】，接着点搜索。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/12/25/r8VO1ogJyua4S6Z.png",alt:"安装脚本.png"}})]),t._v(" "),s("p",[t._v("选择【百度网盘简易下载助手】")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/12/25/3RtvzLIiMOxcAnf.png",alt:"选择脚本.png"}})]),t._v(" "),s("h3",{attrs:{id:"安装脚本-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装脚本-2"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("安装脚本")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/12/25/qxaRKAfpiwLyZdz.png",alt:"安装.png"}})]),t._v(" "),s("h2",{attrs:{id:"aria2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aria2"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Aria2")])])]),t._v(" "),s("h3",{attrs:{id:"安装-aria2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-aria2"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("安装 Aria2")])])]),t._v(" "),s("p",[t._v("到 Github 下载最新版 "),s("a",{attrs:{href:"https://github.com/aria2/aria2/releases",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aria2"),s("OutboundLink")],1),t._v("，选择和自己操作系统匹配的版本，作者这里选择的是 Windows 64 位版本。")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2023/01/08/iw23tWnp16elrMb.png",alt:"Snipaste_2023-01-08_18-31-17.png"}})]),t._v(" "),s("p",[t._v("将下载的压缩包解压到合适的位置，并打开此目录。")]),t._v(" "),s("h3",{attrs:{id:"配置-aria2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置-aria2"}},[t._v("#")]),t._v(" "),s("strong",[s("em",[t._v("配置")]),t._v(" Aria2")])]),t._v(" "),s("h4",{attrs:{id:"创建配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建配置文件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("创建配置文件")])])]),t._v(" "),s("p",[t._v("在 "),s("code",[t._v("aria2")]),t._v(" 目录下新建四个文件：")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("aria2.log")]),t._v("：日志，空文件就行")]),t._v(" "),s("li",[s("code",[t._v("aria2.session")]),t._v("：下载历史，空文件就行")]),t._v(" "),s("li",[s("code",[t._v("aria2.conf")]),t._v("：配置文件）")]),t._v(" "),s("li",[s("code",[t._v("HideRun.vbs")]),t._v("：隐藏cmd窗口运行用到的，此文件用于启动")])]),t._v(" "),s("h4",{attrs:{id:"编辑配置文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#编辑配置文件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("编辑配置文件")])])]),t._v(" "),s("p",[t._v("编辑 "),s("code",[t._v("aria2.conf")]),t._v("，"),s("a",{attrs:{href:"http://aria2c.com/archiver/aria2.conf",target:"_blank",rel:"noopener noreferrer"}},[t._v("配置文件链接"),s("OutboundLink")],1),t._v("，配置项如下：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## '#'开头为注释内容, 选项都有相应的注释说明, 根据需要修改 ##")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 被注释的选项填写的是默认值, 建议在需要修改时再取消注释  ##")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 文件保存相关 ##")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件的保存路径(可使用绝对路径或相对路径), 默认: 当前启动位置")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=~")]),t._v("/downloads\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用磁盘缓存, 0为禁用缓存, 需1.16以上版本, 默认:16M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disk-cache=32M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 文件预分配方式, 能有效降低磁盘碎片, 默认:prealloc")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 预分配所需时间: none < falloc ? trunc < prealloc")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# falloc和trunc则需要文件系统和内核支持")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# NTFS建议使用falloc, EXT3/4建议trunc, MAC 下需要注释此项")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#file-allocation=none")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 断点续传")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("continue")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 下载连接相关 ##")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大同时下载任务数, 运行时可修改, 默认:5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#max-concurrent-downloads=5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 同一服务器连接数, 添加时可指定, 默认:1")]),t._v("\nmax-connection-per-server"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最小文件分片大小, 添加时可指定, 取值范围1M -1024M, 默认:20M")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 假定size=10M, 文件为20MiB 则使用两个来源下载; 文件为15MiB 则使用一个来源下载")]),t._v("\nmin-split-size"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("10M\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个任务最大线程数, 添加时可指定, 默认:5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# split=5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整体下载速度限制, 运行时可修改, 默认:0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max-overall-download-limit=0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个任务下载速度限制, 默认:0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max-download-limit=0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 整体上传速度限制, 运行时可修改, 默认:0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max-overall-upload-limit=0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个任务上传速度限制, 默认:0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max-upload-limit=0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 禁用IPv6, 默认:false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# disable-ipv6=true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 连接超时时间, 默认:60")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# timeout=60")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 最大重试次数, 设置为0表示不限制重试次数, 默认:5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# max-tries=5")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置重试等待的秒数, 默认:0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# retry-wait=0")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## 进度保存相关 ##")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 从会话文件中读取下载任务")]),t._v("\ninput-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/aria2/aria2.session\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在Aria2退出时保存`错误/未完成`的下载任务到会话文件")]),t._v("\nsave-session"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("/etc/aria2/aria2.session\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 定时保存会话, 0为退出时才保存, 需1.16.1以上版本, 默认:0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# save-session-interval=60")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## RPC相关设置 ##")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用RPC, 默认:false")]),t._v("\nenable-rpc"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许所有来源, 默认:false")]),t._v("\nrpc-allow-origin-all"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 允许非外部访问, 默认:false")]),t._v("\nrpc-listen-all"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 事件轮询方式, 取值:[epoll, kqueue, port, poll, select], 不同系统默认值不同")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# event-poll=select")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# RPC监听端口, 端口被占用时可以修改, 默认:6800")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-listen-port=6800")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置的RPC授权令牌, v1.18.4新增功能, 取代 --rpc-user 和 --rpc-passwd 选项")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-secret=<TOKEN>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置的RPC访问用户名, 此选项新版已废弃, 建议改用 --rpc-secret 选项")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-user=<USER>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 设置的RPC访问密码, 此选项新版已废弃, 建议改用 --rpc-secret 选项")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-passwd=<PASSWD>")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 是否启用 RPC 服务的 SSL/TLS 加密,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 启用加密后 RPC 服务需要使用 https 或者 wss 协议连接")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-secure=true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 RPC 服务中启用 SSL/TLS 加密时的证书文件,")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 使用 PEM 格式时，您必须通过 --rpc-private-key 指定私钥")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-certificate=/path/to/certificate.pem")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 在 RPC 服务中启用 SSL/TLS 加密时的私钥文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-private-key=/path/to/certificate.key")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("## BT/PT下载相关 ##")]),t._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当下载的是一个种子(以.torrent结尾)时, 自动开始BT任务, 默认:true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# follow-torrent=true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BT监听端口, 当端口被屏蔽时使用, 默认:6881-6999")]),t._v("\nlisten-port"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("51413")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 单个种子最大连接数, 默认:55")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bt-max-peers=55")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开DHT功能, PT需要禁用, 默认:true")]),t._v("\nenable-dht"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 打开IPv6 DHT功能, PT需要禁用")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# enable-dht6=false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# DHT网络监听端口, 默认:6881-6999")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# dht-listen-port=6881-6999")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 本地节点查找, PT需要禁用, 默认:false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bt-enable-lpd=false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 种子交换, PT需要禁用, 默认:true")]),t._v("\nenable-peer-exchange"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("false\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 每个种子限速, 对少种的PT很有用, 默认:50K")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bt-request-peer-speed-limit=50K")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 客户端伪装, PT需要")]),t._v("\npeer-id-prefix"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("-TR2770-\nuser-agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Transmission/2.77\npeer-agent"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("Transmission/2.77\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 当种子的分享率达到这个数时, 自动停止做种, 0为一直做种, 默认:1.0")]),t._v("\nseed-ratio"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 强制保存会话, 即使任务已经完成, 默认:false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 较新的版本开启后会在任务完成后依然保留.aria2文件")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# force-save=false")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# BT校验相关, 默认:true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# bt-hash-check-seed=true")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 继续之前的BT任务时, 无需再次校验, 默认:false")]),t._v("\nbt-seed-unverified"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 保存磁力链接元数据为种子文件(.torrent文件), 默认:false")]),t._v("\nbt-save-metadata"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("true\n")])])]),s("p",[t._v("修改以下配置项，其他选择可酌情修改：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("E:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Downloads\n"),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("log")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("E:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("APP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Aria2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("aria2.log\ninput-file"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("E:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("APP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Aria2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("aria2.session\nsave-session"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("E:"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("APP"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Aria2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("aria2.session\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# rpc-secret 建议使用 `openssl rand -base64 32` 生成token令牌并替换配置文件中的内容")]),t._v("\nrpc-secret"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("TOKEN"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n")])])]),s("h2",{attrs:{id:"aria2-for-chrome-插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aria2-for-chrome-插件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Aria2 for Chrome 插件")])])]),t._v(" "),s("h3",{attrs:{id:"安装插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装插件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("安装插件")])])]),t._v(" "),s("p",[t._v("搜索并安装 "),s("a",{attrs:{href:"https://chrome.google.com/webstore/search/Aria2%20for%20Chrome?hl=zh-CN",target:"_blank",rel:"noopener noreferrer"}},[t._v("Aria2 for Chrome"),s("OutboundLink")],1),t._v(" 插件")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/12/25/EYCcN9AxoMemtqn.png",alt:"Aria2 插件.png"}})]),t._v(" "),s("h3",{attrs:{id:"配置插件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#配置插件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("配置插件")])])]),t._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/12/25/X1PvIOBQ76yacDk.png",alt:"PRC Server.png"}})]),t._v(" "),s("blockquote",[s("p",[t._v("下面还有一个 Aria2 RPC 密钥，是在配置文件中设置的 token")])]),t._v(" "),s("h2",{attrs:{id:"自启动脚本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#自启动脚本"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("自启动脚本")])])]),t._v(" "),s("p",[t._v("编辑 "),s("code",[t._v("HideRun.vbs")]),t._v(" ，并复制以下内容，注意修改 "),s("code",[t._v("E:\\App\\Aria2\\")]),t._v(" 为你的 "),s("code",[t._v("aria2")]),t._v(" 安装路径：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("CreateObject"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"WScript.Shell"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(".Run "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"E:\\App\\Aria2'),s("span",{pre:!0,attrs:{class:"token entity",title:"\\a"}},[t._v("\\a")]),t._v('ria2c.exe --conf-path=aria2.conf"')]),t._v(",0\n")])])]),s("p",[t._v("每次启动 "),s("code",[t._v("aria2")]),t._v("，点击 "),s("code",[t._v("HideRun.vbs")]),t._v(" 这个文件，不用点击 "),s("code",[t._v("aria2c.exe")]),t._v("。")]),t._v(" "),s("p",[t._v("如果要开机启动，创建一个 "),s("code",[t._v("HideRun.vbs")]),t._v(" 的快捷方式！放在 "),s("code",[t._v("C:\\ProgramData\\Microsoft\\Windows\\Start Menu\\Programs\\StartUp")]),t._v(" 中即可。")])])}),[],!1,null,null,null);s.default=n.exports}}]);