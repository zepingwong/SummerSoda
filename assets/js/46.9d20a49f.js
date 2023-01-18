(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{594:function(a,t,s){"use strict";s.r(t);var e=s(2),r=Object(e.a)({},(function(){var a=this,t=a._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[t("p",[t("strong",[a._v('通过一个内嵌类 "class Meta" 给你的 model 定义元数据, 类似下面这样:')])]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Foo")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("Model"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n    bar "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(".")]),a._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),a._v("maxlength"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[a._v("30")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[a._v("class")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[a._v("Meta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(":")]),a._v(" \n        "),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# ...")]),a._v("\n")])])]),t("h2",{attrs:{id:"app-label"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#app-label"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("app_label")])])]),a._v(" "),t("p",[a._v("app_label这个选项只在一种情况下使用，就是你的模型类不在默认的应用程序包下的models.py文件中，这时候你需要指定你这个模型类是那个应用程序的。比如你在其他地方写了一个模型类，而这个模型类是属于myapp的，那么你这是需要指定为：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("app_label"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'myapp'")]),a._v("\n")])])]),t("h2",{attrs:{id:"db-table"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-table"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("db_table")])])]),a._v(" "),t("p",[a._v("db_table是用于指定自定义数据库表名的。Django有一套默认的按照一定规则生成数据模型对应的数据库表名，如果你想使用自定义的表名，就通过这个属性指定，比如：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("table_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'my_owner_table'")]),a._v("\n")])])]),t("p",[a._v("若不提供该参数, Django 会使用 app_label + '_' + module_name 作为表的名字.")]),a._v(" "),t("p",[a._v("若你的表的名字是一个 SQL 保留字, 或包含 Python 变量名不允许的字符--特别是连字符 --没关系. Django 会自动在幕后替你将列名字和表名字用引号引起来.")]),a._v(" "),t("h2",{attrs:{id:"db-tablespace"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#db-tablespace"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("db_tablespace")])])]),a._v(" "),t("p",[a._v("有些数据库有数据库表空间，比如Oracle。你可以通过db_tablespace来指定这个模型对应的数据库表放在哪个数据库表空间。")]),a._v(" "),t("h2",{attrs:{id:"get-latest-by"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#get-latest-by"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("get_latest_by")])])]),a._v(" "),t("p",[a._v("由于Django的管理方法中有个lastest()方法，就是得到最近一行记录。如果你的数据模型中有 DateField 或 DateTimeField 类型的字段，你可以通过这个选项来指定lastest()是按照哪个字段进行选取的。")]),a._v(" "),t("p",[a._v('一个 DateField 或 DateTimeField 字段的名字. 若提供该选项, 该模块将拥有一个 get_latest() 函数以得到 "最新的" 对象(依据那个字段):')]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("get_latest_by "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"order_date"')]),a._v("\n")])])]),t("h2",{attrs:{id:"managed"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#managed"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("managed")])])]),a._v(" "),t("p",[a._v("由于Django会自动根据模型类生成映射的数据库表，如果你不希望Django这么做，可以把managed的值设置为False。")]),a._v(" "),t("p",[a._v("默认值为True,这个选项为True时Django可以对数据库表进行 migrate或migrations、删除等操作。在这个时间Django将管理数据库中表的生命周期")]),a._v(" "),t("p",[a._v("如果为False的时候，不会对数据库表进行创建、删除等操作。可以用于现有表、数据库视图等，其他操作是一样的。")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("managed "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token boolean"}},[a._v("False")]),a._v("\n")])])]),t("h2",{attrs:{id:"order-with-respect-to"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#order-with-respect-to"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("order_with_respect_to")])])]),a._v(" "),t("p",[a._v("这个选项一般用于多对多的关系中，它指向一个关联对象。就是说关联对象找到这个对象后它是经过排序的。指定这个属性后你会得到一个get_XXX_order()和set_XXX_order（）的方法,通过它们你可以设置或者回去排序的对象。")]),a._v(" "),t("p",[a._v("举例来说, 如果一个 PizzaToppping 关联到一个 Pizza 对象, 这样做:")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("order_with_respect_to "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'pizza'")]),a._v("\n")])])]),t("h2",{attrs:{id:"ordering"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#ordering"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("ordering")])])]),a._v(" "),t("p",[a._v("这个字段是告诉Django模型对象返回的记录结果集是按照哪个字段排序的。比如下面的代码：\n"),t("strong",[a._v("需要注意的是:不论你使用了多少个字段排序, admin 只使用第一个字段")])]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("ordering"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'order_date'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 按订单升序排列")]),a._v("\nordering"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-order_date'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 按订单降序排列，-表示降序")]),a._v("\nordering"),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'?order_date'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" \n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 随机排序，？表示随机")]),a._v("\nordering "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'-pub_date'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'author'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 对 pub_date 降序,然后对 author 升序")]),a._v("\n")])])]),t("h2",{attrs:{id:"permissions"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#permissions"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("permissions")])])]),a._v(" "),t("p",[a._v("permissions主要是为了在Django Admin管理模块下使用的，如果你设置了这个属性可以让指定的方法权限描述更清晰可读。")]),a._v(" "),t("p",[a._v("要创建一个对象所需要的额外的权限. 如果一个对象有 admin 设置, 则每个对象的添加,删除和改变权限会人(依据该选项)自动创建.下面这个例子指定了一个附加权限: can_deliver_pizzas:")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("permissions "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"can_deliver_pizzas"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"Can deliver pizzas"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),a._v("\n")])])]),t("h2",{attrs:{id:"unique-together"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#unique-together"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("unique_together")])])]),a._v(" "),t("p",[a._v("联合唯一，例如：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("unique_together "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v("\n    "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("(")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'article'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),t("span",{pre:!0,attrs:{class:"token string"}},[a._v("'user'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v(",")]),a._v("\n"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v("\n")])])]),t("h2",{attrs:{id:"verbose-name"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verbose-name"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("verbose_name")])])]),a._v(" "),t("p",[a._v("verbose_name的意思很简单，就是给你的模型类起一个更可读的名字：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("verbose_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"pizza"')]),a._v("\n")])])]),t("p",[a._v("若未提供该选项, Django 则会用一个类名字的 munged 版本来代替: "),t("code",[a._v("CamelCase becomes camel case")])]),a._v(" "),t("h2",{attrs:{id:"verbose-name-plural"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#verbose-name-plural"}},[a._v("#")]),a._v(" "),t("em",[t("strong",[a._v("verbose_name_plural")])])]),a._v(" "),t("p",[a._v("这个选项是指定，模型的复数形式是什么，比如：")]),a._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[a._v("verbose_name_plural "),t("span",{pre:!0,attrs:{class:"token operator"}},[a._v("=")]),a._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[a._v('"stories"')]),a._v("\n")])])]),t("p",[a._v('若未提供该选项, Django 会使用 verbose_name + "s".')])])}),[],!1,null,null,null);t.default=r.exports}}]);