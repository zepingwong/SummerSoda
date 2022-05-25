(window.webpackJsonp=window.webpackJsonp||[]).push([[309],{1048:function(s,n,a){"use strict";a.r(n);var e=a(17),i=Object(e.a)({},(function(){var s=this,n=s.$createElement,a=s._self._c||n;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"_2-1-定义参数-判断查询参数q是否是isbn号"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-定义参数-判断查询参数q是否是isbn号"}},[s._v("#")]),s._v(" 2.1 定义参数，判断查询参数q是否是isbn号")]),s._v(" "),a("div",{staticClass:"language- line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v("@app.route(\"/search/<q>/<page>\")\ndef search(q,page):\n    \"\"\"\n    搜索书籍路由\n    :param q: 关键字 OR isbn\n    :param page: 页码\n    \"\"\"\n    # isbn isbn13 由13个0-9在数字组成\n    # isbn10 由10表0-9表数字组组成，中间可能包含' - '\n\n    isbn_or_key = 'key'\n    if len(q) == 13 and q.isdigit():\n        isbn_or_key = 'isbn'\n    short_q = q.replace('-', '')\n    if '-' in q and len(short_q) == 10 and short_q.isdigit():\n        isbn_or_key = 'isbn'\n    pass\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("p",[s._v("知识点：")]),s._v(" "),a("ul",[a("li",[s._v("字符串有一个函数"),a("code",[s._v("isdigit()")]),s._v("可以判断是否为数字")]),s._v(" "),a("li",[s._v("in 关键字可以判断一个字符串是否在另一个字符串内")]),s._v(" "),a("li",[s._v("多个逻辑判断排列原则：1.大部分判断结果为假的条件应该放在前面；2.需要查询数据库的操作由于会消耗资源，应该尽量靠后")])])])}),[],!1,null,null,null);n.default=i.exports}}]);