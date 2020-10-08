<template>
  <a-menu
    class="a_menu"
    mode="inline"
    :selectedKeys.sync="selectedKeys"
    :openKeys.sync="openKeys"
    :inlineIndent="12"
    @click="handleClick"
  >
    <template v-for="item in menuData">
      <a-menu-item
        v-if="!Array.isArray(item.children) || item.children.length===0"
        :key="item.id"
        :value="item"
      >
        <a-icon v-if="item.iconType" :type="item.iconType" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <SubMenu v-else :key="item.id" :menu-info="item" />
    </template>
  </a-menu>
</template>
<script>
import { getMenuPathKeys } from "../menuUtils";
import SubMenu from "./SubMenu";

export default {
  props: {
    menuData: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      selectedKeys: [],
      openKeys: [],
    };
  },
  methods: {
    handleClick({ item }) {
      if (this.$route.path === item.value.path) return;
      this.$router.push(item.value.path);
    },
    handleRouteChange() {
      this.selectedKeys = [this.$route.meta.id];
      if (this.handleRouteChange.first) return;
      let openKeys = getMenuPathKeys(this.menuData, this.$route.meta.id);
      if (!Array.isArray(openKeys)) openKeys = [];
      this.openKeys = openKeys;
      this.handleRouteChange.first = true;
    },
  },
  watch: {
    $route: "handleRouteChange",
  },
  components: {
    SubMenu,
  },
};
</script>
<style lang="less" scoped >
.a_menu {
  width: 100%;
  height: 100%;
  text-align: left;
}
</style>