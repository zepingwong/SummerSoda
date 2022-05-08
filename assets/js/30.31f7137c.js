(window.webpackJsonp=window.webpackJsonp||[]).push([[30],{844:function(s,t,a){"use strict";a.r(t);var e=a(17),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"前言"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#前言"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("前言")])])]),s._v(" "),a("p",[s._v("本文写于2022年4月13日，详细介绍了Windows平台下安装、卸载服务器ZIP Archive 版Mysql 8.0的方法，短期内此方法应该不会有太大变化，如果有新的变化，会进行说明并增加跳转链接。本文以Window 11为例，其他版本Windows 操作系统安装方法大同小异。因为使用ZIP Archive 版本无可视化界面，需要有一定的cmd基础，本文已经尽可能详细的对每一步进行了详细说明，如果觉得此方法有困难，"),a("RouterLink",{attrs:{to:"/blogs/MySQL/2022/041201.html"}},[s._v("请移步 Windows msi程序安装MySQL 8.0")]),s._v("。")],1),s._v(" "),a("blockquote",[a("p",[a("em",[a("strong",[s._v("请注意：")])])]),s._v(" "),a("ul",[a("li",[s._v("MySQL 8.0 之后并不需要"),a("code",[s._v("my.ini")]),s._v("配置文件，初始化过程会自动的生成data文件夹在解压之后的文件，端口默认3306；")]),s._v(" "),a("li",[s._v("自己若新建并设置了"),a("code",[s._v("my.ini")]),s._v(" 文件，有data文件的话，在初始化之前要删除，然后再初始化；")]),s._v(" "),a("li",[s._v("在初始化之后会自动生成密码，要记下来，后续登录mysql需改密码之后才可后续操作。")])])]),s._v(" "),a("h2",{attrs:{id:"安装"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("安装")])])]),s._v(" "),a("h3",{attrs:{id:"一、-下载压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-下载压缩包"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("一、 下载压缩包")])])]),s._v(" "),a("p",[a("a",{attrs:{href:"https://dev.mysql.com/downloads/mysql/",target:"_blank",rel:"noopener noreferrer"}},[s._v("MySQL :: Download MySQL Community Server"),a("OutboundLink")],1)]),s._v(" "),a("p",[a("em",[a("strong",[s._v("1、 选择操作系统，选择压缩包Download；")])]),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/c4f8e26eb6ee467481988e12da7c8b48.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"下载ZIP Archive"}}),s._v(" "),a("em",[a("strong",[s._v("2、 直接下载即可，无需登录。")])]),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/cf0b8e13a2a64263ae0c68e7b107389a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"直接下载"}})]),s._v(" "),a("h3",{attrs:{id:"二、-解压压缩包"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-解压压缩包"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("二、 解压压缩包")])])]),s._v(" "),a("p",[s._v("将压缩包解压到自定义的位置。")]),s._v(" "),a("blockquote",[a("p",[s._v("这里作者选择的是D盘根目录下，此位置与环境变量配置存在联系，"),a("strong",[s._v("路径不要出现中文")]),s._v("。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/16c756c8cf9f4b7c86e97e8e5f605f73.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"解压文件"}})]),s._v(" "),a("h3",{attrs:{id:"三、-初始化mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-初始化mysql"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("三、 初始化MySQL")])])]),s._v(" "),a("h4",{attrs:{id:"_3-1-管理员身份运行cmd"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-1-管理员身份运行cmd"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("3.1 管理员身份运行cmd")])])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/3a75b1a330684c2ea3c81ad0faeb42a6.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"管理员身份运行cmd"}})]),s._v(" "),a("h4",{attrs:{id:"_3-2-进入解压文件夹的bin目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-2-进入解压文件夹的bin目录"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("3.2 进入解压文件夹的"),a("code",[s._v("bin")]),s._v("目录")])])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换盘符")]),s._v("\nD:\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 切换目录")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" mysql-8.0.28-winx64"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("bin\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br"),a("span",{staticClass:"line-number"},[s._v("2")]),a("br"),a("span",{staticClass:"line-number"},[s._v("3")]),a("br"),a("span",{staticClass:"line-number"},[s._v("4")]),a("br")])]),a("h4",{attrs:{id:"_3-3-初始化mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3-3-初始化mysql"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("3.3 初始化MySQL")])])]),s._v(" "),a("p",[s._v("运行下面的指令，初始化MySQL，并记录生成的用户密码root的随机密码。"),a("strong",[s._v("(这个随机密码要存一下，后面还有用)")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqld --initialize --console\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/05bd360897f344bf962b9a6ead298bf2.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"初始化MySQL"}})]),s._v(" "),a("blockquote",[a("p",[a("em",[a("strong",[s._v("说明：")])]),s._v("\n1、在data目录已经存在的情况下运行初始化指令，会出现以下错误，删除data目录即可。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/b9acbbe7de154ff9afc41f65969e8ced.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}}),s._v("\n2、初始化语句默认data数据目录在ZIP解压目录下，默认MySQL服务端口为3306，如果要修改data目录位置，或修改默认端口，请参考。")])]),s._v(" "),a("h3",{attrs:{id:"四、-安装mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、-安装mysql服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("四、 安装MySQL服务")])])]),s._v(" "),a("p",[s._v("命令行窗口内输入以下指令，出现"),a("code",[s._v("Service successfully installed")]),s._v("代表安装成功。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqld --install\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/40472d25cd7c4b70b225bb2462cb52cd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})]),s._v(" "),a("h3",{attrs:{id:"五、-启动mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、-启动mysql服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("五、 启动MySQL服务")])])]),s._v(" "),a("p",[s._v("命令行窗口内输入以下指令，出现“启动成功”字样代表安装成功。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("net start mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/7bad2f7fdeca4d9aa9fd13062ad2fda5.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"启动服务"}})]),s._v(" "),a("h3",{attrs:{id:"六、-修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#六、-修改密码"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("六、 修改密码")])])]),s._v(" "),a("h4",{attrs:{id:"_6-1-登录mysql"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-1-登录mysql"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("6.1 登录mysql")])])]),s._v(" "),a("p",[s._v("在命令窗口内输入以下指令，然后输入密码（密码为上面生成的随机密码）")]),s._v(" "),a("blockquote",[a("p",[s._v("如果刚刚生成的随机密码找不到了，直接删除数据存放目录（默认为最开始出来的目录下的data文件夹），再次初始化即可，或者安装完成后，使用安全工具修改密码，第二种方法请参考 Windows MySQL 8.0忘记root密码。")])]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysql -u root -p\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/f74b972f0c9b47958ac75d8b4cfa296a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"登录"}})]),s._v(" "),a("blockquote",[a("p",[s._v("当然你也可以这样一句话完成 "),a("code",[s._v("mysql -u root -p random_password")]),s._v("，"),a("code",[s._v("random_password")]),s._v("就是刚刚生成的随机密码。")])]),s._v(" "),a("h4",{attrs:{id:"_6-2-修改密码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-2-修改密码"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("6.2 修改密码")])])]),s._v(" "),a("p",[s._v("输入指令修改root用户密码，"),a("code",[s._v("your_password")]),s._v("即为新的密码。")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("alter user "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'root'")]),s._v("@"),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'localhost'")]),s._v(" identified by "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'your_password'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("提交修改")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("commit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("blockquote",[a("p",[s._v("关于是否需要commit的问题，在另一篇笔记中有详细介绍，请参考。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/68f264fe74c04bffb485dc33b557b0ab.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"修改密码"}})]),s._v(" "),a("h4",{attrs:{id:"_6-3-退出验证"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_6-3-退出验证"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("6.3 退出验证")])])]),s._v(" "),a("p",[s._v("退出数据库")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("quit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("或者，")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("使用新密码重新登录一下，验证密码修改是否成功。")]),s._v(" "),a("h3",{attrs:{id:"七、-配置环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#七、-配置环境变量"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("七、 配置环境变量")])])]),s._v(" "),a("p",[s._v("依次进入【计算机】→【属性/关于】→【高级系统设置】→【环境变量】，点击系统变量的path变量，然后点击编辑（或双击path变量）\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/85403f5f4bd2411eac22cd3f4c61f789.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"配置环境变量"}}),s._v("\n右上角【新建】→【浏览】，选择MySQL的bin目录，比如作者是的是"),a("code",[s._v("D:\\mysql-8.0.28-winx64\\bin")]),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/733e9bf5aba344bcbacfeab0af344c53.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"新建环境变量"}}),s._v("\n点击【确定】保存之后，就可以在cmd中使用mysql了。")]),s._v(" "),a("h2",{attrs:{id:"卸载"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#卸载"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("卸载")])])]),s._v(" "),a("h3",{attrs:{id:"一、-停止服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#一、-停止服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("一、 停止服务")])])]),s._v(" "),a("p",[s._v("管理员身份运行cmd，使用以下指令关闭MySQL服务")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("net stop mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[s._v("效果如图所示：\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/7387ca568b2c4c85bccc6e659ffc79e7.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"停止服务"}}),s._v("\n或者，进入服务窗口关闭MySQL服务，操作方法如下：")]),s._v(" "),a("p",[s._v("【win+R快捷键】→services.msc→进入服务窗口→关闭mysql服务")]),s._v(" "),a("p",[a("em",[a("strong",[s._v("1.打开服务窗口；")])]),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2a7206bad9664b78a5b2c530c65f7fb9.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"打开服务窗口"}}),s._v(" "),a("em",[a("strong",[s._v("2.找到MySQL服务，右键关闭即可。")])]),s._v(" "),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2ab3da4ec89f4269942f9f8fc0f210ef.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"关闭服务"}})]),s._v(" "),a("h3",{attrs:{id:"二、-卸载mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二、-卸载mysql服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("二、 卸载MySQL服务")])])]),s._v(" "),a("h4",{attrs:{id:"_2-1-切换目录"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-1-切换目录"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("2.1 切换目录")])])]),s._v(" "),a("p",[s._v("控制台切换到MySQL的bin目录（就是上面解压的文件夹的目录，比如作者的是"),a("code",[s._v("D:\\mysql-8.0.28-winx64\\bin")]),s._v("）。")]),s._v(" "),a("h4",{attrs:{id:"_2-2-卸载mysql服务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-2-卸载mysql服务"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("2.2 卸载MySQL服务")])])]),s._v(" "),a("p",[s._v("运行卸载命令，出现Service successfully removed代表卸载成功")]),s._v(" "),a("div",{staticClass:"language-bash line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("mysqld --remove mysql\n")])]),s._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[s._v("1")]),a("br")])]),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/1f5def7935cc41089d45cbe2da314a38.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"卸载MySQL服务"}})]),s._v(" "),a("blockquote",[a("p",[s._v("***注意：***直接卸载会报错服务在运行，需要先停止服务，然后卸载。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/39f583778a2e4b998be12676356b9e5a.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"卸载报错"}})])]),s._v(" "),a("h3",{attrs:{id:"三、-删除项目根文件夹"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#三、-删除项目根文件夹"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("三、 删除项目根文件夹")])])]),s._v(" "),a("p",[s._v("删除MySQL文件目录即可。")]),s._v(" "),a("h3",{attrs:{id:"四、-清理注册表"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#四、-清理注册表"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("四、 清理注册表")])])]),s._v(" "),a("h4",{attrs:{id:"_4-1-打开注册表编辑器"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-1-打开注册表编辑器"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("4.1 打开注册表编辑器")])])]),s._v(" "),a("p",[s._v("【win+R快捷键】→regedit→打开注册表编辑器")]),s._v(" "),a("blockquote",[a("p",[s._v("新手小白修改注册表有风险，建议先导出备份以下。")])]),s._v(" "),a("h4",{attrs:{id:"_4-2-删除注册表信息"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_4-2-删除注册表信息"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("4.2 删除注册表信息")])])]),s._v(" "),a("p",[s._v("分别删除以下几条信息")]),s._v(" "),a("ul",[a("li",[a("code",[s._v("HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet001\\Services\\EventLog\\Application\\MySQL")])]),s._v(" "),a("li",[a("code",[s._v("HKEY_LOCAL_MACHINE\\SYSTEM\\ControlSet002\\Services\\EventLog\\Application\\MySQL")])]),s._v(" "),a("li",[a("code",[s._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\EventLog\\Application\\MySQL")])]),s._v(" "),a("li",[a("code",[s._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControl001\\Services\\MySQL")])]),s._v(" "),a("li",[a("code",[s._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControl002\\Services\\MySQL")])]),s._v(" "),a("li",[a("code",[s._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Services\\MySQL")])])]),s._v(" "),a("blockquote",[a("p",[s._v("若卸载的时候没有找到，略过后仍达到完全卸载的目的。注册表中的ControlSet001，ControlSet002,不一定是001和002,可能是ControlSet005、006之类，删除的时候都删除就可以 ，这样做是为了避免再次安装MySQL时报错。")])]),s._v(" "),a("p",[a("img",{attrs:{src:"https://img-blog.csdnimg.cn/cb2c2d318ef94bd59b3f5489a9c26bfd.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"删除注册表"}})]),s._v(" "),a("h3",{attrs:{id:"五、-删除环境变量"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#五、-删除环境变量"}},[s._v("#")]),s._v(" "),a("em",[a("strong",[s._v("五、 删除环境变量")])])]),s._v(" "),a("p",[s._v("如果有设置了环境变量，那么进入【计算机】→【属性/关于】→【高级系统设置】→【环境变量】，删除系统环境变量path中的"),a("code",[s._v("MySQL\\bin")]),s._v("路径即可。\n"),a("img",{attrs:{src:"https://img-blog.csdnimg.cn/2752428536f04b16a208dad27760b87c.png?x-oss-process=image/watermark,type_d3F5LXplbmhlaQ,shadow_50,text_Q1NETiBA5rGf5Z-O5pKF5Zi055qE5bed576M,size_20,color_FFFFFF,t_70,g_se,x_16#pic_center",alt:"在这里插入图片描述"}})])])}),[],!1,null,null,null);t.default=r.exports}}]);