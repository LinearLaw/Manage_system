<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'Index' }">{{ $t('tabs.index')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('tabs.aftermarket_process')}}</el-breadcrumb-item>
    </el-breadcrumb>


    <vue-event-calendar :events="demoEvents"></vue-event-calendar>
    、
  </div>
</template>

<script>
import Vue from 'vue';
import '../../assets/common/vue-event-calendar/dist/style.css' //^1.1.10, CSS has been extracted as one file, so you can easily update it.
import vueEventCalendar from '../../assets/common/vue-event-calendar/src/index.js'
Vue.use(vueEventCalendar, {locale: 'en'})
export default {
  name: 'AfterProcess',
  data () {
    return {
      demoEvents: [{
        date: '2016/11/12', // Required
        title: 'Foo' // Required
      }, {
        date: '2016/12/15',
        title: 'Bar',
        desc: 'description',
        customClass: 'disabled highlight' // Custom classes to an calendar cell
      }]
    }
  }
}
</script>
<style scoped>

</style>
