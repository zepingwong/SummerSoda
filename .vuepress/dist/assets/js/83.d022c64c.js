(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{631:function(t,a,s){"use strict";s.r(a);var n=s(2),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("前言")])])]),t._v(" "),a("p",[t._v("本文写于2022年4月17日。")]),t._v(" "),a("p",[t._v("官网往往最能帮到你 "),a("a",{attrs:{href:"http://nodejs.cn/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Node.js 中文网"),a("OutboundLink")],1)]),t._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("安装")])])]),t._v(" "),a("h3",{attrs:{id:"_1-下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("1.下载")])])]),t._v(" "),a("p",[a("a",{attrs:{href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"}},[t._v("下载"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/DekMRqzlwjQS7Gr.png",alt:"Snipaste_2022-04-17_15-09-01.png"}})]),t._v(" "),a("h3",{attrs:{id:"_2-解压"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-解压"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("2.解压")])])]),t._v(" "),a("p",[t._v("将下载的zip包解压到你自定义的目录，作者选择了D盘根目录下，解压后的文件目录如图所示：")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/WeX8YbfJlG4Qgni.png",alt:"Snipaste_2022-04-17_15-18-02.png"}})]),t._v(" "),a("p",[t._v("在此目录下打开 "),a("code",[t._v("cmd")]),t._v(" ，并输入下列指令查看版本")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看node版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("node")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 查看npm版本")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-v")]),t._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/NktSY7nKAIuWr8s.png",alt:"Snipaste_2022-04-17_15-20-59.png"}})]),t._v(" "),a("h3",{attrs:{id:"_3-修改配置-非必须"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-修改配置-非必须"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("3.修改配置（非必须）")])])]),t._v(" "),a("blockquote",[a("p",[t._v("如果不想把npm全局模块和cache目录放到用户目录下（一般是"),a("code",[t._v("C:\\Users\\AppData")]),t._v("），建议修改一下两个目录。")])]),t._v(" "),a("h4",{attrs:{id:"_3-1创建全局模块和cache目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1创建全局模块和cache目录"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("3.1创建全局模块和cache目录")])])]),t._v(" "),a("p",[t._v("在自定义位置创建"),a("code",[t._v("node_cache")]),t._v("和"),a("code",[t._v("node_global")]),t._v("两个文件夹，作者选择了解压目录下，如下图所示。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/pPiR5yXa6DWb1Jv.png",alt:"Snipaste_2022-04-17_15-28-58.png"}})]),t._v(" "),a("h4",{attrs:{id:"_3-2修改配置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2修改配置"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("3.2修改配置")])])]),t._v(" "),a("p",[t._v("配置npm的全局模块的存放路径以及cache的路径")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" prefix D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("node-v16.14.2-win-x64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("node_global\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" config "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("set")]),t._v(" cache D:"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("node-v16.14.2-win-x64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("node_cache\n")])])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/aFmvGR8CXNx3p7M.png",alt:"Snipaste_2022-04-17_15-38-02.png"}})]),t._v(" "),a("h3",{attrs:{id:"_4-测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-测试"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("4.测试")])])]),t._v(" "),a("p",[t._v("测试并安装淘宝NPM镜像")]),t._v(" "),a("blockquote",[a("p",[t._v("因为npm下载资源来源国外，网络不稳定，下载也慢，安装了淘宝的镜像后使用国内cnpm资源会变得非常快。")])]),t._v(" "),a("p",[t._v("在cmd命令提示符中输入下面的命令：")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("-g")]),t._v("  cnpm  "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[t._v("--registry")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("https://registry.npm.taobao.org\n")])])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/6jFz3xgBupJXvRZ.png",alt:"Snipaste_2022-04-17_15-41-37.png"}})]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/3GYzI9aAEF4oJZk.png",alt:"Snipaste_2022-04-17_15-51-52.png"}})]),t._v(" "),a("p",[t._v("安装成功后"),a("code",[t._v("cnpm")]),t._v("已经被下载到了指定的目录。")]),t._v(" "),a("h3",{attrs:{id:"_5-配置环境变量-重点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_5-配置环境变量-重点"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("5.配置环境变量（重点）")])])]),t._v(" "),a("p",[t._v("依次进入【计算机】→【属性/关于】→【高级系统设置】→【环境变量】，点击系统变量的path变量，然后点击编辑（或双击path变量）")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/7Y4Z5Ia3d1ELsFv.png",alt:"Snipaste_2022-04-13_11-26-36.png"}})]),t._v(" "),a("p",[t._v("右上角【新建】→【浏览】，选择node目录，比如作者是的是"),a("code",[t._v("D:\\node-v16.14.2-win-x64")])]),t._v(" "),a("p",[t._v("再新建一个变量，选择npm的全局模块的存放路径，比如作者是的是"),a("code",[t._v("D:\\node-v16.14.2-win-x64\\node_global")])]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/mJuBl9GdLDj7pMg.png",alt:"Snipaste_2022-04-17_15-49-17.png"}})]),t._v(" "),a("p",[t._v("点击【确定】保存退出")]),t._v(" "),a("h2",{attrs:{id:"测试"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("测试")])])]),t._v(" "),a("p",[t._v("新建一个cmd窗口进行测试，查看"),a("code",[t._v("node")]),t._v("、"),a("code",[t._v("npm")]),t._v("、"),a("code",[t._v("cnpm")]),t._v("版本，看到版本输出即为安装成功。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/PJ6auEqdlB9Rk3T.png",alt:"Snipaste_2022-04-17_16-07-20.png"}})])])}),[],!1,null,null,null);a.default=e.exports}}]);