/** @format */

// const secret = require('./secretKey'); // 引入密钥信息

module.exports = [
	[
		// 注入到当前页面的 HTML <head> 中的标签
		('link', { rel: 'icon', href: '/icons/favicon.ico' }),
	], // 增加一个自定义的 favicon(网页标签的图标)
	[
		'meta',
		{
			rel: 'keywords',
			content: 'boris的技术博客,前端开发,boris,http://xiebipan.site',
		},
	],
	['meta', { name: 'Author', content: 'Boris' }],
	[
		'meta',
		{ 'http-equiv': 'Content-Type', content: 'text/html', charset: 'UTF-8' },
	],
	['link', { rel: 'manifest', href: '/js/manifest.json' }],
	['meta', { name: 'theme-color', content: '#3eaf7c' }],
	['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
	['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	['link', { rel: 'apple-touch-icon', href: '/icons/apple-touch-icon.png' }],
	[
		'meta',
		{
			name: 'msapplication-TileImage',
			content: '/icons/msapplication-icon.png',
		},
	],
	['meta', { name: 'msapplication-TileColor', content: '#000000' }],
	['meta', { name: 'theme-color', content: '#3eaf7c' }],
	['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
	['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
	/* 	['meta', { name: 'baidu-site-verification', content: 'cShSMbDRHJ' }], */
	/* 	[
		'meta',
		{
			name: 'baidu_union_verify',
			content: 'c8f90a7f2296fb45fbb69e5397e9c98e',
		},
	], */

	[
		'meta', // 移动端禁止用户缩放
		{
			name: 'viewport',
			content:
				'width=device-width,width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=no',
		},
	],

	/* 	[
		'meta',
		{
			async: 'async',
			'http-equiv': 'Content-Security-Policy', // 自动将http的不安全请求升级为https
			content: 'upgrade-insecure-requests', // HTTPS 是 HTTP over Secure Socket Layer，以安全为目标的 HTTP 通道，所以在 HTTPS 承载的页面上不允许出现 http 请求，一旦出现就是提示或报错
		},
	], */
	/* 	[
		'meta', // 添加谷歌站点搜素
		{
			async: 'async',
			name: 'google-site-verification',
			content: 'Lp5bo-dr1R5gCVE_3iUI6KXr8tNhN5pyUxPYYKCZkO4',
		},
	], */
	[
		'meta',
		{
			'http-equiv': 'x-dns-prefetch-control',
			content: 'on',
		},
	],
	/* 	[
		// 添加百度统计代码
		'script',
		{},
		`
      var _hmt = _hmt || [];
      (function() {
          var hm = document.createElement("script");
          hm.src = "https://hm.baidu.com/hm.js?${baidu.baiduTongJiId}";
          var s = document.getElementsByTagName("script")[0];
          s.parentNode.insertBefore(hm, s);
      })();
    `,
	], */
	['link', { rel: 'stylesheet', href: '/css/style.css' }], // 这种方式也可以覆盖默认样式
	[
		'script',
		{
			charset: 'utf-8',
			async: 'async',
			src: 'https://my.openwrite.cn/js/readmore.js',
		},
	],
	['script', { charset: 'utf-8', async: 'async', src: '/js/setglobal.js' }],
];
