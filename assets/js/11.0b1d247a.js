(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{630:function(e,t,n){},632:function(e,t,n){"use strict";n(630)},650:function(e,t,n){},697:function(e,t,n){"use strict";n(650)},750:function(e,t,n){"use strict";n.r(t);var o={data:function(){return{msgs:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."]}},computed:{noFoundPageByTencent:function(){return!1!==this.$themeConfig.noFoundPageByTencent}},methods:{getMsg:function(){return this.msgs[Math.floor(Math.random()*msgs.length)]}},mounted:function(){if(this.noFoundPageByTencent){var e=document.createElement("script");e.setAttribute("homePageName","回到首页"),e.setAttribute("homePageUrl",this.$site.base),e.setAttribute("src","//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js"),document.body.append(e)}}},s=(n(632),n(697),n(17)),i=Object(s.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.noFoundPageByTencent?e._e():n("section",{staticClass:"theme-container"},[n("article",{staticClass:"content"},[n("h1",[e._v("404")]),e._v(" "),n("blockquote",[e._v(e._s(e.getMsg()))]),e._v(" "),n("router-link",{attrs:{to:"/"}},[e._v("Take me home.")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);