(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{855:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("p",[s._v("Debian 系列的 Linux 系统理论上都可以使用，本文桌面操作系统以 deepin 20 系统为例进行演示。")]),s._v(" "),a("h2",{attrs:{id:"mysql-apt-config"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#mysql-apt-config"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("mysql-apt-config")])])]),s._v(" "),a("p",[s._v("下载安装 "),a("a",{attrs:{href:"https://dev.mysql.com/downloads/repo/apt/",target:"_blank",rel:"noopener noreferrer"}},[s._v("mysql-apt-config.deb"),a("OutboundLink")],1)]),s._v(" "),a("h3",{attrs:{id:"下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#下载"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("下载")])])]),s._v(" "),a("h4",{attrs:{id:"官网"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#官网"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("官网")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/12/AkRYf3UuP65wZvb.png",alt:"Snipaste_2022-05-12_21-47-39.png"}})]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/12/JnX8C1kiDpIwN5j.png",alt:"Snipaste_2022-05-12_21-48-22.png"}})]),s._v(" "),a("h4",{attrs:{id:"wget下载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#wget下载"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("wget下载")])])]),s._v(" "),a("p",[s._v("没有桌面操作系统，或者习惯命令行的同学可以用 "),a("code",[s._v("wget")]),s._v(" 进行下载，软件版本请以官网为准。")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dev.mysql.com/get/mysql-apt-config_0.8.22-1_all.deb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("安装")])])]),s._v(" "),a("h4",{attrs:{id:"桌面安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#桌面安装"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("桌面安装")])])]),s._v(" "),a("p",[s._v("安装刚刚下载的 "),a("code",[s._v("deb")]),s._v(" 软件包。")]),s._v(" "),a("p",[s._v("由于这个库是为 Debian 和 Ubuntu 准备的，在检测到系统不符时，需要选择系统")]),s._v(" "),a("blockquote",[a("p",[s._v("Debian和Ubuntu版本比较")])]),s._v(" "),a("table",[a("thead",[a("tr",[a("th",[s._v("Ubuntu版本号")]),s._v(" "),a("th",[s._v("Ubuntu代号")]),s._v(" "),a("th",[s._v("debian版本号")]),s._v(" "),a("th",[s._v("debian代号")])])]),s._v(" "),a("tbody",[a("tr",[a("td",[s._v("14.04 LTS")]),s._v(" "),a("td",[s._v("Trusty")]),s._v(" "),a("td",[s._v("8")]),s._v(" "),a("td",[s._v("jessie")])]),s._v(" "),a("tr",[a("td",[s._v("16.04 LTS")]),s._v(" "),a("td",[s._v("Xenial")]),s._v(" "),a("td",[s._v("9")]),s._v(" "),a("td",[s._v("strech")])]),s._v(" "),a("tr",[a("td",[s._v("18.04 LTS")]),s._v(" "),a("td",[s._v("Bionic")]),s._v(" "),a("td",[s._v("10")]),s._v(" "),a("td",[s._v("buster")])]),s._v(" "),a("tr",[a("td",[s._v("20.04 LTS")]),s._v(" "),a("td",[s._v("Focal")]),s._v(" "),a("td",[s._v("11")]),s._v(" "),a("td",[s._v("Bullseye")])])])]),s._v(" "),a("blockquote",[a("p",[s._v("查看 Deepin 版本与 Debian 版本")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令1")]),s._v("\nlsb_release -a\nNo LSB modules are available.\nDistributor ID:\tDeepin\nDescription:\tDeepin "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nRelease:\t"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v("\nCodename:\tn/a\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令2")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/issue\nDeepin GNU/Linux "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("20")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("n "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("l\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 命令3")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("cat")]),s._v(" /etc/debian_version\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("10.3")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br")])])]),s._v(" "),a("p",[s._v("一般用户直接选择2然后4.OK默认安装即可")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/12/VzlYh6wrZR27Jyk.png",alt:"截图_dde-desktop_20211214205146.png"}})]),s._v(" "),a("h4",{attrs:{id:"命令行安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#命令行安装"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("命令行安装")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i mysql-apt-config_0.8.22-1_all.deb\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("选择 "),a("code",[s._v("OK")]),s._v(" 然后确认即可")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/12/x5f621jwIpFm3Kl.png",alt:"Snipaste_2022-05-11_11-15-56.png"}})]),s._v(" "),a("h2",{attrs:{id:"更新包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#更新包"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("更新包")])])]),s._v(" "),a("p",[a("code",[s._v("mysql-apt-config")]),s._v(" 安装成功后，更新包")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h2",{attrs:{id:"安装mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装mysql"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("安装MySQL")])])]),s._v(" "),a("h3",{attrs:{id:"安装-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装-2"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("安装")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" mysql-server\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"设置密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("设置密码")])])]),s._v(" "),a("p",[s._v("设置 "),a("code",[s._v("root")]),s._v(" 用户密码并确认密码")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/12/SQcw1y8mNlXjsdu.png",alt:"Snipaste_2022-05-11_11-33-30.png"}})]),s._v(" "),a("h3",{attrs:{id:"选择加密方式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#选择加密方式"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("选择加密方式")])])]),s._v(" "),a("p",[s._v("选择默认的推荐的加密方式即可")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/12/yGdvmZMHKNBEDLf.png",alt:"Snipaste_2022-05-11_11-33-54.png"}})]),s._v(" "),a("h2",{attrs:{id:"验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#验证"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("验证")])])]),s._v(" "),a("h3",{attrs:{id:"查看mysql状态"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#查看mysql状态"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("查看MySQL状态")])])]),s._v(" "),a("p",[s._v("使用以下指令，可以查看一下 "),a("code",[s._v("MySQL")]),s._v(" 的状态")]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql status\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("未启动 "),a("code",[s._v("* MySQL is stopped.")])]),s._v(" "),a("h3",{attrs:{id:"启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#启动服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("启动服务")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql start\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("h3",{attrs:{id:"其他"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#其他"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("其他")])])]),s._v(" "),a("div",{staticClass:"language-shell line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("关闭mysql服务\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql stop\n重启mysql服务\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("service")]),s._v(" mysql restart\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);