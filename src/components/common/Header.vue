<template>
  <div class="header container">
    <router-link :to="{'name':'Index'}">
      <span class="fa fa-home box_top_center cs_point"></span>
    </router-link>

    <i class="fa fa-power-off  box_top_center cs_point" aria-hidden="true"  @click="logoutPop = true"></i>
    <!--退出登录弹框 start -->
    <el-dialog
      title="Notice"
      :visible.sync="logoutPop"
      width="30%" :modal=false
      center>
      <span>确认退出登录？</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="logoutPop = false">取 消</el-button>
        <el-button type="primary" @click="logout">确 定</el-button>
      </span>
    </el-dialog>
    <!--退出登录弹框 end -->

  </div>
</template>

<script>
export default {
  name: 'headers',
  data () { 
    return {
      logoutPop:false
    }
  },
  methods:{
    logout(){
      this.logoutPop = false;
      this.GLOBAL.cookie.del("members_id");
      this.$router.push({"name":"Login"});
      this.$message({
          message: '成功退出登录！',
          type: 'success'
        });
    }
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
.fa-home{
    color:#fff;
    font-size:28px;
    &:hover{
      color:#409EFF;
    }
}
.fa-power-off{
    color:#fff;
    font-size:28px;
    right:20px;
    &:hover{
      color:#409EFF;
    }
}
</style>
