import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from 'src/components/HelloWorld.vue'

Vue.use(Router);

const routes = [{
  path: '/',
  component: HelloWorld
}];

const router = new Router({
  mode: 'history',
  routes
});

//路由切换前做一些处理
router.beforeEach((to, from, next) => {
  Vue.prototype.loading = true;
  next();
});

//路由切换后做一些处理
router.afterEach(function (to) {
  Vue.prototype.loading = false;
});
export default router
