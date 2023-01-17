(window.webpackJsonp=window.webpackJsonp||[]).push([[102],{650:function(t,s,e){"use strict";e.r(s);var r=e(2),a=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"问题描述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("问题描述")])])]),t._v(" "),s("p",[t._v("VUE 使用 this.$refs.XXX 结果为 undefined")]),t._v(" "),s("h2",{attrs:{id:"问题分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#问题分析"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("问题分析")])])]),t._v(" "),s("p",[t._v("vue 官网中ref 下有一段话 “关于ref 注册时间的重要说明：因为 ref 本身是作为渲染结果被创建的，在初始渲染的时候你不能访问它们 - 它们还不存在！$refs 也不是响应式的，因此你不应该试图用它在模板中做数据绑定。”")]),t._v(" "),s("p",[t._v("也就是说 ref 只有等页面加载完成好之后你才能调用 this.refs ，如果你使用v-if 、v-for渲染页面的话，那么在刚开始页面没没渲染之前你是拿不到this.refs的，所以要等到页面渲染之后拿才可以。")]),t._v(" "),s("h2",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("解决方法")])])]),t._v(" "),s("ul",[s("li",[t._v("如果你在mounted或者created里获取this.refs，因为dom还未完全加载，所以你是拿不到的， updated 阶段则是完成了数据更新到 DOM 的阶段(对加载回来的数据进行处理)，此时，就可以使用this.refs了。")]),t._v(" "),s("li",[t._v("如果写在(方法)method中，那么可以使用 this.nextTick(() => {})等页面渲染好再调用this.refs.xxx，这样就可以了。")]),t._v(" "),s("li",[t._v("加个定时器延时加载this.$refs（按理说这个方法是有一定的可行性，但是经本人测试在method中会报错，具体的自己测试）")])])])}),[],!1,null,null,null);s.default=a.exports}}]);