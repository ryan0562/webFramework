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

//页面跳转前置判断
router.beforeEach((to, from, next) => {
  next();
});

export default router
