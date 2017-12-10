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
    <span class="show_signup" @click="showPop.switchSignup=true;">Show Signup pop</span>
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
}
.show_signup{cursor:pointer;color:#333;}
.show_signup:hover{
  border-bottom:1px solid #333;
}
.el-col{margin-bottom:15px;display:inline-block;}
</style>
