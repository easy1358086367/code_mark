<template>
  <div class="sign">
    <form>
      <h3>sign</h3>
      <label for="phone">
        <span>登录账号</span>
        <el-input
          v-model="account"
          name="phone"
          class="input"
          placeholder="登录账号"
        ></el-input>
      </label>
      <label>
        <span>密码</span>
        <el-input
          placeholder="请输入密码"
          class="input"
          v-model="password"
          show-password
        ></el-input>
      </label>
      <label>
        <span>确认密码</span>
        <el-input
          placeholder="请再次输入密码"
          class="input"
          v-model="password2"
          show-password
        ></el-input>
      </label>
      <router-link to="/login" 
        ></router-link
      >
      <el-button type="primary" @click="sign" class="btn">注册</el-button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      account: "",
      password: "",
      password2: "",
      url: this.$store.state.url,
    };
  },

  methods: {
    sign() {
      let that = this
      if ( this.checking() ) {
        this.$http
        .post(`${this.url}/code/regist`, {
          account: this.account,
          password: this.password,
        })
        .then(function (response) {
          console.log(response);
          that.$router.push('/login')
        })
        .catch(function ( err ) {
            console.log(err);
        });
      }else {
          alert('两次密码不一致，请重新输入')
          this.password = this.password2 = this.account = ''
      }
    },
    // 检查密码是否一致
    checking () {
        return this.password == this.password2 ? true:false;
    }
  },
};
</script>

<style scoped>
.sign {
  /* margin-top: 80px; */
}
.sign form {
  width: 800px;
  margin: 0 auto;
}
.sign form h3 {
  text-align: center;
  width: 800px;
  margin-bottom: 50px;
}
.sign form label {
  display: block;
  margin-bottom: 30px;
}
.sign form span {
  display: inline-block;
  width: 100px;
  font-size: 24px;
  text-align-last: justify;
  text-align: justify;
}
.sign form .input {
  width: 650px;
  padding-left: 20px;
  font-size: 24px;
}
.sign form .btn {
  width: 200px;
  margin-left: 300px;
}
</style>