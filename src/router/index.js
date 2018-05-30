import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);

const routes = [{
  path: '/',
  component: () => import('src/pages/main.vue'),//有头部跟底部
  children: [
    {
      path: '',
      name: '首页',
      meta: {
        title: '牛板金理财官网'
      },
      component: () => import('src/pages/index.vue'),
    },

  ]
}];

const router = new Router({
  mode: 'history',
  routes
});

//路由切换前做一些处理
router.beforeEach((to, from, next) => {
  Vue.prototype.loading = true;//载入动画
  document.title = to.meta.title;//页面标题
  next();
});

//路由切换后做一些处理
router.afterEach(function (to) {
  Vue.prototype.loading = false;
});
export default router
