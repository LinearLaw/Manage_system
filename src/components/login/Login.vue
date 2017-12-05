<template>
  <div class="login">
    <div class="input_position clearfix">
      <el-col :span="4">
        <el-input v-model="account" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="4">
        <el-input v-model="password" placeholder="Enter something..."></el-input>
      </el-col>
    </div>
    <div class="input_position clearfix">
      <el-col :span="4">
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
.input_position{padding:20px;}
</style>
