<template>
  <div>
    <div class="header">
      <div class="logo">
        <a href="/">
          <img src="@/assets/images/logo.svg" alt="" />
        </a>
      </div>
      <div class="list">
        <ul>
          <li @click="toggleCard">
            <div><img src="@/assets/images/note.svg" alt="" /></div>
            <div>笔记</div>
            <Card :isShow="isShowNote" :noteInfo="noteInfo" />
          </li>
          <li @click="toggleCardUpdate">
            <div><img src="@/assets/images/update.svg" alt="" /></div>
            <div>更新</div>
            <Card :isShow="isShowUpdate" :noteInfo="noteInfoSorted" />
          </li>
          <li>
            <img src="@/assets/images/more.svg" alt="" />
          </li>
          <li>
            <img src="@/assets/images/search.svg" alt="" />
          </li>
          <li>
            <img src="@/assets/images/profile.svg" alt="" />
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Card from './Card'
import { ref, onMounted, nextTick } from 'vue'
import { getAllNote } from '../../requests/getNote'


export default {
  setup () {
    let isShowNote = ref(false)
    let isShowUpdate = ref(false)
    let noteInfo = ref([])
    let noteInfoSorted = ref([])

    const toggleCard = () => {
      isShowNote.value = !isShowNote.value
    }
    const toggleCardUpdate = () => {
      isShowUpdate.value = !isShowUpdate.value
    }


    function myTimeToLocal (inputTime) {
      if (!inputTime && typeof inputTime !== 'number') {
        return ''
      }
      var localTime = ''
      inputTime = new Date(inputTime).getTime()
      const offset = (new Date()).getTimezoneOffset()
      localTime = (new Date(inputTime - offset * 60000)).toISOString()
      localTime = localTime.substr(0, localTime.lastIndexOf('.'))
      localTime = localTime.replace('T', ' ')
      return localTime
    }

    onMounted(() => {
      getAllNote().then(res => {
        noteInfo.value = res

        nextTick(() => {
          res.map(el => {
            el.update_time = Date.parse(myTimeToLocal(el.update_time))
          })
          res.sort((av, bv) => {
            return -(av.update_time - bv.update_time)
          })
          noteInfoSorted.value = res
        })
      })
    })

    return {
      isShowNote,
      isShowUpdate,
      toggleCard,
      toggleCardUpdate,
      noteInfo,
      noteInfoSorted,
    }
  },
  components: {
    Card,
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.header {
  // height: 44px;
  display: flex;
  padding: 60px 30px;
  position: relative;
  max-width: 1234px;
  margin: 0 auto;

  .logo {
    flex: 1;
    padding: 0;
    position: relative;

    img {
      height: 44px;
      left: 0;
      position: absolute;
    }
  }

  .list {
    flex: 1.5;

    ul {
      display: flex;
      align-items: center;
      height: 44px;
      justify-content: space-between;

      li {
        display: flex;
        align-items: center;
        justify-content: space-between;
        color: whitesmoke;
        padding: 0 20px;
        height: 100%;
        font-size: 15px;
        position: relative;

        div {
          margin: 0 5px;
        }

        img {
          height: 24px;
        }

        &:hover {
          background: rgba(255, 255, 255, 0.1);
          box-shadow: 0px 10px 20px rgba(0, 0, 0, 0.1),
            inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.2);
          border-radius: 10px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>