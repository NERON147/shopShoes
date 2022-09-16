<template>
  <div class="main-wrapper">
    
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
    min-width: 900px;
    margin: 0 auto;
}

</style>