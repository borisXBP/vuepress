/** @format */
// 集中配置管理头部nav导航栏
// https://vuepress.docschina.org/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F-navbar

module.exports = [
	{ text: '首页', link: '/' },
	{
		text: '最新文章',
		link: '/latestarticle/',
	},
	{
		text: '前端',
		items: [
			{ text: 'CSS', link: '/fontend/css/' },
			{ text: 'JavaScript', link: '/fontend/js/' },
			{ text: '前端框架', link: '/fontend/framework/' },
			{ text: '前端算法', link: '/fontend/rsa/' },
			{ text: '开发工具', link: '/fontend/tools/' },
			{ text: '网址收藏', link: '/fontend/websitecol/' },
		],
	},
	{
		text: '社交',
		items: [
			{ text: 'Github', link: 'https://github.com/borisXBP' },
			{ text: '掘金', link: 'https://github.com' },
		],
	},
];
