(window.webpackJsonp=window.webpackJsonp||[]).push([[399],{953:function(t,s,a){"use strict";a.r(s);var r=a(2),e=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"项目加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#项目加密"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("项目加密")])])]),t._v(" "),s("h3",{attrs:{id:"功能介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#功能介绍"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("功能介绍")])])]),t._v(" "),s("p",[t._v("如果项目具有私密性，不希望被公开，只有填入密钥登录后（关闭标签后登录失效），才能进入内容页面。以数组的格式设置 "),s("code",[t._v("keys")]),t._v("，可以设置多个密码，数组的值必须是32位的 md5 加密密文。")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// .vuepress/config.js")]),t._v("\n\nmodule"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("exports "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("theme")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'reco'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("themeConfig")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 密钥")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("keyPage")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("keys")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'32位的 md5 加密密文'")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1.3.0 版本后需要设置为密文")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("      \n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("color")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#42b983'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("                 "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录页动画球的颜色")]),t._v("\n      "),s("span",{pre:!0,attrs:{class:"token literal-property property"}},[t._v("lineColor")]),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'#42b983'")]),t._v("              "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 登录页动画线的颜色")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),s("h2",{attrs:{id:"文章加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文章加密"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("文章加密")])])]),t._v(" "),s("p",[t._v("如果项目是公开的，而某些文章可能需要加密，需要在 "),s("code",[t._v("frontmatter")]),t._v(" 以数组的格式设置 "),s("code",[t._v("keys")]),t._v("，可以设置多个密码，数组的值必须是32位的 "),s("code",[t._v("md5")]),t._v(" 加密密文。")]),t._v(" "),s("div",{staticClass:"custom-block warning"},[s("p",{staticClass:"title"}),s("p",[t._v("遗留BUG：从某篇单独加密的文章直接进入另一篇文章时（比如导航栏）加密无法隐藏")])]),s("h2",{attrs:{id:"设置密码"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#设置密码"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("设置密码")])])]),t._v(" "),s("p",[t._v("如果你的密码是 "),s("code",[t._v("123456")]),t._v("，需要将密码字符串设置为32位的 md5 加密密文，也就是 "),s("code",[t._v("e10adc3949ba59abbe56e057f20f883e")]),t._v("。网站发布后，在密码输入框输入 "),s("code",[t._v("123456")]),t._v(" 即可进入网站，同时他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码。")]),t._v(" "),s("ThemeDocs-md5"),t._v(" "),s("h2",{attrs:{id:"绝对加密"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#绝对加密"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("绝对加密")])])]),t._v(" "),s("p",[t._v("项目的默认加密方式，只是将加密页定位到实际内容上方，所以这种加密功能本身是没有什么作用的。")]),t._v(" "),s("p",[t._v("如果需要绝对的加密，需要设置 "),s("code",[t._v("themeConfig.absoluteEncryption: true")]),t._v("，但是这样会影响两点：")]),t._v(" "),s("ul",[s("li",[t._v("页面的 SSR 渲染；")]),t._v(" "),s("li",[t._v("锚点的跳转。")])])],1)}),[],!1,null,null,null);s.default=e.exports}}]);