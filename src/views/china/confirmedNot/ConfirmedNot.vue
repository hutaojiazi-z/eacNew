<template>
  <div>
    <div class="mainText">
      <dl>
        <span class="yellow">0.000166  EAC</span><span>当前最佳手续费</span>
        <span class="orange">4</span><span>笔未确认交易</span>
      </dl>
      <dl>
        <span>交易额</span><span>533.5  LTC</span>
        <span>大小</span><span>2,077  Bytes</span>
        <span>费用总额</span><span>0.0020957 EAC</span>
      </dl>
    </div>
    <div class="conBox">
      <h3>待确认交易</h3>
      <div>
        <Tabel :tabelData="unConfirm"/>
        <div class="block">
          <el-pagination class="firstPre"  @size-change="handleSizeChange"  
           @current-change="handleCurrentChange" :current-page="currentPage"  
           :page-size="pageSize" layout="total, slot" :total="total">
            <span class="pager" @click="jumpPage('1')">首页</span>
          </el-pagination>
          <el-pagination @size-change="handleSizeChange"  
           @current-change="handleCurrentChange" 
           :current-page="currentPage"  
           :page-size="pageSize" layout="prev, pager,next,slot, jumper" :total="total">
            <span class="pager" @click="jumpPage('0')">末页</span>
          </el-pagination>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import Tabel from"components/table/Tabel"
  export default {
    components:{
      Tabel,
    },
    data() {
      return {
        currentPage: 1,
        total: 400,
        pageSize: 10,
        unConfirm: {//待确认交易
          tableHead: [//表格头
            {field: "", name: '交易哈希'},
            {field: "", name: '时间'},
            {field: "", name: '交易费(EAC)'},
            {field: "", name: '从'},
            {field: "", name: '到'},
          ],
          //表格数据
          tableData:[]
        },
      }
    },
    methods: {
      handleSizeChange(val) {
        console.log(`每页 ${val} 条`);
      },
      handleCurrentChange(val) {
        console.log(`当前页: ${val}`);
      },
      jumpPage(val){
          switch(val){
            case "1"://跳转到首页
              this.$emit('changeCurrentPage', 1);
              break;
            case "0"://跳转到末页
              this.$emit('changeCurrentPage', this.total/this.pageSize);
              break;
          }
      },
      clickEnter(){
        this.$emit('changeCurrentPage', this.currentPage);
      }
    }
  }
</script>

<style lang="less" scoped>
/deep/.el-table thead{
  color: #9EADCE;
}
/deep/.el-table th{
  background-color: #F5F5F5;
  padding: 8px 0;
}
/deep/.el-pagination__total, /deep/.el-pagination__jump{
  color: #A0A9C0;
  font-weight: bold;
}
.mainText{
  dl{
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 15px;
    color: #BFBFC0;
    .yellow{
      color: #F5A62F;
      font-size: 20px;
      margin-right: 5px;
    }
    .orange{
      color: #D53800;
      font-size: 20px;
      margin-right: 5px;
      &::before{
        content: " ";
        width: 2px;
        border: 1px solid #4D4D4D;
        margin: 0 20px;
      }
    }
    &:last-child{
      span{
        margin-right: 8px;
        &:nth-child(2n){
          color: #333333;
        }
      }
    }
  }
}
.conBox{
  h3{
    padding: 10px 15px;
    color: #001A56;
  }
  .block{
    padding: 10px 0;
    display: flex;
    justify-content: center;
    .firstPre{
      padding-right: 0;
      margin-right: -8px;
    }
    .pager{
      color: #A0A9C0;
    }
  }
}
</style>