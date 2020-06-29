<template>
  <div>
    <div class="conBox" v-for="(item, index) in contentData" :key="index">
      <div class="title">
        <h3>{{item.title}}</h3>
      </div>
      <div class="content">
        <div class="item conBox" v-for="obj in item.charts" :key="obj.id">
          <h4>{{obj.title}}</h4>
          <div :id="obj.id" :style="{ 'height': '230px', 'width': '100%'}"></div>
        </div>
      </div>
    </div>
    <div class="conBox">
      <div class="title">
        <h3>富豪榜</h3>
      </div>
      <div class="content ">
        <div class="">
          <div id="richList" :style="{ 'height': '280px', 'width': '100%'}"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import { chartsLine, chartsDBLine, chartsPie } from "utils/echartsUtils/echartsUtils"
  export default {
    data() {
      return {
        contentData: [
          {
            title: "市值与行情",
            charts: [
              {
                id: "marketM",
                title: "每日市值(亿美元)"
              },{
                id: "marketD",
                title: "每日市值(美元)"
              }
            ]
          },
          {
            title: "区块信息",
            charts: [
              {
                id: "blockTotail",
                title: "每日区块总数",
              },{
                id: "blockSize",
                title: "区块大小(Byte)"
              },{
                id: "blockTime",
                title: "出块耗时(秒)"
              }
            ]
          },
          {
            title: "网络状态",
            charts: [
              {
                id: "computeD",
                title: "每日平均算力 (TH/s)",
              },{
                id: "difficulty",
                title: "挖矿难度 (M)"
              }
            ]
          },
          {
            title: "挖矿奖励",
            charts: [
              {
                id: "rewardDD",
                title: "每日挖矿奖励金额 (美元)",
              },{
                id: "rewardEac",
                title: "每日挖矿奖励金额 (EAC)"
              },{
                id: "averageSCD",
                title: "每日单笔交易手续费平均值 (美元)"
              },{
                id: "averageSCE",
                title: "每日单笔交易手续费平均值 (EAC)"
              },{
                id: "sumSCDD",
                title: "每日手续费总和 (美元)"
              },{
                id: "sumSCDE",
                title: "每日手续费总和 (EAC)"
              },{
                id: "blokSCE",
                title: "单个区块手续费均值 (EAC)"
              },{
                id: "miningIncome",
                title: "挖矿收益 (美元/每日/G哈希每秒)"
              }
            ]
          },
          {
            title: "交易信息",
            charts: [
              {
                id: "blockM",
                title: "每日单个区块交易金额中位数 (EAC)",
              },{
                id: "amountD",
                title: "每日交易金额 (EAC)"
              },{
                id: "arAmountDD",
                title: "每日平均每笔交易额 (美元)"
              },{
                id: "transactionsD",
                title: "每日交易笔数"
              },{
                id: "transactionsDD",
                title: "每日交易额 (美元)"
              }
            ]
          },
          {
            title: "活跃度",
            charts: [
              {
                id: "tweetsD",
                title: "每日推特数",
              },{
                id: "activeAdress",
                title: "活跃地址与新增地址",
                dobleC: true
              }
            ]
          },
          {
            title: "流通量",
            charts: [
              {
                id: "excavatedT",
                title: "每日已挖出货币总额 (EAC)",
              }
            ]
          },
          {
            title: "全节点信息",
            charts: [
              {
                id: "nodeSize",
                title: "每日全节点空间大小 (KB)",
              }
            ]
          },
        ]
      }
    },
    mounted() {
      this.drawLine()
      this.drawPie()
    },
    methods:{
      drawLine() {//marketM
        this.contentData.forEach( item => {
          item.charts.forEach( obj => {
            if( obj.dobleC == undefined ) {
              chartsLine(this, {
                id: obj.id,
                xAxis: {
                  data: ["",'2015-9','2015-10','2015-11','2015-12','2016-1','2016-2']
                },
                series: {
                  name: obj.title,
                  data: [100, 200, 150, 88, 120, 240, 100, 200, 150, 88, 120, 240]
                }
              })
            }else{
              chartsDBLine(this, {
                id: obj.id,
                legend:{
                  data:["活跃地址数", "新增地址数"],
                },
                xAxis: {
                  data: ["",'2015-9','2015-10','2015-11','2015-12','2016-1','2016-2']
                },
                series: [{
                  name: "活跃地址数",
                  data: [100, 200, 150, 88, 120, 240, 100, 200, 150, 88, 120, 240]
                },
                {
                  name: '新增地址数',
                  data: [200, 200, 200, 88, 200, 240, 200, 200, 150, 200, 120, 240]
                }]
              })
            }
            
          })
        })
        
      },
      drawPie(){
      
        chartsPie(this, {
          id: "richList",
          series: [{
              name:"一级",
              data: [{
                  value: 147,
                  name: '互联网',
                },
                {
                  value: 29,
                  name: '金融'
                },
                {
                  value: 22,
                  name: '政企'
                },
                {
                  value: 14,
                  name: '传统'
                },
                {
                  value: 11,
                  name: '军工'
                },
                {
                  value: 9,
                  name: '媒体'
                },
                {
                  value: 8,
                  name: '咨询'
                },
                {
                  value: 6,
                  name: '其它'
                },
                {
                  value: 8,
                  name: '通信'
                },
                {
                  value: 2,
                  name: '法律'
                },
                {
                  value: 2,
                  name: '房地产'
                }]
            },
            {
              name:"二级",
              data: [{
                value: 31,
                name: '资讯'
              },
              {
                value: 19,
                name: '电商'
              },
              {
                value: 19,
                name: '阅读'
              },
              {
                value: 15,
                name: '视频'
              },
              {
                value: 13,
                name: '其它'
              },
              {
                value: 10,
                name: '科技'
              },
              {
                value: 10,
                name: '自媒体'
              },
              {
                value: 8,
                name: '平台'
              },
              {
                value: 7,
                name: '社区'
              },
              {
                value: 7,
                name: '综合'
              },
              {
                value: 6,
                name: '直播'
              },
              {
                value: 2,
                name: '工具'
              },
              {
                value: 15,
                name: '银行'
              },
              {
                value: 6,
                name: '保险'
              },
              {
                value: 6,
                name: '证券'
              },
              {
                value: 1,
                name: '基金'
              },
              {
                value: 1,
                name: '审计'
              },
              {
                value: 10,
                name: '政府'
              },
              {
                value: 8,
                name: '大型企业'
              },
              {
                value: 4,
                name: '服务商'
              },
              {
                value: 14,
                name: '制造业'
              },
              {
                value: 11,
                name: '军工'
              },
              {
                value: 5,
                name: '日报'
              },
              {
                value: 4,
                name: '广电'
              },
              {
                value: 8,
                name: '咨询'
              },
              {
                value: 3,
                name: '其它'
              },
              {
                value: 1,
                name: '服务'
              },
              {
                value: 1,
                name: '医疗'
              },
              {
                value: 1,
                name: '制药'
              },
              {
                value: 4,
                name: '运营商'
              },
              {
                value: 4,
                name: '制造商'
              },
              {
                value: 2,
                name: '法律'
              },
              {
                value: 2,
                name: '房地产商'
              }

              ]
            }
          ]
        })
      }
    }
  }
</script>

<style lang="less" scoped>
.conBox{
  margin-bottom: 15px;
  .title{
    border-bottom: 1px solid #F4F5F8;
    h3{
      padding: 10px 15px;
      color: #1C2C53;
    }
  }
  .content{
    padding: 15px 15px 0 15px;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    .item{
      border-width: 1px;
      border-color: #F4F5F8;
      margin-right: 15px;
      margin-bottom: 15px;
      &:nth-child(3n){
        margin-right: 0;
      }
      h4{
        font-size: 14px;
        color: #435CC4;
        padding: 15px 11px;
      }
    }
  }
}
</style>