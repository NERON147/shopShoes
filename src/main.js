import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store/store'

Vue.config.productionTip = false

const cart = JSON.parse(localStorage.getItem('cart'))

if(cart) {
  store.dispatch('setCartFromLC', cart)
}

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
