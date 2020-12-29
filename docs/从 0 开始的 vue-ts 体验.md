## 用 vue-cli 搭建项目
话不多说，直接上代码

vue-cli 安装过程不做讲解

命令行输入
```shell
$ vue create vue-ts
```
配置选择信息下载安装
```shell
? Please pick a preset: Manually select features
? Check the features needed for your project: Babel, TS, Router, Vuex, CSS Pre-processors, Linter
? Use class-style component syntax? Yes
? Use Babel alongside TypeScript (required for modern mode, auto-detected polyfills, transpiling JSX)? Yes
? Use history mode for router? (Requires proper server setup for index fallback in production) Yes
? Pick a CSS pre-processor (PostCSS, Autoprefixer and CSS Modules are supported by default): Less
? Pick a linter / formatter config: Standard
? Pick additional lint features: Lint on save, Lint and fix on commit
? Where do you prefer placing config for Babel, ESLint, etc.? In dedicated config files
? Save this as a preset for future projects? (y/N) 
```

目录结构
```
vue-ts
├─.browserslistrc
├─.editorconfig
├─.eslintrc.js
├─.gitignore
├─README.md
├─babel.config.js
├─package-lock.json
├─package.json
├─tsconfig.json
├─src
|  ├─App.vue
|  ├─main.ts
|  ├─shims-tsx.d.ts
|  ├─shims-vue.d.ts
|  ├─views
|  |   ├─About.vue
|  |   └Home.vue
|  ├─store
|  |   └index.ts
|  ├─router
|  |   └index.ts
|  ├─components
|  |     └HelloWorld.vue
|  ├─assets
|  |   └logo.png
├─public
|   ├─favicon.ico
|   └index.html
```
安装完成之后，执行命令`npm run server`能打开页面就算成功

## 修改 Home.vue 文件
既然是使用ts的项目，我们就要全部使用ts来使用，但是看了下 `Home.vue`文件，还是用之前的写法，所以需要修改一下
###### 原本的写法
```vue
<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
```
###### 修改的写法
```vue
<script lang="ts">
import { Vue } from 'vue-property-decorator'
import Component from 'vue-class-component'

import HelloWorld from '@/components/HelloWorld.vue'

@Component({
  name: 'home',
  components: {
    HelloWorld
  }
})
export default class Home extends Vue {

}
</script>
```

只是这样对比一下，其实用ts写的代码行数并没有减少，甚至还有引入其他的依赖，但是他存在肯定有他的理由，刚开始还没有体会到他的好处也是正常的。

## 从 0 开始开发页面
就从一个最简单的加减页面开始，由于想测试`prop`，将页面拆分成了组件
```
views/
├─About.vue
├─Home.vue
├─count
|   ├─Count.vue
|   ├─components
|   |     └CountMain.vue
```
###### Count.vue
```vue
<template>
	<div>
		<count-main :importCount="1"></count-main>
	</div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import CountMain from './components/CountMain.vue'

@Component({
	name: 'Count',
	components: {
		CountMain
	}
})
export default class Count extends Vue {

}
</script>

<style>

</style>

```
这个页面当中，我给子组件传入`importCount`为1
###### CountMain.vue
```
<template>
	<div>
		<button @click="add">+</button>
		<span>{{ count }}</span>
		<button @click="reduce">-</button>
		<span>{{ computedCount }}</span>
	</div>
</template>

<script lang="ts">
import { Prop, Vue, Component } from 'vue-property-decorator'

@Component({
	name: 'CountMain'
})
export default class CountMain extends Vue {
	// data
	private defaultCount = 0
	// prop
	@Prop({ type: Number, default: 0 }) importCount!: number
	// data
	count = 1 + this.defaultCount + this.importCount
	// computed
	get computedCount () {
		return `这个数字是${this.count}`
	}

	// method
	/**
	 * @description: 加法
	 */
	add () {
		this.count++
	}

	/**
	 * @description: 减法
	 */
	reduce () {
		this.count--
	}

	// hook
	mounted () {
		console.log('这是一个计算页面')
	}
}
</script>

<style>

</style>
```
用ts的写法对于`data`来说的确方便了许多，可以用修饰符`private`,`public`,`protect`来进行说明，默认为`public`