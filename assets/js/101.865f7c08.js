(window.webpackJsonp=window.webpackJsonp||[]).push([[101],{848:function(t,s,a){"use strict";a.r(s);var e=a(17),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"问题描述"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#问题描述"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("问题描述")])])]),t._v(" "),a("p",[t._v("ubuntu 和 windows 双系统使用过程中，发现从一个系统切换到另一个系统后，时间就会出错，表现为—— 时差8小时。为什么？如何解决？")]),t._v(" "),a("h2",{attrs:{id:"为什么会出现时差"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么会出现时差"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("为什么会出现时差")])])]),t._v(" "),a("p",[t._v("在了解时差出现的原因之前，先了解以下几个时钟的概念：")]),t._v(" "),a("h3",{attrs:{id:"系统时间-本地时间-system-time-local-time"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#系统时间-本地时间-system-time-local-time"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("系统时间 / 本地时间（System time / Local time）")])])]),t._v(" "),a("p",[t._v("指Linux系统内部的时间。我们在系统任务栏中能直接看到的时间就是系统时间。")]),t._v(" "),a("h3",{attrs:{id:"实时时钟-real-time-clock-rtc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#实时时钟-real-time-clock-rtc"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("实时时钟（Real-Time Clock, RTC）")])])]),t._v(" "),a("p",[t._v("实时时钟是PC主板上的晶振及相关电路组成的时钟电路的生成脉冲，它控制着计算机系统的时间。操作系统中所提到的RTC，指的就是在计算机主板控制下的时间，即系统时间，为计算机硬件的内部时钟。")]),t._v(" "),a("h3",{attrs:{id:"协调世界时-coordinated-universal-time-utc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#协调世界时-coordinated-universal-time-utc"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("协调世界时（Coordinated Universal Time, UTC）")])])]),t._v(" "),a("p",[t._v("协调世界时（Coordinated Universal Time，简称UTC）是最主要的世界时间标准，其以原子时秒长为基础，在时刻上尽量接近于格林尼治标准时间。")]),t._v(" "),a("h3",{attrs:{id:"格林尼治标准时间-greenwich-mean-time-gmt"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#格林尼治标准时间-greenwich-mean-time-gmt"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("格林尼治标准时间（Greenwich Mean Time, GMT）")])])]),t._v(" "),a("p",[t._v("格林尼治平时（Greenwich Mean Time，GMT）是指位于英国伦敦郊区的皇家格林尼治天文台当地的平太阳时，因为本初子午线被定义为通过那里的经线。")]),t._v(" "),a("h3",{attrs:{id:"cst"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cst"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("CST")])])]),t._v(" "),a("p",[t._v("CST同时是以下两个时区的英文缩写：")]),t._v(" "),a("ul",[a("li",[t._v("中国标准时间：China Standard Time")]),t._v(" "),a("li",[t._v("中部标准时间（美国）：Central Standard Time")])]),t._v(" "),a("p",[t._v("如此缩写相同，在没有明确区分的情况下极易混淆。")]),t._v(" "),a("p",[a("code",[t._v("timedatectl")]),t._v("工具的输出也不会那么明智。如果不知道这两个时区缩写相同，我还真以为系统拿美国的CST作为时区参照，使得这里的CST指的是美国标准时间了。幸好，为了避免歧义，Ubuntu的时区设置界面中特别标明了当前时区相对UTC的时差。")]),t._v(" "),a("p",[a("strong",[t._v("实践中，UTC与GMT大致重合，其时间的值基本一致")]),t._v("，但是它们在本质上各不相同。前者以原子时为依据，是确定时间值的标准，而后者则是时区上的概念，作为世界上不同地区人口生活的时间参照。")]),t._v(" "),a("p",[t._v("UTC也是计算机系统中的一个时间衡量标准，Ubuntu默认就将机器时间视为UTC。Ubuntu 16.04及更高版本的时间管理工具"),a("code",[t._v("timedatectl")]),t._v("中，UTC时间被单独列出来。")]),t._v(" "),a("h2",{attrs:{id:"为什么时差刚好是8个小时"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#为什么时差刚好是8个小时"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("为什么时差刚好是8个小时？")])])]),t._v(" "),a("p",[t._v("在中国，双系统导致的时差不多不少，正好是8个小时。而这8个小时的时差，正是中国所在时区东八区（GMT+8）相对于GMT的时间差。UTC正与GMT重合，加上其又是Ubuntu系统的时间依据（Ubuntu认为机器时间是UTC），因此对于时区设置为东八区的中国用户来说，就是正好差了8小时。")]),t._v(" "),a("h2",{attrs:{id:"方法一-ubuntu中设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法一-ubuntu中设置"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("方法一：Ubuntu中设置")])])]),t._v(" "),a("p",[t._v("自16.04版本起，"),a("code",[t._v("timedatectl")]),t._v("成为Ubuntu的时间管理工具。不带参数运行时，它会输出当前的时间，以及系统时间的一些配置参数。输入结果如下：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Local time: Sun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-12-05 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":42:14 CST\n           Universal time: Sun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-12-05 08:42:14 UTC\n                 RTC time: Sun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-12-05 08:42:14    \n                Time zone: Asia/Shanghai "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CST, +0800"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nSystem clock synchronized: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("                        \n              NTP service: active                     \n          RTC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" TZ: no\n")])])]),a("h3",{attrs:{id:"_1、更改硬件时间标准"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1、更改硬件时间标准"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("1、更改硬件时间标准")])])]),t._v(" "),a("p",[t._v("为了让Ubuntu能正确显示时间，需要运行以下命令，将硬件时间由UTC改为CST。设置完成后，重启电脑生效：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" timedatectl set-local-rtc "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("这里要注意的是，Ubuntu官方其实是不推荐如此设置的。再次运行"),a("code",[t._v("timedatectl")]),t._v("，你会发现输出的下方多了一段很长的警告，还加粗了：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Warning: The system is configured to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" the RTC "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" zone.\n         This mode can not be fully supported. It will create various problems\n         with "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" zone changes and daylight saving "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" adjustments. The RTC\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" is never updated, it relies on external facilities to maintain it.\n         If at all possible, use RTC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" UTC by calling\n         "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'timedatectl set-local-rtc 0'")]),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v(".")]),t._v("\n")])])]),a("p",[t._v("不过可以忽略这个问题。")]),t._v(" "),a("h3",{attrs:{id:"_2、同步本地时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2、同步本地时间"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("2、同步本地时间")])])]),t._v(" "),a("p",[t._v("联网打开「Ubuntu设置」→「日期和时间」，开启「自动设置时间和日期」，稍等片刻。")]),t._v(" "),a("p",[a("img",{attrs:{src:"https://s2.loli.net/2022/05/08/A6u3lZEQOIyksBW.png",alt:"2021-12-05_16-44.png"}})]),t._v(" "),a("h3",{attrs:{id:"_3、-同步本地时间"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_3、-同步本地时间"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("3、 同步本地时间")])])]),t._v(" "),a("p",[t._v("运行以下命令，将本地时间更新到硬件时间上：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" hwclock --localtime --systohc\n")])])]),a("p",[a("strong",[t._v("设置完成后测试结果如下，注意观察时差：")])]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("Local time: Sun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-12-05 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":45:55 CST\n           Universal time: Sun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-12-05 08:45:55 UTC\n                 RTC time: Sun "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("2021")]),t._v("-12-05 "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("16")]),t._v(":45:55    \n                Time zone: Asia/Shanghai "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("CST, +0800"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" \nSystem clock synchronized: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("                        \n              NTP service: active                     \n          RTC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" TZ: "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("yes")]),t._v("                        \n\nWarning: The system is configured to "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("read")]),t._v(" the RTC "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" the "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("local")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" zone.\n         This mode cannot be fully supported. It will create various problems\n         with "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" zone changes and daylight saving "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" adjustments. The RTC\n         "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("time")]),t._v(" is never updated, it relies on external facilities to maintain it.\n         If at all possible, use RTC "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("in")]),t._v(" UTC by calling\n")])])]),a("h2",{attrs:{id:"方法二-在windows中设置"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#方法二-在windows中设置"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("方法二：在Windows中设置")])])]),t._v(" "),a("p",[t._v("还有另一种解决思路，在Windows中设置。打开管理员模式的命令提示符或PowerShell（在Windows+X快捷菜单中），输入以下命令：")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[t._v("reg "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("add")]),t._v(" HKLM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("SYSTEM"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("CurrentControlSet"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("Control"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("TimeZoneInformation /v RealTimeIsUniversal /t REG_DWORD /d "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n")])])]),a("p",[t._v("原理就是：在注册表项"),a("code",[t._v("HKEY_LOCAL_MACHINE\\SYSTEM\\CurrentControlSet\\Control\\TimeZoneInformation")]),t._v("中添加一个名为"),a("code",[t._v("RealTimeIsUniversal")]),t._v("的值，类型为"),a("code",[t._v("REG_DWORD")]),t._v("，数据为"),a("code",[t._v("1")]),t._v("。此项的作用就是让Windows将硬件时间当作UTC，与Ubuntu的默认设置一致（"),a("strong",[t._v("重启生效")]),t._v("）。")]),t._v(" "),a("h2",{attrs:{id:"注意事项"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#注意事项"}},[t._v("#")]),t._v(" "),a("em",[a("strong",[t._v("注意事项")])])]),t._v(" "),a("p",[a("strong",[t._v("切勿在两个系统中同时设置。")])]),t._v(" "),a("p",[t._v("上述两种系统的方法不能同时使用，否则会导致两个系统的时间标准不统一。因为在Ubuntu中，我们是要把默认的机器时间标准从UTC改动出去，但在Windows中却刚好相反。时间标准不统一，造成的后果与适用本教程前一模一样，只是错乱的系统变成了Windows。")]),t._v(" "),a("p",[t._v("同时，若在时间标准不统一的情况下设置系统时间，"),a("strong",[t._v("还会连同硬件时间也一同产生时差")]),t._v("，提前或延后八个小时。")])])}),[],!1,null,null,null);s.default=n.exports}}]);