import Vue from 'vue';
import App from './App.vue';
import router from '@/router';
import '@/assets/css/global.css';
import api from "@/axios";
import "@/axios/axios.config.js";

Vue.config.productionTip = false

Vue.prototype.$api = api;

new Vue({
  router,
  render: h => h(App),
}).$mount('#app')





// TODO: 将外层的 main.js 直接引入到这里





