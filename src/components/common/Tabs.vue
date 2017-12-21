<template>
  <div class="tab">
    <div class="tab_logo">

    </div>
    <div class="tab_dropdown">
      <el-menu default-active="2" class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#c7c7c7"
        text-color="#fff"
        active-text-color="#ffd04b" router="true">

        <!-- 1、main info of shop -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ $t('tabs.shopmain')}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" :route="{'name':'ShopInfo'}">{{ $t('tabs.shopmain_info') }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 2、product info of shop -->
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{$t('tabs.productmain')}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" :route="{'name':'ProdList'}">{{ $t('tabs.productmain_list')}}</el-menu-item>
            <el-menu-item index="2-2" :route="{'name':'ProdPub'}">{{ $t('tabs.productmain_publish')}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 3、aftermarket info of shop -->
        <el-submenu index="3">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{$t('tabs.aftermarket')}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" :route="{'name':'AfterProcess'}">{{ $t('tabs.aftermarket_process')}}</el-menu-item>
            <el-menu-item index="3-2" :route="{'name':'AfterLocation'}">{{ $t('tabs.aftermarket_location')}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>
      </el-menu>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Tab',
  data () {
    return {

    }
  },
  methods: {
    handleOpen(key, keyPath) {

    },
    handleClose(key, keyPath) {

    }
  }
}
</script>
<style scoped>
.tab{
  width:100%;
  height:100%;
  background:#c7c7c7;
}
.tab_logo{
  width:100%;
  height:100px;
  background:#888;
}
</style>
