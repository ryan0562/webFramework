// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App.vue'
import router from './router'
import 'src/components/axios'//axios 请求/拦截/
import elementUi from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css';
import 'src/common/reset.scss'

Vue.config.productionTip = false;


Vue.use(elementUi);

new Vue({
  el: '#app',
  router,
  components: {App},
  template: '<App/>'
});
