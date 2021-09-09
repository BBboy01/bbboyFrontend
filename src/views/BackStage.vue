<template>
  <div class="wrapper">
    <div class="back-home">
      <img
        src="../assets/images/logo.svg"
        alt=""
        @click="goHome"
        data-aos="fade-down"
      />
    </div>
    <Login v-if="!userInfo.isLogin" />
    <div v-else class="user">
      <User :username="userInfo.username" />
    </div>
    <Navigation>
      <template #visits>
        <Visits />
      </template>
      <template #category-ratio>
        <CategoryRatio />
      </template>
      <template #upload>
        <Upload />
      </template>
    </Navigation>
  </div>
</template>

<script>
import { onMounted, computed } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

import { checkStatus } from '@/requests/login'
import Navigation from '../components/backstages/Navigation'
import Visits from '../components/backstages/Visits'
import CategoryRatio from '../components/backstages/CategoryRatio'
import Upload from '../components/backstages/Upload'
import Login from '../components/backstages/Login'
import User from '../components/backstages/User'


export default {
  setup () {
    const router = useRouter()

    const store = useStore()

    const goHome = () => {
      router.push({ path: '/home' })
    }

    const userInfo = computed(() => {
      return store.state.user
    })

    onMounted(async () => {
      let result = await checkStatus()
      if (result.msg !== 'ok') {
        window.localStorage.removeItem('token')
        window.localStorage.removeItem('username')
        store.commit('removeUserInfo')
      }
    })

    return {
      goHome,
      userInfo
    }
  },

  components: {
    Navigation,
    Visits,
    CategoryRatio,
    Upload,
    Login,
    User,
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  height: 100vh;
  overflow: hidden;
  position: relative;

  .user {
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 1;
  }

  .back-home {
    margin: 20px 50%;

    img {
      transition: transform 0.2s ease-in-out;
      cursor: pointer;

      &:hover {
        transform: scale(1.1);
      }
    }
  }
}
</style>