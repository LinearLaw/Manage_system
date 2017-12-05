<template>
  <div class="login">
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-input v-model="account" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-input v-model="password" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="8">
        <el-button type="success" long @click="login">SUBMIT</el-button>
      </el-col>
    </div>
   
    
  </div>
</template>

<script>
export default {
  name: 'login',
  components:{

  },
  data(){
    return{
      account:"",
      password:""
    }
  },
  methods:{
    login(){
      
    }
  }
}
</script>
<style scroped>
.input_position{text-align:center;}
.el-col{margin-bottom:15px;}
</style>
