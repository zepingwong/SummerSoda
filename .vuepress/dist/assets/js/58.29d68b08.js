(window.webpackJsonp=window.webpackJsonp||[]).push([[58],{606:function(t,s,a){"use strict";a.r(s);var e=a(2),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"持续集成"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#持续集成"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("持续集成")])])]),t._v(" "),s("p",[t._v("随着软件工程的发展，目前软件的开发、已经形成了一套比较成熟的流程，「持续集成（Continuous integration，CI）」就是其中一个重要概念。简单来说，「持续集成」就是频繁地将代码提交到主干分支。这样做的目的，就是为了快速发现bug，避免分支与主干差异太大。与「持续集成」相关的概念还有「持续交付」和「持续部署」。这篇文章主要的目的是介绍GitHub的持续集成服务，所以在开始前简单介绍了一下概念。接下来就是「GitHub Actions」的介绍。")]),t._v(" "),s("h2",{attrs:{id:"github-actions"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#github-actions"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("GitHub Actions")])])]),t._v(" "),s("p",[t._v("2018年，GitHub推出了持续集成服务，即"),s("a",{attrs:{href:"https://github.com/features/actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("GitHub Actions"),s("OutboundLink")],1),t._v("。持续集成由很多操作组成，比如抓取代码、运行测试、登录远程服务器，发布到第三方服务等等，基本上这些操作都是固定的，流程化的，GitHub 允许开发者把每个操作写成独立的脚本文件，存放到代码仓库，使得其他开发者可以引用，并把这些操作命名为 "),s("code",[t._v("Actions")]),t._v("。如果你需要某个 action，不必自己写复杂的脚本，直接引用他人写好的 action 即可，整个持续集成过程，就变成了一个 actions 的组合，也就是你的抓取代码、运行测试、登录远程服务器，发布……等等的一些列流程操作步骤。")]),t._v(" "),s("p",[t._v("GitHub 做了一个"),s("a",{attrs:{href:"https://github.com/marketplace?type=actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方市场"),s("OutboundLink")],1),t._v("，可以搜索到他人提交的 "),s("code",[t._v("actions")]),t._v("。另外，还有一个 "),s("a",{attrs:{href:"https://github.com/sdras/awesome-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("awesome actions"),s("OutboundLink")],1),t._v(" 的仓库，也可以找到很多 "),s("code",[t._v("actions")]),t._v("。")]),t._v(" "),s("h2",{attrs:{id:"基本概念"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#基本概念"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("基本概念")])])]),t._v(" "),s("p",[t._v("GitHub Actions 有一些自己的术语。")]),t._v(" "),s("ul",[s("li",[t._v("workflow （工作流程）：持续集成一次运行的过程，就是一个 workflow。")]),t._v(" "),s("li",[t._v("job （任务）：一个 workflow 由一个或多个 jobs 构成，含义是一次持续集成的运行，可以完成多个任务。")]),t._v(" "),s("li",[t._v("step（步骤）：每个job 由多个 step 构成，一步步完成。")]),t._v(" "),s("li",[t._v("action （动作）：每个 step 可以依次执行一个或多个命令（action）。")])]),t._v(" "),s("h2",{attrs:{id:"workflow-文件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#workflow-文件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("workflow 文件")])])]),t._v(" "),s("p",[t._v("GitHub Actions 的配置文件叫做 workflow 文件，存放在代码仓库的"),s("code",[t._v(".github/workflows/")]),t._v("目录。workflow 文件采用 "),s("code",[t._v("YAML")]),t._v(" 格式，文件名可以任意取，但是后缀名统一为 "),s("code",[t._v(".yml")]),t._v("，比如 "),s("code",[t._v("main.yml")]),t._v("。workflow 文件的配置字段非常多，详见"),s("a",{attrs:{href:"https://docs.github.com/en/actions/using-workflows/workflow-syntax-for-github-actions",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("。下面是一些基本字段。")]),t._v(" "),s("h3",{attrs:{id:"name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("name")])])]),t._v(" "),s("p",[s("code",[t._v("name")]),t._v(" 字段是 workflow 的名称。如果省略该字段，默认为当前 workflow 的文件名。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" GitHub Actions Demo\n")])])]),s("h3",{attrs:{id:"on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#on"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("on")])])]),t._v(" "),s("h4",{attrs:{id:"单一事件"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#单一事件"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("单一事件")])])]),t._v(" "),s("p",[s("code",[t._v("on")]),t._v(" 字段指定触发 workflow 的条件，通常是某些事件。下面代码指定，"),s("code",[t._v("push")]),t._v(" 事件触发 workflow。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" push\n")])])]),s("h4",{attrs:{id:"事件数组"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事件数组"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("事件数组")])])]),t._v(" "),s("p",[s("code",[t._v("on")]),t._v(" 字段也可以是事件的数组。下面代码指定，"),s("code",[t._v("push")]),t._v("事件或"),s("code",[t._v("pull_request")]),t._v("事件都可以触发 workflow。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("push"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" pull_request"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("h4",{attrs:{id:"限定分支或标签"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#限定分支或标签"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("限定分支或标签")])])]),t._v(" "),s("p",[t._v("指定触发事件时，可以限定分支或标签，语法格式为"),s("code",[t._v("on.<push|pull_request>.<tags|branches>")]),t._v("。下面代码指定，只有 "),s("code",[t._v("master")]),t._v(" 分支发生 "),s("code",[t._v("push")]),t._v(" 事件时，才会触发 workflow。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("push")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("branches")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("    \n      "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" master\n")])])]),s("p",[t._v("完整的事件列表，请查看"),s("a",{attrs:{href:"https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows",target:"_blank",rel:"noopener noreferrer"}},[t._v("官方文档"),s("OutboundLink")],1),t._v("。除了代码库事件，GitHub Actions 也支持外部事件触发，或者定时运行。")]),t._v(" "),s("h3",{attrs:{id:"jobs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobs"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("jobs")])])]),t._v(" "),s("p",[t._v("workflow 文件的主体是 "),s("code",[t._v("jobs")]),t._v(" 字段，表示要执行的一项或多项任务。")]),t._v(" "),s("h4",{attrs:{id:"jobs-job-id-name"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobs-job-id-name"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("jobs.<job_id>.name")])])]),t._v(" "),s("p",[s("code",[t._v("jobs")]),t._v(" 字段里面，需要写出每一项任务的 "),s("code",[t._v("job_id")]),t._v("，具体名称自定义。"),s("code",[t._v("job_id")]),t._v(" 里面的 "),s("code",[t._v("name")]),t._v(" 字段是任务的说明。下面代码的 "),s("code",[t._v("jobs")]),t._v(" 字段包含两项任务，"),s("code",[t._v("job_id")]),t._v(" 分别是 "),s("code",[t._v("my_first_job")]),t._v(" 和 "),s("code",[t._v("my_second_job")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("my_first_job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" My first job\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("my_second_job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" My second job\n")])])]),s("h4",{attrs:{id:"jobs-job-id-needs"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobs-job-id-needs"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("jobs.<job_id>.needs")])])]),t._v(" "),s("p",[s("code",[t._v("needs")]),t._v(" 字段指定当前任务的依赖关系，即运行顺序。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job1")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job2")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("needs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" job1\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("job3")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("needs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("job1"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" job2"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n")])])]),s("p",[t._v("上面代码中，"),s("code",[t._v("job1")]),t._v(" 必须先于 "),s("code",[t._v("job2")]),t._v(" 完成，而 "),s("code",[t._v("job3")]),t._v(" 等待 "),s("code",[t._v("job1")]),t._v(" 和 "),s("code",[t._v("job2")]),t._v(" 的完成才能运行。因此，这个 workflow 的运行顺序依次为："),s("code",[t._v("job1")]),t._v("、"),s("code",[t._v("job2")]),t._v("、"),s("code",[t._v("job3")]),t._v("。")]),t._v(" "),s("h4",{attrs:{id:"jobs-job-id-runs-on"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobs-job-id-runs-on"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("jobs.<job_id>.runs-on")])])]),t._v(" "),s("p",[s("code",[t._v("runs-on")]),t._v(" 字段指定运行所需要的虚拟机环境。它是必填字段。目前可用的虚拟机如下。")]),t._v(" "),s("ul",[s("li",[t._v("ubuntu-latest，ubuntu-18.04或ubuntu-16.04")]),t._v(" "),s("li",[t._v("windows-latest，windows-2019或windows-2016")]),t._v(" "),s("li",[t._v("macOS-latest或macOS-10.14")])]),t._v(" "),s("p",[t._v("下面代码指定虚拟机环境为 "),s("code",[t._v("ubuntu-18.04")]),t._v("。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("18.04")]),t._v("\n")])])]),s("h4",{attrs:{id:"jobs-job-id-steps"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jobs-job-id-steps"}},[t._v("#")]),t._v(" "),s("em",[s("strong",[t._v("jobs.<job_id>.steps")])])]),t._v(" "),s("p",[s("code",[t._v("steps")]),t._v(" 字段指定每个 Job 的运行步骤，可以包含一个或多个步骤。每个步骤都可以指定以下三个字段。")]),t._v(" "),s("ul",[s("li",[s("strong",[t._v("jobs.<job_id>.steps.name")]),t._v("：步骤名称")]),t._v(" "),s("li",[s("strong",[t._v("jobs.<job_id>.steps.run")]),t._v("：该步骤运行的命令或者 action")]),t._v(" "),s("li",[s("strong",[t._v("jobs.<job_id>.steps.env")]),t._v("：该步骤所需的环境变量")])]),t._v(" "),s("p",[t._v("下面代码中，"),s("code",[t._v("steps")]),t._v(" 字段只包括一个步骤。该步骤先注入四个环境变量，然后执行一条 Bash 命令。")]),t._v(" "),s("div",{staticClass:"language-yaml extra-class"},[s("pre",{pre:!0,attrs:{class:"language-yaml"}},[s("code",[s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Greeting from Mona\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" push\n\n"),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("jobs")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n  "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("my-job")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" My Job\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("runs-on")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" ubuntu"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v("latest\n    "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("steps")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("-")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("name")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Print a greeting\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("env")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MY_VAR")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Hi there"),s("span",{pre:!0,attrs:{class:"token tag"}},[t._v("!")]),t._v(" My name is\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("FIRST_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Mona\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("MIDDLE_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" The\n        "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("LAST_NAME")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" Octocat\n      "),s("span",{pre:!0,attrs:{class:"token key atrule"}},[t._v("run")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("|")]),s("span",{pre:!0,attrs:{class:"token scalar string"}},[t._v("\n        echo $MY_VAR $FIRST_NAME $MIDDLE_NAME $LAST_NAME.")]),t._v("\n")])])])])}),[],!1,null,null,null);s.default=n.exports}}]);