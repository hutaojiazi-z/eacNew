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
      </div>
    </div>
  </div>
</template>

<script>
import Tabel from"components/table/Tabel"
import { line } from "utils/echartsUtils/echartsUtils"
  export default {
    components:{
      Tabel,
    },
    data() {
      return {
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
        line(this, {
          id: "gianTrack",
          grid: ['15%', '2%', "15%", '5%'],
          xAxis: {
            others:{
              axisLabel: {
                color: "#333333",
                fontSize: 12 
              },
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
          series:[{
            name: "总量",
            areaStyle:{
              
            },
            data:[281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
            others:{
              markLine: {
                silent: true,
                data:[]
              }
            }
          }]
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
</style>