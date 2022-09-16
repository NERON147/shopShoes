<template>
  <div class="main-wrapper">
    <p>Main Wrapper</p>
    <catalog/>
    <cart/>
  </div>
</template>



<script>
import catalog from '@/components/Catalog.vue'
import cart from '@/components/Cart.vue'

export default {
  components: {
    catalog,
    cart
  }

}
</script>

<style>
.main-wrapper{
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;
    min-width: 900px;
    margin: 0 auto;
}

</style>