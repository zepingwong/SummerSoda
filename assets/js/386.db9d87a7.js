(window.webpackJsonp=window.webpackJsonp||[]).push([[386],{940:function(t,s,a){"use strict";a.r(s);var e=a(2),r=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("背景")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("操作系统")]),t._v("：Ubuntu 20.04")]),t._v(" "),s("li",[s("strong",[t._v("软件")]),t._v("：MySQL 8.0")])]),t._v(" "),s("h3",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("问题描述")])])]),t._v(" "),s("p",[t._v("在MySQL 8.0 跳过权限验证（"),s("code",[t._v("skip-grant-tables")]),t._v("）修改 root 用户密码 /配置远程访问时，出现错误：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("ERROR 1290 (HY000): The MySQL server is running with the --skip-grant-tables option so it cannot execute this statement\n")])])]),s("h2",{attrs:{id:"解决办法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决办法"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("解决办法")])])]),t._v(" "),s("p",[t._v("执行以下SQL语句，刷新权限：")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("flush privileges;\n")])])]),s("p",[t._v("再次修改密码或进行授权，轻松解决。")])])}),[],!1,null,null,null);s.default=r.exports}}]);