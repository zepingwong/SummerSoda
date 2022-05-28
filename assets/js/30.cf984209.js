(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{769:function(s,t,a){"use strict";a.r(t);var e=a(17),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"序列化与反序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化与反序列化"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("序列化与反序列化")])])]),s._v(" "),a("h3",{attrs:{id:"_1-序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-序列化"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("1.序列化")])])]),s._v(" "),a("p",[a("strong",[s._v("概念")]),s._v("：将程序中的一个数据结构类型转化为其它格式（字典、json、XML等）。例如：将 "),a("code",[s._v("django")]),s._v(" 中的模型类对象转换为json字符串，这个转换过程称之为序列化\n"),a("strong",[s._v("序列化时机")]),s._v("：当需要给前端响应模型数据时，需要将模型数据序列化成前端需要的格式")]),s._v(" "),a("h3",{attrs:{id:"_2-反序列化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-反序列化"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("2.反序列化")])])]),s._v(" "),a("p",[a("strong",[s._v("概念")]),s._v("：将其它格式 （字典、json、XML等）转换为程序中的数据，例如：将json字符串转换为 "),a("code",[s._v("django")]),s._v(" 中的模型类对象，这个过程称之为反序列化\n"),a("strong",[s._v("反序列化时机")]),s._v("：当需要将用户发送的数据存储到数据库之前，需要使用反序列化")]),s._v(" "),a("h3",{attrs:{id:"_3-开发restful接口"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-开发restful接口"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("3.开发Restful接口")])])]),s._v(" "),a("p",[s._v("视图中做的最主要的三件事：")]),s._v(" "),a("ul",[a("li",[s._v("将请求的数据（如：Json格式）转换为模型类对象（反序列化)")]),s._v(" "),a("li",[s._v("操作数据库")]),s._v(" "),a("li",[s._v("将模型类对象转换为响应的数据（如：Json格式）（序列化）")])]),s._v(" "),a("p",[s._v("在视图中需要做的最核心的事：")]),s._v(" "),a("ul",[a("li",[s._v("将数据库数据序列化为前端所需要的格式，并返回")]),s._v(" "),a("li",[s._v("将前端发送的数据反序列化为模型类对象，并保存到数据库中")])]),s._v(" "),a("h2",{attrs:{id:"常用序列化器类"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#常用序列化器类"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("常用序列化器类")])])]),s._v(" "),a("h3",{attrs:{id:"_1-serializers-serializer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-serializers-serializer"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("1.serializers.Serializer")])])]),s._v(" "),a("p",[s._v("应用下先创建一个名为 "),a("code",[s._v("serializers.py")]),s._v(" 的模块，在该模块下需要引入 "),a("code",[s._v("serializers")]),s._v(" 模块，并创建序列化器类 "),a("code",[s._v("ProjectsSerializer")]),s._v(" 继承 "),a("code",[s._v("serializers.Serializer")]),s._v(" 父类")]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" serializers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProjectSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Serializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("200")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"项目名称"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" help_text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目名称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    leader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"项目负责人"')]),s._v("， help_text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'项目负责人'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    programmer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开发人员"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" help_text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"开发人员"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    tester "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" label"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试人员"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" help_text"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"测试人员"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br")])]),a("h4",{attrs:{id:"字段说明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字段说明"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("字段说明")])])]),s._v(" "),a("ul",[a("li",[a("code",[s._v("max_length")]),s._v("：最大长度：在反序列化时进行输入最大长度校验")]),s._v(" "),a("li",[a("code",[s._v("min_length")]),s._v(" ：最小长度：在反序列化时进行输入最小长度校验")]),s._v(" "),a("li",[a("code",[s._v("allow_blank")]),s._v("：是否允许为空：在反序列化时允许传空白字符串，默认不允许")]),s._v(" "),a("li",[a("code",[s._v("max_value")]),s._v("：最大值：在反序列化时进行输入最大值校验")]),s._v(" "),a("li",[a("code",[s._v("min_value")]),s._v("：最小值：在反序列化时进行输入最小值校验")]),s._v(" "),a("li",[a("code",[s._v("read_only")]),s._v("：表明该字段仅用于序列化输出，但在反序列化验证时不做校验，默认 "),a("code",[s._v("False")])]),s._v(" "),a("li",[a("code",[s._v("write_only")]),s._v("：表明该字段仅用于反序列化输入，但在序列化时不进行输出，默认 "),a("code",[s._v("False")])]),s._v(" "),a("li",[a("code",[s._v("required")]),s._v("：表明该字段在反序列化时必须输入，序列化时必须输出，默认 "),a("code",[s._v("True")])]),s._v(" "),a("li",[a("code",[s._v("default")]),s._v("：反序列化时使用的默认值，如果不指明，在传递时默认值为 "),a("code",[s._v("0")])]),s._v(" "),a("li",[a("code",[s._v("allow_null")]),s._v("：表明该字段是否允许传入 "),a("code",[s._v("None")]),s._v("，默认 "),a("code",[s._v("False")])]),s._v(" "),a("li",[a("code",[s._v("validators")]),s._v(" ：该字段使用的验证器")]),s._v(" "),a("li",[a("code",[s._v("error_messages")]),s._v("：包含错误编号与错误信息的字典")]),s._v(" "),a("li",[a("code",[s._v("label")]),s._v("：用于HTML展示API页面时，显示的字段名称，相当于模型类字段的 "),a("code",[s._v("verbose_name")]),s._v(" 属性")]),s._v(" "),a("li",[a("code",[s._v("help_text")]),s._v("：用于HTML展示API页面时，显示的字段帮助提示信息")])]),s._v(" "),a("h4",{attrs:{id:"序列化模型类对象"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化模型类对象"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("序列化模型类对象")])])]),s._v(" "),a("p",[s._v("在视图类模块下，返回的为模型类对象时，使用步骤如下：")]),s._v(" "),a("ul",[a("li",[s._v("实例化一个序列化器类，将模型类对象传给 "),a("code",[s._v("instance")]),s._v(" 变量，并返回一个序列化器类对象")]),s._v(" "),a("li",[s._v("调用序列化器类对象的 "),a("code",[s._v("data")]),s._v(" 属性后传入 "),a("code",[s._v("JsonResponse")]),s._v(" 并 "),a("code",[s._v("return")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[s._v("obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Projects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("id__exact"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("pk"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nserializer_obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" ProjectSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" JsonResponse"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serializer_obj"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br")])]),a("h4",{attrs:{id:"序列化查询集"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#序列化查询集"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("序列化查询集")])])]),s._v(" "),a("p",[s._v("在视图类模块下，返回的为查询集时，使用步骤如下：")]),s._v(" "),a("ul",[a("li",[s._v("实例化一个序列化器类，将模型类对象传给 "),a("code",[s._v("instance")]),s._v(" 变量，并且设置 "),a("code",[s._v("many=True")]),s._v("，并返回一个序列化器类对象")]),s._v(" "),a("li",[s._v("调用序列化器类对象的 "),a("code",[s._v("data")]),s._v(" 属性后传入 "),a("code",[s._v("JsonResponse")]),s._v(" ，设置 "),a("code",[s._v("safe=False")]),s._v(" ，并 "),a("code",[s._v("return")])])]),s._v(" "),a("h4",{attrs:{id:"自定义create和update方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义create和update方法"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("自定义create和update方法")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("create")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# validated_data参数为校验通过之后的数据")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须将创建成功的模型类对象返回")]),s._v("\n    obj "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Projects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("**")]),s._v("validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" obj\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("update")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# instance为待更新的模型类对象")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# validated_data参数为校验通过之后的数据")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 必须将更新成功的模型类对象返回")]),s._v("\n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'name'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("name\n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("leader "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'leader'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("leader\n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tester "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tester'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("tester\n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("programmer "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'programmer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("programmer\n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("desc "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("get"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'desc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("or")]),s._v(" instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("desc\n    instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("save"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" instance\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br")])]),a("h3",{attrs:{id:"_2-serializers-modelserializer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-serializers-modelserializer"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("2.serializers.ModelSerializer")])])]),s._v(" "),a("p",[s._v("应用下先创建一个名为 "),a("code",[s._v("serializers.py")]),s._v(" 的模块，在该模块下需要引入 "),a("code",[s._v("serializers")]),s._v(" 模块，并创建序列化器类 "),a("code",[s._v("ProjectsModelSerializer")]),s._v(" 继承 "),a("code",[s._v("serializers.ModelSerializer")]),s._v(" 父类")]),s._v(" "),a("h4",{attrs:{id:"特性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特性"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("特性")])])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("filed")]),s._v(" 字段可以不需要自己写，与模型一一对应")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("ModelSerializer")]),s._v(" 中定义了与本来需要序列化字段同名的字段，会覆盖原来的模型类映射的字段")])]),s._v(" "),a("li",[a("p",[s._v("简单的实现了 "),a("code",[s._v("create")]),s._v(" 和 "),a("code",[s._v("update")]),s._v(" 方法，可根据需求重写。调用父类的 "),a("code",[s._v("creat")]),s._v(" 和 "),a("code",[s._v("update")]),s._v(" 方法时，"),a("code",[s._v("validated_data")]),s._v(" 不需要解包")]),s._v(" "),a("div",{staticClass:"language-py line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-py"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# update")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("update"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("instance"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# create")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin"}},[s._v("super")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("validated_data"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])])])]),s._v(" "),a("h4",{attrs:{id:"自定义meta参数属性"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#自定义meta参数属性"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("自定义Meta参数属性")])])]),s._v(" "),a("ul",[a("li",[a("p",[a("code",[s._v("mode")]),s._v("关联的模型类")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("fields")]),s._v("：")]),s._v(" "),a("ul",[a("li",[s._v("使用 "),a("code",[s._v("fields")]),s._v(" 来明确字段, 可以写明具体哪些字段")]),s._v(" "),a("li",[s._v("也可以写  "),a("code",[s._v("__all__")]),s._v("，所有字段都生成序列化规则")])])]),s._v(" "),a("li",[a("p",[a("code",[s._v("exclude")]),s._v("：可以明确排除掉哪些字段")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("read_only_fields")]),s._v("：指明只读字段,即仅用于序列化输出的字段")])]),s._v(" "),a("li",[a("p",[a("code",[s._v("extra_kwargs")]),s._v("：为 "),a("code",[s._v("ModelSerializer")]),s._v(" 添加或修改原有的选项参数，来定制某些字段（嵌套字典）")])])]),s._v(" "),a("div",{staticClass:"language-python line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-python"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" rest_framework "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" serializers\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" App"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" Projects\n\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("ProjectModelSerializer")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("ModelSerializer"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    email "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" serializers"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("EmailField"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("write_only"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 需要在Meta内部类这两个指定model类属性：需要按照哪一个模型类来创建")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# fields类属性来指定模型类中哪些字段需要输入或输出")]),s._v("\n        model "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Projects\n        fields "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'__all__'")]),s._v("\n        exclude "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'desc'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'create_time'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n        extra_kwargs "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'programmer'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'label'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'研发人员'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n                "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'write_only'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("\n            "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n        "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br"),a("span",{staticClass:"line-number"},[s._v("5")]),a("br"),a("span",{staticClass:"line-number"},[s._v("6")]),a("br"),a("span",{staticClass:"line-number"},[s._v("7")]),a("br"),a("span",{staticClass:"line-number"},[s._v("8")]),a("br"),a("span",{staticClass:"line-number"},[s._v("9")]),a("br"),a("span",{staticClass:"line-number"},[s._v("10")]),a("br"),a("span",{staticClass:"line-number"},[s._v("11")]),a("br"),a("span",{staticClass:"line-number"},[s._v("12")]),a("br"),a("span",{staticClass:"line-number"},[s._v("13")]),a("br"),a("span",{staticClass:"line-number"},[s._v("14")]),a("br"),a("span",{staticClass:"line-number"},[s._v("15")]),a("br"),a("span",{staticClass:"line-number"},[s._v("16")]),a("br"),a("span",{staticClass:"line-number"},[s._v("17")]),a("br"),a("span",{staticClass:"line-number"},[s._v("18")]),a("br")])])])}),[],!1,null,null,null);t.default=n.exports}}]);