import Vue from 'vue'
import Router from 'vue-router'
import Loading from '@/components/Loading'
import Home from '@/components/Home'
import Login from '@/components/Login'
import Class from '@/components/Class'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'loading',
      component: Loading
    },
    {
      path: '/home',
      name: 'home',
      component: Home
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/class/:id',
      name: 'class',
      component: Class
    }
  ]
})
