(window.webpackJsonp=window.webpackJsonp||[]).push([[350],{1102:function(n,s,e){"use strict";e.r(s);var a=e(17),t=Object(a.a)({},(function(){var n=this,s=n.$createElement,e=n._self._c||s;return e("ContentSlotsDistributor",{attrs:{"slot-key":n.$parent.slotKey}},[e("h1",{attrs:{id:"_2-1-定义参数-判断查询参数q是否是isbn号"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-定义参数-判断查询参数q是否是isbn号"}},[n._v("#")]),n._v(" 2.1 定义参数，判断查询参数q是否是isbn号")]),n._v(" "),e("div",{staticClass:"language- extra-class"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[n._v("@app.route(\"/search/<q>/<page>\")\ndef search(q,page):\n    \"\"\"\n    搜索书籍路由\n    :param q: 关键字 OR isbn\n    :param page: 页码\n    \"\"\"\n    # isbn isbn13 由13个0-9在数字组成\n    # isbn10 由10表0-9表数字组组成，中间可能包含' - '\n\n    isbn_or_key = 'key'\n    if len(q) == 13 and q.isdigit():\n        isbn_or_key = 'isbn'\n    short_q = q.replace('-', '')\n    if '-' in q and len(short_q) == 10 and short_q.isdigit():\n        isbn_or_key = 'isbn'\n    pass\n")])])]),e("p",[n._v("知识点：")]),n._v(" "),e("ul",[e("li",[n._v("字符串有一个函数"),e("code",[n._v("isdigit()")]),n._v("可以判断是否为数字")]),n._v(" "),e("li",[n._v("in 关键字可以判断一个字符串是否在另一个字符串内")]),n._v(" "),e("li",[n._v("多个逻辑判断排列原则：1.大部分判断结果为假的条件应该放在前面；2.需要查询数据库的操作由于会消耗资源，应该尽量靠后")])])])}),[],!1,null,null,null);s.default=t.exports}}]);