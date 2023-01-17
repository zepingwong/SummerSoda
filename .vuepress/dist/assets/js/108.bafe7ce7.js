(window.webpackJsonp=window.webpackJsonp||[]).push([[108],{656:function(a,s,e){"use strict";e.r(s);var t=e(2),v=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"背景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#背景"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("背景")])])]),a._v(" "),s("p",[a._v("经常切换于Windows与Linux之间的用户可能都面临一个问题——二者的一些命令是不同的，有时候很容易弄混了，比如Windows下列出目录中的文件与文件夹用命令"),s("code",[a._v("dir")]),a._v("，但是在Linux下却是用"),s("code",[a._v("ls")]),a._v("的。")]),a._v(" "),s("h2",{attrs:{id:"linux"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#linux"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("Linux")])])]),a._v(" "),s("p",[a._v("在Linux下解决这个问题可以用"),s("code",[a._v("alias")]),a._v("建立别名来使用Windows下的命令，例如")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[a._v("alias")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token assign-left variable"}},[a._v("dir")]),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),s("span",{pre:!0,attrs:{class:"token string"}},[a._v("'ls'")]),a._v("\n")])])]),s("p",[a._v("然后你就可以使用"),s("code",[a._v("dir")]),a._v("来代替"),s("code",[a._v("ls")]),a._v("命令了。")]),a._v(" "),s("h2",{attrs:{id:"windows"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#windows"}},[a._v("#")]),a._v(" "),s("em",[s("strong",[a._v("Windows")])])]),a._v(" "),s("p",[a._v("但是在Windows下却没有发现有"),s("code",[a._v("alias")]),a._v("命令。不过我们可以通过一个非常简单批处理脚本来“建立别名”。脚本内容如下：")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@echo off\ndir\n")])])]),s("p",[a._v("将脚本保存为"),s("code",[a._v("ls.bat")]),a._v("，存放到"),s("code",[a._v("C:\\WINDOWS\\system32\\")]),a._v("（当然你也可以存放到其他path变量指向的目录），这时候你在Windows下就可以使用"),s("code",[a._v("ls")]),a._v("命令了。")]),a._v(" "),s("p",[a._v("例如 "),s("code",[a._v("cls")]),a._v("→"),s("code",[a._v("clear")]),a._v("等也可以这样操作")]),a._v(" "),s("p",[a._v("还可以考虑另一种宏定义的方式，如")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("doskey xiaohei=dirdoskey\ndir=echo bad command or file name\n")])])]),s("p",[a._v("现在dir命令将无法使用，由我设置的"),s("code",[a._v("xiaohei")]),a._v("代替了。输入"),s("code",[a._v("dir")]),a._v("显示"),s("code",[a._v("Bad Command Or File Name")]),a._v(",而输入我自己设置的"),s("code",[a._v("xiaohei")]),a._v("，就是以前dir一样的功能。知道这个用法，我们还可以使"),s("code",[a._v("fdisk")]),a._v("、"),s("code",[a._v("format")]),a._v("、"),s("code",[a._v("deltree")]),a._v("等危险的命令失效。")]),a._v(" "),s("p",[a._v("要使"),s("code",[a._v("xiaohei")]),a._v("还原成"),s("code",[a._v("dir")]),a._v("命令，只需要执行")]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("doskey dir=\ndoskey xiaohei=\n")])])]),s("p",[a._v("即可完成命令的还原操作。")]),a._v(" "),s("p",[s("code",[a._v("type")]),a._v("→"),s("code",[a._v("cat")])]),a._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[a._v("@echo off\ntype %1\n")])])])])}),[],!1,null,null,null);s.default=v.exports}}]);