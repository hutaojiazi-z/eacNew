<template>
  <div>
    <div class="conBox margint15">
      <h3 class="comH3">巨鲸追踪 <span>实时监测每天发生多少笔大额交易。</span></h3>
      <div class="legend">
        <el-form :inline="true" :model="searchText" class="demo-form-inline">
          <el-form-item label="币种">
            <el-select size="small" v-model="searchText.currency" placeholder="活动区域">
              <el-option label="eth" value="1"></el-option>
              <el-option label="usd" value="2"></el-option>
            </el-select>
          </el-form-item>
          <el-form-item class="threshold" label="阈值">
            <el-input size="small"
              oninput="value=value.replace(/[^\d]/g,'')"
              maxLength='9'
              v-model="searchText.threshold"
              type="text">
              <i slot="prefix" class="myIcon">≥</i>
            </el-input>
          </el-form-item>
          <el-form-item>
            <el-button size="small" type="primary" @click="onSure">确定</el-button>
          </el-form-item>
        </el-form>
        <div id="gianTrack" :style="{ 'height': '230px', 'width': '100%'}"></div>
      </div>
    </div>
    <div class="conBox margint15">
      <h3 class="comH3">交易</h3>
      <div class="">
        <Tabel :tabelData="unConfirmSecond"/>
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
      searchText:{
        currency: "1",
        threshold: "1000"
      },
      unConfirmSecond: {//待确认交易
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
  mounted(){
    this.legendLine()
  },
  methods:{
    onSure(){

    },
    legendLine(){
      let myChart = this.$echarts.init(document.getElementById("gianTrack"))
      myChart.setOption({
        grid: {
          top: '15%',
          left: "5%",
          right: "15%",
          bottom: "9%",
        },
        xAxis: {
          type:  'category',
          boundaryGap: false,
          axisLabel: {
            color: "#333333",
            fontSize: 12 
          },
          data: ['2015-9','2015-10','2015-11','2015-12','2016-1','2016-2'],
        },
        yAxis: {
          show: true,
          axisLabel: {
            color: "#333333",
            fontSize: 12 ,
          }
        },
        series:{
          data: [100, 200, 150, 88, 120, 240, 100, 200, 150, 88, 120, 240],
          type: 'line',
          symbol: 'none',
          lineStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 1,
              colorStops: [{
                offset: 0,
                color: '#06a282' // 0% 处的颜色
              }, {
                offset: 1,
                color: '#94e277' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            },
            width: 2
          },
          areaStyle: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 0,
              y2: 0,
              colorStops: [{
                  offset: 0,
                  color: 'rgba(96, 195, 138,0.4)' // 0% 处的颜色
              }, {
                  offset: 1,
                  color: 'rgba(96, 195, 138, 0)' // 100% 处的颜色
              }],
              global: false // 缺省为 false
            }
          },
          markLine: {
            data: [{
              yAxis: 100,
            }],
          }
        } 
      })
    }
  }
}
</script>

<style lang="less" scoped>
/deep/.el-table thead{
  color: #9EADCE;
}
/deep/.el-table th{
  padding: 8px 0;
}
/deep/.el-form-item__label{
  color: #8D99B6;
  font-weight: bold;
}
/deep/.el-input__inner{
  color: #8D99B6;
  width: 90px;
  border: 2px solid #B0B9CC;
}
/deep/.el-button--primary{
  background-color: #0022A9;
  border: none;
}
.conBox{
  h3{
    span{
      margin-left: 10px;
      color: #8D99B6;
      font-weight: 500;
      font-size: 14px;
    }
  }
  .legend{
    padding: 10px;
    .threshold{
      .myIcon{
        margin-left: 10px;
        font-weight: bolder;
        color: #263A58;
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