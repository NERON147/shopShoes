<template>
  <div class="catalog">
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

  computed: {
    ...mapGetters([
      'PRODUCTS'
    ])
  },

  methods: {
    ...mapActions([
      'GET_PRODUCTS_FROM_API'
    ]),
    addToCart(data) {
      console.log(data)
    }
  },
  mounted() {
    this.GET_PRODUCTS_FROM_API()
  }
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


</style>