<template>
  <div>
    <div class="header">
      <div class="logo">
        <a href="/home">
          <img src="@/assets/images/logo.svg" alt="" />
        </a>
      </div>
      <div class="list" ref="Header">
        <ul>
          <li @click="toggleCard">
            <div><img src="@/assets/images/note.svg" alt="" /></div>
            <div>笔记</div>
            <Card
              :isShow="isShowNote"
              :noteInfo="noteInfo"
              @closeCard="close"
            />
          </li>
          <li @click="toggleCardUpdate">
            <div><img src="@/assets/images/update.svg" alt="" /></div>
            <div>更新</div>
            <Card
              :isShow="isShowUpdate"
              :noteInfo="noteInfoSorted"
              @closeCard="close"
            />
          </li>
          <li>
            <img src="@/assets/images/more.svg" alt="" />
          </li>
          <!-- <li>
            <img src="@/assets/images/search.svg" alt="" />
          </li> -->
          <li>
            <a href="https://hub.fastgit.org/BBboy01" target="_blank">
              <img
                src="@/assets/images/github.png"
                alt="github"
                style="width: 35px; height: 35px"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, nextTick } from 'vue'

import { getAllNote } from '../../requests/getNote'
import formatTime from '@/utils/formatTime'
import Card from './Card'


export default {
  setup () {
    let isExist = ref(false)
    let isShowNote = ref(false)
    let isShowUpdate = ref(false)
    let noteInfo = ref([])
    let noteInfoSorted = ref([])

    let Header = ref(null)

    const toggleCard = () => {
      isShowNote.value = !isShowNote.value
      isShowUpdate.value = false
    }
    const toggleCardUpdate = () => {
      isShowUpdate.value = !isShowUpdate.value
      isShowNote.value = false
    }
    const close = () => {
      isShowNote.value = false
      isShowUpdate.value = false
    }

    onMounted(() => {
      getAllNote().then(res => {
        noteInfo.value = res.orderedByTime

        nextTick(() => {
          res.orderedByTime.map(el => {
            el.update_time = Date.parse(formatTime(el.update_at))
          })
          res.orderedByTime.sort((av, bv) => {
            return -(av.update_time - bv.update_time)
          })
          noteInfoSorted.value = res.orderedByTime
        })
      })

      window.addEventListener('click', () => {
        if (!isExist.value) {
          isShowNote.value = false
          isShowUpdate.value = false
        }
      })
      Header.value.addEventListener('mouseenter', () => {
        isExist.value = true
      })
      Header.value.addEventListener('mouseleave', () => {
        isExist.value = false
      })
    })

    return {
      isShowNote,
      isShowUpdate,
      toggleCard,
      toggleCardUpdate,
      noteInfo,
      noteInfoSorted,
      close,
      isExist,
      Header,
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
      transition: transform 0.5s ease;

      &:hover {
        transform: scale(1.1);
      }
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
        transition: all 0.3s ease;

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