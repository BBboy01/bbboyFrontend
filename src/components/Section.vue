<template>
  <div class="wrapper">
    <div class="content">
      <div class="title">
        <span>勤学似春起之苗</span>
        <span>不见其增</span>
        <span>而日有所长</span>
      </div>
      <span>
        其实人跟树一样，越是向往高出的阳光，他的根就要越往下，伸向地底深处...
      </span>
      <div class="button">
        <img src="@/assets/images/credit.svg" class="icon" alt="" />
        <img src="@/assets/images/icon-ring.svg" class="ring" alt="" />
      </div>
    </div>
    <div class="pages"></div>
  </div>
</template>

<script>


export default {
  setup () {

  },
  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  display: grid;
  grid-template-columns: 500px auto;
  max-width: 1234px;
  margin: 0px auto;
  padding: 0px 30px;
  position: relative;

  .content {
    display: grid;
    gap: 30px;

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

      span {
        width: 77px;
        font-size: 40px;
        color: #fff;
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

    .button {
      width: 280px;
      height: 77px;
      padding: 12px;
      background: linear-gradient(180deg, #ffffff 0%, #d9dfff 100%);
      box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
        0px 20px 40px rgba(23, 0, 102, 0.2),
        inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
      border-radius: 20px;
      display: grid;
      grid-template-columns: 53px auto;
      align-items: center;
      position: relative;

      *,
      & {
        transition: 1s cubic-bezier(0.075, 0.82, 0.165, 1); // duration delay timing-bezier
      }

      &:hover {
        box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.1),
          0px 30px 60px rgba(23, 0, 102, 0.5),
          inset 0px 0px 0px 0.5px rgba(255, 255, 255, 0.5);
        transform: translateY(-3px);
      }

      &:hover .ring {
        transform: scale(1.2);
      }

      .icon {
        position: relative;
        width: 45px;
        height: 45px;
        background: linear-gradient(
          200.44deg,
          rgb(67, 22, 219) 13.57%,
          rgb(144, 118, 231) 98.38%
        );
        box-shadow: rgb(182 153 255 / 30%) 0px 10px 20px;
        border-radius: 50px;
        padding: 8px;
        margin: auto;
        top: 2px;
        left: 1px;
      }

      .ring {
        position: absolute;
        width: 55px;
        height: 55px;
        top: 13px;
        left: 13px;
      }
    }
  }
}
</style>