(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{692:function(t,s,a){},745:function(t,s,a){"use strict";a(692)},764:function(t,s,a){"use strict";a.r(s);a(126);var i=a(649),e=a.n(i),n={name:"grid3",data:function(){return{value:["start","end","center","stretch"],justify:"stretch",align:"stretch"}},watch:{justify:function(){this.updateCss()},align:function(){this.updateCss()}},methods:{updateCss:function(){this.$refs.placeSelf.innerHTML=e.a.highlight("place-self: ".concat(this.align===this.justify?"".concat(this.align):"".concat(this.align," ").concat(this.justify),";"),e.a.languages.css)}},mounted:function(){this.updateCss()}},l=(a(745),a(17)),c=Object(l.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"grid3-container"},[a("div",{staticClass:"grid-wrapper"},[a("div",{staticClass:"grid-item",style:{justifySelf:t.justify,alignSelf:t.align}},[t._v("\n      gird-item\n    ")])]),t._v(" "),a("div",{staticClass:"language-css extra-class"},[a("pre",{staticClass:"language-css"},[a("code",{ref:"placeSelf"})])]),t._v(" "),a("div",{staticClass:"key-value"},[a("span",[t._v("justify-self:  ")]),t._v(" "),t._l(t.value,(function(s,i){return a("el-radio",{key:i,attrs:{label:s},model:{value:t.justify,callback:function(s){t.justify=s},expression:"justify"}})}))],2),t._v(" "),a("div",{staticClass:"key-value"},[a("span",[t._v("align-self:    ")]),t._v(" "),t._l(t.value,(function(s,i){return a("el-radio",{key:i,attrs:{label:s},model:{value:t.align,callback:function(s){t.align=s},expression:"align"}})}))],2)])}),[],!1,null,"5b3a8711",null);s.default=c.exports}}]);