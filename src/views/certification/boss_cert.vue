<template>
  <div id="boss">
    <div class="content">
      <div class="title">需求方认证</div>
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
            <span>公司名称</span>
            <el-input placeholder="请输入内容" v-model="name" clearable>
            </el-input>
          </div>
          <div class="link block">
            <span>公司所在地</span>
            <br>
            <el-cascader
                v-model="address"
                :options="options"
                filterable
                
            ></el-cascader>
          </div>
          <div class="post">
            <span>个人职位</span>
            <el-input placeholder="请输入内容" v-model="post" clearable></el-input>
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
      name: "", 
      post: "", 
      fileList: [],
      address: [],
      options: [
        {
          value: "重庆",
          label: "重庆",
          children: [
            {
              value: "渝北",
              label: "渝北",
            },
            {
              value: "江北",
              label: "江北",
            },
            {
              value: "巴南",
              label: "巴南",
            },
          ],
        },
        {
          value: "四川",
          label: "四川",
          children: [
            {
              value: "成都",
              label: "成都",
              children: [
                {
                  value: "a区",
                  label: "a区",
                },
                {
                  value: "b区",
                  label: "b区",
                },
              ],
            },
            {
              value: "杭州",
              label: "杭州",
            }
          ],
        },
      ],
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
        name: this.name,
        address:this.address.join(''),
        post: this.post,
      };
      console.log(data);
      this.submitUpload();
      console.log('success')
    },
  },
};
</script>

<style scoped>
#boss .title{
  text-align: center;
  font-size: 3em;
  height: 50px;
  line-height: 50px;
  color: rgb(64, 158, 255);
  letter-spacing: 20px;
}
#boss .content{
  margin: -60px auto;
  margin-bottom: 0;
  width: 80vw;
}
#boss .content .writing{
    margin-top: 50px;
    width: 100%;
    display: flex;
    justify-content: space-around;
}
#boss .content .writing>div{
    width: 50%;
}
#boss .content .writing .el-cascader{
  width: 100%;
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