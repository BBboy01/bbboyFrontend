<template>
  <div>
    <div id="container" ref="container">
      <div class="content">
        <h2>404</h2>
        <h4>Opps! Page not found</h4>
        <p>
          2013年，404 Not
          Found成为中国大陆的网络热词。在中国，404被大部分网民普遍用作网站被防火长城屏蔽的代名词。而事实上，由于防火长城一般的封锁方法是向连接两端的计算机发送RST（Reset）数据包干扰两者间正常的TCP连接，被防火长城屏蔽的网站无法回复任何HTTP状态码，最常见的错误信息是“连接已被重置”。
        </p>
        <a @click="goHome"> Back Home </a>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

export default {
  setup () {
    const router = useRouter()

    let container = ref(null)
    // 窗口的鼠标移动事件,传入event对象
    window.onmousemove = function (e) {
      // 返回被触发时的鼠标X，Y位置
      let x = e.clientX / 5
      let y = e.clientY / 5
      // 将容器的背景图片定位进行修改
      container.value.style.backgroundPositionX = x + "px"
      container.value.style.backgroundPositionY = y + "px"
    }

    const goHome = () => {
      router.push('/home')
    }

    return {
      container,
      goHome,
    }
  },
  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
#container {
  width: 100%;
  height: 100%;
  position: absolute; /*绝对定位*/

  display: flex; /*弹性盒模型*/
  justify-content: center; /*主轴对齐方式*/
  align-items: center; /*交叉轴对齐方式*/
  background: url("../assets/images/404.svg"), #151729; /*背景图片，颜色*/
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.5); /*背景阴影*/
}
#container .content {
  max-width: 600px; /*最大宽度*/
  text-align: center; /*字体行居中*/
}
#container .content h2 {
  font-size: 18vw; /*字体大小*/
  color: #fff;
  line-height: 1em; /*行高*/
}
#container .content h4 {
  position: relative;
  font-size: 1.5em;
  margin-bottom: 20px;
  color: #111;
  background: #fff;
  font-weight: 300;
  padding: 10px 20px;
  display: inline-block; /*行内盒模型*/
}
#container .content p {
  color: #fff;
  font-size: 1.2em;
}
#container .content a {
  position: relative;
  display: inline-block;
  padding: 10px 25px;
  background: #ff0562;
  color: #fff;
  text-decoration: none;
  margin-top: 25px;
  border-radius: 25px;
  border-bottom: 4px solid #d00d56; /*下边框*/
  user-select: none;
  transition: transform 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.1);
  }
}
</style>