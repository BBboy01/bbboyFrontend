<template>
  <div class="wrapper">
    <!-- <canvas id="myCanvas" @mousemove="followMouse"></canvas> -->
    <canvas ref="canvas"></canvas>
    <slot> </slot>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'


export default {
  setup () {
    let canvas = ref(null)

    onMounted(() => {
      let ctx = canvas.value.getContext("2d")

      canvas.value.width = window.innerWidth
      canvas.value.height = window.innerHeight
      canvas.value.style.position = "fixed"
      ctx.lineWidth = 0.3
      ctx.strokeStyle = new Color(150).style

      let dots = {
        nb: 1000, //Dot的总数
        distance: 50,
        d_radius: 100,
        array: [],
      }

      //创建颜色类，Color类返回字符串型rgba（*,*,*,.8）
      function colorValue (min) {
        return Math.floor(Math.random() * 255 + min)
      }
      function createColorStyle (r, g, b) {
        return "rgba(" + r + "," + g + "," + b + ", 0.8)"
      }
      function Color (min) {
        min = min || 0
        this.r = colorValue(min)
        this.g = colorValue(min)
        this.b = colorValue(min)
        this.style = createColorStyle(this.r, this.g, this.b)
      }
      //创建Dot类以及一系列方法
      function Dot () {
        this.x = Math.random() * canvas.value.width
        this.y = Math.random() * canvas.value.height

        this.vx = -0.5 + Math.random()
        this.vy = -0.5 + Math.random()

        this.radius = Math.random() * 2

        this.color = new Color()
      }

      Dot.prototype = {
        draw: function () {
          ctx.beginPath()
          ctx.fillStyle = this.color.style
          ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false)
          ctx.fill()
        },
      }

      function moveDots () {
        //Dot对象的移动
        for (let i = 0; i < dots.nb; i++) {
          let dot = dots.array[i]

          if (dot.y < 0 || dot.y > canvas.value.height) {
            dot.vx = dot.vx
            dot.vy = -dot.vy
          } else if (dot.x < 0 || dot.x > canvas.value.width) {
            dot.vx = -dot.vx
            dot.vy = dot.vy
          }
          dot.x += dot.vx
          dot.y += dot.vy
        }
      }

      function animateDots () {
        ctx.clearRect(0, 0, canvas.value.width, canvas.value.height) //清除画布，否则线条会连在一起
        moveDots()
        drawDots()
        requestAnimationFrame(animateDots)
      }

      function createDots () {
        //创建nb个Dot对象
        for (let i = 0; i < dots.nb; i++) {
          dots.array.push(new Dot())
        }
      }

      function drawDots () {
        //引用Dot原型链，使用draw方法，在canvas上画出Dot对象
        for (let i = 0; i < dots.nb; i++) {
          let dot = dots.array[i]
          dot.draw()
        }
      }

      createDots() //使用创建Dot类函数
      requestAnimationFrame(animateDots) //使用canvas独有的60Hz刷新屏幕画布的方法
    })

    return {
      canvas,
    }
  },
  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  background: #30333f;
  height: 100%;
  width: 100%;
  z-index: -1;

  canvas {
    position: absolute;
  }
}
</style>