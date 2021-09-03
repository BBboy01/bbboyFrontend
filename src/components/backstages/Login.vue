<template>
  <div class="container">
    <el-form label-position="left" label-width="80px" :model="formLabelAlign">
      <el-form-item label="用户名">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive } from 'vue'
import { useStore } from 'vuex'

import { login } from '@/requests/login'

export default {
  setup () {
    const formLabelAlign = reactive({
      username: '',
      password: '',
    })

    const store = useStore()

    const submitForm = async () => {
      const data = await login(formLabelAlign.username, formLabelAlign.password)
      if (data.token) {
        window.localStorage.setItem('token', data.token)
        window.localStorage.setItem('username', data.username)
      }
      store.commit('setIsLogin', true)
      store.commit('setUserInfo', data.username)
    }

    return {
      formLabelAlign,
      submitForm,
    }
  },
  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.container {
  position: absolute;
  right: 5px;
  top: 5px;
  z-index: 1;
}
</style>