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
    </div>
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
  }
}
</style>