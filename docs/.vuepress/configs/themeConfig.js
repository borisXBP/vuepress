module.exports = {
    nav: [
      { text: "首页", link: "/" },
      {
        text: "Boris Blog",
        items: [
          { text: "Github", link: "https://github.com/borisXBP" },
          { text: "掘金", link: "https://github.com" },
        ],
      },
    ],
    sidebar: [
      {
        title: "Angular",
        path: "/",
        collapsable: false, // 不折叠
        /*         children: [{ title: "学前必读", path: "/" }], */
      },
      {
        title: "Webpack",
        path: "/handbook/webpack",
        collapsable: false,
      },
      {
        title: "React",
        path: "/handbook/react",
        collapsable: false,
      },
      {
        title: "Vue3",
        path: "/handbook/vue3",
        collapsable: false,
      },
      /*     {
        title: "学习基础",
        path: "/handbook/ConditionalTypes",
        collapsable: false, // 不折叠
         children: [
          { title: "条件类型", path: "/handbook/ConditionalTypes" },
          { title: "泛型", path: "/handbook/Generics" },
        ], 
      },*/
    ],
    // subSidebar: "auto", // 子目录跟随主题，即大的目录在左边，文章内目录在右边
    // lastUpdated: "上次更新", // string | boolean , 时间来源于 git 记录
  }