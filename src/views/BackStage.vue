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
    <Login />
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
import { ref, onMounted, reactive, nextTick } from 'vue'
import { useRouter } from 'vue-router'
import Navigation from '../components/backstages/Navigation'
import Visits from '../components/backstages/Visits'
import CategoryRatio from '../components/backstages/CategoryRatio'
import Upload from '../components/backstages/Upload'
import Login from '../components/backstages/Login'


export default {
  setup () {
    const router = useRouter()

    const goHome = () => {
      router.push({ path: '/home' })
    }


    return {
      goHome,
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