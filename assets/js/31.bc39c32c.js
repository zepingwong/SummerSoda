(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{770:function(_,v,t){"use strict";t.r(v);var e=t(17),d=Object(e.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"简介"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#简介"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("简介")])])]),_._v(" "),t("p",[t("code",[_._v("REST")]),_._v(" 是 "),t("code",[_._v("Representational State Transfer")]),_._v(" 三个单词的缩写，由Roy Fielding于2000年论文中提出的一种web软件结构风格，注意它仅仅只是代表着一种风格，并不代表着约束、标准。基于 "),t("code",[_._v("REST")]),_._v(" 构建的API就是 "),t("code",[_._v("Restful")]),_._v(" 风格。 如果一个架构符合 "),t("code",[_._v("REST")]),_._v(" 的约束条件和原则，就称它为 "),t("code",[_._v("Restful")]),_._v(" 架构。"),t("code",[_._v("REST")]),_._v(" 本身并没有创造新的技术、组件或服务，而隐藏在RESTful背后的理念就是使用Web的现有特征和能力， 更好地使用现有Web标准中的一些准则和约束。虽然 "),t("code",[_._v("REST")]),_._v(" 本身受 Web技术的影响很深， 但是理论上 "),t("code",[_._v("REST")]),_._v(" 架构风格并不是绑定在 HTTP 上，只不过目前 HTTP 是唯一与 "),t("code",[_._v("REST")]),_._v(" 相关的实例。")]),_._v(" "),t("h2",{attrs:{id:"区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("区别")])])]),_._v(" "),t("p",[_._v("举个例子说明 "),t("code",[_._v("REST")]),_._v(" 设计")]),_._v(" "),t("p",[_._v("非 "),t("code",[_._v("REST")]),_._v(" 设计，通常会这么写：")]),_._v(" "),t("ul",[t("li",[_._v("增："),t("code",[_._v("http://xxx.com:8080/posts/addAtricle")])]),_._v(" "),t("li",[_._v("删："),t("code",[_._v("http://xxx.com:8080/posts/deleteAtricle")])]),_._v(" "),t("li",[_._v("改："),t("code",[_._v("http://xxx.com:8080/posts/updateAtricle")])]),_._v(" "),t("li",[_._v("查："),t("code",[_._v("http://xxx.com:8080/posts/getAtricle")]),_._v(" "),t("code",[_._v("REST")]),_._v(" 架构下可以这样写：")]),_._v(" "),t("li",[_._v("增：POST "),t("code",[_._v("http://xxx.com:8080/posts/atricle")])]),_._v(" "),t("li",[_._v("删：DELETE "),t("code",[_._v("http://xxx.com:8080/posts/atricle")])]),_._v(" "),t("li",[_._v("改：PUT ："),t("code",[_._v("http://xxx.com:8080/posts/atricle")])]),_._v(" "),t("li",[_._v("查：GET "),t("code",[_._v("http://xxx.com:8080/posts/atricle")])])]),_._v(" "),t("p",[t("em",[t("strong",[_._v("总结")])]),_._v("：非 "),t("code",[_._v("REST")]),_._v(" 设计，以不同的 URI 进行不同的操作；"),t("code",[_._v("REST")]),_._v(" 架构下，URI 只指定资源，以 HTTP 方法动词进行不同的操作,用 "),t("code",[_._v("HTTP STATUS")]),_._v(" / "),t("code",[_._v("CODE")]),_._v(" 定义操作结果。")]),_._v(" "),t("h2",{attrs:{id:"请求规范规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求规范规范"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("请求规范规范")])])]),_._v(" "),t("h3",{attrs:{id:"http状态码"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#http状态码"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("http状态码")])])]),_._v(" "),t("p",[_._v("使用 HTTP 状态码定义 API 执行结果，HTTP 定义了一系列可以用在接口返回的有含义的状态码。下面是常用状态码解释：")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("状态码")]),_._v(" "),t("th",[_._v("描述")]),_._v(" "),t("th",[_._v("说明")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("200")]),_._v(" "),t("td",[_._v("OK")]),_._v(" "),t("td",[_._v("GET/POST/PUT/DELETE操作成功的状态")])]),_._v(" "),t("tr",[t("td",[_._v("201")]),_._v(" "),t("td",[_._v("Created")]),_._v(" "),t("td",[_._v("POST新建数据成功的状态")])]),_._v(" "),t("tr",[t("td",[_._v("204")]),_._v(" "),t("td",[_._v("No Content")]),_._v(" "),t("td",[_._v("DELETE 删除资源操作成功的状态")])]),_._v(" "),t("tr",[t("td",[_._v("301")]),_._v(" "),t("td",[_._v("Moved Permanently")]),_._v(" "),t("td",[_._v("资源 URI 被转移，需要访问新的 URI")])]),_._v(" "),t("tr",[t("td",[_._v("400")]),_._v(" "),t("td",[_._v("Bad Request")]),_._v(" "),t("td",[_._v("客户端一般性错误返回，在其他 4XX 以外的错误也可以用 400 返回，具体错误信息可以放在 body 中")])]),_._v(" "),t("tr",[t("td",[_._v("404")]),_._v(" "),t("td",[_._v("Not Found")]),_._v(" "),t("td",[_._v("访问的资源不存在")])]),_._v(" "),t("tr",[t("td",[_._v("405")]),_._v(" "),t("td",[_._v("Method Not Allowed")]),_._v(" "),t("td",[_._v("HTTP 的方法不支持，比如一些只读资源不支持POST / DELETE / PUT")])]),_._v(" "),t("tr",[t("td",[_._v("429")]),_._v(" "),t("td",[_._v("Too Many Request")]),_._v(" "),t("td",[_._v("请求太频繁")])]),_._v(" "),t("tr",[t("td",[_._v("500")]),_._v(" "),t("td",[_._v("Internal Server Error")]),_._v(" "),t("td",[_._v("服务器内部错误")])])])]),_._v(" "),t("h3",{attrs:{id:"请求方式"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#请求方式"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("请求方式")])])]),_._v(" "),t("p",[_._v("HTTP Method对应不同的请求动作")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("请求方法")]),_._v(" "),t("th",[_._v("说明")]),_._v(" "),t("th",[_._v("备注")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("GET")]),_._v(" "),t("td",[_._v("查询操作")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("POST")]),_._v(" "),t("td",[_._v("新增操作")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("PUT")]),_._v(" "),t("td",[_._v("更新操作")]),_._v(" "),t("td",[_._v("代表更新一个实体的所有属性")])]),_._v(" "),t("tr",[t("td",[_._v("PATCH")]),_._v(" "),t("td",[_._v("更新操作")]),_._v(" "),t("td",[_._v("更新一个实体的部分属性，因为浏览器兼容性问题推荐使用PUT")])]),_._v(" "),t("tr",[t("td",[_._v("DELETE")]),_._v(" "),t("td",[_._v("删除操作")]),_._v(" "),t("td")])])]),_._v(" "),t("h2",{attrs:{id:"路径规范"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径规范"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("路径规范")])])]),_._v(" "),t("h3",{attrs:{id:"_1-分隔符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-分隔符"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("1.分隔符")])])]),_._v(" "),t("ul",[t("li",[t("code",[_._v("/")]),_._v(" 分隔符一般用来对资源层级的划分，例如 "),t("code",[_._v("http://api.domain.com/school/classes")])]),_._v(" "),t("li",[_._v("对于 "),t("code",[_._v("REST API")]),_._v(" 来说，"),t("code",[_._v("/")]),_._v(" 只是一个分隔符，并无其他含义。为了避免混淆，"),t("code",[_._v("/")]),_._v(" 不应该出现在 URI 的末尾")]),_._v(" "),t("li",[t("code",[_._v("REST API")]),_._v(" 对 URI 资源的定义具有唯一性，一个资源对应一个唯一的地址。为了使接口保持清晰干净，如果访问到末尾包含 "),t("code",[_._v("/")]),_._v(" 的地址，服务端应该 301 到没有 "),t("code",[_._v("/")]),_._v(" 的地址上。当然这个规则也仅限于 "),t("code",[_._v("REST API")]),_._v(" 接口的访问，对于传统的 WEB 页面服务来说，并不一定适用这个规则")])]),_._v(" "),t("h3",{attrs:{id:"_2-连字符"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-连字符"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("2.连字符")])])]),_._v(" "),t("ul",[t("li",[_._v("连字符 "),t("code",[_._v("-")]),_._v(" 一般用来分割 URI 中出现的字符串(单词)，来提高 URI 的可读性，例如："),t("code",[_._v("http://api.example.restapi.org/blogs/mark-masse/entries/this-is-my-first-post")])]),_._v(" "),t("li",[_._v("使用下划线 "),t("code",[_._v("_")]),_._v(" 来分割字符串(单词)可能会和链接的样式冲突重叠，而影响阅读性。但实际上，"),t("code",[_._v("-")]),_._v(" 和 "),t("code",[_._v("_")]),_._v(" 对 URI 中字符串的分割语意上还是有些差异的：\n"),t("ul",[t("li",[t("code",[_._v("-")]),_._v(" 分割的字符串(单词)一般各自都具有独立的含义，可参见上面的例子；")]),_._v(" "),t("li",[t("code",[_._v("_")]),_._v(" 一般用于对一个整体含义的字符串做了层级的分割，方便阅读，例如你想在 URI 中体现一个 ip 地址的信息 "),t("code",[_._v("210_110_25_88")]),_._v("；")])])]),_._v(" "),t("li",[_._v("对于参数名称，使用下划线 "),t("code",[_._v("_")]),_._v(" 进行连接，比如 "),t("code",[_._v("app_id")])])]),_._v(" "),t("h3",{attrs:{id:"路径中统一使用小写字母"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#路径中统一使用小写字母"}},[_._v("#")]),_._v(" "),t("em",[t("strong",[_._v("路径中统一使用小写字母")])])]),_._v(" "),t("ul",[t("li",[_._v("根据 RFC3986 定义，URI 是对大小写敏感的，所以为了避免歧义，尽量用小写字符。但主机名(Host)和 协议名称(scheme: http/ftp/…)对大小写是不敏感的。")])])])}),[],!1,null,null,null);v.default=d.exports}}]);