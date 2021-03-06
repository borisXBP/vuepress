#!/usr/bin/env sh

# 确保脚本抛出遇到的错误
set -e

# 生成静态文件
npm run build

# 进入生成的文件夹
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 同时推送到两个仓库 如果发布到 https://<USERNAME>.github.io/<REPO>
git push -f git@github.com:borisXBP/vuepress.git master:gh-pages
git push -f git@gitee.com:jin-heng/vuepress.git master:gh-pages
git push -f git@106.55.39.252:/home/www/website/ts.git master

cd -