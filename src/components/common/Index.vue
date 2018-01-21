<template>
  <div class="indexpage">
      <!--1、header-->
      <el-row :gutter="20">
        <el-col :span="6">
          <div class="index_box back_orange">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-star-on"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">店铺数量</p>
              <p class="count_content number_fam">{{count.count_1}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="index_box back_green">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-date"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">店铺数量</p>
              <p class="count_content number_fam">{{count.count_2}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="index_box back_blue">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-bell"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">店铺数量</p>
              <p class="count_content number_fam">{{count.count_3}}</p>
            </div>
          </div>
        </el-col>
        <el-col :span="6">
          <div class="index_box back_red">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-goods"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">店铺数量</p>
              <p class="count_content number_fam">{{count.count_4}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <!--2、content-->
      <el-row :gutter="20" class="mg_b_20">
        <el-col :span="8">
          <div class="chart_content">
            
          </div>
        </el-col>
        <el-col :span="16">
          <div class="chart_content">
            
          </div>
        </el-col>
      </el-row>
      <!--3、content 2-->
      <el-row :gutter="20">
        <el-col :span="12">
          <div class="chart_content">
            
          </div>
        </el-col>
        <el-col :span="12">
          <div class="chart_content">
            
          </div>
        </el-col>
      </el-row>
      
  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      count:{
        count_1:516,
        count_2:151,
        count_3:658,
        count_4:345,
      }
    }
  },

}
</script>
<style lang="less" scoped>
.indexpage{
  padding:15px;
}
.index_box{
  padding:15px;
  padding-left:80px;
  margin-bottom:20px;
  border-radius:5px;
  cursor:pointer;
  position:relative;
  .index_box_icon{
    font-size:50px;
    left:15px;
    top:40px;
    [class*=" el-icon-"], [class^=el-icon-]{
      font-weight:900;
      color:#fff;
    }
  }
  .box_right_center{
    .count_title{
      font-size:16px;
      color:#333;
    }
    .count_content{
      font-size:48px;
      letter-spacing: 3px;
    }
  }
}
.chart_content{
  width:100%;
  height:200px;
  border:4px solid #e2e2e1;
}
</style>
