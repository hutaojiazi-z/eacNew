<template>
  <div>
    <article class="flexBC BLine">
      <section class="conBox diveac" ref="diveac">
        <div class="maincon flexBC">
          <div class="flex ">
            <img class="marginr10" src="http://img.99add.com/@/null/icon/20200622/1,592,820,320,084.png" alt="logo">
            <dl>
              <dd class="">
                <span class="DarkText">EAC</span>
                <span class="pow">POW</span>
              </dd>
              <dd class="fontsize16">
                <span class="number">35.64</span>
                <el-select v-model="region">
                  <el-option v-for="(item,index) in regionOption" :key="item" :label="item" :value="index"></el-option>
                </el-select>
              </dd>
            </dl>
          </div>
          <div>
            <span class="rise">
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAeCAYAAAAl+Z4RAAAAAXNSR0IArs4c6QAAAXBJREFUOBG9lL8uBUEUxmfFv4QoSChEROMJVAqNBIUnUJLcN9B5B6VO6RloiI5KI5dKoyKhE+vfXb9ZO+6Zuefs3kJM8mXO+c73fdmZu3udM1ZRFBPgFJyAMUNm05gOQFj7tlKZ4FoGneBm/wRLirSXQjgErkG6riAGex0Jg2gvdYp+N5HHLcJFkAtDWr5ALMQu0TE8Sx1Kfyws3RLhtiK2qK2ukwrVNHiy1Ar/ADf5G0JzpIiaqMMyANVGk7JmvuIfvw2+gH9td8AmsNYagxY4B/5Fu/AB62A2nId6ClhrXOjmEK2GPtoZPCoJ95GoagY0Eu5W4W8UzlkBmljj/jdAO5Z2qvLNnFcucUZXKyzmDPgvL6xnRVZS6iVmWVYwlY+sXqBPUAPKaOekSYZV45+tLkCaZFjfAdIk678NiNJkw/UPgw/wCsyjmn/T/BLvGO8Izak7MlzWZkAlarO/SUNaNwVcYshTU989RxgFI3WGb8tkbLrGFzYAAAAAAElFTkSuQmCC" alt="">
              35.6% 
            </span>
          </div>
        </div>
        <div class=" EacItem">
          <div class="flexBC marginb8">
            <dl>
              <dd>最新爆块</dd>
              <dd>125,85</dd>
            </dl>
            <dl>
              <dd>算力</dd>
              <dd>125,85(TH/s)</dd>
            </dl>
            <dl class="alignR">
              <dd>24小时交易笔数</dd>
              <dd>129,853</dd>
            </dl>
          </div>
          <div class="flexBC">
            <dl>
              <dd>挖矿难度</dd>
              <dd>6.36(M)</dd>
            </dl>
          </div>
        </div>
        <div class="echarts" id="EacCharts" :style="{ 'height': '100px'}"></div>
      </section >
      <section class="conBox erveyAress" :style="{ 'height' : EACHeight+'px'}">
        <div class="maincon">
           <ul>
              <h3 @click="isDaily = true">每日交易笔数</h3>
              <h3 @click="isDaily = false">活跃地址数</h3>
            </ul>
            <div class="echarts">
              <div ref="teste" id="erveyAress" :style="{ 'height': '100%', 'width': '100%'}"></div>
            </div>
        </div>
       
      </section >
    </article>
  </div>
</template>

<script>
 import { line } from "utils/echartsUtils/echartsUtils"
  export default {
    data(){
      return {
        region: 0,
        EACHeight: 0,
        regionOption: ["ETH", "CNY", "USD", "BTC", "USDT", "LTC", "XRP", "BCH" ],
        isDaily: true
      }
    },
    mounted(){
      this.$nextTick( () => {
        this.divEACHeight()
        
      })
    },
    computed: {
      
    },
    methods: {
      divEACHeight() {
        let EacHeight = this.$refs.diveac.offsetHeight
        this.EACHeight = EacHeight;
        this.$nextTick( () => {
          this.drawEACLine()
          this.erveyAress()
        })
      },
      drawEACLine(){//EAC折线图
        line(this, {
          id: "EacCharts",
          xAxis: {
            show: false,
            data: ['A', 'B', 'C', 'D', 'E', 'F']
          },
          yAxis: {
            show: false
          },
          series:[{
            name: "总量",
            areaStyle:true,
            data:[281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
          }]
        })
        // let vm = this;
        // // 基于准备好的dom，初始化echarts实例
        // let myChart = this.$echarts.init(document.getElementById('EacCharts'))
        // // 绘制图表
        // myChart.setOption({
        //   grid: {
        //     top: '0',
        //     left: '0',
        //     right: '0',
        //     bottom: '0'
        //   },
        //   xAxis: [{
        //     show: false,
        //     type: 'category',
        //     boundaryGap: false,
        //     data: ['A', 'B', 'C', 'D', 'E', 'F'],
        //   }],
        //   yAxis: [{
        //     show: false
        //   }],
        //   series: [
        //     {
        //       name: '注册总量',
        //       type: 'line',
        //       symbol: "none",
        //       smooth: true, //是否平滑
        //       itemStyle: {
        //         normal: {
        //           lineStyle: {
        //             color: 'rgba(107, 127, 219, 1)',
        //             width: 2
        //           }
        //         }
        //       },
        //       areaStyle: {
        //         normal: {
        //           color: new vm.$echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //               offset: 0,
        //               color: 'rgba(107, 127, 219, 0.8)'
        //             },
        //             {
        //               offset: 1,
        //               color: 'rgba(107, 127, 219, 0)'
        //             }
        //           ], false),
        //         }
        //       },
        //       data: [281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
        //     },
        //   ]
        // });
      
      
      
      
      },
      erveyAress(){//每日交易笔数和活跃地址数
        let tEacHeight = this.$refs.teste.offsetHeight
        console.log(tEacHeight)
        line(this, {
          id: "erveyAress",
          grid: ['15%', '2%', "25%", '5%'],
          xAxis: {
            others:{
              axisLabel: {
                rotate: 45,
                color: "#B9C0CA",
                fontSize: 12 ,
                formatter: function(value) {
                  return value;
                }
              },
              
              axisLine: {
                lineStyle:{
                  width: 2,
                  color: "#3D3D3D"
                }
              },
              axisTick: {
                show: true,
                alignWithLabel: true,
                lineStyle: {
                  width:1,
                  color:"#3D3D3D"
                }
              },
            },
            data: ['2015-9','2015-10','2015-11','2015-12','2016-1','2016-2'],
          },
          yAxis: {
            show: true,
            axisLine: {
              show: false
            },
            axisTick: {
              show: false
            },
            axisLabel: {
              color: "#B9C0CA",
              fontSize: 12 ,
            }
          },
          series:[{
            name: "总量",
            areaStyle: true,
            data:[281.55, 398.35, 214.02, 179.55, 289.57, 356.14, ],
          }]
        })
      }
   }
  }
</script>

<style lang="less" scoped>
/deep/.el-input__inner{
  border: none;
  border-radius: 0;
  width: 80px;
  font-size: 16px;
  color: #092143;
}
/deep/.el-select .el-input .el-select__caret{
  color: #092143;
  font-weight: bolder;
}
.borText(){
  border-radius: 4px;
  display: inline-block;
  text-align: center;
  font-size: 12px;
  color: white;
}
.BLine{
  section{
    width: 100%;
    margin-right: 15px;
    position: relative;
    .maincon{
      padding: 15px;
      img{
        width: 60px;
        height: 60px;
      }
      .DarkText{
        font-size: 18px;
        color: #092143;
      }
      dl{
        padding-top: 8px;
        .pow{
          .borText();
          height: 20px;
          line-height: 20px;
          width: 40px;
          background-color: #8593AF;          
          margin-left: 6px;
        }.number{
          color: #4BC191;
        }
      }
      .rise{
        .borText();
        padding: 0 5px;          
        height: 26px;
        line-height: 26px;
        background-color: #3BC18B;
        img{
          width: 8px;
          height: 15px;
          margin-right: 2px;
          vertical-align: middle; 
        }
      }
    }
    .EacItem{
      padding: 15px;
      flex-wrap: wrap;
      dl{
        dd{
          color: #7B8BA7;
          line-height: 27px;
          font-weight: 600;
          &:last-child{
            color: #213553;
          }
        }
      }
    }
    .echarts{
      position: absolute;
      bottom: 0;
      width: calc( 100% + 2px);
      left: -1px;
    }
    &:last-child{
      margin-right: 0;
      ul{
        display: flex;
        margin-right: 25px;
        h3{
          font-size: 14px;
          font-weight: bold;
        }
      }
      .echarts{
        height: calc( 100% - 46px);
      }
    }
  }
}
</style>