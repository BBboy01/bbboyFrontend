<template>
  <div class="wrapper">
    <div class="name">{{ username }}</div>
    <el-button type="danger" round @click="logout">退出登录</el-button>
  </div>
</template>

<script>
import { useStore } from 'vuex'


export default {
  props: {
    username: {
      type: String,
      required: true,
    }
  },

  setup () {
    const store = useStore()

    const logout = () => {
      window.localStorage.removeItem('token')
      window.localStorage.removeItem('username')
      store.commit('removeUserInfo')
    }

    return {
      logout,
    }
  },
  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 10px;
}
</style>