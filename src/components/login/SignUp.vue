<template>
  <div class="sign">
    <el-col class="signup_main"> 
      <div class="tab_title">{{ $t("login.signup_btn") }}</div>
      <div class="input_position clearfix">
        <el-input v-model="signupInfo.account" :placeholder="$t('login.accountplaceholder')"></el-input>
      </div>
      <div class="input_position clearfix">
        <el-input v-model="signupInfo.password" placeholder="Enter something..."></el-input>
      </div>
      <div class="input_position clearfix">
        <el-input v-model="signupInfo.repassword" placeholder="Enter something..."></el-input>
      </div>
      <div class="input_position clearfix">
        <el-button type="success" long @click="signup">{{ $t("login.signup_btn") }}</el-button>
        <el-button long @click="closeSignup">{{ $t("login.comeback") }}</el-button>
      </div>
    </el-col>  
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
    closeSignup(){
      this.$emit("closeSignup");
    },
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
.sign{
  position:absolute;
  top:0;
  left:0;
  width:100%;
  height:100%;
  background:rgba(0,0,0,0.4);
}
.signup_main{
  text-align:center;
  background:#fff;
}
.tab_title{
  padding:10px;
  border-bottom:1px solid #e2e2e1;
}
.input_position{
  text-align:center;
  padding:10px;
  width:100%;
  max-height:200px;
}
.input_position:last-child{
  margin-bottom:0px;
}
.el-col{margin-bottom:15px;}
</style>
