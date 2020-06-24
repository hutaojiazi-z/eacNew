import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/china/home/Home.vue'
import Giantrack from '../views/china/giantrack/Giantrack.vue'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/',
    redirect:"/home"
  },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/giantrack',
    name: 'Giantrack',
    component: Giantrack
  },
  
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
