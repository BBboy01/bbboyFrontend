<template>
  <div class="book" data-aos="zoom-in-left" data-aos-duration="1000">
    <div class="cover">
      <div class="content">
        <img :src="iconUrl" alt="" />
        {{ articleName }}
      </div>
    </div>
    <div class="background"></div>
  </div>
</template>

<script>

export default {
  props: {
    articleName: {
      type: String,
      default () {
        return ''
      }
    },
    iconUrl: {
      type: String,
      default () {
        return ''
      }
    },
  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.book {
  position: relative;
  display: grid;

  *,
  & {
    transition: all 0.8s cubic-bezier(0.075, 0.82, 0.165, 1) 0s;
  }

  &:hover {
    .cover {
      transform: translateY(-2px);
    }

    .background {
      transform: translateY(-2px) matrix(0.85, 0.25, 0, 0.99, 0, 0);
    }
  }

  .cover {
    top: 365px;
    left: 573px;
    width: 383px;
    height: 456px;
    border: 0.5px solid #ffffff4d;
    border-radius: 60px 60px 60px 0px;
    background: rgba(31, 31, 71, 0.6);
    z-index: 1;
    display: flex;
    justify-content: center;

    .content {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      color: whitesmoke;
      font-weight: bold;
      font-size: 50px;
      gap: 40px;

      img {
        width: 70px;
      }
    }
  }

  .background {
    position: absolute;
    width: 383px;
    height: 456px;
    background: linear-gradient(rgb(50, 11, 149) 0%, rgb(24, 136, 192) 100%);
    border-radius: 60px 60px 60px 0px;
    transform: matrix(0.95, 0.14, 0, 0.99, 0, 0);
    transform-origin: left bottom;
  }
}
</style>