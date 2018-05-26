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
export default router
