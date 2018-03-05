<template>
  <div class="tab">
    <div class="tab_logo">

    </div>
    <div class="tab_dropdown">
      <el-menu default-active="2" class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose"
        background-color="#333"
        text-color="#fff"
        active-text-color="#409EFF" :router="true">

        <!-- 1、main info of shop , update shop info -->
        <el-submenu index="1">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{ $t('tabs.shopmain')}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" :route="{'name':'ShopInfo'}">{{ $t('tabs.shopmain_info') }}</el-menu-item>
            <el-menu-item index="1-2" :route="{'name':'ShopEdit'}">{{ $t('tabs.shopmain_edit') }}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 2、product info of shop , add & edit & preview  -->
        <el-submenu index="2">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{$t('tabs.productmain')}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="2-1" :route="{'name':'ProdList'}">{{ $t('tabs.productmain_list')}}</el-menu-item>
            <el-menu-item index="2-2" :route="{'name':'ProdPub'}">{{ $t('tabs.productmain_publish')}}</el-menu-item>
            <el-menu-item index="2-3" :route="{'name':'ProdView'}">{{ $t('tabs.productmain_view')}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 3、aftermarket info of shop -->
        <el-submenu index="3">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>{{$t('tabs.aftermarket')}}</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="3-1" :route="{'name':'AfterProcess'}">{{ $t('tabs.aftermarket_process')}}</el-menu-item>
            <el-menu-item index="3-2" :route="{'name':'AfterLocation'}">{{ $t('tabs.aftermarket_location')}}</el-menu-item>
          </el-menu-item-group>
        </el-submenu>

        <!-- 4、平台商品列表，支持增删 -->
        <el-submenu index="4">
          <template slot="title">
            <span>{{$t('tools.tools_prod')}}</span>
          </template>
        </el-submenu>


        <!-- 5、平台交易信息流水记录：收入、支出 -->
        <el-menu-item index="5" :route="{'name':'AfterProcess'}">
          <span slot="title">{{$t('tools.tools_transaction')}}</span>
        </el-menu-item>

        <!-- 6、web页面模板切换，切换主题 -->
        <el-menu-item index="6" :route="{'name':'AfterProcess'}">
          <span slot="title">{{$t('tools.tools_modelpc')}}</span>
        </el-menu-item>

        <!-- 7、PC页面模板切换，切换主题 -->
        <el-menu-item index="7" :route="{'name':'AfterProcess'}">
          <span slot="title">{{$t('tools.tools_modelapp')}}</span>
        </el-menu-item>

        <!-- 8、系统设置，包括SEO title设置等 -->
        <el-menu-item index="8" :route="{'name':'AfterProcess'}">
          <span slot="title">{{$t('tools.tools_system')}}</span>
        </el-menu-item>

        <!-- 9、统计表格 -->
        <el-menu-item index="9" :route="{'name':'AfterProcess'}">
          <span slot="title">{{$t('tools.tools_statistics')}}</span>
        </el-menu-item>

        <!-- 10、财务管理设置 -->
        <el-menu-item index="10" :route="{'name':'AfterProcess'}">
          <span slot="title">{{$t('tools.tools_finance')}}</span>
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
}
.tab_logo{
  width:100%;
  /*height:100px;*/
  /*background:#888;*/
}
</style>
