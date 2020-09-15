import axios from 'axios';


// 请求拦截器
axios.interceptors.request.use(function (config) {
  // 对请求的参数做些什么   例如：添加请求头；修改请求地址
  // config.headers.common["token"] = "....";
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});


// 响应拦截器
axios.interceptors.response.use(function (response) {
  // 对响应错误做些什么   例如：对特定的错误响应码弹出提示框；没有权限的情况下做的操作
  return response.data;
}, function (error) {
  return Promise.reject(error);
});