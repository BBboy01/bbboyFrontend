<template>
  <InfoBackground>
    <el-scrollbar height="100vh">
      <Header />
      <NoteContent :id="id" />
    </el-scrollbar>
  </InfoBackground>
</template>

<script>
import Header from '../components/frontstages/Header'
import InfoBackground from '../components/frontstages/InfoBackground'
import NoteContent from '../components/frontstages/NoteContent'
import { ref, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
// 引入默认样式
import 'highlight.js/scss/default.scss'
// 引入个性化的vs2015样式
import 'highlight.js/styles/vs2015.css'


export default {
  setup () {
    const route = useRoute()

    const id = ref("")

    watchEffect(() => {
      id.value = route.path.split('/').slice(-1)[0]
    })

    return {
      id,
    }
  },

  components: {
    Header,
    InfoBackground,
    NoteContent,
  },
}
</script>

<style lang='scss'>
//@import url(); 引入公共css类
</style>