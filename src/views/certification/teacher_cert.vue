<template>
  <div id="teacher">
    <div class="content">
      <div class="step">
        <el-steps :active="active">
          <el-step title="作品 1" icon="el-icon-edit"></el-step>
          <el-step title="作品 2" icon="el-icon-edit"></el-step>
          <el-step title="作品 3" icon="el-icon-edit"></el-step>
          <el-step title="作品 4" icon="el-icon-edit"></el-step>
          <el-step title="作品 5" icon="el-icon-edit"></el-step>
        </el-steps>
      </div>
      <div class="writing">
        <!-- 上传图片 -->
        <div class="photos">
          <el-upload
            class="upload-demo"
            ref="upload"
            action="https://jsonplaceholder.typicode.com/posts/"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :file-list="fileList"
            :auto-upload="false"
            :data = {index:active}
          >
            <el-button slot="trigger" size="small" type="primary"
              >选取文件</el-button
            >
            <div slot="tip" class="el-upload__tip">
              只能上传jpg/png文件，且不超过5mb
            </div>
          </el-upload>
        </div>
        <!-- 文字描述 -->
        <div class="describe">
          <div class="name">
            <span>作品名称</span>
            <el-input placeholder="请输入内容" v-model="name" clearable>
            </el-input>
          </div>
          <div class="msg">
            <span>个人职责</span>
            <el-input
              type="textarea"
              :rows="10"
              placeholder="请输入内容"
              v-model="msg"
            >
            </el-input>
          </div>
          <div class="link">
            <span>作品链接</span>
            <el-input placeholder="请输入内容" v-model="link" clearable>
            </el-input>
          </div>
        </div>
      </div>
       <el-button type="primary" class="btn" @click="submit()">提交</el-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,//当前步数
      name: "",//项目名称
      msg: "",//项目中的个人职责
      link: "",//项目链接
      fileList:[]
    };
  },
  methods: {
    // 上传图片
    submitUpload() {
      this.$refs.upload.submit();
    },
    // 移除图片
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    // 查看图片
    handlePreview(file) {
      console.log(file);
    },
    // 提交信息
    submit() {
        let data = {
            index: this.active,
            name: this.name,
            msg: this.msg,
            link: this.link
        };
        console.log(data);
        this.name = this.msg = this.link = '';
        this.submitUpload();
        this.active ++;
    }
  },
};
</script>

<style scoped>
#teacher .content{
  margin: -60px auto;
  margin-bottom: 0;
  width: 80vw;
}
#teacher .content .writing{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
#teacher .content .writing>div{
    width: 50%;
}
.describe>div{
    margin-top: 30px;
}

.btn {
    display: block;
    width: 200px;
    margin: 50px auto;
    font-size: 1.5em;
}
</style>