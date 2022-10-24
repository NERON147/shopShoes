import axios from 'axios'
import Vue from 'vue'
import Vuex from 'vuex'

//Работа с json server 'json-server --watch db.json' в терминале или npx json-server --watch db.json --port 3000

Vue.use(Vuex)

let store = new Vuex.Store({
  state: {
    products: [],
    cart: [],
  },
  mutations: {
    SET_PRODUCTS_TO_STATE: (state, products) => {
      state.products = products
    },
    SET_CART: (state, product) => {
      let isProductExists = false;
      if (state.cart.length) {
        state.cart.map(function (item) {
          if (item.article === product.article) {
            isProductExists = true;
            item.quantity++
          }

        })
        if (!isProductExists) {
          state.cart.push(product)
        }
      } else {
        state.cart.push(product)
      }
      localStorage.setItem('cart', JSON.stringify(state.cart))
      
    },
    REMOVE_FROM_CART: (state, index) => {
      state.cart.splice(index, 1)
      localStorage.setItem('cart', JSON.stringify(state.cart))
      
    },
    INCREMENT: (state, index) => {
      state.cart[index].quantity++
      localStorage.setItem('cart', JSON.stringify(state.cart))

    },
    DECREMENT: (state, index) => {
      if(state.cart[index].quantity > 1) {
        state.cart[index].quantity--
      localStorage.setItem('cart', JSON.stringify(state.cart))

      }
    },
    UPDATE_CART: (state, cart) => {
      state.cart = cart
    }
   

  },
  actions: {
    GET_PRODUCTS_FROM_API({commit}) {
      return axios('http://localhost:3000/products', {
        method: "GET"
      })
      .then ((products) => {
        commit('SET_PRODUCTS_TO_STATE', products.data)
        return products;
      })
      .catch((error) => {
        console.log(error)
        return error;
      })
    },
    ADD_TO_CART({commit}, product) {
      commit('SET_CART', product)
    },
    DELETE_FROM_CART({commit}, index) {
      commit('REMOVE_FROM_CART', index)
    },
    INCREMENT_CART_ITEM({commit}, index) {
      commit('INCREMENT', index)
    },
    DECREMENT_CART_ITEM({commit}, index) {
      commit('DECREMENT', index)
    },
    setCartFromLC({commit}, cart) {
      commit('UPDATE_CART', cart)
    }
  },
  getters: {
    PRODUCTS(state) {
      return state.products
    },
    CART(state) {
      return state.cart
    }
  }
  
})

export default store;