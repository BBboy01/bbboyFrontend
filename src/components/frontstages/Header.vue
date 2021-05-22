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
          <li>
            <div><img src="@/assets/images/note.svg" alt="" /></div>
            <div>笔记</div>
            <Card />
          </li>
          <li>
            <div><img src="@/assets/images/update.svg" alt="" /></div>
            <div>更新</div>
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


export default {
  setup () {

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
        color: #fff;
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