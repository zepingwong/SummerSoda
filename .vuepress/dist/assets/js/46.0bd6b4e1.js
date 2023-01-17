(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{594:function(s,t,a){"use strict";a.r(t);var e=a(2),r=Object(e.a)({},(function(){var s=this,t=s._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"abstractuser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstractuser"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("AbstractUser")])])]),s._v(" "),t("p",[s._v("如果要创建一个用户，需要设置各种字段、组、权限、cookie管理、密码处理等，比较麻烦，所以 "),t("code",[s._v("Django")]),s._v(" 已经为我们创建了一个抽象用户，我们只需要继承它，然后添加自己的字段即可。"),t("code",[s._v("AbstractUser")]),s._v(" 是一个提供了对 "),t("code",[s._v("User")]),s._v(" 全面的实现的抽象模型。")]),s._v(" "),t("h3",{attrs:{id:"基本属性和常用方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#基本属性和常用方法"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("基本属性和常用方法")])])]),s._v(" "),t("table",[t("thead",[t("tr",[t("th",[s._v("属性或方法")]),s._v(" "),t("th",[s._v("说明")])])]),s._v(" "),t("tbody",[t("tr",[t("td",[s._v("username")]),s._v(" "),t("td",[s._v("用户名（必要）")])]),s._v(" "),t("tr",[t("td",[s._v("password")]),s._v(" "),t("td",[s._v("密码（必要）")])]),s._v(" "),t("tr",[t("td",[s._v("email")]),s._v(" "),t("td",[s._v("邮件")])]),s._v(" "),t("tr",[t("td",[s._v("first_name")]),s._v(" "),t("td",[s._v("名字")])]),s._v(" "),t("tr",[t("td",[s._v("last_name")]),s._v(" "),t("td",[s._v("姓氏")])]),s._v(" "),t("tr",[t("td",[s._v("is_staff")]),s._v(" "),t("td",[s._v("是否管理员")])]),s._v(" "),t("tr",[t("td",[s._v("create()")]),s._v(" "),t("td",[s._v("创建一个普通用户")])]),s._v(" "),t("tr",[t("td",[s._v("create_user()")]),s._v(" "),t("td",[s._v("创建一个普通用户，密码加密")])]),s._v(" "),t("tr",[t("td",[s._v("create_superuser()")]),s._v(" "),t("td",[s._v("创建一个超级用户（email必要）")])]),s._v(" "),t("tr",[t("td",[s._v("set_password(pwd)")]),s._v(" "),t("td",[s._v("设置密码")])])])]),s._v(" "),t("h3",{attrs:{id:"创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#创建用户"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("创建用户")])])]),s._v(" "),t("p",[s._v("创建用户要导入认证模型类里的 "),t("code",[s._v("User")]),s._v("，再用 "),t("code",[s._v("User")]),s._v(" 对象去创建用户")]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" User \nUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'laowang'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'123'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"abstractbaseuser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#abstractbaseuser"}},[s._v("#")]),s._v(" AbstractBaseUser")]),s._v(" "),t("p",[t("code",[s._v("AbstractBaseUser")]),s._v(" 与 "),t("code",[s._v("AbstractUser")]),s._v(" 看起来颇为相似。")]),s._v(" "),t("h3",{attrs:{id:"导入方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#导入方法"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("导入方法")])])]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AbstractUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" AbstractBaseUser\n")])])]),t("h3",{attrs:{id:"区别"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#区别"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("区别")])])]),s._v(" "),t("ul",[t("li",[s._v("The documentation explains this fully. AbstractUser is a full User model, complete with fields, as an abstract class so that you can inherit from it and add your own profile fields and methods. AbstractBaseUser only contains the authentication functionality, but no actual fields: you have to supply them when you subclass.\n文档充分解释了这一点。 "),t("code",[s._v("AbstractUser")]),s._v(" 是一个完整的用户模型，包含字段，作为一个抽象类，以便您可以继承它并添加您自己的配置文件字段和方法。 "),t("code",[s._v("AbstractBaseUser")]),s._v(" 仅包含身份验证功能，但不包含实际字段：当您继承子类时，您必须提供它们。")]),s._v(" "),t("li",[s._v('The AbstractUser is basically just the "User" class you\'re probably already used to. AbstractBaseUser makes fewer assumptions and you have to tell it what field represents the username, what fields are required, and how to manage those users.\n'),t("code",[s._v("AbstractUser")]),s._v(" 基本上就是您可能已经习惯的“User”类。 "),t("code",[s._v("AbstractBaseUser")]),s._v(" 的继承较少，您必须告诉它哪个字段代表用户名，需要哪些字段以及如何管理这些用户。")]),s._v(" "),t("li",[s._v("If you're just adding things to the existing user (i.e. profile data with extra fields), then use AbstractUser because it's simpler and easier. If you want to rethink some of Django's assumptions about authentication, then AbstractBaseUser gives you the power to do so.\n如果您只是将属性添加到现有用户（即具有额外字段的配置文件数据），则使用 "),t("code",[s._v("AbstractUser")]),s._v(" ，因为它更简单，更容易。 如果您想重新考虑一下  "),t("code",[s._v("Django")]),s._v(" 关于认证的假设，那么 "),t("code",[s._v("AbstractBaseUser")]),s._v(" 会为您提供这样的权限。")])]),s._v(" "),t("p",[s._v("简单来说，我们习惯的继承的 "),t("code",[s._v("AbstractUser")]),s._v(" 类是高度集成的，里面定义了一堆的字段，不需要人为去定义了，除了我们自定义的字段外，"),t("code",[s._v("django")]),s._v(" 会帮我们添加 "),t("code",[s._v("id")]),s._v("、"),t("code",[s._v("last_login")]),s._v("、"),t("code",[s._v("is_staff")]),s._v("等等字段。如果我们只需要基本的用户名、密码等等几个简单的字段的时候， "),t("code",[s._v("AbstractUser")]),s._v(" 就比较臃肿了，这时候就可以选择继承"),t("code",[s._v("AbstractBaseUser")]),s._v(" 类来自定义一些字段，这时候迁移数据库 "),t("code",[s._v("django")]),s._v(" 会帮我们添加 "),t("code",[s._v("id")]),s._v("、"),t("code",[s._v("password")]),s._v("、"),t("code",[s._v("last_login")]),s._v(" 三个字段。")]),s._v(" "),t("p",[s._v("在模型类中我们必须定义一个用户名字段，并指定属性为unique，然后告诉 "),t("code",[s._v("django")]),s._v(" 这个字段是用户名字段：")]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AbstractBaseUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    username "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("unique"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    USERNAME_FIELD "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'username'")]),s._v("\n")])])]),t("blockquote",[t("p",[s._v("如果不声明 "),t("code",[s._v("USERNAME_FIELD")]),s._v(" ，数据库迁移时会报错 "),t("code",[s._v("AttributeError: type object 'UserInfo' has no attribute 'USERNAME_FIELD'")])])]),s._v(" "),t("h2",{attrs:{id:"自定义用户模型类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#自定义用户模型类"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("自定义用户模型类")])])]),s._v(" "),t("p",[s._v("显然 "),t("code",[s._v("Django")]),s._v(" 自带的用户模型类 "),t("code",[s._v("User")]),s._v(" 是不能满足我们的需求的，比如说我们还需要添加手机号、是否记住密码等其他自定义字段，所以我们可以自定义模型类，然后继承 "),t("code",[s._v("Abstract")]),s._v("。")]),s._v(" "),t("h3",{attrs:{id:"_1-定义模型类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_1-定义模型类"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("1.定义模型类")])])]),s._v(" "),t("p",[s._v("这里在 "),t("code",[s._v("应用.models.py")]),s._v(" 文件中, 定义一个模型类 "),t("code",[s._v("User")]),s._v("，增加手机号字段。")]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("db "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" models\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" django"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("contrib"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("auth"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" AbstractUser\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 继承AbstractUser")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("User")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("AbstractUser"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    mobile "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" models"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("CharField"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("max_length"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("11")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" unique"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("True")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v(" verbose_name"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'手机号'")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n    \n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("class")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token class-name"}},[s._v("Meta")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        db_table "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'tb_users'")]),s._v("\n        verbose_name "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'用户'")]),s._v("\n        verbose_name_plural "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" verbose_name\n\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("def")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("__str__")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n        "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("return")]),s._v(" self"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("username\n")])])]),t("h3",{attrs:{id:"_2-指定用户模型类"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_2-指定用户模型类"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("2.指定用户模型类")])])]),s._v(" "),t("p",[s._v("项目需要配置才能使用自定义的模型类，在项目配置文件 "),t("code",[s._v("settings.py")]),s._v(" 中添加 "),t("code",[s._v("应用.User")])]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 自定义用户类型2")]),s._v("\nAUTH_USER_MODEL "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v("'应用.User'")]),s._v("\n")])])]),t("blockquote",[t("p",[t("strong",[s._v("注意")]),s._v("：建议对于 "),t("code",[s._v("AUTH_USER_MODEL")]),s._v(" 参数的设置一定要在第一次数据库迁移之前就设置好，否则后续使用可能出现未知错误")])]),s._v(" "),t("h3",{attrs:{id:"_3-数据迁移"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_3-数据迁移"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("3.数据迁移")])])]),s._v(" "),t("p",[s._v("完成数据迁移即生成数据表（关于 "),t("code",[s._v("Django")]),s._v(" 数据库的配置这里忽略）")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("python manage.py makemigrations\npython manage.py migrate\n")])])]),t("h3",{attrs:{id:"_4-创建用户"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_4-创建用户"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("4.创建用户")])])]),s._v(" "),t("div",{staticClass:"language-python extra-class"},[t("pre",{pre:!0,attrs:{class:"language-python"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 导入自定义的模型类（继承Abstract那个）")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" apps"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("users"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("models "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" User\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("try")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    user "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" User"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("objects"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("create_user"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("username"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"laowang"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("password"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"123456"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),s._v("mobile"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"10086"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("except")]),s._v(" Exception "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("as")]),s._v(" e"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(":")]),s._v("\n    "),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("pass")]),s._v("\n\n")])])]),t("h2",{attrs:{id:"管理器方法"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#管理器方法"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("管理器方法")])])]),s._v(" "),t("p",[s._v("管理器方法即可以通过 "),t("code",[s._v("User.objects")]),s._v(" 进行调用的方法。")]),s._v(" "),t("h3",{attrs:{id:"create-user"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-user"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("create_user")])])]),s._v(" "),t("p",[t("code",[s._v("create_user(username, email=None, password=None, **extra_fields)")])]),s._v(" "),t("p",[s._v("创建、保存并返回一个 "),t("code",[s._v("User")]),s._v(" 对象。")]),s._v(" "),t("h3",{attrs:{id:"create-superuser"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#create-superuser"}},[s._v("#")]),s._v(" "),t("em",[t("strong",[s._v("create_superuser")])])]),s._v(" "),t("p",[t("code",[s._v("create_superuser(username, email, password, **extra_fields)")])]),s._v(" "),t("p",[s._v("与 "),t("code",[s._v("create_user()")]),s._v("  相同，但是设置 "),t("code",[s._v("is_staff")]),s._v(" 和 "),t("code",[s._v("is_superuser")]),s._v(" 为 "),t("code",[s._v("True")]),s._v("。")])])}),[],!1,null,null,null);t.default=r.exports}}]);