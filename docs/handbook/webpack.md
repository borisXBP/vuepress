## webpack 原理

在深入实战前先要知道 webpack 的运行原理

### webpack 核心概念

- `entry` 一个可执行模块或库的入口文件。
- `chunk` 多个文件组成的一个代码块，例如把一个可执行模块和它所有依赖的模块组合和一个 `chunk` 这体现了 webpack 的打包机制。
- `loader` 文件转换器，例如把 es6 转换为 es5，scss 转换为 css。
- `plugin` 插件，用于扩展 webpack 的功能，在 webpack 构建生命周期的节点上加入扩展 hook 为 webpack 加入功能。

### webpack 构建流程

从启动 webpack 构建到输出结果经历了一系列过程，它们是：

1.  解析 webpack 配置参数，合并从 shell 传入和`webpack.config.js`文件里配置的参数，生产最后的配置结果。
2.  注册所有配置的插件，好让插件监听 webpack 构建生命周期的事件节点，以做出对应的反应。
3.  从配置的`entry`入口文件开始解析文件构建 AST 语法树，找出每个文件所依赖的文件，递归下去。
4.  在解析文件递归的过程中根据文件类型和 loader 配置找出合适的 loader 用来对文件进行转换。
5.  递归完后得到每个文件的最终结果，根据`entry`配置生成代码块`chunk`。
6.  输出所有`chunk`到文件系统。

需要注意的是，在构建生命周期中有一系列插件在合适的时机做了合适的事情，比如`UglifyJsPlugin`会在 loader 转换递归完后对结果再使用`UglifyJs`压缩覆盖之前的结果。

## 场景和方案

通过各种场景和对应的解决方案让你深入掌握 webpack

### 单页应用

**demo [redemo](https://github.com/gwuhaolin/redemo)**  
一个单页应用需要配置一个`entry`指明执行入口，webpack 会为`entry`生成一个包含这个入口所有依赖文件的`chunk`，但要让它在浏览器里跑起来还需要一个 HTML 文件来加载`chunk`生成的 js 文件，如果提取出了 css 还需要让 HTML 文件引入提取出的 css。[web-webpack-plugin](https://github.com/gwuhaolin/web-webpack-plugin)里的`WebPlugin`可以自动的完成这些工作。

webpack 配置文件

```js
const { WebPlugin } = require("web-webpack-plugin");
module.exports = {
  entry: {
    app: "./src/doc/index.js",
  },
  plugins: [
    // 一个WebPlugin对应生成一个html文件
    new WebPlugin({
      //输出的html文件名称
      filename: "index.html",
      //这个html依赖的`entry`
      requires: ["app"],
    }),
  ],
};
```

`requires: ['doc']`指明这个 HTML 依赖哪些`entry`，`entry`生成的 js 和 css 会自动注入到 HTML 里。  
你还可以配置这些资源的注入方式，支持如下属性：

- `_dist` 只有在生产环境下才引入该资源
- `_dev` 只有在开发环境下才引入该资源
- `_inline` 把该资源的内容潜入到 html 里
- `_ie` 只有 IE 浏览器才需要引入的资源

> 备案 © 2022 Boris 个人网站 | [粤 ICP 备 20061538 号](https://beian.miit.gov.cn) | 保留所有权利
