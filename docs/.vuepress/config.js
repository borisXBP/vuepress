const themeConfig = require("./configs/themeConfig"); // 导入默认主题配置,里面包裹顶部nav,以及侧边栏,以及其他一些默认配置
const head = require("./configs/headConfig"); // 导入head配置,需要引入的html中head标签
const markdown = require("./configs/markdownConfig"); // 导入markdownConfig配置,如显示代码块行号,额外拓展支持h1~h6标签,不仅限于h2,h3标题
const plugins = require("./configs/plugin"); // 导入插件配置,如:包括返回顶部,图片缩放,pwa等插件

module.exports = {
  // 路径名为 "/<REPO>/"
  port: "80",
  host: "0.0.0.0",
  base: "/",
  title: "echarts", // "Boris 的个人博客(建设中...)",
  description: "前端技术博客,Boris的技术博客,Boris", // 博客描述,利于SEO
  keywords: "Boris的技术博客, Boris", // 关键字
  head, // head头部配置,额外的需要被注入到当前页面的 HTML <head> 中的标签
  lastUpdated: "上次更新", // 显示更新时间,设置true，开启最后更新时间
  markdown, //  markdown相关配置
  themeConfig, // 导入默认主题的一些选项配置文件,便于集中管理配置
  theme: "reco", // 安装并引用已有的主题 vuepress-theme-recol，获取暗黑模式等功能;  theme: 'yuu', // vuepress-theme-yuu主题
  plugins, // 外部插件配置,config.js里面写得太长了,阅读,修改起来,真的好恶心,有必要考虑拆分出去的
  locales: {
    "/": {
      lang: "zh-CN", // 设置语言，对日期显示方式等有相应的影响
    },
  },
};
