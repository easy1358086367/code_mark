<template>
  <div class="login">
    <el-row type="flex" class="row-bg" justify="center">
      <el-col :span="10">
        <div class="grid-content bg-purple">
          <img src="~assets/images/login.png" alt="" />
        </div>
      </el-col>
      <el-col :span="10">
        <div class="grid-content bg-purple-light form">
          <h3>登录</h3>
          <form>
            <label for="account">
              <span>账号</span>
              <el-input v-model="account" class="input"></el-input>
            </label>
            <label for="password">
              <span>密码</span>
              <el-input
                class="input"
                v-model="password"
                show-password
              ></el-input>
            </label>
            <router-link class="link" to="/my"></router-link
            ><el-button type="primary" @click="login">登 录</el-button>
            <router-link class="link" to="/login"></router-link
            ><el-button type="info">忘记密码</el-button>
          </form>
        </div></el-col
      >
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.state.url,
      account: "",
      password: "",
    };
  },
  methods: {
    login() {
      let that = this;
      this.$http
        .post(`${this.url}/code/login`, {
          account: that.account,
          password: this.password,
        })
        .then(function (response) {
          let result = response.data
          if ( result.msg == '登陆成功' ) {
            that.$store.commit('setUserAll',result.data[0]);
           that.$router.push('/my')
          }else {
            alert('账户或者密码输入有误，请重试')
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      
    },
    checking () {
      if ( this.account && this.password ) {
        return true;
      }else {
        alert('账户或者密码不可为空,请重新输入');
        this.account = this.password = '';
        return false;
      }
    }
  },
};
</script>

<style scoped>
.login {
  /* margin-top: 80px;
  padding-top: 100px; */
}
.login .form {
  margin-left: 20px;
  /* border: 1px solid rgb(194, 208, 202); */
  padding-bottom: 100px;
}
.login .form h3,
.login .form form {
  width: 400px;
  margin: 10px auto;
  text-align: center;
}
.login .form form label {
  margin-bottom: 30px;
  display: block;
}
img {
  display: block;
  margin: 0 auto;
}
.login .form form label span {
  color: #fff;
  display: inline-block;
  font-size: 20px;
  text-align-last: justify;
  text-align: justify;
  padding: 0 20px;
  box-sizing: border-box;
  margin-right: 10px;
  height: 40px;
  line-height: 40px;
  width: 100px;
  background-color: rgb(44, 98, 74);
}
.login .form form label .input {
  display: inline-block;
  width: 280px;
  height: 40px;
  line-height: 40px;
  padding-left: 10px;
  box-sizing: border-box;
}
.login .form form button {
  display: inline-block;
  margin-right: 10px;
}
</style>