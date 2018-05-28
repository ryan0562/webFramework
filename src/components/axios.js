import Vue from 'vue'
import qs from 'qs'
import $http from 'axios'

//添加一个请求拦截器
$http.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});
//添加一个返回拦截器
$http.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  return Promise.reject(error);
});
// 格式化数据
$http.defaults.transformRequest.push(function (data, headers) {
  if (headers['Content-Type'] === 'application/json;charset=utf-8') {
    headers['Content-Type'] = 'application/x-www-form-urlencoded';
    data = qs.stringify(JSON.parse(data));
  }
  return data;
});

Vue.prototype.$http = $http;//ps:this.$http.post()
