/**
 * 监听copy事件
 *
 * @format
 */

document.addEventListener('copy', function (e) {
	//取消默认事件，才能修改复制的值
	e.preventDefault();
	//复制的内容
	var copyTxt;
	if (window.getSelection(0).toString().length >= 80) {
		copyTxt = `${window
			.getSelection(0)
			.toString()}\n\n作者:Boris\n站长:Boris\n公众号:Boris\n链接: ${
			window.location.href
		}\n来源: Boris\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请附上原文出处及本链接。`;
	} else {
		copyTxt = window.getSelection(0).toString();
	}
	if (e.clipboardData) {
		e.clipboardData.setData('text/plain', copyTxt);
	} else if (window.clipboardData) {
		return window.clipboardData.setData('text', copyTxt);
	}
});

// 在线问答

// 浏览器控制台显示
window.console &&
	(console.groupCollapsed(
		'%cBoris',
		'color:#3eaf7c;font-size:28px;font-weight:300',
	),
	console.log('boris .\n欢迎光临'),
	console.log(`%c https://xiebipan.site\n`, 'color:#3eaf7c'),
	console.log('%c QQ交流群(1):Boris,微信公众号:Boris', 'color:#3eaf7c'),
	console.groupEnd());

// 移动端下,禁止用户缩放
document.addEventListener('touchstart', function (event) {
	if (event.touches.length > 1) {
		event.preventDefault();
	}
});
document.addEventListener('gesturestart', function (event) {
	event.preventDefault();
});

// console.log(new Date().getTime() - performance.timing.navigationStart);
