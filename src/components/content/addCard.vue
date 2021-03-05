<template>
  <div id="add-card" @click="close">
    <div class="box">
      <h3>添加银行卡</h3>
      <form>
        <div class="card-name">
          <label for="cardName">请输入银行卡名</label>
          <el-input placeholder="请输入内容" v-model="cardName" clearable>
          </el-input>
        </div>
        <div class="card-number">
          <label for="cardNum">请输入银行卡卡号</label>
          <el-input placeholder="请输入内容" v-model="cardNum" clearable>
          </el-input>
        </div>
        <el-button type="primary" class="btn" @click="commit">确认</el-button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      url: this.$store.state.url + "/code/addCard",
      account: this.$store.state.user.account,
      cardName: "",
      cardNum: "",
    };
  },
  methods: {
    close(e) {
      if (e.target == this.$el) {
        this.$emit("hidden");
      }
    },
    commit() {
      this.$http
        .post(this.url, {
          account: this.account,
          cardName: this.cardName,
          cardNum: this.cardNum,
        })
        .then((response) => {
          let result = response.data;
          console.log(result)
          if (result.status) {
            alert("添加成功");
            this.$store.commit('setUser', {
              prop: 'cardName',
              value: this.cardName
            });
            this.$store.commit('setUser', {
              prop: 'cardNum',
              value: this.cardNum
            })
            this.cardName = this.cardNum = '';
            this.$emit("hidden");
          } else {
            alert("添加失败");
          }
        });
    },
  },
};
</script>

<style scoped>
#add-card {
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
</style>