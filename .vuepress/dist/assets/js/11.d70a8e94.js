(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{431:function(e,t,n){},432:function(e,t,n){"use strict";n(431)},451:function(e,t,n){},503:function(e,t,n){"use strict";n(451)},561:function(e,t,n){"use strict";n.r(t);var o={name:"NotFound",data:()=>({msgs:["There's nothing here.","How did we get here?","That's a Four-Oh-Four.","Looks like we've got some broken links."]}),computed:{noFoundPageByTencent(){return!1!==this.$themeConfig.noFoundPageByTencent}},methods:{getMsg(){return this.msgs[Math.floor(Math.random()*this.msgs.length)]}},mounted(){if(this.noFoundPageByTencent){const e=document.createElement("script");e.setAttribute("homePageName","回到首页"),e.setAttribute("homePageUrl",this.$site.base),e.setAttribute("src","//qzonestyle.gtimg.cn/qzone/hybrid/app/404/search_children.js"),document.body.append(e)}}},s=(n(432),n(503),n(2)),i=Object(s.a)(o,(function(){var e=this,t=e._self._c;return e.noFoundPageByTencent?e._e():t("section",{staticClass:"theme-container"},[t("article",{staticClass:"content"},[t("h1",[e._v("404")]),e._v(" "),t("blockquote",[e._v(e._s(e.getMsg()))]),e._v(" "),t("router-link",{attrs:{to:"/"}},[e._v("Take me home.")])],1)])}),[],!1,null,null,null);t.default=i.exports}}]);