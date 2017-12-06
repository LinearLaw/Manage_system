<template>
  <div class="sign">
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-input v-model="signupInfo.account" :placeholder="$t('login.accountplaceholder')"></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-input v-model="signupInfo.password" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-input v-model="signupInfo.repassword" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-button type="success" long @click="signup">{{ $t("login.signup_btn") }}</el-button>
      </el-col>
    </div>
  </div>

</template>

<script>
/**
 * @desc  注册页
 */
export default {
  name: 'login',
  components:{

  },
  data(){
    return{
      signupInfo:{
        account:"",
        password:"",
        repassword:""
      },
      verifySuccess:true
    }
  },
  methods:{
    signup(){
      if(!this.signupInfo.account){
        this.verifySuccess = false;
      }
      if(!this.signupInfo.password){
        this.verifySuccess = false;
      }
      if(!this.signupInfo.repassword){
        this.verifySuccess = false;
      }
      if(this.signupInfo.repassword != this.signupInfo.password){
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
.sign{position:relative;}
.input_position{text-align:center;position:absolute;left:50%;transform:translateX(-50%);}
.el-col{margin-bottom:15px;}
</style>
