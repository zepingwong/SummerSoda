(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{628:function(t,e,o){},630:function(t,e,o){},631:function(t,e,o){},633:function(t,e,o){"use strict";o(91);var n={components:{RecoIcon:o(626).b},props:{pageInfo:{type:Object,default:function(){return{}}},currentTag:{type:String,default:""},showAccessNumber:{type:Boolean,default:!1}},data:function(){return{numStyle:{fontSize:".9rem",fontWeight:"normal",color:"#999"}}},methods:{goTags:function(t){this.$route.path!=="/tag/".concat(t,"/")&&this.$router.push({path:"/tag/".concat(t,"/")})},formatDateValue:function(t){return new Intl.DateTimeFormat(this.$lang).format(new Date(t))}}},a=(o(634),o(17)),r=Object(a.a)(n,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[t.pageInfo.frontmatter.author||t.$themeConfig.authorConfig.author?o("reco-icon",{attrs:{icon:"icon-account"}},[o("span",[t._v(t._s(t.pageInfo.frontmatter.author||t.$themeConfig.authorConfig.author))])]):t._e(),t._v(" "),t.pageInfo.frontmatter.date?o("reco-icon",{attrs:{icon:"icon-date"}},[o("span",[t._v(t._s(t.formatDateValue(t.pageInfo.frontmatter.date)))])]):t._e(),t._v(" "),!0===t.showAccessNumber?o("reco-icon",{attrs:{icon:"icon-eye"}},[o("AccessNumber",{attrs:{idVal:t.pageInfo.path,numStyle:t.numStyle}})],1):t._e(),t._v(" "),t.pageInfo.frontmatter.tags?o("reco-icon",{staticClass:"tags",attrs:{icon:"icon-tag"}},t._l(t.pageInfo.frontmatter.tags,(function(e,n){return o("span",{key:n,staticClass:"tag-item",class:{active:t.currentTag===e},on:{click:function(o){return o.stopPropagation(),t.goTags(e)}}},[t._v(t._s(e))])})),0):t._e()],1)}),[],!1,null,"2f82b756",null);e.a=r.exports},634:function(t,e,o){"use strict";o(628)},635:function(t,e,o){"use strict";o(630)},636:function(t,e,o){"use strict";o(631)},638:function(t,e,o){"use strict";o(47),o(158),o(202);var n={methods:{_getStoragePage:function(){var t=window.location.pathname,e=JSON.parse(sessionStorage.getItem("currentPage"));return null===e||t!==e.path?(sessionStorage.setItem("currentPage",JSON.stringify({page:1,path:""})),1):parseInt(e.page)},_setStoragePage:function(t){var e=window.location.pathname;sessionStorage.setItem("currentPage",JSON.stringify({page:t,path:e}))}}},a=o(626),r={components:{PageInfo:o(633).a,RecoIcon:a.b},props:["item","currentPage","currentTag"]},s=(o(635),o(17)),i={name:"NoteAbstract",mixins:[n],components:{NoteAbstractItem:Object(s.a)(r,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"abstract-item",on:{click:function(e){return t.$router.push(t.item.path)}}},[t.item.frontmatter.sticky?o("reco-icon",{attrs:{icon:"reco-sticky"}}):t._e(),t._v(" "),o("div",{staticClass:"title"},[t.item.frontmatter.keys?o("reco-icon",{attrs:{icon:"reco-lock"}}):t._e(),t._v(" "),o("router-link",{attrs:{to:t.item.path}},[t._v(t._s(t.item.title))])],1),t._v(" "),o("div",{staticClass:"abstract",domProps:{innerHTML:t._s(t.item.excerpt)}}),t._v(" "),o("PageInfo",{attrs:{pageInfo:t.item,currentTag:t.currentTag}})],1)}),[],!1,null,"f4d9897e",null).exports},props:["data","currentTag"],data:function(){return{currentPage:1}},computed:{currentPageData:function(){var t=(this.currentPage-1)*this.$perPage,e=this.currentPage*this.$perPage;return this.data.slice(t,e)}},methods:{getCurrentPage:function(t){this.currentPage=t,this._setStoragePage(t),this.$emit("paginationChange",t)}},mounted:function(){this.currentPage=this._getStoragePage()||1},watch:{$route:function(){this.currentPage=this._getStoragePage()||1}}},c=(o(636),Object(s.a)(i,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"abstract-wrapper"},[t._l(t.currentPageData,(function(e){return o("NoteAbstractItem",{key:e.path,attrs:{item:e,currentPage:t.currentPage,currentTag:t.currentTag}})})),t._v(" "),o("pagination",{attrs:{className:"pagination",total:t.data.length,currentPage:t.currentPage},on:{getCurrentPage:t.getCurrentPage}})],2)}),[],!1,null,"dc70218a",null));e.a=c.exports},663:function(t,e,o){},664:function(t,e,o){},665:function(t,e,o){},666:function(t,e,o){},667:function(t,e,o){},668:function(t,e,o){},669:function(t,e,o){},670:function(t,e,o){},671:function(t,e,o){},672:function(t,e,o){},673:function(t,e,o){},705:function(t,e,o){"use strict";o(663)},706:function(t,e,o){"use strict";o(664)},707:function(t,e,o){"use strict";o(665)},708:function(t,e,o){"use strict";o(666)},709:function(t,e,o){"use strict";o(667)},710:function(t,e,o){t.exports=o.p+"assets/img/yesterday.8e49f298.svg"},711:function(t,e,o){t.exports=o.p+"assets/img/today.484a4d22.svg"},712:function(t,e,o){t.exports=o.p+"assets/img/tomorrow.81f0b143.svg"},713:function(t,e,o){"use strict";o(668)},714:function(t,e,o){"use strict";o(669)},715:function(t,e,o){"use strict";o(670)},716:function(t,e,o){"use strict";o(671)},717:function(t,e,o){"use strict";o(672)},718:function(t,e,o){"use strict";o(673)},729:function(t,e,o){"use strict";o.r(e);o(55),o(62);var n=o(74),a=(o(123),o(626)),r=o(157),s={name:"TagList",components:{RecoIcon:a.b},props:{currentTag:{type:String,default:""}},computed:{tags:function(){return[{name:this.$customLocales.all,path:"/tag/"}].concat(Object(n.a)(this.$tagesList))}},methods:{tagClick:function(t){this.$emit("getCurrentTag",t)},getColor:function(){return Object(r.b)()}}},i=(o(705),o(17)),c=Object(i.a)(s,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"tags"},[o("hr"),t._v(" "),0!==t.$tags.list.length?o("h4",[o("reco-icon",{attrs:{icon:"icon-tag"}}),t._v(" "+t._s(t.$customLocales.tag))],1):t._e(),t._v(" "),t._l(t.tags,(function(e,n){return o("span",{directives:[{name:"show",rawName:"v-show",value:!e.pages||e.pages&&e.pages.length>0,expression:"!item.pages || (item.pages && item.pages.length > 0)"}],key:n,class:{active:e.name===t.currentTag},style:{backgroundColor:t.getColor()},on:{click:function(o){return t.tagClick(e)}}},[t._v(t._s(e.name)+"\n  ")])}))],2)}),[],!1,null,"15067163",null).exports,l=(o(63),o(27),o(48),o(642)),u=o.n(l),h={name:"FriendLink",components:{RecoIcon:a.b},data:function(){return{isPC:!0,popupWindowStyle:{left:0,top:0}}},computed:{dataAddColor:function(){var t=(this&&this.$themeConfig.authorConfig).friendLink;return(void 0===t?[]:t).map((function(t){return t.color=Object(r.b)(),t}))}},methods:{getImgUrl:function(t){var e=t.logo,o=void 0===e?"":e,n=t.email,a=void 0===n?"":n;return o&&/^http/.test(o)?o:o&&!/^http/.test(o)?this.$withBase(o):"//1.gravatar.com/avatar/".concat(u()(a||""),"?s=50&amp;d=mm&amp;r=x")},adjustPosition:function(t){var e=document.body.offsetWidth,o=t.getBoundingClientRect(),n=e-(o.x+o.width);if(n<0){var a=t.offsetLeft;this.popupWindowStyle.left=a+n+"px"}},hideDetail:function(t){t.target.querySelector(".popup-window-wrapper").style.display="none"},showDetail:function(t){var e=this,o=t.target;o.querySelector(".popup-window-wrapper").style.display="block";var n=o.querySelector(".popup-window"),a=document.querySelector(".info-wrapper"),r=o.clientWidth,s=n.clientWidth,i=n.clientHeight;if(this.isPC)this.popupWindowStyle.left=(r-s)/2+"px",this.popupWindowStyle.top=-i+"px",a.style.overflow="visible",this.$nextTick((function(){e.adjustPosition(n)}));else{var c=function(t){var e=document,o=t.getBoundingClientRect(),n=o.left,a=o.top;return{left:n+=e.documentElement.scrollLeft||e.body.scrollLeft,top:a+=e.documentElement.scrollTop||e.body.scrollTop}};a.style.overflow="hidden";var l=c(o).left-c(a).left;this.popupWindowStyle.left=-l+(a.clientWidth-n.clientWidth)/2+"px",this.popupWindowStyle.top=-i+"px"}}},mounted:function(){this.isPC=!/Android|webOS|iPhone|iPod|BlackBerry/i.test(navigator.userAgent)}},d=(o(706),Object(i.a)(h,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"friend-link-wrapper"},[o("hr"),t._v(" "),t.$themeConfig.authorConfig.friendLink&&0!==t.$themeConfig.authorConfig.friendLink.length?o("h4",[o("reco-icon",{attrs:{icon:"icon-friend"}}),t._v(" "+t._s(t.$customLocales.friendLink))],1):t._e(),t._v(" "),t._l(t.dataAddColor,(function(e,n){return o("div",{key:n,staticClass:"friend-link-item",attrs:{target:"_blank"},on:{mouseenter:function(e){return t.showDetail(e)},mouseleave:function(e){return t.hideDetail(e)}}},[o("span",{staticClass:"list-style",style:{backgroundColor:e.color}}),t._v("\n    "+t._s(e.title)+"\n    "),o("transition",{attrs:{name:"fade"}},[o("div",{staticClass:"popup-window-wrapper"},[o("div",{ref:"popupWindow",refInFor:!0,staticClass:"popup-window",style:t.popupWindowStyle},[o("div",{staticClass:"logo"},[o("img",{attrs:{src:t.getImgUrl(e),alt:"logo"}})]),t._v(" "),o("div",{staticClass:"info"},[o("div",{staticClass:"title"},[o("h4",[t._v(t._s(e.title))]),t._v(" "),o("a",{staticClass:"btn-go",style:{backgroundColor:e.color},attrs:{href:e.link,target:"_blank"}},[t._v("GO")])]),t._v(" "),e.desc?o("p",[t._v(t._s(e.desc))]):t._e()])])])])],1)}))],2)}),[],!1,null,"6dfc8da7",null).exports),f=o(638),m=o(683),p={name:"CategoryList",components:{RecoIcon:a.b},methods:{getColor:function(){return Object(r.b)()}}},g=(o(707),Object(i.a)(p,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("hr"),t._v(" "),o("h4",[o("reco-icon",{attrs:{icon:"icon-category"}}),t._v(" "+t._s(t.$customLocales.category))],1),t._v(" "),o("ul",{staticClass:"category-wrapper"},t._l(this.$categories.list,(function(e,n){return o("li",{key:n,staticClass:"category-item"},[o("router-link",{attrs:{to:e.path}},[o("span",{staticClass:"category-name"},[t._v(t._s(e.name))]),t._v(" "),o("span",{staticClass:"post-num",style:{backgroundColor:t.getColor()}},[t._v(t._s(e.pages.length))])])],1)})),0)])}),[],!1,null,"6a25d2ba",null).exports),v={name:"HomeBlog",components:{NoteAbstract:f.a,TagList:c,FriendLink:d,ModuleTransition:a.a,PersonalInfo:m.a,CategoryList:g},data:function(){return{state:{recoShow:!1,heroHeight:0}}},computed:{recoShowModule:function(){return this&&this.$parent.recoShowModule},heroImageStyle:function(){return this.$frontmatter.heroImageStyle||{}}},mounted:function(){this.state.heroHeight=document.querySelector(".hero").clientHeight,this.state.recoShow=!0},methods:{paginationChange:function(t){var e=this;setTimeout((function(){window.scrollTo(0,e.heroHeight)}),100)},getPagesByTags:function(t){this.$router.push({path:t.path})}}},_=(o(708),Object(i.a)(v,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-blog"},[o("div",{staticClass:"hero",style:Object.assign({},t.$bgImageStyle)},[o("div",[o("ModuleTransition",[t.recoShowModule&&t.$frontmatter.heroImage?o("img",{staticClass:"hero-img",style:t.heroImageStyle||{},attrs:{src:t.$withBase(t.$frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.$frontmatter.heroText?o("h1",[t._v("\n          "+t._s(t.$frontmatter.heroText||t.$title)+"\n        ")]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.$frontmatter.tagline?o("p",{staticClass:"description"},[t._v("\n          "+t._s(t.$frontmatter.tagline||t.$description)+"\n        ")]):t._e()])],1)]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.16"}},[o("div",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-blog-wrapper"},[o("div",{staticClass:"blog-list"},[o("note-abstract",{attrs:{data:t.$recoPosts},on:{paginationChange:t.paginationChange}})],1),t._v(" "),o("div",{staticClass:"info-wrapper"},[!1!==t.$frontmatter.PersonalInfo?o("personal-info"):t._e(),t._v(" "),!1!==t.$frontmatter.TagList?o("tag-list",{on:{getCurrentTag:t.getPagesByTags}}):t._e(),t._v(" "),!1!==t.$frontmatter.CategoryList?o("category-list"):t._e(),t._v(" "),o("friend-link")],1)])]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.24"}},[o("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"home-center",attrs:{custom:""}})],1)],1)}),[],!1,null,"7ce9ddf8",null).exports),C=o(643),w={name:"HomeDocs",components:{NavLink:C.a,ModuleTransition:a.a},computed:{recoShowModule:function(){return this&&this.$parent.recoShowModule},frontmatter:function(){return this.$frontmatter},actionLink:function(){return this&&{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}}}},b=(o(709),Object(i.a)(w,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-docs-wrapper"},[o("div",{staticClass:"hero",style:Object.assign({},t.$bgImageStyle)},[o("div",[o("ModuleTransition",[t.recoShowModule&&t.frontmatter.heroImage?o("img",{staticClass:"hero-img",style:t.frontmatter.heroImageStyle||{},attrs:{src:t.$withBase(t.frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.frontmatter.heroText?o("h1",[t._v("\n          "+t._s(t.frontmatter.heroText||t.$title)+"\n        ")]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.frontmatter.tagline?o("p",{staticClass:"description"},[t._v("\n          "+t._s(t.frontmatter.tagline||t.$description)+"\n        ")]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.12"}},[t.recoShowModule&&t.frontmatter.actionText&&t.frontmatter.actionLink?o("p",{staticClass:"action"},[o("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1)]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&t.frontmatter.features&&t.frontmatter.features.length?o("div",{staticClass:"features"},t._l(t.frontmatter.features,(function(e,n){return o("div",{key:n,staticClass:"feature"},[o("h2",[t._v(t._s(e.title))]),t._v(" "),o("p",[t._v(t._s(e.details))])])})),0):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.20"}},[o("Content",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}],staticClass:"md-content-wrapper",attrs:{custom:""}})],1)],1)}),[],!1,null,"51667bcd",null).exports),S=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:o(710),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:o(711),alt:""}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"img-wrapper"},[e("img",{attrs:{src:o(712),alt:""}})])}],$={components:{ModuleTransition:a.a,NavLink:C.a},data:function(){return{downloads:0}},computed:{recoShowModule:function(){return this&&this.$parent.recoShowModule},actionLink:function(){return this&&{link:this.$frontmatter.actionLink,text:this.$frontmatter.actionText}},frontmatter:function(){return this.$frontmatter}}},y=(o(713),Object(i.a)($,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home-page-one-wrapper"},[o("div",{staticClass:"hero",style:t.$bgImageStyle},[o("div",[o("ModuleTransition",[t.recoShowModule&&t.frontmatter.heroImage&&!t.$parent.firstLoad&&t.$parent.isHasKey?o("img",{staticClass:"hero-img",style:t.frontmatter.heroImageStyle||{},attrs:{src:t.$withBase(t.frontmatter.heroImage),alt:"hero"}}):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.04"}},[t.recoShowModule&&null!==t.frontmatter.heroText?o("h1",[t._v("\n          "+t._s(t.frontmatter.heroText||t.$title)+"\n        ")]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule&&null!==t.frontmatter.tagline?o("p",{staticClass:"description"},[t._v("\n          "+t._s(t.frontmatter.tagline||t.$description)+"\n        ")]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.12"}},[t.recoShowModule&&t.frontmatter.actionText&&t.frontmatter.actionLink?o("p",{staticClass:"action"},[o("NavLink",{staticClass:"action-button",attrs:{item:t.actionLink}})],1):t._e()])],1)]),t._v(" "),o("div",{staticClass:"wish"},[o("div",{staticClass:"yesterday"},[o("div",{staticClass:"wish-inner"},[t._m(0),t._v(" "),o("div",{staticClass:"text-wrapper"},[o("h1",[t._v(t._s(t.frontmatter.features[0].title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.frontmatter.features[0].details))])])])]),t._v(" "),o("div",{staticClass:"today"},[o("div",{staticClass:"wish-inner"},[o("div",{staticClass:"text-wrapper"},[o("h1",[t._v(t._s(t.frontmatter.features[1].title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.frontmatter.features[1].details))])]),t._v(" "),t._m(1)])]),t._v(" "),o("div",{staticClass:"tomorrow"},[o("div",{staticClass:"wish-inner"},[t._m(2),t._v(" "),o("div",{staticClass:"text-wrapper"},[o("h1",[t._v(t._s(t.frontmatter.features[2].title))]),t._v(" "),o("p",{staticClass:"description"},[t._v(t._s(t.frontmatter.features[2].details))])])])])]),t._v(" "),o("section",{staticClass:"md-content-wrapper"},[o("Content")],1)])}),S,!1,null,"0e9792b0",null).exports),k=(o(75),o(56),o(91),o(8),o(204),o(76)),x={data:function(){return{isShow:!0}},computed:{headers:function(){return this.$showSubSideBar?this.$page.headers:[]}},methods:{fold:function(){this.isShow=!this.isShow,this.$emit("foldSubSidebar",this.isShow),localStorage.setItem("showSubSidebar",this.isShow.toString())},isLinkActive:function(t){var e=Object(k.e)(this.$route,this.$page.path+"#"+t.slug);return e&&setTimeout((function(){document.querySelector(".reco-side-".concat(t.slug)).scrollIntoView()}),300),e}},beforeMount:function(){var t=localStorage.getItem("showSubSidebar");"false"===t?this.isShow=!1:"true"===t&&(this.isShow=!0),this.$emit("foldSubSidebar",this.isShow)}},T=(o(714),Object(i.a)(x,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{directives:[{name:"show",rawName:"v-show",value:t.headers.length>0,expression:"headers.length > 0"}],staticClass:"sub-side-bar"},[o("div",{staticClass:"sub-sidebar-content",style:{height:t.isShow?"":"100%"}},[o("span",{style:{display:t.isShow?"":"flex"},on:{click:t.fold}},[t._v(t._s(t.isShow?"隐藏":"显示")+"\n    ")]),t._v(" "),o("ul",{directives:[{name:"show",rawName:"v-show",value:t.isShow,expression:"isShow"}],staticClass:"sub-sidebar-wrapper"},t._l(t.headers,(function(e){var n,a;return o("li",{key:e.title,class:(n={active:t.isLinkActive(e)},n["level-"+e.level]=!0,n)},[o("router-link",{class:(a={"sidebar-link":!0},a["reco-side-"+e.slug]=!0,a),attrs:{to:t.$page.path+"#"+e.slug}},[o("p",[t._v(t._s(e.title))])])],1)})),0)])])}),[],!1,null,"7097283c",null).exports);function M(t,e,o){var n=[];!function t(e,o){for(var n=0,a=e.length;n<a;n++)"group"===e[n].type?t(e[n].children||[],o):o.push(e[n])}(e,n);for(var a=0;a<n.length;a++){var r=n[a];if("page"===r.type&&r.path===decodeURIComponent(t.path))return n[a+o]}}var I={components:{PageInfo:o(633).a,ModuleTransition:a.a,SubSidebar:T},props:["sidebarItems"],data:function(){return{isShowSubSidebar:!0}},computed:{recoShowModule:function(){return this.$parent.recoShowModule},shouldShowComments:function(){var t=this.$frontmatter.isShowComments,e=(this.$themeConfig.valineConfig||{showComment:!0}).showComment;return!1!==e&&!1!==t||!1===e&&!0===t},showAccessNumber:function(){var t=this||{},e=t.$themeConfig.valineConfig,o=t.$themeLocaleConfig.valineConfig||e;return o&&!1!==o.visitor},lastUpdated:function(){var t,e=((null===(t=this.$themeConfig)||void 0===t?void 0:t.pageConfig)||{pageConfig:!1}).lastUpdated;return!0===e&&this.$page.lastUpdated},prev:function(){var t,e,o=this.$frontmatter.prev;if(!1!==o)return o?Object(k.k)(this.$site.pages,o,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,-1))},next:function(){var t,e,o=this.$frontmatter.next;if(!1!==o)return o?Object(k.k)(this.$site.pages,o,this.$route.path):(t=this.$page,e=this.sidebarItems,M(t,e,1))},editLink:function(){if(!1===this.$frontmatter.editLink)return!1;var t=this.$themeConfig,e=t.repo,o=t.editLinks,n=t.docsDir,a=void 0===n?"":n,r=t.docsBranch,s=void 0===r?"master":r,i=t.docsRepo,c=void 0===i?e:i;return c&&o&&this.$page.relativePath?function(t,e,o,n,a){if(/bitbucket.org/.test(t)){return(k.i.test(e)?e:t).replace(k.c,"")+"/src"+"/".concat(n,"/")+(o?o.replace(k.c,"")+"/":"")+a+"?mode=edit&spa=0&at=".concat(n,"&fileviewer=file-view-default")}return(k.i.test(e)?e:"https://github.com/".concat(e)).replace(k.c,"")+"/edit"+"/".concat(n,"/")+(o?o.replace(k.c,"")+"/":"")+a}(e,c,a,s,this.$page.relativePath):""},pageStyle:function(){return this.$showSubSideBar&&this.isShowSubSidebar?{}:{paddingRight:"0"}}},methods:{foldSubSidebar:function(t){this.isShowSubSidebar=t}}},P=(o(715),Object(i.a)(I,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",{staticClass:"page",style:t.pageStyle},[o("ModuleTransition",[o("section",{directives:[{name:"show",rawName:"v-show",value:t.recoShowModule,expression:"recoShowModule"}]},[o("div",{staticClass:"page-title"},[o("h1",{staticClass:"title"},[t._v(t._s(t.$page.title))]),t._v(" "),o("PageInfo",{attrs:{pageInfo:t.$page,showAccessNumber:t.showAccessNumber}})],1),t._v(" "),o("Content",{staticClass:"theme-reco-content"})],1)]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.08"}},[t.recoShowModule?o("footer",{staticClass:"page-edit"},[t.editLink?o("div",{staticClass:"edit-link"},[o("a",{attrs:{href:t.editLink,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(t.$customLocales.editLinkText))]),t._v(" "),o("OutboundLink")],1):t._e(),t._v(" "),t.lastUpdated?o("div",{staticClass:"last-updated"},[o("span",{staticClass:"prefix"},[t._v(t._s(t.$customLocales.lastUpdatedText)+": ")]),t._v(" "),o("span",{staticClass:"time"},[t._v(t._s(t.lastUpdated))])]):t._e()]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.16"}},[t.recoShowModule&&(t.prev||t.next)?o("div",{staticClass:"page-nav"},[o("p",{staticClass:"inner"},[t.prev?o("span",{staticClass:"prev"},[t.prev?o("router-link",{staticClass:"prev",attrs:{to:t.prev.path}},[t._v("\n            "+t._s(t.prev.title||t.prev.path)+"\n          ")]):t._e()],1):t._e(),t._v(" "),t.next?o("span",{staticClass:"next"},[t.next?o("router-link",{attrs:{to:t.next.path}},[t._v("\n            "+t._s(t.next.title||t.next.path)+"\n          ")]):t._e()],1):t._e()])]):t._e()]),t._v(" "),o("ModuleTransition",{attrs:{delay:"0.24"}},[t.recoShowModule?o("Comments",{attrs:{isShowComments:t.shouldShowComments}}):t._e()],1),t._v(" "),o("ModuleTransition",[t.recoShowModule?o("SubSidebar",{style:{bottom:!0===t.$themeConfig.KanBanNiang.isShow?"11rem":0},on:{foldSubSidebar:t.foldSubSidebar}}):t._e()],1)],1)}),[],!1,null,null,null).exports),L={name:"Footer",components:{RecoIcon:a.b},computed:{showAccessNumber:function(){var t=this.$themeConfig.valineConfig,e=this.$themeLocaleConfig.valineConfig||t;return e&&!1!==e.visitor}}},O=(o(716),Object(i.a)(L,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"footer-wrapper"},[t.$themeConfig.recordConfig.record?o("span",[o("reco-icon",{attrs:{icon:"icon-beian"}}),t._v(" "),o("a",{attrs:{href:t.$themeConfig.recordLink||"#"}},[t._v(t._s(t.$themeConfig.recordConfig.record))])],1):t._e(),t._v(" "),o("span",[o("reco-icon",{attrs:{icon:"icon-copyright"}}),t._v(" "),o("a",[t.$themeConfig.authorConfig.author?o("span",[t._v(t._s(t.$themeConfig.authorConfig.author))]):t._e(),t._v(" "),t.$themeConfig.recordConfig.startYear&&t.$themeConfig.recordConfig.startYear!==(new Date).getFullYear()?o("span",[t._v(t._s(t.$themeConfig.recordConfig.startYear)+" - ")]):t._e(),t._v("\n      "+t._s((new Date).getFullYear())+"\n    ")])],1),t._v(" "),o("span",{directives:[{name:"show",rawName:"v-show",value:t.showAccessNumber,expression:"showAccessNumber"}]},[o("reco-icon",{attrs:{icon:"icon-eye"}}),t._v(" "),o("AccessNumber",{attrs:{idVal:"/"}})],1),t._v(" "),t.$themeConfig.recordConfig.cyberSecurityRecord&&t.$themeConfig.recordConfig.cyberSecurityLink?o("span",{staticClass:"cyber-security"},[o("img",{attrs:{src:"https://img.alicdn.com/tfs/TB1..50QpXXXXX7XpXXXXXXXXXX-40-40.png",alt:""}}),t._v(" "),o("a",{attrs:{href:t.$themeConfig.recordConfig.cyberSecurityLink||"#"}},[t._v(t._s(t.$themeConfig.recordConfig.cyberSecurityRecord))])]):t._e(),t._v(" "),o("Comments",{attrs:{isShowComments:!1}})],1)}),[],!1,null,"8e933d84",null).exports),N=o(640),j={mixins:[o(639).a],components:{HomeBlog:_,HomeDocs:b,Page:P,Common:N.a,Footer:O,HomePageOne:y},computed:{sidebarItems:function(){var t=this.$page,e=this.$site,o=this.$localePath;return t?Object(k.l)(t,t.regularPath,e,o):[]},homeCom:function(){var t=(this.$frontmatter||this.$themeConfig||{type:"docs"}).type;return["docs","blog","HomeBlog","HomeDocs","HomePageOne"].indexOf(t)>0?"blog"===t?"HomeBlog":"docs"===t?"HomeDocs":t:"HomeBlog"}}},B=(o(717),o(718),Object(i.a)(j,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("Common",{attrs:{sidebarItems:t.sidebarItems,showModule:t.recoShowModule}},[t.$frontmatter.home?o(t.homeCom,{tag:"component"}):o("Page",{attrs:{"sidebar-items":t.sidebarItems}}),t._v(" "),t.$frontmatter.home?o("Footer",{staticClass:"footer"}):t._e()],1)}),[],!1,null,null,null));e.default=B.exports}}]);