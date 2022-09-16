<template>
<div id="app">
  
  <mainWrapper/>
  </div>
</template>

<script>
import mainWrapper from '@/components/MainWrapper.vue'
export default {
components: {
    mainWrapper,
  }
}
</script>
 
<style>
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@500&display=swap');

#app {
  font-family: 'Montserrat', sans-serif;
}

.btn {
  padding: 8px 16px;
  background: #26ae68;
  color: #ffffff;
  border: 0;
  border-radius: 5px;
  outline: none;
  cursor: pointer;
}

.btn:hover {
    background: #31c375;
  }
</style>