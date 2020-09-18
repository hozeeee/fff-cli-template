<template>
  <div class="header_container">
    <img class="logo" src="@/assets/img/logo.gif" />
    <span class="title">我是头部...</span>
    <!------------ aside 存在时才需要 ------------>
    <a-tabs
      class="header_tabs"
      v-model="activeKey"
      type="editable-card"
      size="large"
      :hideAdd="true"
      @edit="onEdit"
      @change="onTabsChange"
    >
      <a-tab-pane v-for="pane in panes" :key="pane.key" :tab="pane.title" :closable="pane.closable"></a-tab-pane>
    </a-tabs>
    <!------------------------------------------->
  </div>
</template>
<script>
export default {
  /* ********** aside 存在时才需要 ********** */
  watch: {
    $route(route) {
      // 以路由的 path 作为 tab-pane 的 key
      let temp = { title: route.name, key: route.path, closable: true };
      this.activeKey = route.path;
      if (this.panes.some((i) => i.key === route.path)) return;
      this.panes.push(temp);
    },
  },
  data() {
    return {
      // 默认首页，且不能关闭
      panes: [{ title: "home", key: "/", closable: false }],
      activeKey: null,
    };
  },
  methods: {
    onEdit(targetKey, action) {
      if (action !== "remove") return;
      this[action](targetKey);
    },
    remove(targetKey) {
      let activeKey = this.activeKey;
      let lastIndex,
        targetPane,
        resultPanes = [];
      this.panes.forEach((pane, idx) => {
        if (pane.key !== targetKey) {
          resultPanes.push(pane);
          return;
        }
        lastIndex = idx - 1;
        targetPane = pane;
      });
      if (!targetPane) return;
      this.panes = resultPanes;
      if (activeKey === resultPanes[lastIndex].key) return;
      if (lastIndex >= 0) activeKey = resultPanes[lastIndex].key;
      else activeKey = resultPanes[0].key;
      this.activeKey = activeKey;
      this.onTabsChange(activeKey);
    },
    onTabsChange(activeKey) {
      this.$router.replace(activeKey);
    },
  },
  /* *************************************** */
};
</script>
<style lang="less" scoped>
.header_container {
  height: 40px;
  width: 100%;
  color: #fff;
  background-color: #003261;
  display: flex;
  align-items: center;
  .logo {
    height: 100%;
    margin-left: 20px;
  }
  .title {
    font-size: 20px;
    text-indent: 10px;
  }

  /* ***** aside 存在时才需要 ***** */
  .header_tabs {
    @height: 30px;
    height: @height;
    margin: 0 30px;
    flex: 1;
    text-align: left;
    align-self: flex-end;
    & > ::v-deep .ant-tabs-bar {
      margin-bottom: 0;
      .ant-tabs-tab {
        line-height: @height !important;
      }
    }
  }
  /* ***************************** */
}
</style>