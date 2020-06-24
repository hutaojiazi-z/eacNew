<template>
  <div>
    <el-form class="search flex" ref="form" :model="form">
      <el-select class="sSlct" v-model="form.selectValue">
        <el-option label="搜本链" value="1"></el-option>
        <el-option label="搜全站" value="2"></el-option>
      </el-select>
      <el-input class="searchInput" v-model="form.searchText" placeholder="搜索地址，交易，区块"></el-input>
      <el-button class="sBtn" label-width="200px" type="primary" @click="onSearch">搜索</el-button>
    </el-form>
  </div>
</template>

<script>
  export default {
    data(){
      return {
        form: {
          selectValue: "1", //搜索范围
          searchText: "", //搜索文本
        },

        
      }
    },
    methods:{
      onSearch(){//搜索

      }
    }
  }
</script>
<style lang="less" scoped>
/deep/.el-input__inner{
  border: none;
  border-right: 2px solid #DFE2E9;
  border-radius: 4px 0 0 4px;
}
/deep/.el-select .el-input__inner:focus,/deep/.el-select .el-input.is-focus .el-input__inner{
  border-color: #DFE2E9;
}
.search{
  border: 1px solid #001D8F;
  border-radius: 4px;
  margin: 20px 7vw;
  .sSlct{
    width: 180px;
  }
  .searchInput{
    /deep/input{
      border: none !important;
    }
  }
  /deep/.el-button--primary{
    background-color: #001D8F;
    border-radius: 0;
    border: none;
  }
  .sBtn{
    width: 100px;
  }
}
</style>