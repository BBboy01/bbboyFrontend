<template>
  <div class="wrapper" :style="cToggle">
    <el-scrollbar height="300px">
      <ul class="list">
        <li v-for="item in noteInfo" :key="item.id" @click="goInfo(item.id)">
          <img :src="item.icon_url" alt="" />
          <span :title="item.title">{{ item.title }}</span>
        </li>
      </ul>
    </el-scrollbar>
  </div>
</template>

<script>
import { getAllNote } from '../../requests/getNote'
import { ref, reactive, toRefs, onMounted, watch, onUpdated, nextTick, computed } from 'vue'
import { useRouter } from 'vue-router'


export default {
  props: {
    isShow: {
      type: Boolean,
      default () {
        return false
      },
    }
  },

  setup (props) {
    const router = useRouter()

    let noteInfo = ref([])
    let isShow = ref(props.isShow)

    let cStyle = reactive({
      opacity: 1,
      transform: 'skew(0deg) translateY(0px)',
    })

    const goInfo = id => {
      router.push({ path: `/note/${id}` })
    }

    const cToggle = computed(() => {
      console.log('dio')

      return {
        opacity: 1,
        transform: 'skew(0deg) translateY(0px)'
      }
    })

    onMounted(() => {
      getAllNote().then(res => {
        noteInfo.value = res
      })
    })

    watch(() => {
      return props.isShow
    }, (status, preStatus) => {
      cToggle(status)
    })

    return {
      noteInfo,
      goInfo,
      cStyle,
      isShow,
      cToggle,
    }
  },

  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  position: absolute;
  top: 60px;
  right: 10px;
  z-index: 2;
  background: rgba(15, 14, 71, 0.3);
  box-shadow: 0px 50px 100px rgba(0, 0, 0, 0.25),
    inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(40px);
  border-radius: 20px;
  padding: 20px;
  transition: all 0.5s ease;

  .list {
    display: grid;
    grid-template-columns: 180px;
    gap: 10px;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
      Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

    li {
      display: grid;
      grid-template-columns: 30px auto;
      gap: 10px;
      margin-right: 5px;

      &:hover {
        span {
          color: whitesmoke;
        }
      }

      span {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        color: rgba(255, 255, 255, 0.7);
        transition: 0.3s;
        line-height: 30px;
      }

      img {
        width: 100%;
        height: auto;
      }
    }
  }
}
</style>