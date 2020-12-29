(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{361:function(s,a,t){"use strict";t.r(a);var e=t(42),n=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("h2",{attrs:{id:"下载-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#下载-jenkins"}},[s._v("#")]),s._v(" 下载 Jenkins")]),s._v(" "),t("p",[s._v("从"),t("a",{attrs:{href:"https://www.jenkins.io/download/",target:"_blank",rel:"noopener noreferrer"}},[s._v("官网地址"),t("OutboundLink")],1),s._v("进入，在下载的选项当中点击"),t("code",[s._v("Docker")]),s._v(",就会跳转到"),t("code",[s._v("Docker Hub")]),s._v("，或者直接在服务器当中输入命令")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ docker pull jenkins/jenkins\n")])])]),t("blockquote",[t("p",[s._v("Docker安装不做多介绍")])]),s._v(" "),t("p",[s._v("当我们查看镜像的时候能找到"),t("code",[s._v("Jenkins")]),s._v("之后，我们就算已经安装好了")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 安装后")]),s._v("\nmiepiadeMacBook-Pro:~ xcguan$ docker images\nREPOSITORY          TAG                 IMAGE ID            CREATED             SIZE\njenkins/jenkins     latest              13e2b551515d        "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("6")]),s._v(" days ago          717MB\n")])])]),t("h2",{attrs:{id:"运行-jenkins"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#运行-jenkins"}},[s._v("#")]),s._v(" 运行 Jenkins")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("$ docker run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -u root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22222")]),s._v(":8080 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55555")]),s._v(":50000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  -v jenkins-data:/var/jenkins_home "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  jenkins/jenkins\n")])])]),t("ul",[t("li",[t("p",[s._v("-d  # 后台运行")])]),s._v(" "),t("li",[t("p",[s._v("-p 22222:8080 # 映射容器的端口8080到主机上的端口22222，主机端口随意处理，官方推荐-p 8080:8080")])]),s._v(" "),t("li",[t("p",[s._v("-p 55555:50000  # 映射容器的端口50000到主机上的端口55555，官方推荐-p 50000:50000")])]),s._v(" "),t("li",[t("p",[s._v("-v jenkins-data:/var/jenkins_home # 设置映射磁盘")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("miepiadeMacBook-Pro:~ xcguan$ docker run "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   -u root "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   -d "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("22222")]),s._v(":8080 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   -p "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("55555")]),s._v(":50000 "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   -v jenkins-data:/var/jenkins_home "),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("   jenkins/jenkins\n1fc8c3ad57c1bbb708cd4201eb1559c8f08ed4d8b5eb7269fa1f3847bf0393f2\n")])])])])]),s._v(" "),t("p",[s._v("运行完成之后，没有其他报错显示一串字符后，在浏览器中输入地址，端口号为 22222，进入后可以看到要输入密码")]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image1.png",alt:"image1"}})]),s._v(" "),t("p",[s._v("查看密码的两种方式")]),s._v(" "),t("ol",[t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("miepiadeMacBook-Pro:~ xcguan$ docker logs 1fc8c3 "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 1fc8c3 是我 docker 镜像的 id，其实没有别的镜像只输第一个字也可以")]),s._v("\n\nRunning from: /usr/share/jenkins/jenkins.war\n省略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n*************************************************************\n*************************************************************\n*************************************************************\n\nJenkins initial setup is required. An admin user has been created and a password generated.\nPlease use the following password to proceed to installation:\n\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在这边的就是密码，战术打码#")]),s._v("\n\nThis may also be found at: /var/jenkins_home/secrets/initialAdminPassword\n\n*************************************************************\n*************************************************************\n*************************************************************\n\n省略"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v("\n\n")])])])]),s._v(" "),t("li",[t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[s._v("miepiadeMacBook-Pro:~ xcguan$ docker "),t("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("exec")]),s._v(" -it -u "),t("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" 1fc8c3 /bin/bash "),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 进入镜像 bash")]),s._v("\nroot@1fc8c3ad57c1:/"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# cat var/jenkins_home/secrets/initialAdminPassword # 就是上一条战术打码下面的路径")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# 在这边的就是密码，战术打码#")]),s._v("\n")])])]),t("p",[s._v("输入后直接点击安装推荐插件，更加方便")])])]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image2.png",alt:"image2"}})]),s._v(" "),t("p",[s._v("安装完成后，就是一些配置信息和账号注册，跳过或者默认都是可以的")]),s._v(" "),t("h2",{attrs:{id:"构建项目"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建项目"}},[s._v("#")]),s._v(" 构建项目")]),s._v(" "),t("h4",{attrs:{id:"安装git-parameter-nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#安装git-parameter-nodejs"}},[s._v("#")]),s._v(" 安装Git Parameter，NodeJs")]),s._v(" "),t("p",[s._v("提前安装一下插件"),t("code",[s._v("Git Parameter")]),s._v("、"),t("code",[s._v("NodeJs")]),s._v("，进入"),t("code",[s._v("系统管理->插件管理")]),s._v("，先不进行下载，切换到"),t("code",[s._v("高级")]),s._v("选项，滑到最下面的升级站点，修改 URL")]),s._v(" "),t("div",{staticClass:"language- extra-class"},[t("pre",{pre:!0,attrs:{class:"language-text"}},[t("code",[s._v("https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json\n")])])]),t("h6",{attrs:{id:"详细的jenkins的镜像地址查询-http-mirrors-jenkins-ci-org-status-html"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#详细的jenkins的镜像地址查询-http-mirrors-jenkins-ci-org-status-html"}},[s._v("#")]),s._v(" 详细的Jenkins的镜像地址查询：http://mirrors.jenkins-ci.org/status.html")]),s._v(" "),t("p",[s._v("提交后再选择可选插件搜索"),t("code",[s._v("Git Parameter")]),s._v("、"),t("code",[s._v("NodeJs")]),s._v("，勾选后点击直接安装，进入下一个页面后勾选自动重启就行，安装完成后会自动刷新页面")]),s._v(" "),t("blockquote",[t("p",[s._v("经常会下载不成功，多试几次总会可以的")])]),s._v(" "),t("h4",{attrs:{id:"配置-nodejs"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#配置-nodejs"}},[s._v("#")]),s._v(" 配置 NodeJs")]),s._v(" "),t("p",[s._v("进入全局配置工具，在"),t("code",[s._v("NodeJs")]),s._v("项下点击"),t("code",[s._v("新增NodeJS")]),s._v("，填了别名之后点击保存，另外"),t("code",[s._v("Node")]),s._v("版本不要选择太高，本人选择的是 10.13.0")]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image3.png",alt:"image3"}})]),s._v(" "),t("h4",{attrs:{id:"构建配置"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#构建配置"}},[s._v("#")]),s._v(" 构建配置")]),s._v(" "),t("p",[s._v("点击新建任务，输入任务名称，选择构建一个自由风格的软件项目，再点击确定")]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image4.png",alt:"image4"}})]),s._v(" "),t("p",[s._v("源码管理中选择"),t("code",[s._v("Git")]),s._v("，输入仓库地址，在"),t("code",[s._v("Credentials")]),s._v("下面点击添加")]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image5.png",alt:"image5"}})]),s._v(" "),t("p",[s._v("输入你的"),t("code",[s._v("git")]),s._v("用户名密码即可，然后点击添加，添加后"),t("code",[s._v("Credentials")]),s._v("下选择你新添加的凭证即可，下面的指定分支先填写"),t("code",[s._v("${branch}")]),s._v("，下一步有作用，如果不喜欢这个名字可以根据下一步修改")]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image6.png",alt:"image6"}})]),s._v(" "),t("p",[s._v("再回到上面，参数化构建过程打钩选上，添加参数 点击 Git 参数，这个选项必须安装上面提到的"),t("code",[s._v("Git Parameter")]),s._v("插件才有")]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image7.png",alt:"image7"}})]),s._v(" "),t("p",[s._v("在名称填写 "),t("code",[s._v("branch")]),s._v("或者喜欢的名字，参数类型选择"),t("code",[s._v("分支")]),s._v("，默认值填写"),t("code",[s._v("origin/master")])]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image8.png",alt:"image8"}})]),s._v(" "),t("p",[s._v("再在构建环境当中，勾选"),t("code",[s._v("Provide Node & npm bin/ folder to PATH")])]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image9.png",alt:"image9"}})]),s._v(" "),t("p",[s._v("最后在构建当中选择"),t("code",[s._v("执行shell")])]),s._v(" "),t("p",[t("img",{attrs:{src:"Docker%E5%AE%89%E8%A3%85Jenkins.assets/image10.png",alt:"image10"}})]),s._v(" "),t("p",[s._v("在命令里面输入")]),s._v(" "),t("div",{staticClass:"language-shell extra-class"},[t("pre",{pre:!0,attrs:{class:"language-shell"}},[t("code",[t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" \n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf ./dist/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("npm")]),s._v(" run build\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("rm")]),s._v(" -rf /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("自定义Jenkins数据卷地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("/*\n"),t("span",{pre:!0,attrs:{class:"token function"}},[s._v("cp")]),s._v(" -rf ./dist/* /"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("自定义Jenkins数据卷地址"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v("\n")])])]),t("p",[s._v("完成后保存，回到工程，这时候找到 "),t("code",[s._v("Build with Parameters")]),s._v("，点击后会去查询分支，选择想要的分支，然后再点击开始构建即可。第一次构建时间会很慢，可以慢慢等待")])])}),[],!1,null,null,null);a.default=n.exports}}]);