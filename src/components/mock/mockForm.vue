<template>
  <el-dialog
    title="伪数据拦截器"
    :visible.sync="dialogVisible"
    width="800px">
    <el-form :model="mockForm" :rules="rules" ref="mockForm" label-width="100px" label-position="right">
      <el-form-item label="启用" prop="use">
        <el-switch v-model="mockForm.use"></el-switch>
      </el-form-item>
      <el-form-item label="标题" prop="title">
        <el-input v-model="mockForm.title"></el-input>
      </el-form-item>
      <el-form-item label="接口地址" prop="url">
        <el-input v-model="mockForm.url"></el-input>
      </el-form-item>
      <el-form-item label="方法" prop="method">
        <el-select v-model="mockForm.method" clearable placeholder="请选择">
          <el-option v-for="item in methodOpts" :key="item" :label="item" :value="item"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="模板" prop="template">
        <el-input type="textarea" v-model="mockForm.template" rows="6" resize="none"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button @click="closeDialog()">取 消</el-button>
        <el-button type="primary" @click="submitForm()">确 定</el-button>
      </el-form-item>
    </el-form>
  </el-dialog>
</template>
<script>
  export default {
    name: 'mockForm',
    data() {
      return {
        dialogVisible: true,
        mockForm: {
          use: true,
          method: 'ALL'
        },
        rules: {
          title: [
            {required: true, message: '请输入标题'},
          ],
          url: [
            {required: true, message: '请输入API地址'},
          ],
          method: [
            {required: true, message: '请选择方法'},
          ],
          template: [
            {required: true, message: '请输入返回的模板字符串'},
          ],
        },
        methodOpts: ['ALL', 'POST', 'GET'],
      };
    },
    created: function () {
    },
    components: {},
    methods: {
      resetForm(formName) {
        this.$refs[formName].resetFields();
      },
      submitForm() {
        this.$refs['mockForm'].validate((valid) => {
          if (valid) {

//            let mock = JSON.parse(localStorage.getItem('mock'));
//            if (!this.id) {
//              this.id = new Date().getTime();
//            }
//            mock.main[this.id] = this.mockForm;
            localStorage.setItem('mock', JSON.stringify(this.mockForm));

          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      closeDialog() {
        this.resetForm();
        this.dialogVisible = false;
      }
    }
  }
</script>
<style>

</style>
