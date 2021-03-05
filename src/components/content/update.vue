<template>
  <div id="update" :class="{ hidden: !title }" @click="close">
    <div class="box">
      <h3>{{ title }}</h3>
      <form>
        <div v-for="(value, prop) in data" :key="prop">
          <label :for="prop">{{ value }}</label>
          <br />
          <el-input
            :type="hidden ? 'password' : 'text'"
            :placeholder="value"
            v-model="formData[prop]"
            :name="prop"
            clearable
          >
          </el-input>
        </div>
        <el-button type="primary" class="btn" @click="commit">提交</el-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "data", "url", "account", "hidden"],
  data() {
    return {
      formData: {
        msg1: "",
        msg2: "",
      },
      type: "phone",
    };
  },
  methods: {
    close(e) {
      if (e.target == this.$el) {
        this.$emit("updateTitle");
      }
    },
    commit() {
      // 判断是否是密码
      if (this.title.indexOf("密码") != -1) {
        // 判断密码是否不同
        if (this.formData.msg1 != this.formData.msg2) {
          alert("密码不相同");
          return false;
        }
        this.type = "password";
      }
      let data = {
        account: this.account,
      };
      data[this.type] = this.formData.msg1;
      this.$http
        .post(this.url, data)
        .then(() => {
          alert("修改成功");
          this.$store.commit( 'setUser',{
            prop: this.type,
            value:this.formData.msg1
          } )
          this.$emit("updateTitle");
        })
        .catch(function () {
          alert("修改失败，请重试");
        });
    },
  },
};
</script>

<style scoped>
#update {
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  box-sizing: border-box;
  background: rgba(0, 0, 0, 0.6);
  z-index: 100;
}

.box {
  width: 450px;
  min-height: 500px;
  margin: 0 auto;
  margin-top: calc(50vh - 250px);
  background-color: #fff;
  color: #000;
  padding: 10px 30px;
  box-sizing: border-box;
}
.box h3 {
  font-size: 30px;
  text-align: center;
  margin-top: 20px;
}
.box form > div {
  margin: 30px 0;
}
.box form label {
  display: inline-block;
  margin: 20px 0;
}
.box form .btn {
  width: 80%;
  display: block;
  margin: 0 auto;
}
.hidden {
  display: none;
}
</style>