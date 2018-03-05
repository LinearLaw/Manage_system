<template>
  <div class="pd_a_15">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'Index' }">{{ $t('tabs.index')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('tabs.shopmain_info')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="pd_a_15">
      <div class="txr"><router-link :to="{'name':'ShopEdit'}">编辑</router-link></div>
      <div>
        <el-row :gutter="20">
          <el-col :span="4">
            <span>店铺名称</span>
          </el-col>
          <el-col :span="20">
            <span>阿里巴巴旗舰店</span>
          </el-col>
        </el-row>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  data () {
    return {
        form: {
          name: '',
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        }
    }
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    }
  }
}
</script>
<style scoped>

</style>
