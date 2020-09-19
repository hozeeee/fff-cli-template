import Vue from "vue";
import VueRouter from "vue-router";
import TAB_ROUTERS from "./route.component.config";

Vue.use(VueRouter);

// 添加配置的路由
for (let item of TAB_ROUTERS) {
  let path, name;
  if (typeof item === "string") path = name = item;
  if (Array.isArray(item)) {
    path = item.join("/");
    name = item[item.length - 1];
  }
  if (!path || !name) throw "路由组件配置(route.component.config.js)有误";
  Vue.component(`route-${name}`, resolve => {
    import(`@/views/${path}`).then(component => {
      resolve(component);
    }).catch(() => {});
  });
}

const router = new VueRouter({
  mode: "history",

  /* ********** PC 端 ********** */
  // // 路由的配置在 aside 组件中生成
  // routes: [
  //   // 组件的注册请在 route.component.config.js 配置。组件会添加 route-* 前缀。
  //   // 如： {path: '/', name: "home", component: Vue.component("route-home")}
  // ],
  /* *************************** */

  /* ********** 移动端 ********** */
  routes: [{
    path: '/',
    name: "home",
    component: Vue.component("route-home") // 组件的注册请在 route.component.config 配置。组件会添加 route-* 前缀。
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