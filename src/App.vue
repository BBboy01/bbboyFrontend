<template>
  <div>
    <router-view v-if="isRouterAlive" />
  </div>
</template>

<script>
import { ref, nextTick, provide } from "vue"

export default {
  setup () {
    // 局部组件刷新
    const isRouterAlive = ref(true)
    const reload = () => {
      isRouterAlive.value = false
      nextTick(() => {
        isRouterAlive.value = true
      })
    }
    provide("reload", reload)

    return {
      isRouterAlive,
    }
  },
  components: {
  },
}
</script>

<style lang='scss' scoped>
@import "./assets/css/base.css";
//@import url(); 引入公共css类
html {
  height: 0;
}
</style>