<template>
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'Index' }">{{ $t('tabs.index')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('tabs.aftermarket_location')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <el-select v-model="value5" multiple placeholder="请选择" @change="getNumber">
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <button @click="setModel"> dianji </button>

  </div>
</template>

<script>
export default {
  name: 'AfterLocation',
  data () {
    return {
      options: [],
        keyOfOption:{
          id1:0,
          id2:1,
          id3:2,
          id4:3,
          id5:4
        },
        value5: [],
        value11: []
    }
  },
  mounted(){
    let _this = this;
    setTimeout(()=>{
      _this.options = [{
          value: 'id1',
          label: '黄金糕',
        }, {
          value: 'id2',
          label: '双皮奶'
        }, {
          value: 'id3',
          label: '蚵仔煎'
        }, {
          value: 'id4',
          label: '龙须面'
        }, {
          value: 'id5',
          label: '北京烤鸭'
        }]
      this.value5 = ["id1","id3"];
    },500)

  },
  methods:{
    getNumber(){
      console.log(this.value5);
      let selectArr = [];
      let _this = this;
      this.value5.map((item,index)=>{
        // _this.keyOfOption[item]  =>这个就是options里面对应的这个id的索引
        selectArr.push( _this.options[ _this.keyOfOption[item] ] );
      })
      console.log(selectArr);
    },
    setModel(){
      this.value5 = ["id1","id3"];
    }
  }
}
</script>
<style scoped>

</style>
