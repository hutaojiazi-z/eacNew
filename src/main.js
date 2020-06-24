import Vue from 'vue'
import App from './App.vue'
import router from './router'
Vue.config.productionTip = false //阻止启动生产消息
// 引用饿了么组件
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);
//引用echarts
import echarts from 'echarts'
Vue.prototype.$echarts = echarts
// 导入所有接口
import request from 'utils/request/requestDetail'
Vue.prototype.$request = request
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
