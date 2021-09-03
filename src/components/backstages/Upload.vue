<template>
  <div class="wrapper">
    <el-form :model="form" label-width="80px" :rules="rules" ref="ruleForm">
      <el-form-item label="分类" prop="category">
        <el-select v-model="form.category" placeholder="请选择笔记类别">
          <el-option
            v-for="(item, index) in categoryData.categories"
            :key="index"
            :label="item"
            :value="item"
          />
        </el-select>
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
          :limit="1"
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
import { ref, reactive, onMounted } from 'vue'
import { uploadNote } from '@/requests/upload'
import { getCategories } from '@/requests/getNote'
import { ElMessage } from 'element-plus'


export default {
  setup () {
    const upload = ref(null)
    const ruleForm = ref(null)

    let fileList = ref([])
    let categoryData = ref([])
    let category = ref('')
    let form = reactive({
      title: '',
      category: '',
      iconUrl: '',
      content: ''
    })
    let rules = reactive({
      category: [
        { required: true, message: '请输入分类名称', trigger: 'blur' },
      ],
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
        form.title = file.raw.name.replace('.md', '')
        reader.readAsText(file.raw, 'utf8')
        reader.onload = () => {
          form.content = reader.result
        }
      }
    }

    const onSubmit = () => {
      ruleForm.value.validate(async valid => {
        if (valid) {
          upload.value.submit()
          if (!form.iconUrl) form.iconUrl = categoryData.value.iconUrls[category]
          let data = await uploadNote(form.title, form.category, form.content, form.iconUrl)
          upload.value.clearFiles()
          ruleForm.value.resetFields()
          form.iconUrl = ''
          ElMessage({
            showClose: true,
            message: "添加笔记成功",
            type: 'success'
          })
        } else {
          ElMessage({
            showClose: true,
            message: '必填参数未填写',
            type: 'warning'
          })
          return false
        }
      })
    }

    onMounted(async () => {
      categoryData.value = await getCategories()
    })

    return {
      fileList,
      form,
      onSubmit,
      upload,
      change,
      uploadFile,
      rules,
      ruleForm,
      categoryData,
      category,
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