<template>
  <div id="app">
    <transition name="el-fade-in">
      <router-view></router-view>
    </transition>
    <mockConsole></mockConsole>
    <mockForm></mockForm>
  </div>
</template>

<script>

export default {
  name: 'App',
  components: {
    mockConsole: () => import('src/components/mock/mockConsole.vue'),
    mockForm: () => import('src/components/mock/mockForm.vue'),
  }
}
</script>

