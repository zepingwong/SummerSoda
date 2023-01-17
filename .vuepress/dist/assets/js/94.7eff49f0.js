(window.webpackJsonp=window.webpackJsonp||[]).push([[94],{642:function(s,a,t){"use strict";t.r(a);var e=t(2),r=Object(e.a)({},(function(){var s=this,a=s._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("问题描述")])])]),s._v(" "),a("h3",{attrs:{id:"环境"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("环境")])])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("操作系统")]),s._v("：Windows 10/11")]),s._v(" "),a("li",[a("strong",[s._v("终端")]),s._v("：Windows Terminal、Windows PowerShell")])]),s._v(" "),a("h3",{attrs:{id:"问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("问题")])])]),s._v(" "),a("p",[s._v("Windows环境下执行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-add ~/.ssh/id_rsa\n")])])]),a("p",[s._v("报错如下")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Error connecting to agent: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n")])])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/wpYvzGxBdteugfq.png",alt:"Snipaste_2022-04-19_09-24-44.png"}})]),s._v(" "),a("h2",{attrs:{id:"问题描述-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述-2"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("问题描述")])])]),s._v(" "),a("h3",{attrs:{id:"环境-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#环境-2"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("环境")])])]),s._v(" "),a("ul",[a("li",[a("strong",[s._v("操作系统")]),s._v("：Windows 10/11")]),s._v(" "),a("li",[a("strong",[s._v("终端")]),s._v("：Windows Terminal、Windows PowerShell")])]),s._v(" "),a("h3",{attrs:{id:"问题-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题-2"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("问题")])])]),s._v(" "),a("p",[s._v("Windows环境下执行")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-add ~/.ssh/id_rsa\n")])])]),a("p",[s._v("报错如下")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Error connecting to agent: No such "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("file")]),s._v(" or directory\n")])])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/wpYvzGxBdteugfq.png",alt:"Snipaste_2022-04-19_09-24-44.png"}})]),s._v(" "),a("h2",{attrs:{id:"解决步骤"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决步骤"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("解决步骤")])])]),s._v(" "),a("h3",{attrs:{id:"_1-启动powershell"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-启动powershell"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("1. 启动PowerShell")])])]),s._v(" "),a("p",[s._v("管理员身份启动 「Windows PowerShell」。")]),s._v(" "),a("h3",{attrs:{id:"_2-检查服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-检查服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("2. 检查服务")])])]),s._v(" "),a("p",[s._v("运行以下指令，检查 "),a("code",[s._v("ssh-agent")]),s._v(" 服务是否启动成功。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("get-service ssh*\n")])])]),a("p",[s._v("若输出如下，显示 "),a("code",[s._v("Status")]),s._v(" 结果为"),a("code",[s._v("Stopped")]),s._v("，则表示服务未启动。")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Status   Name               DisplayName\n------   ----               -----------\nStopped  ssh-agent          OpenSSH Authentication Agent\n")])])]),a("h3",{attrs:{id:"_3-启动服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-启动服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("3. 启动服务")])])]),s._v(" "),a("p",[s._v("使用以下两条指令启动ssh-agent服务")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("Set-Service "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-Name")]),s._v(" ssh-agent "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-StartupType")]),s._v(" Manual\nStart-Service ssh-agent\n")])])]),a("p",[s._v("再次使用 "),a("code",[s._v("get-service ssh*")]),s._v(" 查看服务是否启动，如下图所示显示 "),a("code",[s._v("Status")]),s._v(" 为 "),a("code",[s._v("Running")]),s._v(" 则表示， "),a("code",[s._v("ssh-agent")]),s._v(" 服务已启动。")]),s._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/09/rVhuYi9jHa3vy4w.png",alt:"Snipaste_2022-04-19_09-56-16.png"}})]),s._v(" "),a("h3",{attrs:{id:"_4-检查"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-检查"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("4. 检查")])])]),s._v(" "),a("p",[s._v("运行以下指令查看 "),a("code",[s._v("ssh-agent")]),s._v(" 已经添加的秘钥：")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("ssh-add "),a("span",{pre:!0,attrs:{class:"token parameter variable"}},[s._v("-l")]),s._v("\n")])])]),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/09/I7K1BwPM4NiX2pV.png",alt:"Snipaste_2022-05-09_10-21-40.png"}})]),s._v(" "),a("blockquote",[a("p",[s._v("如果未未添加过秘钥，则输出 "),a("code",[s._v("The agent has no identities")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);