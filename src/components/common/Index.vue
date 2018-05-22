<template>
  <div class="indexpage">
      <!--1、header-->
      <el-row :gutter="20">
        <el-col :xs="12" :md="12" :span="6">
          <div class="index_box back_orange_a">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-star-on"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">店铺数量</p>
              <p class="count_content number_fam">{{count.shopCount}}</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :md="12" :span="6">
          <div class="index_box back_green_a">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-date"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">日程计划</p>
              <p class="count_content number_fam">{{count.plan}}</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :md="12" :span="6">
          <div class="index_box back_blue_a">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-bell"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">消息未读</p>
              <p class="count_content number_fam">{{count.unread}}</p>
            </div>
          </div>
        </el-col>
        <el-col :xs="12" :md="12" :span="6">
          <div class="index_box back_red_a">
            <div class="box_top_center index_box_icon">
              <span class="el-icon-goods"></span>
            </div>
            <div class="box_right_center">
              <p class="count_title">昨日成交</p>
              <p class="count_content number_fam">{{count.history}}</p>
            </div>
          </div>
        </el-col>
      </el-row>
      <!--2、content-->
      <el-row :gutter="10">
        <el-col :span="16">
          <div class="chart_content sell_count clearfix">
            <el-col :xs="24" :md="12" :lg="6" >
              <p>今日成交额</p>
              <p class="fa fa-rmb sell_count">{{sellCount.currentFlow.toLocaleString()}}</p>
            </el-col>
            <el-col :xs="24" :md="12" :lg="6" class="sell_do_lines">
              <p>近30天成交额</p>
              <p class="fa fa-rmb sell_count">{{sellCount.monthFlow.toLocaleString()}}</p>
            </el-col>
            <el-col :xs="24" :md="12" :lg="6" class="sell_do_lines">
              <p>近30天出货量</p>
              <p class="sell_count">{{sellCount.monthCount}}</p>
            </el-col>
            <el-col :xs="24" :md="12" :lg="6" class="sell_do_lines">
              <p>订单待处理</p>
              <p class="sell_count">{{sellCount.waitingCount}}</p>
            </el-col>
          </div>
        </el-col>
        <el-col :span="8">
          <div class="chart_content sell_count">

          </div>
        </el-col>
      </el-row>
      <!--3、content 2-->
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


  </div>
</template>

<script>
export default {
  name: 'headers',
  data () {
    return {
      sellCount:{
        currentFlow:56756346,
        monthFlow:325757478,
        monthCount:658745,
        waitingCount:345997,
      },
      count:{
        shopCount:5123,
        plan:325,
        unread:5516,
        history:5167
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
      color:#666;
    }
    .count_content{
      font-size:48px;
      letter-spacing: 3px;
      color:#333;
    }
  }
}
.chart_content{
  width:100%;
  min-height:100px;
  /*border:4px solid #e2e2e1;*/
  &.sell_count{
    /*height:100px;*/
    background:#F7F7F8;
    padding:20px;
    text-align:center;
    color:#666;
    .sell_do_lines{
      border-left:1px solid #E4E4E4;
    }
    .sell_content{
      font-size:14px;
    }
    .sell_count{
      color:#666;
      font-size:24px;
      margin-top:10px;
    }
  }
}
@media screen and (max-width:1200px){
  .chart_content.sell_count{
    .sell_do_lines{
      border:0;
      &:nth-child(2n){
        border-left:1px solid #E4E4E4;
      }
      &:nth-child(n+3){
        margin-top:20px;
      }
    }
  }
}
</style>
