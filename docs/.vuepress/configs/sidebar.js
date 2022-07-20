/** @format */

// 将侧边栏放置在该文件中,集中进行管理

module.exports = {
	'/fontend/': require('../../fontend/sidebar'), // 头部/顶部前端的侧边栏
	'/wechat/': require('../../wechat/sidebar'), // 头部/顶部小程序
	'/interview/': require('../../interview/sidebar'),
};
