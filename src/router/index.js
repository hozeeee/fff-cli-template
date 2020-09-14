import Vue from "vue";
import VueRouter from "vue-router";
import "./route.component.config.js";

Vue.use(VueRouter);

const router = new VueRouter({
  mode: "history",

  /* ********** PC 端 ********** */
  // // 路由的配置在 aside 组件中生成
  // routes: [
  //   // 组件的注册请在 route.component.config.js 配置。以 route-* 格式命名。
  // ],
  /* *************************** */

  /* ********** 移动端 ********** */
  routes: [{
    path: '/',
    name: "home",
    component: Vue.component("route-home") // 组件的注册请在 route.component.config.js 配置。以 route-* 格式命名。
  }, {
    path: '/qqList',
    name: "qqList",
    component: Vue.component("route-qqList")
  }]
  /* *************************** */

});


// // 全局前置守卫
// router.beforeEach((to, from, next) => { })
// // 全局解析守卫
// router.beforeEach((to, from, next) => { })
// // 全局后置钩子
// router.afterEach((to, from) => { })

export default router;