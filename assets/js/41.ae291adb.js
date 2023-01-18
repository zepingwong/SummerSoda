(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{589:function(s,t,a){"use strict";a.r(t);var n=a(2),e=Object(n.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("p",[t("code",[s._v("Django")]),s._v(" 模型中的字段有个 "),t("code",[s._v("choices")]),s._v(" 属性，这个属性可以提供被选数据。")]),s._v(" "),t("p",[s._v("举例子说明一下，首先创建一个模型 "),t("code",[s._v("Person")]),s._v(" ，包含两个字段 "),t("code",[s._v("name")]),s._v(" 和 "),t("code",[s._v("gender")]),s._v("：")]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Person")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    GENDER_CHOICES "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("u'M'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("u'Male'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("u'F'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("u'Female'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("60")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    gender "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("2")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" choices"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("GENDER_CHOICES"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("p",[s._v("控制台测试和输出如下：")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" p "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Person"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Fred Flinstone"')]),s._v(", "),t("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("gender")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"M"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" p.save"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" p.gender\nu"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'M'")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" p.get_gender_display"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nu"),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'Male'")]),s._v("\n")])])]),t("p",[s._v("可见 "),t("code",[s._v("gender")]),s._v(" 字段中保存了两个信息，一个为 "),t("code",[s._v("value")]),s._v("，一个 "),t("code",[s._v("display_name")]),s._v("，要取 "),t("code",[s._v("value")]),s._v(" 时，直接用 "),t("code",[s._v("p.gender")]),s._v(" 即可；如果要取"),t("code",[s._v("display_name")]),s._v(" 时，用 "),t("code",[s._v("p.get_gender_display()")]),s._v("这个函数即可。")])])}),[],!1,null,null,null);t.default=e.exports}}]);