<template>
  <div class="wrapper">
    <Bck />
    <Header></Header>
  </div>
</template>

<script>
import Header from '../components/Header'
import Bck from '../components/InfoBackground'
import { ref, onMounted } from 'vue'


export default {
  setup () {

    return {
    }
  },

  components: {
    Header,
    Bck,
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  // 添加行号样式
  pre.hljs {
    padding: 8px 2px;
    border-radius: 5px;
    position: relative;
    ol {
      list-style: decimal;
      margin: 0;
      margin-left: 40px;
      padding: 0;
      li {
        list-style: decimal-leading-zero;
        position: relative;
        padding-left: 10px;
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
      top: 2px;
      right: 12px;
      z-index: 10;
      color: #999;
      pointer-events: none;
    }
  }
}
</style>