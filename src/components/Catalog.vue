<template>
  <div class="catalog">
    <router-link :to="{name: 'cart', params: {cart_data: CART}}">
      <div class="link_to_cart"> Cart: {{CART.length}}</div>
    </router-link>
    
    <h1 class="title">Catalog</h1>
    <div class="catalog-list">
    <catalogItem
      v-for="product in PRODUCTS" :key="product.article"
      :product="product"
      @addToCart="addToCart"
    />
    </div>
  </div>
</template>

<script>
import catalogItem from '@/components/Catalog-Item.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
    components: {
        catalogItem
    },
  data() {
    return {
       
    }
  },
mounted() {
    this.GET_PRODUCTS_FROM_API()

  
    
    
  },
  
  computed: {
    ...mapGetters([
      'PRODUCTS',
      'CART'
    ])
  },

  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API',
      'ADD_TO_CART'
    ]),
    addToCart(data) {
      this.ADD_TO_CART(data)

      
    }

  },
  
}
</script>

<style>
.title{
  display: flex;
  justify-content: center;
  margin-bottom: 150px;
}
.catalog-list{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  margin-right: 40px;
  margin-left: 40px;
}

.link_to_cart {
  position: absolute;
  top: 10px;
  right: 10px;
  padding: 16px;
  border: 1px solid rgb(163, 163, 163);
  text-decoration: none;
}


</style>