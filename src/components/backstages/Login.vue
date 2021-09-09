<template>
  <div class="container">
    <img
      src="https://cdn.iconscout.com/icon/free/png-256/login-3904452-3279857.png"
      alt=""
      v-show="!showLogin"
      @click="toggleShow"
    />
    <el-form
      label-position="left"
      label-width="80px"
      :model="formLabelAlign"
      v-show="showLogin"
      :rules="rules"
      ref="ruleForm"
    >
      <el-form-item label="用户名" prop="username">
        <el-input v-model="formLabelAlign.username"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="formLabelAlign.password"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">登录</el-button>
        <el-button type="danger" @click="toggleShow">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { useStore } from 'vuex'

import { ElMessage } from 'element-plus'

import { login } from '@/requests/login'

export default {
  setup () {
    const showLogin = ref(false)
    const ruleForm = ref(null)

    const formLabelAlign = reactive({
      username: '',
      password: '',
    })

    const rules = reactive({
      username: [
        { required: true, message: '请输入用户名', trigger: 'blur' },
      ],
      password: [
        { required: true, message: '请输入密码', trigger: 'blur' }
      ],
    })

    const store = useStore()

    const submitForm = () => {
      ruleForm.value.validate(async valid => {
        if (!valid) {
          return false
        }
        const data = (await login(formLabelAlign.username, formLabelAlign.password)).data
        if (data.token) {
          window.localStorage.setItem('token', data.token)
          window.localStorage.setItem('username', data.username)
          store.commit('setIsLogin', true)
          store.commit('setUserInfo', data.username)
        } else {
          formLabelAlign.username = ""
          formLabelAlign.password = ""
          ElMessage({
            showClose: true,
            message: '用户名或密码错误',
            type: 'warning'
          })
        }
      })
    }

    const toggleShow = () => {
      showLogin.value = !showLogin.value
    }

    return {
      formLabelAlign,
      submitForm,
      rules,
      showLogin,
      toggleShow,
      ruleForm,
    }
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

  img {
    width: 50px;
    height: 50px;
  }
}
</style>