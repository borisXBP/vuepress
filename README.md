<!-- @format -->

# vuepress

vuepress 版本的个人博客

学习网址：
https://github.com/mqyqingfeng/Blog

Github 项目博客首页：
https://borisxbp.github.io/vuepress/

远程仓库地址：
git@106.55.39.252:/home/www/website/ts.git

手动提交
cd docs/.vuepress/dist
git remote add boris git@106.55.39.252:/home/www/website/ts.git
git push boris

线上地址：

项目发布方式：
sh deploy.sh

备注：
1、脚本提交的方式目前存在错误，需要手动切换到 dist 目录并提交到 gh-pages 分支才可以更新页面
2、暂未安装的插件：vuepress-plugin-element-tabs，安装会报与 node 版本不兼容，估计要用低版本的 node
3、暂未安装 axios 插件，因为安装之后会报错，global is not defined
4、暂未安装 vant

> nginx 常用命令
> systemctl reload nginx
> 进入配置文件地址：/etc/nginx
> 进入展示文件地址：/home/www/website
