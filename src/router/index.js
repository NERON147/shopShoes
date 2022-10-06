import Vue from 'vue'
import VueRouter from 'vue-router'

import Catalog from '../components/Catalog.vue'
import Cart from '../components/Cart.vue'


Vue.use(VueRouter)

const routes = [
 {
  path: '/',
  name: 'catalog',
  component: Catalog
 },
 {
  path: '/cart',
  name: 'cart',
  component: Cart,
  props: true
 }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
