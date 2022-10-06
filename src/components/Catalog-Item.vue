<template>
  <div class="catalog-item">
    <img :src=" require('../assets/img/' + product.image)" alt="img" class="img">
    <p class="name">{{product.name}}</p>
    <p class="price">{{product.price}} ₽</p>
    <button class="btn" @click="addToCart">Add to cart</button>
  </div>
</template>

<script>
export default {
    props: {
      product: {
        type: Object,
        required: true
      }
    },
  mounted() {
        this.$set(this.product, 'quantity', 1)
    },
    methods: {
      addToCart () {
        this.$emit('addToCart', this.product)
      },
    }
};
</script>

<style>
.catalog-item{
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #444;
  padding: 16px;
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.img {
  width: 200px;
}

.btn {
  transition: all .2s ease;
}

.btn:active {
  transform: scale(1.1);
}


</style>