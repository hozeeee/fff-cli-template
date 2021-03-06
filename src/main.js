import Vue from "vue";
import App from "./App.vue";
import router from "@/router";
import store from "@/store";
/* ******* PC 端 ******* */
import PerfectScrollbar from "perfect-scrollbar";
import "perfect-scrollbar/css/perfect-scrollbar.css";
/* ********************* */
import dayjs from "dayjs";
import api from "@/axios";
import "@/assets/css/global.css";
/* ******* 移动端 ******* */
import Hammer from "hammerjs";
import Swiper from "swiper";
import "swiper/swiper-bundle.css";
/* ********************* */
Vue.config.productionTip = false;

// 按需加载 ant-design-vue
import {
  /* *** 侧边栏 *** */
  Menu,
  Tabs,
  /* ************* */
  Icon
} from "ant-design-vue";
/* *** 侧边栏 *** */
Vue.use(Menu);
Vue.use(Tabs);
/* ************* */
Vue.use(Icon);

Vue.prototype.$api = api;
Vue.prototype.$dayjs = dayjs;
/* ******* PC 端 ******* */
Vue.directive("scrollbar", {
  inserted(el) {
    let ps = new PerfectScrollbar(el);
    el.__ps = ps;
  },
  unbind(el) {
    if (el.__ps && typeof el.__ps.destroy === "function") el.__ps.destroy();
    delete el.__ps;
  },
});
/* ********************* */
/* ******* 移动端 ******* */
Vue.prototype.$Swiper = Swiper;
Vue.prototype.$Hammer = Hammer;
// pan: 按压拖动; pinch: 两(多)指缩放手势;  press: 持续按下(250ms)触发;  rotate: 两(多)指旋转;  swipe: 左右滑动手势;  tap: 普通的触碰
const validTouchGestures = ["pan", "pinch", "press", "rotate", "swipe", "tap"];
const defaultDisableGestures = ["pinch", "rotate"];
Vue.directive("touch", {
  inserted(el, binding) {
    let callback = binding.value;
    if (typeof callback !== "function") return;
    let modifiers = Object.keys(binding.modifiers);
    if (modifiers.length > 1) throw "指令不能多于 1 个.";
    if (modifiers.length === 0 || !validTouchGestures.includes(modifiers[0])) modifiers = ["tap"];
    let hammer = new Hammer(el);
    if (defaultDisableGestures.includes(modifiers[0])) hammer.get(modifiers[0]).set({ enable: true });
    hammer.on(modifiers[0], callback);
  },
});
/* ********************* */

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount("#app")