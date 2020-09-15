<template>
  <div id="app">
    <Header />
    <div class="_center">
      <!-- <Aside /> -->
      <div class="_view_content">
        <router-view />
      </div>
    </div>
    <!-- <Footer /> -->
  </div>
</template>
<script>
import Header from "@/header";
/* ********** PC 端 ********** */
// import Footer from "@/footer";
// import Aside from "@/aside";
/* *************************** */

export default {
  name: "App",
  components: {
    Header,
    /* ********** PC 端 ********** */
    // Footer,
    // Aside,
    /* *************************** */
  },
};
</script>
<style lang="less" scoped>
#app {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  text-align: center;
  overflow: auto;
  /* ***** PC 端 ***** */
  // min-height: 600px;
  // min-width: 900px;
  /* **************** */
  ._center {
    flex: 1;
    width: 100%;
    display: flex;
    overflow: hidden;
    ._view_content {
      overflow: hidden;
      width: 100%;
      /* 含有 aside 的布局 */
      flex: 1;
      /* **************** */
      /* "圣杯" 布局 */
      // width: 900px;
      // margin: 0 auto;
      /* ********** */
      height: 100%;
    }
  }
}
</style>
