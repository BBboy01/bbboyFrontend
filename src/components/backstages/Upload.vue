<template>
  <div class="wrapper">
    <el-form :model="form" label-width="80px">
      <el-form-item label="分类">
        <el-input v-model="form.category"></el-input>
      </el-form-item>
      <el-form-item label="图标URL">
        <el-input v-model="form.iconUrl"></el-input>
      </el-form-item>
      <el-form-item label="文件">
        <el-upload
          class="upload-demo"
          action=""
          :multiple="false"
          :file-list="fileList"
          :auto-upload="false"
          :http-request="uploadFile"
          ref="upload"
          :on-change="change"
        >
          <el-button size="small" type="primary">选取文件</el-button>
          <template #tip>
            <div class="el-upload__tip">只能上传 .md 结尾的文件</div>
          </template>
        </el-upload>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">上传</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { ref, reactive, onMounted, nextTick } from 'vue'
import { uploadNote } from '../../requests/upload'
import { ElMessage } from 'element-plus'


export default {
  setup () {
    const upload = ref(null)

    let fileList = ref([])
    let form = reactive({
      title: '',
      category: '',
      iconUrl: '',
      content: ''
    })

    const uploadFile = () => { }

    const change = (file, fileList) => {
      let reader = new FileReader()
      if (file.raw.name.split('.').slice(-1)[0] !== 'md') {
        ElMessage({
          showClose: true,
          message: '仅支持上传 .md 结尾的文件哦',
          type: 'error'
        })
        upload.value.clearFiles()
      } else {
        form.title = file.raw.name
        reader.readAsText(file.raw, 'utf8')
        reader.onload = () => {
          form.content = reader.result
        }
      }
    }

    const onSubmit = async () => {
      upload.value.submit()
      let timeStamp = Date.parse(new Date())
      let data = await uploadNote(form.title, form.category, form.content, form.iconUrl, timeStamp)
      if (data.statusCode === 4001) {
        ElMessage({
          showClose: true,
          message: data.msg,
          type: 'success'
        })
      } else {
        ElMessage({
          showClose: true,
          message: data.msg,
          type: 'error'
        })
      }
    }

    return {
      fileList,
      form,
      onSubmit,
      upload,
      change,
      uploadFile,
    }
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