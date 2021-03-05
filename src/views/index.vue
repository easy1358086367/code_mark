<template>
  <div id="app">
      <myheader class="header" />
      <router-view class="banner"></router-view>
  </div>
</template>

<script>
import myheader from 'components/content/header';

export default {
    components : {
        myheader
    }
}
</script>

<style scoped>
#app .banner {
    
    /* min-height: 100vh; */ 
}
.banner{
    width: 100%;
    padding-top: 180px;
}
.header{
    position: absolute;
    top: 10px;
    z-index: 100;
    width: 100%;
    height: 80px;
}
</style>