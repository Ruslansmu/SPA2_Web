import Vue from 'vue'
import VueRouter from 'vue-router'
import Page1 from '../views/Pages1.vue'
import Page2 from '../views/Pages2.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Page1',
    component: Page1
  },
  {
    path: '/products',
    name: 'Page2',
    component: Page2

  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
