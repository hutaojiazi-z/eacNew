<template>
  <div>
    <BrokenLine/>
    <div class="conBox margint15">
      <h3>最新爆块</h3>
      <Tabel :tabelData="LatestBurst"/>
      <AddTableMore/>
    </div>
    <div class="conBox margint15">
      <h3>待确认交易</h3>
      <div>
        <Tabel :tabelData="unConfirmFirst"/>
      </div>
      <div class="">
        <Tabel :tabelData="unConfirmSecond"/>
        <AddTableMore/>
      </div>
    </div>
    <div class="conBox margint15">
      <h4 :class="{'overelps' : !isOpen}">
        地球币（EAC）诞生于2013年12月20日。EAC是新一代Scrypt硬币，它使用由ColinPercival首次提出的scrypt加密算法作为工作证明。适合GPU挖矿，致力于可持续公平发展。其总量为135亿，EAC以365天为一周期，开始每块10000个币，以2000为振幅的正弦曲线变化。意思是开始10000个币，每块进行调整直到3月后达到每块12000个币，然后大约6个月后下降为10000个币，在9个月时下降为每块8000个币，至一年时上升为每块10000个币。后面减半支付。每14天有一天2倍的产出，每31天有一天5倍的产出。
      </h4>
      <p class="isOpen" @click="isOpen = !isOpen">{{ isOpen?'收起':'展开'}}</p>
      <div class="EAcDetail">
        <dl v-for="item in EAcDetail" :key="item.name">
          <span class="name">{{ item.name }}:</span>
          <span class="value">{{ item.value }}</span>
        </dl>
      </div>
    </div>
    <div class="conBox margint15">
      <h4>更多区块链浏览器</h4>
      <div class="browserMore">
        <span v-for="item in browserMore" :key="item.name">{{ item.name }}</span>
        <span class="more">查看更多>></span>
      </div>
    </div>
    
  </div>
</template>

<script>
import BrokenLine from"./children/echartsDiv/BrokenLine"
import Tabel from"components/table/Tabel"
import AddTableMore from "components/addmore/AddTableMore"
  export default {
    components:{
      BrokenLine,
      Tabel,
      AddTableMore
    },
    data(){
      return {
        isOpen:false,
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
        unConfirmFirst: {//待确认交易
          tableHead: [//表格头
            {field: "", name: '最佳交易费', width: 150},
            {field: "", name: '未确认交易笔数'},
            {field: "", name: '未确认交易笔数'},
            {field: "", name: '大小'},
            {field: "", name: '交易总额'},
          ],
          //表格数据
          tableData:[]
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
        EAcDetail:[
          {name: "英文名",value: "EAC/Earthcoin"},
          {name: "中文名",value: "地球币"},
          {name: "发行时间",value: "2013-12-20"},
          {name: "加密算法",value: "Scypt"},
          {name: "源代码语言",value: "C++"},
          {name: "ICO开始日期",value: "-"},
          {name: "ICO结束日期",value: "-"},
          {name: "共识算法",value: "Proof of work"},
          {name: "是否可挖矿",value: "Yes"},
          {name: "官方Email",value: "-"},
          {name: "官方网站",value: "http://www.deveac.com"},
          {name: "Github链接",value: "https://github.com/Sando..."},
          {name: "白皮书",value: "-"},
          {name: "Bitcointalk链接",value: "https://bitcointalk..."},
          {name: "Twitter链接",value: "-"},
          {name: "Facebook链接",value: "-"},
          {name: "YouTube链接",value: "-"},
          {name: "区块网站",value: "http://api.eacpay.com:9000"},
        ],
        browserMore:[//BTC ETH NEO BCH USDT BSV TRX IOST ONT
          {name: "BTC",url: "" },
          {name: "ETH",url: ""},
          {name: "NEO",url: ""},
          {name: "BCH",url: ""},
          {name: "USDT",url: ""},
          {name: "BSV",url: ""},
          {name: "TRX",url: ""},
          {name: "IOST",url: ""},
          {name: "ONT",url: ""},
        ]
      }
    },
    methods:{
      onSearch(){//搜索

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
.conBox{
  h3{
    padding: 10px;
    font-size: 16px;
    color: #001A56;
  }
  h4{
    padding: 10px 10px 5px 10px;
    font-size: 14px;
    color: #213B5C;
  }
  .isOpen{
    padding: 0 10px 10px 10px;
    font-size: 14px;
    color: #4088F6;
  }
  .EAcDetail{
    padding: 10px;
    display: grid;
    grid-template-columns: 25% 25% 25% 25%;
    line-height: 44px;
    .name{
      color: #9DA9C0;
    }
    .value{
      color: #213B5C;
    }
  }
  .browserMore{
    padding: 10px;
    line-height: 44px;
    color: #1442B5;
    span{
      margin-right: 20px;
      cursor: pointer;
    }
    .more{
      color: #1131AE;
    }
  }
}
.overelps{
  white-space:nowrap;
  overflow: hidden;
  text-overflow:ellipsis;
}
</style>