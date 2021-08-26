<template>
  <div id="dio" data-aos="fade-in">
    <div class="head">
      <span class="title">{{ title }}</span>
      <span class="date">更新时间：{{ date }}</span>
    </div>
    <div class="article-content" v-html="content"></div>
  </div>
</template>

<script>
import { ref, watchEffect } from 'vue'
import formatTime from '@/utils/formatTime'
import { getSingleNote } from '../../requests/getNote'


export default {
  props: {
    id: {
      type: String,
      required: true,
    }
  },

  setup (props) {
    const title = ref("")
    const content = ref("")
    const date = ref("")

    watchEffect(async () => {
      const data = await getSingleNote(props.id)
      title.value = data.title
      content.value = Buffer.from(data.content, 'base64').toString('utf-8')
      date.value = formatTime(data.update_time)
    })


    return {
      title,
      content,
      date,
    }
  },

  components: {

  },
}
</script>

<style lang='scss' >
//@import url(); 引入公共css类
#dio {
  width: 1200px;
  margin: 0 auto;
  font-size: 16px;
  font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
  color: whitesmoke;
  padding-bottom: 10px;

  .head {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;

    .title {
      display: block;
      font-size: 50px;
    }

    .date {
      align-self: flex-end;
    }
  }

  ul {
    list-style-type: disc;
    padding-left: 18px;
    margin: 10px 0;
    line-height: 20px;
  }

  p {
    margin: 15px 0;

    code {
      color: #2bd600;
      padding: 1px 5px;
      margin: 0 2px;
      border-radius: 2px;
      white-space: nowrap;
      background-color: #506664;
    }

    strong {
      font-weight: bold;
      padding: 3px 5px;
    }
  }

  pre.hljs {
    padding: 8px 2px;
    border-radius: 5px;
    position: relative;
    font-family: source-code-pro, Menlo, Monaco, Consolas, Courier New,
      monospace;
    margin: 20px 0;

    ol,
    li,
    span {
      -webkit-user-select: text;
      -moz-user-select: text;
      -ms-user-select: text;
      user-select: text;
    }

    ol {
      list-style: decimal;
      margin: 0;
      margin-left: 40px;
      padding: 0;

      li {
        list-style: decimal-leading-zero;
        position: relative;
        padding-left: 10px;
        line-height: 110%;

        .line-num {
          position: absolute;
          left: -40px;
          top: 0;
          width: 40px;
          height: 100%;
          border-right: 1px solid rgba(0, 0, 0, 0.66);
        }
      }
    }

    b.name {
      position: absolute;
      top: 0.8rem;
      right: 1rem;
      z-index: 10;
      color: hsla(0, 0%, 100%, 0);
      pointer-events: none;
      font-size: 0.75rem;
      transition: color 0.5s ease;
    }

    &:hover {
      b.name {
        color: hsla(0, 0%, 100%, 0.4);
      }
    }
  }

  table {
    border-collapse: collapse;
    border-spacing: 0;
    empty-cells: show;
    margin: 15px 0;
    width: 100%;
    text-align: center;

    thead {
      background-color: rgba(36, 35, 41, 0.8);
      color: whitesmoke;
      font-weight: bold;
      text-align: left;
      vertical-align: bottom;
      text-align: center;
    }

    td,
    th {
      border-left: 1px solid rgba(71, 69, 84, 1);
      border-width: 0 0 0 1px;
      font-size: inherit;
      margin: 0;
      overflow: visible;
      padding: 0.5em 1em;
      background-color: transparent;
    }

    tbody tr:nth-child(odd) {
      background-color: rgba(71, 69, 84, 0.6);
    }
  }

  h1 {
    background: #2b6695;
    border-radius: 6px 6px 6px 6px;
    box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
    color: whitesmoke;
    font-size: 18px;
    font-weight: bold;
    height: 25px;
    line-height: 25px;
    margin: 18px 0 !important;
    padding: 0px 0px 5px 10px;
    text-shadow: 2px 2px 3px #222222;
  }

  h2 {
    background: #2b6600;
    border-radius: 6px 6px 6px 6px;
    box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
    color: whitesmoke;
    font-size: 15px;
    font-weight: bold;
    height: 24px;
    line-height: 23px;
    margin: 12px 0 !important;
    padding: 0px 0 5px 20px;
    text-shadow: 2px 2px 3px #222222;
  }

  h3 {
    background: #5b9600;
    border-radius: 6px 6px 6px 6px;
    box-shadow: 0 0 0 1px #5f5a4b, 1px 1px 6px 1px rgba(10, 10, 0, 0.5);
    color: whitesmoke;
    font-size: 13px;
    font-weight: bold;
    height: 24px;
    line-height: 20px;
    margin: 12px 0 !important;
    padding: 0px 0px 5px 30px;
    text-shadow: 2px 2px 3px #222222;
  }
}
</style>