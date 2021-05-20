<template>
  <div class="wrapper">
    <el-upload
      class="upload-demo"
      action="/api/note/add"
      :on-change="handleChange"
      :file-list="fileList"
      :http-request="uploadFile"
    >
      <el-button size="small" type="primary">点击上传</el-button>
      <template #tip>
        <div class="el-upload__tip">只能上传 .md 结尾的文件</div>
      </template>
    </el-upload>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue'
import { uploadNote } from '../../requests/upload'


export default {
  setup () {
    let fileList = ref([])

    const uploadFile = (param) => {
      let reader = new FileReader()
      let baseData
      reader.readAsText(param.file, 'utf8')
      console.log(reader.result)
      reader.onload = function () {
        baseData = reader.result
        console.log(baseData)
        uploadNote(baseData).then(res => {
          console.log('上传笔记成功', res)
        }).catch(err => {
          console.log('笔记上传失败', err)
        })
      }

      // formData.append('file', param.file)
      console.log('on upload')
      // uploadNote(formData).then(res => {
      //   console.log('上传笔记成功', res)
      // }).catch(err => {
      //   console.log('笔记上传失败', err)
      // })
    }

    onMounted(() => {
      fileList.value = [{
        name: 'food.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }, {
        name: 'food2.jpeg',
        url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'
      }]
    })

    const handleChange = (file, fileList) => {
      //   console.log(fileList)
      //   fileList.value = fileList.value.slice(-3)
    }

    return {
      fileList,
      handleChange,
      uploadFile,
    }
  },

  components: {

  },
}
</script>

<style lang='scss' scoped>
//@import url(); 引入公共css类
.wrapper {
  width: 50%;
  margin: 20px auto;
}
</style>