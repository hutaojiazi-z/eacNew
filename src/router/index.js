import Vue from 'vue'
import VueRouter from 'vue-router'
const Index = () => import('../views/china/Index')
const Home = () => import('../views/china/home/Home')
const Giantrack = () => import('../views/china/giantrack/Giantrack')
const Chart = () => import('../views/china/chart/Chart')
const ConfirmedNot = () => import('../views/china/confirmedNot/ConfirmedNot')
const Nugget = () => import('../views/china/nugget/Nugget')
const RichList = () => import('../views/china/richList/RichList')

// 处理重复导航时vueRouter报错问题
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect:"/china/home"
  },
  {
    path: '/china',
    name: 'index',
    component: Index,
    children: [
      {//首页
        path: 'home',
        name: 'Home',
        component: Home
      },
      {//巨鲸追踪
        path: 'giantrack',
        name: 'Giantrack',
        component: Giantrack
      },
      {//巨鲸追踪
        path: 'chart',
        name: 'chart',
        component: Chart
      },
      {//爆块
        path: 'nugget',
        name: 'nugget',
        component: Nugget
      },
      {//待确认交易
        path: 'confirmedNot',
        name: 'confirmedNot',
        component: ConfirmedNot
      },
      {//富豪榜
        path: 'richList',
        name: 'richList',
        component: RichList
      }
    ]
  }
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
