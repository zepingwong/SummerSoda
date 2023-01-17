(window.webpackJsonp=window.webpackJsonp||[]).push([[47],{595:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("背景")])])]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("Django版本")]),t._v(": Django3.3")])]),t._v(" "),s("p",[t._v("在进行数据库迁移 "),s("code",[t._v("python manage.py migrate")]),t._v(" 操作时报错：")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("django.core.exceptions.ImproperlyConfigured: Error loading MySQLdb module.Did you "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mysqlclient?\n")])])]),s("h2",{attrs:{id:"问题解决"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题解决"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("问题解决")])])]),t._v(" "),s("h3",{attrs:{id:"原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("原因")])])]),t._v(" "),s("p",[s("code",[t._v("Django2.2")]),t._v(" 之前版本: 没有安装 "),s("code",[t._v("pymysql")]),t._v(" 模块，或没有配置 "),s("code",[t._v("__init__.py")]),t._v(" 文件\n"),s("code",[t._v("Django2.2")]),t._v(" 之后版本: 没有安装 "),s("code",[t._v("mysqlclient")]),t._v(" 模块")]),t._v(" "),s("h3",{attrs:{id:"django2-2-之前版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django2-2-之前版本"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Django2.2 之前版本")])])]),t._v(" "),s("h4",{attrs:{id:"step-1-检查依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-检查依赖"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Step 1. 检查依赖")])])]),t._v(" "),s("p",[t._v("使用下面的指令查看虚拟环境中是否安装了 "),s("code",[t._v("pymysql")])]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip list\n")])])]),s("p",[t._v("如，未安装，则使用 "),s("code",[t._v("pip")]),t._v(" 指令安装模块")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" pymysql\n")])])]),s("h4",{attrs:{id:"step-2-修改-init-py"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-修改-init-py"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Step 2. 修改__init__.py")])])]),t._v(" "),s("p",[t._v("在项目同名的模块下的 "),s("code",[t._v("__init__.py")]),t._v(" 文件中加入以下代码")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\npymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install_as_MySQLdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h4",{attrs:{id:"step-3-若此时还是报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-3-若此时还是报错"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Step 3. 若此时还是报错")])])]),t._v(" "),s("p",[t._v("如果出现类类似的错误")]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("mysqlclient 1.4.0 or newer is required; you have 0.10.1.\n")])])]),s("p",[t._v("接下来在和项目目录同名模块的 "),s("code",[t._v("__init__.py")]),t._v(" 中加入")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v("  pymysql\npymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("version_info "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("13")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"final"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#指定版本")]),t._v("\npymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install_as_MySQLdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"django2-2-之后版本"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#django2-2-之后版本"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Django2.2 之后版本")])])]),t._v(" "),s("h4",{attrs:{id:"step-1-安装依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-1-安装依赖"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Step 1. 安装依赖")])])]),t._v(" "),s("p",[t._v("安装 "),s("a",{attrs:{href:"https://www.lfd.uci.edu/~gohlke/pythonlibs/#mysqlclient",target:"_blank",rel:"noopener noreferrer"}},[t._v("mysqlclient"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mysqlclient\n")])])]),s("h4",{attrs:{id:"step-2-已安装情况下仍然报错"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#step-2-已安装情况下仍然报错"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("Step 2. 已安装情况下仍然报错")])])]),t._v(" "),s("p",[t._v("在和项目目录同名模块的 "),s("code",[t._v("__init__.py")]),t._v(" 中加入")]),t._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" pymysql\npymysql"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("install_as_MySQLdb"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("p",[t._v("或强制重装依赖")]),t._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[t._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" mysqlclient --force-reinstall\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);