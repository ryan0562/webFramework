<template>
  <section>
    <commonHeader></commonHeader>
    <router-view></router-view>
    <commonFooter></commonFooter>
  </section>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    commonHeader: () => import('src/page/header.vue'),
    commonFooter: () => import('src/page/footer.vue'),
  },
  created() {
    /*this.$http.post('/api/member/web/mobile/check',{mobile: 15397191444})
      .then(res => {
        console.log('成功', res)
      }).catch(res => {
      console.log('失败', res)
    });*/
  },
}
</script>

