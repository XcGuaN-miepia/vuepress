module.exports = {
  title: 'Hello VuePress',
	description: 'Just playing around',
	base: '/vuepress/',
	themeConfig: {
		nav: [
			{ text: '首页', link: '/' },
			{ text: 'vue', link: '/vue' }
		],
		sidebar: [
      '/docker 安装',
      '/Docker安装Jenkins'
		],
		lastUpdated: 'Last Updated'
	}
}