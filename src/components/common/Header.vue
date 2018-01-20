<template>
  <div class="header container">
    <span class="el-icon-menu box_top_center cs_point"></span>
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {

    }
  },
  methods:{
    
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.header{
    width:100%;
    height:100%;
    background:#242533;
    position:relative;
    padding:10px 20px;
}
.el-icon-menu{
    color:#fff;
    font-size:28px;
    &:hover{
      color:#409EFF;  
    }
}
</style>
