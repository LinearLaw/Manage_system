<template>
  <div class="sign clearfix" v-loading="loading">
    <el-col class="signup_main"> 
      <div class="tab_title">{{ $t("login.signup_btn") }}</div>
      <div class="input_position clearfix">
        <el-input v-model="signupInfo.account" :class="{'el-input_inner_error':!verifySuccess.account}" :placeholder="$t('login.accountplaceholder')"></el-input>
      </div>
      <div class="input_position clearfix">
        <div class="el-input" :class="{'el-input_inner_error':!verifySuccess.pwd}">
          <input placeholder="请输入密码" type="password" rows="2" class="el-input__inner" v-model="signupInfo.password" @focus="initError" />
        </div>
      </div>
      <div class="input_position clearfix">
        <div class="el-input" :class="{'el-input_inner_error':!verifySuccess.pwdAgain}">
          <input placeholder="请再次输入密码" type="password" rows="2" class="el-input__inner" v-model="signupInfo.repassword" @focus="initError" />
        </div>
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
      verifySuccess:{
        account:true,
        pwd:true,
        pwdAgain:true
      },
      loading:false
    }
  },
  methods:{
    closeSignup(){
      this.$emit("closeSignup");
    },
    initError(){
      this.verifySuccess.account = true;
      this.verifySuccess.pwd = true;
      this.verifySuccess.pwdAgain = true;
    },
    signup(){
      if(!this.signupInfo.account){
        this.verifySuccess.account = false;
        this.$message({
          message: '请输入账号',
          type: 'warning'
        });
        return;
      }
      if(!this.signupInfo.password){
        this.verifySuccess.pwd = false;
        this.$message({
          message: '请输入密码',
          type: 'warning'
        });
        return;
      }
      if(!this.signupInfo.repassword){
        this.verifySuccess.pwdAgain = false;
        this.$message({
          message: '请再次输入密码',
          type: 'warning'
        });
        return;
      }
      if(this.signupInfo.repassword != this.signupInfo.password){
        this.verifySuccess.pwd = false;
        this.verifySuccess.pwdAgain = false;
        this.$message({
          message: '密码不一致',
          type: 'warning'
        });
        return;
      }
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
        this.$message({
          message: '注册成功！',
          type: 'success'
        });
        this.$emit("closeSignup");
      },1000)
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
  height:auto;
  background:rgba(0,0,0,0.4);
}
.signup_main{
  border-radius:5px;
  text-align:center;
  background:#fff;
}
.tab_title{
  padding:10px;
  font-size:16px;
  border-bottom:1px solid #e2e2e1;
}
.input_position{
  text-align:center;
  padding:10px 20px;
  width:100%;
  max-height:200px;
}
.input_position:last-child{
  margin-bottom:0px;
}
.el-col{margin-bottom:15px;}
</style>
