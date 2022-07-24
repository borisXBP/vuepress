/** @format */
// 集中配置管理头部nav导航栏
// https://vuepress.docschina.org/default-theme-config/#%E5%AF%BC%E8%88%AA%E6%A0%8F-navbar

module.exports = [
  { text: "首页", link: "/" },
  {
    text: "最新文章",
    link: "/最新文章/",
  },
  {
    text: "前端",
    items: [
      { text: "CSS", link: "/fontend/CSS/" },
      { text: "JavaScript", link: "/fontend/JavaScript/" },
      { text: "前端框架", link: "/fontend/前端框架/" },
      { text: "前端算法", link: "/fontend/前端算法/" },
      { text: "开发工具", link: "/fontend/开发工具/" },
      { text: "网址收藏", link: "/fontend/网址收藏/" },
    ],
  },
  {
    text: "社交",
    items: [
      { text: "Github", link: "https://github.com/borisXBP" },
      { text: "掘金", link: "https://github.com" },
    ],
  },
];
