## 前言
```!
友情提示：本教程只提供vscode的提示方法！别的编辑器我不会搞！
```

用过 **vscode** 和 **element-ui** 组件的小伙伴一定会体验过，他的组件能够自动提示名称以及提示可传入 **Attributes**

**下面是使用截图**
![](https://user-gold-cdn.xitu.io/2020/4/15/1717dcafea23978d?w=1462&h=582&f=png&s=92351)
![](https://user-gold-cdn.xitu.io/2020/4/15/1717dcbaa65ef0ff?w=1696&h=592&f=png&s=106360)

**附一张 el-dialog 组件传值说明图**

![](https://user-gold-cdn.xitu.io/2020/4/15/1717dcd780399497?w=928&h=862&f=png&s=97808)
可以看到，它提示的值基本都是能对应上的。不同于 **snippets**，这种方式最大的好处就是按需引入需要的值，像 **align** 这些值甚至能提示可以输入哪些值。但是这种好用的方法除了在 **element-ui** 组件之外，我也没有见过别的组件有这种形式的提示。

为了研究为什么能提示，我也下载过 **element-ui** 的源码，也参考过他的写法写过一个组件库，也考虑过是他的ts文件生成的提示。在一系列的尝试之后，我都失败了。此历程前前后后断断续续经历了半年时间，一直都没有任何思绪。直到最近，我考虑了一下是否是我安装的插件中有无对 **element-ui** 进行支持的。

在不停的禁用启用我的插件之后，我终于发现了提示代码的插件： **Vetur**，就是那个写 **Vue** 代码必备插件。

之前很长一段时间，我对 **Vetur** 的认知就只是 **Vue** 标签高亮提示而已，压根想不到他竟然会对 **element-ui** 进行提示支持。后来翻看他的文档之后，发现他的确是对 **element-ui** 进行支持的

![](https://user-gold-cdn.xitu.io/2020/4/15/1717deab20131b90?w=757&h=210&f=png&s=36134)

历尽千辛万苦终于找到了解决方法，下面就开始进入正题

## 1、Tags / Attributes
**Tags** 和 **Attributes** 其实分别是 2 个不同的 json 文件，下面就以 **element-ui** 的 **element-tags.json** 和 **element-attributes.json** 来说。由于也没有找到具体文档，下面说明**仅供参考！！**

```!
element-tags.json
```
https://github.com/ElementUI/element-helper-json/blob/master/element-tags.json
![](https://user-gold-cdn.xitu.io/2020/4/15/1717e04da4906525?w=1832&h=1464&f=png&s=261730)
从标签上来说很好理解，定义了不同的组件的标签名。标签下面可以包含 4 个属性

|属性名|作用|
|-|-|
|attributes|可以触发提示的属性|
|description|组件的描述|
|subtags|上层组件（在实际用法中似乎这个值没有作用）|
|defaults|目前不是很清楚这个属性作用是什么|

```!
element-attrbiutes.json
```
https://github.com/ElementUI/element-helper-json/blob/master/element-attributes.json
![](https://user-gold-cdn.xitu.io/2020/4/22/171a24ee60136edf?w=2226&h=1954&f=png&s=833407)
这个文件从文件名中就可以看出，这是一个描述属性用的文件。常见的属性就 3 个

|属性名|作用|
|-|-|
|options|属性可以选择的默认提示|
|description|属性的描述|
|version|版本号|

这里面的属性大多数是公用的，但是有一些属性名称可能相同，但是作用描述却不相同，这该怎么办呢？

其实这也是可以解决的

![](https://user-gold-cdn.xitu.io/2020/4/22/171a2651497dcf93?w=1870&h=122&f=png&s=52120)
比如这边都有用到 **center** 属性，可以在属性的前面加上'组件名/'这种格式，这样就可以不同的组件用同一个名称的提示，但是描述可以更改不一样的（弱弱吐槽一下，他们的 **el-steps** 好像写错了）

## 2、如何配置到组件当中
其实单看 **element-ui** 的组件库，其实看不出什么名堂，这也是为什么我花了很长一段时间也没有研究明白的原因。真相其实是，**Vetur** 对于 **element-ui** 做了支持。上面的 **github** 地址就是 **element-ui** 提示文件，**Vetur** 直接依赖了这两个文件，所以在 **element-ui** 组件当中不需要放上这两个文件。但是像我们这些小众的开发者，总不能要求 **Vetur** 插件开发者为我们的组件做一个支持吧。幸好，在查看 **Vetur** 的源码和参考国外的资料之后，我发现其实我们个人开发团队也能做代码提示。

首先上面两个文件是必备的，对于组件库中的组件用法属性得先编写一套规则。完成规则创建后，将这两个文件放到项目当中。像我直接在项目当中新建了一个 **vetur** 名称的文件夹，将这两个文件放到了其中。之后只需要在 **package.json** 文件中加入几行代码

```
"vetur": {
  "tags": "vetur/tags.json",
  "attributes": "vetur/attributes.json"
},
```

当然如果像我一样放文件的位置，**files** 属性也得加一下 **vetur** 的目录
![](https://user-gold-cdn.xitu.io/2020/4/22/171a278e2cedb374?w=204&h=188&f=png&s=6399)

完成这些步骤之后，打包到本地或者上传到 **npm** 当中，重新依赖一下文件，重启一下 **vscode** 编辑器之后，就能发现代码提示成功了

## 3、我没有组件库怎么办？
其实这个方法是我最开始找到的方法。既然 **Vetur** 插件对 **element-ui** 组件支持，并且插件又是用 **js** 写的，为什么不能直接去修改一下他的源码呢？

1、首先找到 **Vetur** 插件在电脑的位置

`
mac 地址：/Users/[user]/.vscode/extensions/octref.vetur-0.24.0
`

**Windows** 系统我没有进行尝试，毕竟百度搜一下很快就能找到插件安装的位置

2、进入 **sever/dist/modes/template/tagProviders** 文件夹，找到 **externalTagProviders.js** 和 **externalTagProviders.d.ts** 文件

```!
externalTagProviders.js
```

可以先定义两个变量 **newTags** 和 **newAttributes** （当然你可以取别的名字），可以直接 **require** 获取你本地的规则

```
const newTags = require("本地地址")
const newAttributes = require("本地地址")
```

再对外导出一个 **newTagProvider** 变量，具体写法可以参考 **elementTagProvider**

```
exports.newTagProvider = getExternalTagProvider('new', newTags, newAttributes);
```

注意：第一个参数 **'new'** 不能随便取，之后下面步骤需要用到

```!
externalTagProviders.d.ts
```
在该文件当中补一段导出的 ts 提示（大概是这个作用？ts 学的不是很好）
```
export declare const newTagProvider: IHTMLTagProvider;
```
3、同目录下找到 **index.js** 文件，找到 **exports.allTagProviders**，在下面补上之前导出的 **newTagProvider**
```
exports.allTagProviders = [
    htmlTags_1.getHTML5TagProvider(),
    vueTags_1.getVueTagProvider(),
    routerTags_1.getRouterTagProvider(),
    externalTagProviders_1.elementTagProvider,
    externalTagProviders_1.onsenTagProvider,
    externalTagProviders_1.bootstrapTagProvider,
    externalTagProviders_1.buefyTagProvider,
    externalTagProviders_1.gridsomeTagProvider,
    ++externalTagProviders_1.newTagProvider
];
```

在下面 **getTagProviderSettings** 方法中的 **try** 语句当中，加上判断是否加载提示方法

```
if (dependencies['new']) {
    settings['new'] = true;
}
```

在 **dependencies** 当中的 **'new'** 代表的是 **package.json** 当中有的依赖的名称，如果你实在没有组件库，你可以随便填个 **Vue** 啊，**eslint** 啊，前提是你项目有依赖。第二个 **setting** 当中的 **'new'** 代表的参数是否启用。这个值必须和第二步中我提示的那个参数一致才能生效。

改完保存之后，重启一下 **vscode** 编辑器，代码提示也出来了，至此，大功告成。

（ps: **vscode** 按 **F1** 之后输入命令 **>Reload Window**,当前编辑器就可以重启了）

## 4、写在最后
作为一个理科生，实在不会组织语言，这是我的第一篇文章，我已经尽可能的写的详细明白，如果有哪部分不明白或者觉得哪里我写的不好不对，大家都可以提出来，我也会虚心接受。

谢谢大家！