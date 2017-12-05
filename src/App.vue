<template>
  <div id="app">
    <header>
      <Headers></Headers>
    </header>
    <section class="container">  
      <Tabs></Tabs>
    </section>
    <div class="view_place">
      <router-view/>
    </div>
  </div>
</template>

<script>
import Headers from "@/components/common/Header.vue"
import Tabs from "@/components/common/Tabs.vue"

export default {
  name: 'app',
  components:{
    Headers,Tabs
  },
  mounted(){
    
  }
}
</script>
<style scroped>
header{width:100%;height:100px;position:fixed;left:0;top:0;z-index:3;}
section{width:260px;height:100%;position:fixed;left:0;top:0;display:inline-block;z-index:3;}
.view_place{width:100%;height:100%;position:fixed;left:0;top:0;z-index:2;padding-top:100px;padding-left:260px;background:#e2e2e1;}
</style>
