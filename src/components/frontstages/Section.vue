<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">
        <span>勤学似春起之苗</span>
        <span>不见其增</span>
        <span>而日有所长</span>
      </div>
      <span class="slogan">
        其实人跟树一样，越是向往高出的阳光，他的根就要越往下，伸向地底深处...
      </span>
      <div
        class="button"
        @click="goBackstage"
        data-aos="fade-up"
        data-aos-anchor-placement="center-bottom"
      >
        <div class="icon-wrapper">
          <img src="@/assets/images/credit.svg" class="icon" alt="" />
          <img src="@/assets/images/icon-ring.svg" class="ring" alt="" />
        </div>
        <div class="text-wrapper">查看数据</div>
      </div>
    </div>
    <div class="swipper">
      <div class="pages">
        <template v-for="item in noteInfo" :key="item.id">
          <Books
            :articalName="item.title"
            :iconUrl="item.icon_url"
            @click="toNote(item.id)"
          />
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import Books from './Books'
import { getAllNote } from '../../requests/getNote'
import { onMounted } from 'vue'


export default {
  setup () {
    let noteInfo = ref([])

    const router = useRouter()

    onMounted(() => {
      getAllNote(2).then(res => {
        noteInfo.value = res
      })
    })

    const goBackstage = () => {
      router.push({ path: '/back-stage' })
    }

    const toNote = id => {
      router.push({ path: `/note/${id}` })
    }

    return {
      noteInfo,
      goBackstage,
      toNote,
    }
  },

  components: {
    Books
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  .swipper {
    .pages {
      display: grid;
      grid-template-columns: 50% 50%;
      gap: 30px;
      cursor: pointer;
    }
  }

  display: grid;
  grid-template-columns: 500px auto;
  max-width: 1234px;
  margin: 0px auto;
  padding: 0px 30px;
  position: relative;

  .content {
    display: grid;
    gap: 30px;

    @keyframes dSOCvT {
      0% {
        opacity: 0;
        filter: blur(8px) saturate(300%) brightness(200%) hue-rotate(30deg);
      }
      100% {
        opacity: 1;
        filter: blur(0px) saturate(100%) brightness(100%) hue-rotate(0deg);
      }
    }

    .title {
      display: flex;
      align-items: center;
      background: linear-gradient(
        0.25turn,
        rgba(115, 0, 64, 0.7),
        rgba(48, 28, 190, 0.8)
      );
      background-clip: text;
      -webkit-text-fill-color: transparent;
      animation: 1s ease 0s 1 normal forwards running dSOCvT;

      span {
        width: 77px;
        font-size: 40px;
        color: whitesmoke;
        font-weight: 700;
        line-height: 50px;
        margin-right: 10px;
      }
    }

    span {
      font-size: 18px;
      color: #000;
      max-width: 300px;
      line-height: 130%;
    }

    .slogan {
      animation: 2s ease 0s 1 normal forwards running dSOCvT;
    }

    .button {
      width: 280px;
      height: 77px;
      padding: 12px;
      background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
      border-radius: 20px;
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 20px 40px rgba(23, 0, 102, 0.2),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      display: grid;
      grid-template-columns: 53px auto;
      align-items: center;
      text-align: center;

      *,
      & {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); // duration delay timing-bezier
      }

      &:hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
          0px 30px 60px rgba(23, 0, 102, 0.5),
          inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
        transform: translateY(-3px);
        cursor: pointer;

        .icon {
          transform: scale(1.2);
        }

        .ring {
          transform: rotate(30deg) translate(1px, 1px) scale(1.2);
        }

        .icon-wrapper {
          background: linear-gradient(
            200.44deg,
            #6120c9 13.57%,
            #6ab5e0 98.38%
          );
        }
      }

      .icon-wrapper {
        background: linear-gradient(200.44deg, #4316db 13.57%, #9076e7 98.38%);
        width: 45px;
        height: 45px;
        border-radius: 50%;
        display: grid;
        justify-content: center;
        align-content: center;
        justify-self: center;
        position: relative;

        .icon {
          width: 29px;
          height: 29px;
        }

        .ring {
          position: absolute;
          top: -15px;
          left: -16px;
        }
      }

      .text-wrapper {
        font-size: 25px;
      }
    }
  }
}
</style>