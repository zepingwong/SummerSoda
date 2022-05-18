(window.webpackJsonp=window.webpackJsonp||[]).push([[106],{825:function(t,s,a){"use strict";a.r(s);var _=a(17),e=Object(_.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"_2022-05-02-问题修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2022-05-02-问题修复"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("2022.05.02 问题修复")])])]),t._v(" "),a("h3",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("问题描述")])])]),t._v(" "),a("p",[t._v("在2022年4月26日更新的版本中，导航栏增加了“文档”按钮，指向了一个文档列表页面，测试使用过程中发现：点击"),a("code",[t._v("文档")]),t._v("菜单按钮，能够正常跳转该页面，但在该页面执行刷新操作时，页面会丢失，控制台出现错误。")]),t._v(" "),a("h3",{attrs:{id:"修改方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#修改方案"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("修改方案")])])]),t._v(" "),a("p",[t._v("出现该问题是因为原文档列表路由为"),a("code",[t._v("/docs/")]),t._v("，理论上应该对应"),a("code",[t._v("/docs/")]),t._v("目录下的"),a("code",[t._v("README.md")]),t._v("，但实际上并没有这个文件，因此会出现页面丢失，但是因为注册了该路由为自定义布局，因此没有跳转到404页面。 /\n目前此问题已通过修改文档列表路由的方案进行修复，修改后的路由为"),a("code",[t._v("/docslist/")]),t._v("。")]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"title"}),a("p",[t._v("当然，当前的修改方案并不是完全解决这个问题的办法，需要注意的是：不要在项目目录下建立"),a("code",[t._v("docslist")]),t._v("这个文件夹就可以了。")])]),a("h2",{attrs:{id:"_2022-04-26-功能添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2022-04-26-功能添加"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("2022.04.26 功能添加")])])]),t._v(" "),a("h3",{attrs:{id:"功能描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能描述"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("功能描述")])])]),t._v(" "),a("p",[t._v("导航栏默认菜单中添加了"),a("code",[t._v("文档")]),t._v("按钮，并增加了新的页面布局，用于展示文档列表。此功能的目的是为了在博客中收录更多的文档。原默认主题中，想要增加文档列表需要用户配置自定义导航栏，与"),a("code",[t._v("分类")]),t._v("菜单的实现方法一致。")]),t._v(" "),a("h2",{attrs:{id:"_2021-09-26-问题修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021-09-26-问题修复"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("2021.09.26 问题修复")])])]),t._v(" "),a("h3",{attrs:{id:"问题描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述-2"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("问题描述")])])]),t._v(" "),a("p",[t._v("项目部署后发现，文章一级标题(h2标签)前面的绿色标志符缺失。")]),t._v(" "),a("h3",{attrs:{id:"问题修复"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题修复"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("问题修复")])])]),t._v(" "),a("p",[t._v("通过元素检查发现，h2标签样式缺失，缺失内容为"),a("code",[t._v(".page .theme-reco-content h2::before")]),t._v("，检查"),a("code",[t._v("styles/theme.styl")]),t._v("没有发现该类的样式；最终定位到"),a("code",[t._v("Page.vue")]),t._v("，发现该样式因为样式scope属性未对其他组件生效，删掉scope属性后修复。")]),t._v(" "),a("blockquote",[a("p",[t._v("这不是第一次出现该错误，另外一次作者在代码中添加了注释 千万不要添加scope属性，但是忘记是哪个文件了。")])]),t._v(" "),a("h2",{attrs:{id:"_2021-04-26-功能添加"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2021-04-26-功能添加"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("2021.04.26 功能添加")])])]),t._v(" "),a("h3",{attrs:{id:"功能描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能描述-2"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("功能描述")])])]),t._v(" "),a("p",[t._v("暗色模式适配。")])])}),[],!1,null,null,null);s.default=e.exports}}]);