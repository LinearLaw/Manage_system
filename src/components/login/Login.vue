<template>
  <div class="login">
    <el-col :span="4"></el-col>
    <el-col :span="16">
      <h1 class="input_position txl">{{ $t("login.login_btn") }}</h1>
      <div class="input_position clearfix">
          <el-input v-model="loginInfo.account" placeholder="Enter something..."></el-input>
      </div>
      <div class="input_position clearfix">
          <el-input v-model="loginInfo.password" placeholder="Enter something..."></el-input>
      </div>
      <div class="input_position txl">
          <el-button class="login_btn" type="success" long @click="login">{{ $t("login.login_btn") }}</el-button>
          <span class="show_signup" @click="showPop.switchSignup=true;">Show Signup pop</span>
      </div>
    </el-col>
    <el-col :span="4"></el-col>
    <Signup v-if="showPop.switchSignup" @closeSignup="closeSignup"></Signup>
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
    closeSignup(){
      this.showPop.switchSignup = false;
    },
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
.login{
  position:relative;
  text-align:center;
  width:100%;
  height:100%;
  padding:50px;
}
.show_signup{cursor:pointer;color:#777;margin-left:10px;}
.show_signup:hover{
  border-bottom:1px solid #777;
}
.input_position{
  margin-bottom:10px;
}
.input_position:last-child{
  margin:0;
}
</style>
