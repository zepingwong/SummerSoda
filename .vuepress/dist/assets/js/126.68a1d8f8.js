(window.webpackJsonp=window.webpackJsonp||[]).push([[126],{674:function(t,r,e){"use strict";e.r(r);var s=e(2),a=Object(s.a)({},(function(){var t=this,r=t._self._c;return r("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[r("p",[t._v("Windows 子系统安装方法")]),t._v(" "),r("h2",{attrs:{id:"一、准备工作"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#一、准备工作"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("一、准备工作")])])]),t._v(" "),r("p",[t._v("由于WSL2基于hyper-V，所以需要电脑支持虚拟化，并且需要在BIOS中开启虚拟化技术。")]),t._v(" "),r("h3",{attrs:{id:"_1-开启虚拟化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-开启虚拟化"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("1. 开启虚拟化")])])]),t._v(" "),r("p",[t._v("开启虚拟化需要在BIOS中进行设置，不同的PC设置方法大同小异，一般步骤是进入BIOS→找到虚拟化设置→开启。")]),t._v(" "),r("h3",{attrs:{id:"_2-检验是否开启虚拟化"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-检验是否开启虚拟化"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("2. 检验是否开启虚拟化")])])]),t._v(" "),r("h4",{attrs:{id:"方法-1-任务管理器"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法-1-任务管理器"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("方法 1：任务管理器")])])]),t._v(" "),r("p",[t._v("「Ctrl+Alt+Del」调出「安全选项」界面，选择启动「任务管理器」。「性能」选项卡显示「虚拟化："),r("strong",[t._v("已启用")]),t._v("」即可。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/4e831fce86b2da2380151e8957f50963.png",alt:"Snipaste_2022-05-07_16-53-18.png"}})]),t._v(" "),r("h4",{attrs:{id:"方法-2-命令行"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法-2-命令行"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("方法 2：命令行")])])]),t._v(" "),r("p",[t._v("打开Windows命令行，并运行")]),t._v(" "),r("div",{staticClass:"language-bash extra-class"},[r("pre",{pre:!0,attrs:{class:"language-bash"}},[r("code",[t._v("systeminfo\n")])])]),r("p",[t._v("固件中已启用虚拟化为"),r("strong",[t._v("是")]),t._v("，代表PC已经支持虚拟化。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/aa1d1eaa05ecdf0932073773d4237efa.png",alt:"Snipaste_2022-05-07_16-36-06.png"}})]),t._v(" "),r("h3",{attrs:{id:"_3-开启开发者模式"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-开启开发者模式"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("3.  开启开发者模式")])])]),t._v(" "),r("p",[t._v("「开发者选项」→「开发人员模式」，打开开关。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ff4505d01ae2328665f7a7a2fc618b43.png",alt:"Snipaste_2022-05-07_16-16-35.png"}})]),t._v(" "),r("h3",{attrs:{id:"_4-开启windows功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_4-开启windows功能"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("4. 开启Windows功能")])])]),t._v(" "),r("p",[t._v("需要先启用「适用于 Linux 的 Windows 子系统」可选功能，然后才能在 Windows 上安装 Linux 分发。")]),t._v(" "),r("p",[t._v("找到「控制面板」-「程序/功能」-「启用或关闭Windows功能」，选中「适用于Linux的Windows子系统」，然后点击确定。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/b020df1441822725c28d56b369ddd582.png",alt:"Snipaste_2022-05-07_17-41-41.png"}})]),t._v(" "),r("h2",{attrs:{id:"二、升级wsl内核"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#二、升级wsl内核"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("二、升级WSL内核")])])]),t._v(" "),r("h3",{attrs:{id:"_1-下载更新包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-下载更新包"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("1.\t下载更新包")])])]),t._v(" "),r("p",[r("a",{attrs:{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_x64.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("适用于 x64 计算机的 WSL2 Linux 内核更新包"),r("OutboundLink")],1)]),t._v(" "),r("blockquote",[r("p",[r("em",[r("strong",[t._v("备注")])]),t._v("：如果使用的是 ARM64 计算机，请下载 "),r("a",{attrs:{href:"https://wslstorestorage.blob.core.windows.net/wslblob/wsl_update_arm64.msi",target:"_blank",rel:"noopener noreferrer"}},[t._v("ARM64"),r("OutboundLink")],1),t._v(" 包。 如果不确定自己计算机的类型，请打开命令提示符或 PowerShell，并输入："),r("code",[t._v('systeminfo | find "System Type"')]),t._v("；如果是中文操作系统，可以输入"),r("code",[t._v('systeminfo | find "系统类型"')]),t._v("，查看计算机类型。\n"),r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/a806dd9f93a1e16bc476815eb6ddec6a.png",alt:"Snipaste_2022-05-07_23-02-29.png"}})])]),t._v(" "),r("h3",{attrs:{id:"_2-安装更新包"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-安装更新包"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("2. 安装更新包")])])]),t._v(" "),r("p",[t._v("运行上一步中下载的更新包"),r("code",[t._v("wsl_update_x64.msi")]),t._v("。")]),t._v(" "),r("blockquote",[r("p",[r("em",[r("strong",[t._v("备注")])]),t._v("：双击以运行 - 系统可能提示你提供提升的权限，「Next」继续，选择「是」以批准此安装。")])]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6cba9fef56f6295f132d7a0e590040ef.png",alt:"Snipaste_2022-05-08_01-18-25.png"}})]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ce30162a5a00e7111b9762a6851f1f3c.png",alt:"Snipaste_2022-05-08_01-18-50.png"}})]),t._v(" "),r("blockquote",[r("p",[r("em",[r("strong",[t._v("备注")])]),t._v("：如果遇到下面的提示和错误，只需要将Windows系统能更新的全更新就可以了。\n"),r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/b88505afe70e864ba3efae71f10f9bad.png",alt:"Snipaste_2022-05-07_23-06-50.png"}}),t._v(" "),r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/1cd773ed217f7952d08b067fb6aa7acf.png",alt:"Snipaste_2022-05-07_23-07-22.png"}})])]),t._v(" "),r("h2",{attrs:{id:"三、启用虚拟机功能"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#三、启用虚拟机功能"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("三、启用虚拟机功能")])])]),t._v(" "),r("p",[t._v("安装 WSL 2 之前，必须启用「虚拟机平台」可选功能。计算机需要虚拟机功能才能使用此功能。")]),t._v(" "),r("h3",{attrs:{id:"_1-启用虚拟机平台"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-启用虚拟机平台"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("1. 启用虚拟机平台")])])]),t._v(" "),r("h4",{attrs:{id:"方法-1-控制面板"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法-1-控制面板"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("方法 1：控制面板")])])]),t._v(" "),r("p",[t._v("找到「控制面板」-「程序/功能」-「启用或关闭Windows功能」，选中「虚拟机平台」，然后点击确定。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/bc89cf0762589fb029f7872f1a0f45e3.png",alt:"Snipaste_2022-05-08_02-21-39.png"}})]),t._v(" "),r("h4",{attrs:{id:"方法-2-命令行-2"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#方法-2-命令行-2"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("方法 2：命令行")])])]),t._v(" "),r("p",[t._v("以管理员身份打开 "),r("code",[t._v("PowerShell")]),t._v(" 并运行：")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("dism.exe /online /enable-feature /featurename:VirtualMachinePlatform /all /norestart\n")])])]),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/6f655e9dbba1a2679824b199bd5a2387.png",alt:"Snipaste_2022-05-08_02-21-39.png"}})]),t._v(" "),r("h3",{attrs:{id:"_2-重启"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-重启"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("2. 重启")])])]),t._v(" "),r("p",[t._v("这时需要重启电脑，等待电脑重新启动完成即可。")]),t._v(" "),r("h2",{attrs:{id:"四、设置默认wsl"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#四、设置默认wsl"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("四、设置默认WSL")])])]),t._v(" "),r("p",[t._v("将 WSL 2 设置为默认版本，打开 PowerShell，然后在安装新的 Linux 发行版时运行以下命令，将 WSL 2 设置为默认版本：")]),t._v(" "),r("div",{staticClass:"language-shell extra-class"},[r("pre",{pre:!0,attrs:{class:"language-shell"}},[r("code",[t._v("wsl --set-default-version "),r("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n")])])]),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/f5439f4d513bd63cb3a534dc43b3c067.png",alt:"Snipaste_2022-05-08_01-33-33.png"}})]),t._v(" "),r("h2",{attrs:{id:"五、安装-linux-分发"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#五、安装-linux-分发"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("五、安装 Linux 分发")])])]),t._v(" "),r("h3",{attrs:{id:"_1-microsoft-store"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_1-microsoft-store"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("1. Microsoft Store")])])]),t._v(" "),r("p",[t._v("打开 "),r("a",{attrs:{href:"https://aka.ms/wslstore",target:"_blank",rel:"noopener noreferrer"}},[t._v("Microsoft Store"),r("OutboundLink")],1),t._v("，并选择你偏好的 Linux 分发版。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/9e24597a4d93f35c12741b679cc6abc8.png",alt:"Snipaste_2022-05-08_01-37-14.png"}})]),t._v(" "),r("p",[t._v("单击以下链接会打开每个分发版的 Microsoft Store 页面：")]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9pjn388hp8c9",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 16.04 LTS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9N9TNGVNDL3Q",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 18.04 LTS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9n6svws3rx71",target:"_blank",rel:"noopener noreferrer"}},[t._v("Ubuntu 20.04 LTS"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9NJFZK00FGKV",target:"_blank",rel:"noopener noreferrer"}},[t._v("openSUSE Leap 15.1"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9MZ3D1TRP8T1",target:"_blank",rel:"noopener noreferrer"}},[t._v("SUSE Linux Enterprise Server 12 SP5"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9PN498VPMF3Z",target:"_blank",rel:"noopener noreferrer"}},[t._v("SUSE Linux Enterprise Server 15 SP1"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9PKR34TNCV07",target:"_blank",rel:"noopener noreferrer"}},[t._v("Kali Linux"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9MSVKQC78PK6",target:"_blank",rel:"noopener noreferrer"}},[t._v("Debian GNU/Linux"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9n6gdm4k2hnc",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fedora Remix for WSL"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9NV1GV1PXZ6P",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pengwin"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9N8LP0X93VCP",target:"_blank",rel:"noopener noreferrer"}},[t._v("Pengwin Enterprise"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://www.microsoft.com/store/apps/9p804crf0395",target:"_blank",rel:"noopener noreferrer"}},[t._v("Alpine WSL"),r("OutboundLink")],1)])]),t._v(" "),r("h3",{attrs:{id:"_2-获取应用"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_2-获取应用"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("2. 获取应用")])])]),t._v(" "),r("p",[t._v("在分发版的页面中，点击「获取」，开始下载Ubuntu 20.04 发行版本。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/52df3ae787af938817620e91d708dc2d.png",alt:"Snipaste_2022-05-08_01-35-37.png"}})]),t._v(" "),r("h3",{attrs:{id:"_3-完成"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#_3-完成"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("3. 完成")])])]),t._v(" "),r("p",[t._v("安装完成后，点击「打开」。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/5fe1068402d05a7ccfba5ee3cb0c6ca2.png",alt:"Snipaste_2022-05-08_01-49-19.png"}})]),t._v(" "),r("p",[t._v("首次启动新安装的 Linux 分发版时，将打开一个控制台窗口，系统会要求你等待一分钟或两分钟，以便文件解压缩并存储到电脑上。然后，需要为新的 Linux 分发版创建用户帐户和密码。")]),t._v(" "),r("p",[r("img",{attrs:{src:"https://img-blog.csdnimg.cn/img_convert/ebc6e0cfcfe464beda13e38e857e0d42.png",alt:"Snipaste_2022-05-08_01-47-10.png"}})]),t._v(" "),r("blockquote",[r("p",[r("em",[r("strong",[t._v("备注")])]),t._v("：")]),t._v(" "),r("ol",[r("li",[t._v("未来的所有启动时间应不到1秒钟；")]),t._v(" "),r("li",[t._v("利用好这次机会，之后再改密码设置不了简单密码了；")]),t._v(" "),r("li",[t._v("Ubuntu输入密码不会有显示。")])])]),t._v(" "),r("p",[t._v("现已成功安装并设置了与 Windows 操作系统完全集成的 Linux 分发！")]),t._v(" "),r("h2",{attrs:{id:"六、参考"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#六、参考"}},[t._v("#")]),t._v(" "),r("em",[r("strong",[t._v("六、参考")])])]),t._v(" "),r("ul",[r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/install-win10",target:"_blank",rel:"noopener noreferrer"}},[t._v("适用于 Linux 的 Windows 子系统安装指南 (Windows 10)"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://devblogs.microsoft.com/commandline/wsl-2-support-is-coming-to-windows-10-versions-1903-and-1909/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL 2 即将支持 Windows 10 版本 1903 和 1909"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows/wsl/troubleshooting#im-on-windows-10-version-1903-and-i-still-do-not-see-options-for-wsl-2",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL 2 安装错误说明"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://devblogs.microsoft.com/commandline/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Windows Command Line"),r("OutboundLink")],1)]),t._v(" "),r("li",[r("a",{attrs:{href:"https://devblogs.microsoft.com/commandline/wsl2-will-be-generally-available-in-windows-10-version-2004/",target:"_blank",rel:"noopener noreferrer"}},[t._v("WSL 2 will be generally available in Windows 10, version 2004"),r("OutboundLink")],1)])])])}),[],!1,null,null,null);r.default=a.exports}}]);