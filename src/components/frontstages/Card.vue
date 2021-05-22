<template>
  <div class="wrapper">
    <div class="container">
      <ul class="list">
        <li v-for="item in noteInfo" :key="item.id" @click="goInfo(item.id)">
          <img :src="item.icon_url" alt="" />
          <span :title="item.title">{{ item.title }}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { getAllNote } from '../../requests/getNote'
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'


export default {
  setup () {
    const router = useRouter()

    let noteInfo = ref([])

    const goInfo = id => {
      router.push({ path: `/note/${id}` })
    }

    onMounted(() => {
      getAllNote().then(res => {
        noteInfo.value = res
      })
    })

    return {
      noteInfo,
      goInfo,
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

  .list {
    display: grid;
    grid-template-columns: 150px;
    gap: 10px;

    li {
      display: grid;
      grid-template-columns: 30px auto;
      gap: 10px;

      &:hover {
        span {
          color: white;
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