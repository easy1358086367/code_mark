<template>
  <div id="header">
    <el-row>
      <el-col :span="9">
        <div class="grid-content bg-purple">
          <span class="logo">
            <router-link to="/">学子互联</router-link>
          </span>
          <router-link to="/project_publish">发布项目</router-link>
        </div>
      </el-col>

      <el-col :span="3" class="right">
        <div class="grid-content bg-purple flex">
          <router-link class="item" to="/login">登录</router-link>
          <router-link class="item" to="/sign">注册</router-link>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#header {
  background-color: rgb(167, 216, 187);
  position: absolute;
  top: 0;
  height: 80px;
  line-height: 80px;
}
a{
    text-decoration: none;
    color: #fefffe;
    font-family: monospace;
    font-size: 24px;
    margin-right: 20px;
}

.logo a {
    font-size: 36px;
    margin-right: 20px;
    margin-left: 10px;
}


.right {
  float: right;
}
.right .flex {
  display: flex;
  flex-direction: row-reverse;
}
.right .item{
    margin-right: 20px;
}
</style>