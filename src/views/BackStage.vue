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
    <div alt="" class="username" v-else>username: {{ userInfo.username }}</div>
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
import { computed, onMounted } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'
import Navigation from '../components/backstages/Navigation'
import Visits from '../components/backstages/Visits'
import CategoryRatio from '../components/backstages/CategoryRatio'
import Upload from '../components/backstages/Upload'
import Login from '../components/backstages/Login'


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
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  display: grid;
  height: 100vh;
  grid-template: 100%;
  grid-template-rows: 15% auto;
  overflow: hidden;
  position: relative;

  .username {
    position: absolute;
    right: 5px;
    top: 5px;
    z-index: 1;
    color: #333;
    font-weight: bold;
  }

  .back-home {
    margin: 10px auto;

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