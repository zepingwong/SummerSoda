(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{621:function(a,e,s){"use strict";s.r(e);var r=s(2),t=Object(r.a)({},(function(){var a=this,e=a._self._c;return e("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[e("h2",{attrs:{id:"安装firewall"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#安装firewall"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("安装Firewall")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("yum "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" firewalld firewalld-config\n")])])]),e("h2",{attrs:{id:"开启端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启端口"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("开启端口")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("53")]),a._v("/udp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n")])])]),e("h2",{attrs:{id:"关闭端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#关闭端口"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("关闭端口")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("80")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("443")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("22")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("21")]),a._v("/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --remove-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("53")]),a._v("/udp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n")])])]),e("h2",{attrs:{id:"批量添加区间端口"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#批量添加区间端口"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("批量添加区间端口")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4400")]),a._v("-4600/udp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--zone")]),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v("public --add-port"),e("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[a._v("4400")]),a._v("-4600/tcp "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v("\n")])])]),e("h2",{attrs:{id:"开启防火墙命令"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#开启防火墙命令"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("开启防火墙命令")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("systemctl start firewalld.service\n")])])]),e("h2",{attrs:{id:"重启防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#重启防火墙"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("重启防火墙")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--reload")]),a._v(" 或者 "),e("span",{pre:!0,attrs:{class:"token function"}},[a._v("service")]),a._v(" firewalld restart\n")])])]),e("h2",{attrs:{id:"查看端口列表"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看端口列表"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("查看端口列表")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("firewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--permanent")]),a._v(" --list-port\n")])])]),e("h2",{attrs:{id:"禁用防火墙"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#禁用防火墙"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("禁用防火墙")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("systemctl stop firewalld\n")])])]),e("h2",{attrs:{id:"查看状态"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#查看状态"}},[a._v("#")]),a._v(" "),e("em",[e("strong",[a._v("查看状态")])])]),a._v(" "),e("div",{staticClass:"language-shell extra-class"},[e("pre",{pre:!0,attrs:{class:"language-shell"}},[e("code",[a._v("systemctl status firewalld\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或者")]),a._v("\nfirewall-cmd "),e("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--state")]),a._v("\n")])])])])}),[],!1,null,null,null);e.default=t.exports}}]);