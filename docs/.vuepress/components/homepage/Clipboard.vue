<template></template>
<style lang="stylus" scoped>
p {
  text-align: center;
  font-size: 16px;

  span {
    display: block;
  }

  a {
    margin-right: 3px;

    img {
      display: inline-block;
      vertical-align: middle;
      margin-right: 2px;
      margin-left: 2px;
    }
  }
}
</style>
<script>
export default {
  name: "Clipboard",
  props: ["html"],
  data() {
    return {
      dateYear: new Date().getFullYear(),
    };
  },
  methods: {
    handlePage() {
      const target = document.querySelector(
        'div[class="footer-wrapper footer"]'
      );
      if (target?.style?.height === "40px") {
        return;
      }
      if (target) {
        target.style.height = "40px";
        target.style.padding = "0px";
        target.innerHTML = `  <div>
    <p>
      <span>MIT Licensed | Copyright © ${this.dateYear} -present</span>
      <br/>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" target="_blank" style="font-size:16px">
        <img src="/icons/icp.png" width="20" height="20" alt="公网备案" style="vertical-align:middle" /> 粤
        ICP 备 20061538 号
      </a>
    </p>
    <div v-html="html" />
  </div>`;
      }
      const img = document.querySelector('img[alt="hero"]');
      if (img) {
        img.style.maxHeight = "112px";
        img.style.margin = "16px";
      }
    },
  },
  created() {},
  mounted() {
    // this.location = window.location;
    // 后续此处需要改进
    this.handlePage();
    setInterval(() => {
      this.handlePage();
    }, 400);
  },
};
</script>
