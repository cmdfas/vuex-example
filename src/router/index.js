import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/exam1',
    name: 'exam1',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam1.vue')
  },
  {
    path: '/exam2',
    name: 'exam2',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam2.vue')
  },
  {
    path: '/exam3',
    name: 'exam3',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam3.vue')
  },
  {
    path: '/exam4',
    name: 'exam4',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam4.vue')
  },
  {
    path: '/exam5',
    name: 'exam5',
    component: () => import(/* webpackChunkName: "about" */ '../views/Exam5.vue')
  },
  {
    path: '/shop',
    name: 'shop',
    component: () => import(/* webpackChunkName: "about" */ '../views/ShopCart/components/App.vue')
  },

]

const router = new VueRouter({
  routes
})

export default router
