<template>
  <div class="app">
    <div class="header">
      <el-row class="top" type="flex" justify="center">
        <el-col :span="span" class="flexBC">
          <div class="flex alignItemC">
            <img class="marginr4" src="http://img.99add.com/@/null/icon/20200622/1,592,804,162,302.png" alt="logo">
            Earthcoin 区块链浏览器
          </div>
          <select v-model="language">
            <option value="1">中文</option>
            <option value="2">英文</option>
          </select>
        </el-col>
      </el-row>
      
      <div class="navHead">
        <el-row type="flex" class="" justify="center">
          <el-col :span="span" class="flexBC">
            <div class="flex alignItemC nav">
              <img class="marginr4" src="http://img.99add.com/@/null/icon/20200622/1,592,805,680,291.png" alt="logo">
              Earthcoin浏览器
            </div>
            <nav class="flexBC">
              <div class="pointer" v-for="(item,index) in navList" :key="index" :class="{'active':isactive(item)}"  @click="moveto(item,index)">
                {{ item.name }}
              </div>
            </nav>
          </el-col>
        </el-row>
      </div>
    </div>
    <el-container>
      <el-row type="flex" class="container" justify="center">
        <el-col :span="span">
          <search></search>
          <keep-alive>
            <router-view/>
          </keep-alive>
        </el-col>
      </el-row>
      <el-footer class="footer" height="260px">
        <el-row type="flex" justify="center">
          <el-col :span="span">
            <div class="flexBC">
              <dl class="flex alignItemC">
                <div class="img">
                  <img src="http://img.99add.com/@/null/icon/20200624/1,592,982,774,819.png" alt="二维码">
                </div>
                <div>
                  <dd>捐赠EAC支持我们</dd>
                  <dd>地址：egSkEWfeMSkkWtPePsaUhaHLfVwTep4AHQ</dd>
                </div>
              </dl>
              <dl>
                <dd>友情链接：</dd>
                <dd>地球币中国社区 AEX交易所</dd>
              </dl>
            </div>
            <div class="copyright">
              © 2018 Eacpay.com   版权所有，未经许可，不得转载    联系微信号：eacpay
            </div>
          </el-col>
        </el-row>
      </el-footer>
    </el-container>
    <!-- <router-view/> -->
  </div>
</template>
<script>
import search from "components/search/Search.vue"
export default {
  components:{
    search
  },
  data() {
    return {
      language: 1,
      span: 16,
      activeMenu:0,
      navList: [
        {
          name: "首页",
          path: "/china/home"
        },
        {
          name: "巨鲸追踪",
          path: "/china/giantrack"
        },
        {
          name: "图表",
          path: "/china/chart"
        },
        {
          name: "爆块",
          path: "/china/nugget"
        },
        {
          name: "待确认交易",
          path: "/china/confirmedNot"
        },
        {
          name: "富豪榜",
          path: "/china/richList"
        },
      ]
    }
  },
  methods:{
    isactive(d){
      let thePath = this.$route.path;
      return d.path == thePath;
    },
    moveto(d, i){
      this.activeMenu = i;
      this.$router.replace({path : d.path});
    }
  }
}
</script>
<style lang="less" scoped>
.header{
  position: fixed;
  color: white;
  width: 100vw;
  z-index: 500;
  .top{
    height: 32px;
    background-color: #213654;
    padding: 5px 0;
    div{
      height: 100%;
      font-size: 12px;
      img{
        height: 100%;
      }
    }
    select{
      border: none;
      background: none;
      color: white;
      option{
        color: #5697F7;
      }
    }
  }
  
  .navHead{
    background-color: white;
    .nav{
      height: 60px;
      color: #152D4D;
      padding: 15px 0;
      font-size: 20px;
      img{
        height: 100%;
      }
    }
    nav{
      font-size: 14px;
      font-weight: bold;
      div{
        margin-left: 20px;
        color: #8E9AB5;
      }
      .active{
      color: #152D4D;
      }
    }
  }
}
.container{
  margin-top: 92px;
}
.footer{
  background-color: #213654;
  margin-top: 20px;
  font-size: 20px;
  color: white;
  padding: 37px 0 20px 0;
  img{
    width:130px;
    margin-right: 20px;
  }
  .copyright{
    margin-top: 20px;
    text-align: center;
  }
  dd{
    line-height: 34px;
  }
}

</style>