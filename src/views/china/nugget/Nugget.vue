<template>
  <div>
    <div class="conBox">
      <h3>最新爆块</h3>
      <div>
        <Tabel :tabelData="LatestBurstHead"/>
      </div>
      <div>
        <Tabel :tabelData="LatestBurst"/>
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
        LatestBurstHead: {
          tableHead: [//表格头
            {field: "", name: '最新爆块', width: 150},
            {field: "", name: '最新爆块时间'},
            {field: "", name: 'tps', title: "tps=近24小时交易笔数/24小时"},
            {field: "", name: '平均出块时间', title: "平均出块时间=24小时/最新爆块前24小时出块数"}
          ],
          //表格数据
          tableData:[]
        },
        LatestBurst: {//最新爆块
          tableHead: [//表格头
            {field: "", name: '区块高度', width: 150},
            {field: "", name: '播报方'},
            {field: "", name: '时间'},
            {field: "", name: '大小（Bytes）'},
            {field: "", name: '爆块奖励（EAC）'},
            {field: "", name: '交易笔数'},
            {field: "", name: '交易总额(EAC)'},
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