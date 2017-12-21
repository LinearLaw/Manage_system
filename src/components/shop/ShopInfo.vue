<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'Index' }">{{ $t('tabs.index')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('tabs.shopmain_info')}}</el-breadcrumb-item>
    </el-breadcrumb>
  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  data () {
    return {

    }
  }
}
</script>
<style scoped>

</style>
