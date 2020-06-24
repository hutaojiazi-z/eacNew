<template>
  <el-table :data="tabelData.tableData" style="width: 100%">
      <el-table-column v-for="(item,index) in tabelData.tableHead" :key="index"
       :prop="item.field" :label="item.name" :width="item.width || ''">
      </el-table-column>
    </el-table>
</template>

<script>
  export default {
    props:{
      tabelData:{
        type: Object,
        default: function () {
          return {}
        }
      }
    },
    data(){
      return {
        // tableData: [{
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // }, {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // }, {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // }, {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }]
      }
    }
  }
</script>

<style lang="less" scoped>
</style>