<template>
  <div class="main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>
</template>



<script>


export default {
 

  computed: {
    
  }

}
</script>

<style>
.main-wrapper{
    min-width: 900px;
    margin: 0 auto;
}

</style>