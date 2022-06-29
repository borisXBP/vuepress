module.exports = {
  // 路径名为 "/<REPO>/"
  base: "/vuepress/",
  title: "Boris 的个人博客 vuepress 版",
  description: "用于个人博客分享",
  themeConfig: {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Boris Blog",
        items: [
          { text: "Github", link: "https://github.com/borisXBP" },
          { text: "掘金", link: "https://github.com/borisXBP" },
        ],
      },
    ],
    sidebar: [
      {
        title: "欢迎学习",
        path: "/",
        collapsable: false, // 不折叠
        children: [{ title: "学前必读", path: "/" }],
      },
      {
        title: "学习基础",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
        children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ],
      },
    ],
    subSidebar: "auto", // 子目录跟随主题，即大的目录在左边，文章内目录在右边
  },
  theme: "reco", // 安装并引用已有的主题 vuepress-theme-recol，获取暗黑模式等功能
  locales: {
    "/": {
      lang: "zh-CN", // 设置语言，对日期显示方式等有相应的影响
    },
  },
};
