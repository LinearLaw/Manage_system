<template>
  <div id="app">
    <router-view/>
  </div>
</template>
<script>
/**
 * @desc  路由入口
 */
import Headers from "@/components/common/Header.vue"
import Tabs from "@/components/common/Tabs.vue"

export default {
  name: 'app',
  components:{
    Headers,Tabs
  },
  mounted(){
    console.log(this.GLOBAL);
    if(this.GLOBAL.cookie.get("members_id")){
      this.$router.push({"name":"Login"});
    }
  }
}
</script>
<style scroped>
header{width:100%;height:100px;position:fixed;left:0;top:0;z-index:3;}
section{width:260px;height:100%;position:fixed;left:0;top:0;display:inline-block;z-index:3;}
.view_place{width:100%;height:100%;position:fixed;left:0;top:0;z-index:2;padding-top:100px;padding-left:260px;background:#e2e2e1;}
</style>
