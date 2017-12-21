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
        active-text-color="#ffd04b">

        <!-- 1、main info of shop -->
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-location"></i>
            <span>{{ $t('tabs.shopmain')}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              <router-link :to="{'name':'ShopInfo'}">{{ $t('tabs.shopmain_info') }}</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 2、product info of shop -->
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">{{ $t('tabs.productmain')}}</span>
          <el-menu-item-group>
            <el-menu-item index="2-1">
              <router-link :to="{'name':'ProdList'}">{{ $t('tabs.productmain_list')}}</router-link>
            </el-menu-item>
            <el-menu-item index="2-2">
              <router-link :to="{'name':'ProdPub'}">{{ $t('tabs.productmain_publish')}}</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu-item>

        <!-- 3、aftermarket info of shop -->
        <el-menu-item index="3">
          <i class="el-icon-setting"></i>
          <span slot="title">{{ $t('tabs.aftermarket')}}</span>
          <el-menu-item-group>
            <el-menu-item index="3-1">
              <router-link :to="{'name':'AfterProcess'}">{{ $t('tabs.aftermarket_process')}}</router-link>
            </el-menu-item>
            <el-menu-item index="3-2">
              <router-link :to="{'name':'AfterLocation'}">{{ $t('tabs.aftermarket_location')}}</router-link>
            </el-menu-item>
          </el-menu-item-group>
        </el-menu-item>
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
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
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
