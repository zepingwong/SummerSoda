(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{787:function(a,t,s){"use strict";s.r(t);var n=s(17),e=Object(n.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"环境配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#环境配置"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("环境配置")])])]),a._v(" "),s("h3",{attrs:{id:"创建虚拟环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建虚拟环境"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("创建虚拟环境")])])]),a._v(" "),s("p",[a._v("使用 "),s("code",[a._v("conda")]),a._v(" 或 "),s("code",[a._v("virtualenv")]),a._v(" 创建虚拟环境。")]),a._v(" "),s("h3",{attrs:{id:"安装-django"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-django"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("安装 django")])])]),a._v(" "),s("p",[a._v("在虚拟环境中使用 "),s("code",[a._v("pip")]),a._v(" 安装 "),s("code",[a._v("django")])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" django\n")])])]),s("h3",{attrs:{id:"安装-mysql"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装-mysql"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("安装 MySQL")])])]),a._v(" "),s("p",[a._v("MySQL 数据库的安装方法请参考")]),a._v(" "),s("h2",{attrs:{id:"创建项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建项目"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("创建项目")])])]),a._v(" "),s("p",[a._v("命令行切换到你要创建项目的目录，命令行执行下面的语句创建项目，"),s("code",[a._v("project_name")]),a._v(" 为你的项目名称，也是即将创建的项目目录的名称：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("django-admin startproject project_name\n")])])]),s("p",[a._v("执行完上述命令后，可以看到在指定的目录位置创建了一个项目目录，此目录结构为：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("project_name\n├── manage.py\n└── project_name\n    ├── asgi.py\n    ├── settings.py\n    ├── urls.py\n    ├── wsgi.py\n    └── __init__.py\n")])])]),s("p",[a._v("项目目录结构说明：")]),a._v(" "),s("ul",[s("li",[s("strong",[a._v("manage.py")]),a._v(": "),s("code",[a._v("Django")]),a._v(" 命令行工具，可让你以各种方式与该项目进行交互;")]),a._v(" "),s("li",[s("strong",[a._v("project_name/"),s("strong",[a._v("init")]),a._v(".py")]),a._v(": 一个空文件，告诉 Python 该目录是一个 Python 包;")]),a._v(" "),s("li",[s("strong",[a._v("project_name/settings.py")]),a._v(": 该 Django 项目的设置/配置;")]),a._v(" "),s("li",[s("strong",[a._v("project_name/urls.py")]),a._v(': 该 Django 项目的 URL 声明; 一份由 Django 驱动的网站"目录";')]),a._v(" "),s("li",[s("strong",[a._v("project_name/wsgi.py")]),a._v(":  一个 WSGI 兼容的 Web 服务器的入口，以便运行你的项目.")])]),a._v(" "),s("h2",{attrs:{id:"运行项目"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#运行项目"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("运行项目")])])]),a._v(" "),s("p",[a._v("进入项目目录，运行下面的指令，启动服务器：")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("python manage.py runserver\n")])])]),s("p",[a._v("在浏览器输入 "),s("code",[a._v("http://127.0.0.1:8000/")]),a._v("，结果如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/05/12/7ydt8fP9skXVTNE.png",alt:"Snipaste_2022-05-12_00-02-17.png"}})]),a._v(" "),s("h2",{attrs:{id:"数据库配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库配置"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("数据库配置")])])]),a._v(" "),s("h3",{attrs:{id:"安装模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装模块"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("安装模块")])])]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("pip "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" mysqlclient\n")])])]),s("blockquote",[s("p",[s("code",[a._v("Django2.2")]),a._v(" 版本之前需要安装的是 "),s("code",[a._v("pymysql")]),a._v(" 模块，这里使用的是 "),s("code",[a._v("mysqlclient")])])]),a._v(" "),s("h3",{attrs:{id:"创建数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建数据库"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("创建数据库")])])]),a._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("create")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("database")]),a._v(" database_name "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("default")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("charset")]),a._v(" utf8 "),s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("collate")]),a._v(" utf8_general_ci"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(";")]),a._v(" \n")])])]),s("p",[s("code",[a._v("database_name")]),a._v(" 为该项目需要使用的数据库名称。")]),a._v(" "),s("h3",{attrs:{id:"修改配置"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#修改配置"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("修改配置")])])]),a._v(" "),s("p",[a._v("在项目的 "),s("code",[a._v("settings.py")]),a._v(" 文件中找到 "),s("code",[a._v("DATABASES")]),a._v(" 配置项，修改配置：")]),a._v(" "),s("blockquote",[s("p",[a._v("可将 "),s("code",[a._v("django")]),a._v(" 默认的 "),s("code",[a._v("sqlite3")]),a._v(" 引擎配置注释")])]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("DATABASES "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'default'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("{")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 'ENGINE': 'django.db.backends.sqlite3',")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 'NAME': BASE_DIR / 'db.sqlite3',")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ENGINE指定数据库的后端引擎")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ENGINE'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'django.db.backends.mysql'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# NAME指定要连接的数据库的名称")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'NAME'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'database_name'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# USER指定登录到数据库的用户名")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'USER'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'root'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# PASSWORD接数据库时使用的密码")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'PASSWORD'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'password'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# HOST连接数据库的主机")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'HOST'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'127.0.0.1'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# PORT连接数据库时使用的端口")]),a._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'PORT'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'3306'")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("}")]),a._v("\n")])])]),s("h2",{attrs:{id:"创建-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-app"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("创建 APP")])])]),a._v(" "),s("h3",{attrs:{id:"创建-app-2"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建-app-2"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("创建 APP")])])]),a._v(" "),s("p",[a._v("在项目根目录下运行以下命令，创建一个 app， "),s("code",[a._v("app_name")]),a._v(" 为该 app 名称")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("python manage.py startapp app_name\n")])])]),s("p",[a._v("目录结构如下:")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("app_name\n├── admin.py\n├── apps.py\n├── models.py\n├── tests.py\n├── views.py\n├── __init__.py\n└── migrations\n    └── __init__.py\n")])])]),s("h3",{attrs:{id:"丰富模型"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#丰富模型"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("丰富模型")])])]),a._v(" "),s("p",[a._v("打开 "),s("code",[a._v("mdels.py")]),a._v(" 文件，根据功能和需要添加数据模型，这里以一个用户信息模型为例")]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("User")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Model"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v("\n    name "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" models"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CharField"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("max_length"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("50")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n    password "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" models\n")])])]),s("h3",{attrs:{id:"注册-app"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#注册-app"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("注册 APP")])])]),a._v(" "),s("p",[a._v("在 "),s("code",[a._v("setting.py")]),a._v(" 的 "),s("code",[a._v("INSTALLED_APPS")]),a._v(" 中添加创建的 "),s("code",[a._v("app_name")])]),a._v(" "),s("div",{staticClass:"language-python extra-class"},[s("pre",{pre:!0,attrs:{class:"language-python"}},[s("code",[a._v("INSTALLED_APPS "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'django.contrib.admin'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'django.contrib.auth'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'django.contrib.contenttypes'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'django.contrib.sessions'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'django.contrib.messages'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'django.contrib.staticfiles'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n    "),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'app_name'")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),s("h3",{attrs:{id:"迁移数据库"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#迁移数据库"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("迁移数据库")])])]),a._v(" "),s("p",[a._v("命令行中依次运行以下语句")]),a._v(" "),s("div",{staticClass:"language-shell extra-class"},[s("pre",{pre:!0,attrs:{class:"language-shell"}},[s("code",[a._v("python manage.py makemigrations\npython manage.py migrate\n")])])]),s("h4",{attrs:{id:"python-manage-py-makemigrations"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-manage-py-makemigrations"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("python manage.py makemigrations")])])]),a._v(" "),s("p",[a._v("该指令用于生成数据库迁移文件，初次运行该指令后会在当前 app 下的 "),s("code",[a._v("migrations")]),a._v(" 目录下生成 "),s("code",[a._v("0001_initial.py")]),a._v("，在每次改动模型之后，重新运行该指令，会接继续生成 "),s("code",[a._v("0002_initial.py")]),a._v("、"),s("code",[a._v("0003_initial.py")]),a._v("……")]),a._v(" "),s("h4",{attrs:{id:"python-manage-py-migrate"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#python-manage-py-migrate"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("python manage.py migrate")])])]),a._v(" "),s("p",[a._v("该指令用于同步数据库，成功同步数据库后控制台输出如下：")]),a._v(" "),s("p",[s("img",{attrs:{src:"https://s2.loli.net/2022/05/12/3hkDOQcRbqMW1GT.png",alt:"Snipaste_2022-05-12_00-58-02.png"}})]),a._v(" "),s("h2",{attrs:{id:"创建模板和视图"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#创建模板和视图"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("创建模板和视图")])])]),a._v(" "),s("p",[a._v("在 django 中，视图对 WEB 请求进行回应")]),a._v(" "),s("p",[s("strong",[a._v("视图")]),a._v("接收 "),s("code",[a._v("reqeust")]),a._v(" 对象作为第一个参数，包含了请求的信息")]),a._v(" "),s("p",[s("strong",[a._v("视图")]),a._v("就是一个Python函数，被定义在views.py中")]),a._v(" "),s("p",[s("strong",[a._v("模板")]),a._v("基本上就是一些输出动态值的经过特殊格式化的HTML文本，支持简单的逻辑结构如循环等。当一个视图要返回一个HTML文档时，它通常会指定一个模板，提供给它所要显示的信息，并在响应里使用模板渲染的结果。")])])}),[],!1,null,null,null);t.default=e.exports}}]);