<template>
  <div class="pd_a_15" id="shop_edit">
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ name: 'Index' }">{{ $t('tabs.index')}}</el-breadcrumb-item>
      <el-breadcrumb-item>{{ $t('tabs.shopmain_edit')}}</el-breadcrumb-item>
    </el-breadcrumb>
    <div class="pd_a_15 mg_t_20">
      <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="店铺logo">
          <el-upload
            class="avatar-uploader"
            action="https://jsonplaceholder.typicode.com/posts/"
            :show-file-list="false"
            :on-success="handleAvatarSuccess"
            :before-upload="beforeAvatarUpload">
            <img v-if="form.shopLogo" :src="form.shopLogo" class="avatar">
            <i v-else class="el-icon-plus avatar-uploader-icon"></i>
          </el-upload>
        </el-form-item>
        <el-form-item label="店铺名称">
          <el-input v-model="form.shopname"></el-input>
        </el-form-item>

        <el-form-item label="店铺类别">
          <el-select v-model="form.shoptype" placeholder="请选择店铺类别">
            <el-option label="个人店铺" value="0"></el-option>
            <el-option label="企业店铺" value="1"></el-option>
          </el-select>
        </el-form-item>
        
        <el-form-item label="店铺详情">
          <el-input type="textarea" v-model="form.shopDetail"></el-input>
        </el-form-item>
        <el-form-item class="agree_text">
          <el-checkbox v-model="form.agreement"></el-checkbox>
          <span>我声明，此页面内容由本店铺自行填写和发布，内容真实有效，如有相关法律法规，</br>平台协议及平台规则之规定冲突的，以法律法规、平台协议及平台规则规定为准            
          </span>
        </el-form-item>

        <el-form-item>
          <el-button type="primary" @click="onSubmit">保存</el-button>
          <el-button>取消</el-button>
        </el-form-item>
      </el-form>
    </div>

  </div>
</template>

<script>
export default {
  name: 'ShopInfo',
  data () {
    return {
        form: {
          shopname: '',
          shoptype: '',
          shopDetail: '',
          agreement:true,
          shopLogo:""
        }
    }
  },
  methods: {
    /**
     * @desc 上传图片
     */
    handleAvatarSuccess(res,file){
      this.form.shopLogo = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(){
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;
      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    },
    /**
     * @desc 保存数据
     */
    onSubmit() {
      let sendUrl = this.CONFIG.user_service.login;
      let sendData = this.form
      this.$http.post(sendUrl,sendData).then((res)=>{
        this.loading = false;
        if(res.data.status == 1){
          console.log(res);
          this.$message({
            message: '保存成功！',
            type: 'success'
          });
          console.log(this.$router.push);
          this.$router.push({"name":"ShopInfo"});
          return;
        }
        if(res.data.status == 6){
          this.$message({
            message: '错误',
            type: 'warning'
          });
          return;
        }
        if(res.data.status == 7){
          this.$message({
            message: '错误',
            type: 'warning'
          });
          return;
        }
      },(err)=>{
        console.log(err);

      })
    }
  }
}
</script>
<style scoped>
  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 178px;
    height: 178px;
    line-height: 178px;
    text-align: center;
  }
  .avatar {
    width: 178px;
    height: 178px;
    display: block;
  }

</style>
