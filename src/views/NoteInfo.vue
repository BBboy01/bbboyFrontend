<template>
  <div class="wrapper">
    <Bck>
      <el-scrollbar height="100vh">
        <Header></Header>
        <div class="article-content" v-html="mdHtml" id="dio"></div>
      </el-scrollbar>
    </Bck>
  </div>
</template>

<script>
import Header from '../components/frontstages/Header'
import Bck from '../components/frontstages/InfoBackground'
import { ref, onMounted, nextTick, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
// 引入默认样式
import 'highlight.js/scss/default.scss'
// 引入个性化的vs2015样式
import 'highlight.js/styles/vs2015.css'
import { getSingleNote } from '../requests/getNote'


export default {
  setup () {
    const route = useRoute()
    const router = useRouter()

    let id = ref(route.path.split('/').slice(-1)[0])
    let title = ref('')
    let mdHtml = ref('')

    onMounted(() => {
      nextTick(async () => {
        let data = await getSingleNote(id.value)
        title.value = data.title
        mdHtml.value = data.content
      })
    })

    return {
      id,
      title,
      mdHtml,
    }
  },

  components: {
    Header,
    Bck,
  },
}
</script>

<style lang='scss'>
//@import url(); 引入公共css类
.wrapper {
  #dio {
    width: 1200px;
    margin: 0 auto;
    font-size: 16px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    color: #e6efff;
    padding-bottom: 10px;

    ul {
      list-style-type: disc;
      padding-left: 18px;
      margin: 10px 0;
      line-height: 20px;
    }

    p {
      margin: 10px 0;
    }

    pre.hljs {
      padding: 8px 2px;
      border-radius: 5px;
      position: relative;
      font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
        monospace;

      ol,
      li,
      span {
        -webkit-user-select: text;
        -moz-user-select: text;
        -ms-user-select: text;
        user-select: text;
      }

      ol {
        list-style: decimal;
        margin: 0;
        margin-left: 40px;
        padding: 0;

        li {
          list-style: decimal-leading-zero;
          position: relative;
          padding-left: 10px;
          line-height: 110%;

          .line-num {
            position: absolute;
            left: -40px;
            top: 0;
            width: 40px;
            height: 100%;
            border-right: 1px solid rgba(0, 0, 0, 0.66);
          }
        }
      }
      b.name {
        position: absolute;
        top: 0.8rem;
        right: 1rem;
        z-index: 10;
        color: hsla(0, 0%, 100%, 0.4);
        pointer-events: none;
        font-size: 0.75rem;
      }
    }

    h1 {
      background: #2b6695;
      border-radius: 6px 6px 6px 6px;
      box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
      color: #ffffff;
      font-size: 18px;
      font-weight: bold;
      height: 25px;
      line-height: 25px;
      margin: 18px 0 !important;
      padding: 0px 0px 5px 10px;
      text-shadow: 2px 2px 3px #222222;
    }

    h2 {
      background: #2b6600;
      border-radius: 6px 6px 6px 6px;
      box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
      color: #ffffff;
      font-size: 15px;
      font-weight: bold;
      height: 24px;
      line-height: 23px;
      margin: 12px 0 !important;
      padding: 0px 0 5px 20px;
      text-shadow: 2px 2px 3px #222222;
    }

    h3 {
      background: #5b9600;
      border-radius: 6px 6px 6px 6px;
      box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
      color: #ffffff;
      font-size: 13px;
      font-weight: bold;
      height: 24px;
      line-height: 20px;
      margin: 12px 0 !important;
      padding: 0px 0px 5px 30px;
      text-shadow: 2px 2px 3px #222222;
    }
  }
}
</style>