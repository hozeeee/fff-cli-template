<template>
  <!-- 重写了 SubMenu ，递归组件 -->
  <a-sub-menu :key="menuInfo.id" v-bind="$props" v-on="$listeners">
    <span slot="title">
      <a-icon v-if="menuInfo.iconType" :type="menuInfo.iconType" />
      <span>{{ menuInfo.title }}</span>
    </span>
    <template v-for="item in menuInfo.children">
      <a-menu-item
        v-if="!Array.isArray(item.children) || item.children.length === 0"
        :key="item.id"
        :value="item"
      >
        <a-icon v-if="item.iconType" :type="item.iconType" />
        <span>{{ item.title }}</span>
      </a-menu-item>
      <SubMenu v-else :key="item.id" :menu-info="item" />
    </template>
  </a-sub-menu>
</template>
<script>
import { Menu } from "ant-design-vue";
export default {
  name: "SubMenu",
  isSubMenu: true,
  props: {
    ...Menu.SubMenu.props,
    menuInfo: {
      type: Object,
      default: () => ({}),
    },
  },
};
</script>