<template>
  <div class="login">
    <el-col :span="9"></el-col>
    <el-col :span="6"  v-loading="loading" class="login_main">
      <h2 class="mg_b_20 txc">{{ $t("login.login_btn") }}</h2>
      <div class="mg_b_20 clearfix">
          <el-input :class="{'el-input_inner_error':!verifySuccess.account}"
             v-model="loginInfo.account" placeholder="Account" @focus="initError"></el-input>
      </div>
      <div class="mg_b_20 clearfix">
        <div class="el-input" :class="{'el-input_inner_error':!verifySuccess.pwd}">
          <input placeholder="Password" type="password" rows="2" class="el-input__inner" v-model="loginInfo.password" @focus="initError" />
        </div>
      </div>
      <div class="mg_b_20 txc">
          <el-col :span="24" class="mg_b_10">
            <el-button class="login_btn txc" type="success" long
                 @click="login">{{ $t("login.login_btn") }}</el-button>
          </el-col>
          <span class="show_signup" @click="showPop.switchSignup=true;"
              >{{ $t("login.signup_btn")}}</span>
      </div>
    </el-col>
    <el-col :span="9"></el-col>
    <el-dialog width="25%"
      :visible.sync="showPop.switchSignup">
      <Signup v-if="showPop.switchSignup" @closeSignup="closeSignup"></Signup>
    </el-dialog>
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
      verifySuccess:{
        account:true,
        pwd:true
      },   //The content entered is legal
      loading:false
    }
  },
  methods:{
    closeSignup(){
      this.showPop.switchSignup = false;
    },
    initError(){
      this.verifySuccess.account = true;
      this.verifySuccess.pwd = true;
    },
    login(){
      if(!this.loginInfo.account){
        this.verifySuccess.account = false;
        this.$message({
          message: '请输入账号',
          type: 'warning'
        });
        return;
      }
      if(!this.loginInfo.password){
        this.verifySuccess.pwd = false;
        this.$message({
          message: '请输入密码',
          type: 'warning'
        });
        return;
      }
      this.loading = true;
      let sendUrl = this.CONFIG.user_service.login;
      let sendData = {
        "username":this.loginInfo.account,
        "pwd" : this.loginInfo.password
      }
      // let headers = {"Content-Type" : 'application/x-www-form-urlencoded;charset=utf-8'};
      this.$http.post(sendUrl,sendData).then((res)=>{
        this.loading = false;
        if(res.data.status == 1){
          console.log(res);
          this.$message({
            message: '登录成功！',
            type: 'success'
          });
          this.$router.push({"name":"Index"});
          return;
        }
        if(res.data.status == 6){
          this.$message({
            message: '用户不存在',
            type: 'warning'
          });
          return;
        }
        //用户名或密码非法
        this.$message({
          message: '用户名或密码错误',
          type: 'warning'
        });
        return;
      },(err)=>{
        console.log(err);
        this.loading = false;
        this.$message({
          message: 'Server Error!请稍后再试！',
          type: 'warning'
        });
      })
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
.login_main{border:1px solid #e2e2e1;border-radius:5px;padding:15px;}
.show_signup{cursor:pointer;color:#777;}
.show_signup:hover{
  border-bottom:1px solid #777;
}
.login_btn{
  width:100%;
}
</style>
