<template>
  <div class="login">
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-input v-model="loginInfo.account" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-input v-model="loginInfo.password" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-button type="success" long @click="login">{{ $t("login.login_btn") }}</el-button>
      </el-col>
    </div>
    <span @click="showPop.switchSignup=true;">Show Signup pop</span>
    <Signup v-if="showPop.switchSignup"></Signup>
  </div>

</template>

<script>
/**
 * @desc  登录页 & 注册页
 */
import Signup from "./SignUp.vue"
export default {
  name: 'login',
  components:{
    Signup
  },
  data(){
    return{
      loginInfo:{
        account:"",
        password:""
      },
      showPop:{
        switchSignup:false  //signup pop
      },
      verifySuccess:true,   //The content entered is legal
    }
  },
  methods:{
    login(){
      if(!this.loginInfo.account){
        this.verifySuccess = false;
      }
      if(!this.loginInfo.password){
        this.verifySuccess = false;
      }
      if(this.verifySuccess == false){
        return;
      }
    }
  }
}
</script>
<style scroped>
.login{position:relative;text-align:center;}
/*.input_position{text-align:center;position:absolute;top:50%;left:50%;transform:translateX(-50%);}*/
.el-col{margin-bottom:15px;display:inline-block;}
</style>
