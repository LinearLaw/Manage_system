<template>
  <div id="app">
    <section class="container" id="tabs">
      <Tabs></Tabs>
    </section>
    <header id="headers">
      <Headers></Headers>
    </header>
    
    <div class="view_place">
        <router-view class="pd_a_15"/>
    </div>
  </div>
</template>
<script>
/**
 * @desc  主页
 */
import Headers from "@/components/common/Header.vue"
import Tabs from "@/components/common/Tabs.vue"

export default {
  name: 'app',
  components:{
    Headers,
    Tabs
  }
}
</script>
<style scroped>
.view_place{
  width:100%;height:100%;
  position:fixed;left:0;top:0;
  z-index:2;
  padding-top:100px;
  padding-left:200px;
  background:#fff;
}
</style>
