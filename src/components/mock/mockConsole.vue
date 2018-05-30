<template>
  <el-dialog
    title="伪数据拦截器"
    :visible.sync="dialogVisible"
    width="60%">
    <el-table :data="tableData">
      <el-table-column prop="date" label="名称">

      </el-table-column>
      <el-table-column prop="date" label="API地址"></el-table-column>
      <el-table-column prop="date" label="操作"></el-table-column>
    </el-table>
    <el-switch
      v-model="value2"
      active-color="#13ce66"
      inactive-color="#ff4949">
    </el-switch>
    <span slot="footer" class="dialog-footer">
    <el-button @click="dialogVisible = false">取 消</el-button>
    <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
  </span>
  </el-dialog>
</template>
<script>
  export default {
    name: 'mockConsole',
    data() {
      return {
        dialogVisible: false,
        tableData: [],
        value2: true,
      };
    },
    created: function () {
    },
    components: {},
    methods: {}
  }
</script>
<style>

</style>
