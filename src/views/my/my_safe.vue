<template>
  <div id="safe">
    <div class="money">
      <div class="item">
        <div class="main">
          <h5 class="title">账户余额</h5>
          <span class="el-icon-wallet"></span>
          <p class="amount">{{ user.balance }}</p>
        </div>
        <div class="action">
          <el-button type="primary" plain @click="refill">充值</el-button>
          <el-button type="primary" plain @click="cashing">提现</el-button>
        </div>
      </div>
      <div class="item">
        <div class="main">
          <h5 class="title">
            {{ user.cardName ? user.cardName : "绑定银行卡" }}
          </h5>
          <span class="el-icon-bank-card"></span>
          <p class="amount">{{ strReplace(user.cardNum, 4, 15) }}</p>
        </div>
        <div class="action">
          <el-button type="primary" plain @click="card">{{
            user.cardName ? "移除" : "添加"
          }}</el-button>
        </div>
      </div>
    </div>
    <div class="other">
      <ul>
        <li class="name">
          <el-col :span="3" class="icon">
            <span class="el-icon-info"></span>
          </el-col>
          <el-col :span="16" class="details">
            <h6>实名认证</h6>
            <p>{{ strReplace(user.name, 2, user.name.length) }}</p>
          </el-col>
          <el-col :span="5" class="name-item">
            <el-button v-if="!user.name" type="primary">点击认证</el-button>
            <el-button
              v-else
              type="success"
              icon="el-icon-check"
              circle
            ></el-button>
          </el-col>
        </li>
        <li class="phone">
          <el-col :span="3" class="icon">
            <span class="el-icon-info"></span>
          </el-col>
          <el-col :span="16" class="details">
            <h6>绑定手机</h6>
            <p>{{ strReplace(user.phone, 3, 8) }}</p>
          </el-col>
          <el-col :span="5" class="phone-item">
            <el-button type="primary" @click="changeContent('phone')"
              >点击更改</el-button
            >
          </el-col>
        </li>
        <li class="password">
          <el-col :span="3" class="icon">
            <span class="el-icon-info"></span>
          </el-col>
          <el-col :span="16" class="details">
            <h6>设置密码</h6>
            <p>{{ "已设置" }}</p>
          </el-col>
          <el-col :span="5" class="password-item">
            <el-button type="primary" @click="changeContent('password')"
              >点击更改</el-button
            >
          </el-col>
        </li>

        <li class="student">
          <el-col :span="3" class="icon">
            <span class="el-icon-info"></span>
          </el-col>
          <el-col :span="16" class="details">
            <h6>学生能力认证</h6>
            <p>{{ status == "学生" ? "已认证" : "未认证" }}</p>
          </el-col>
          <el-col :span="5" class="password-item">
            <el-button v-if="status" type="primary" disabled
              >不可认证</el-button
            >
            <router-link v-else class="link" to="/boss_cert">
              <el-button type="primary">点击认证</el-button>
            </router-link>
          </el-col>
        </li>
        <li class="teacher">
          <el-col :span="3" class="icon">
            <span class="el-icon-info"></span>
          </el-col>
          <el-col :span="16" class="details">
            <h6>指导教师认证</h6>
            <p>{{ status == "教师" ? "已认证" : "未认证" }}</p>
          </el-col>
          <el-col :span="5" class="password-item">
            <el-button v-if="status" type="primary" disabled
              >不可认证</el-button
            >
            <router-link v-else class="link" to="/boss_cert">
              <el-button type="primary">点击认证</el-button>
            </router-link>
          </el-col>
        </li>
        <li class="boss">
          <el-col :span="3" class="icon">
            <span class="el-icon-info"></span>
          </el-col>
          <el-col :span="16" class="details">
            <h6>需求方认证</h6>
            <p>{{ status == "boss" ? "已认证" : "未认证" }}</p>
          </el-col>
          <el-col :span="5" class="password-item">
            <el-button v-if="status" type="primary" disabled
              >不可认证</el-button
            >
            <router-link v-else class="link" to="/boss_cert">
              <el-button type="primary">点击认证</el-button>
            </router-link>
          </el-col>
        </li>
      </ul>
    </div>
    <div class="update">
      <update
        :title="currUpdate.title"
        :data="currUpdate.data"
        :url="currUpdate.url"
        :account="user.account"
        :hidden="currUpdate.hidden"
        @updateTitle="clearContent"
      />
    </div>
    <add-card :class="{ hidden: addHidden }" @hidden="changeAddHidden" />
  </div>
</template>

<script>
import update from "components/content/update"; //更改手机、密码
import addCard from "components/content/addCard"; //添加银行卡
export default {
  components: {
    update,
    addCard,
  },
  data() {
    return {
      user: this.$store.state.user,
      type: this.$store.state.user.type,
      url: this.$store.state.url,
      updateList: {
        phone: {
          url: this.$store.state.url + "/code/changePhone",
          title: "更改手机",
          data: {
            msg1: "请输入新手机号",
          },
        },
        password: {
          url: this.$store.state.url + "/code/changePass",
          title: "更改密码",
          data: {
            msg1: "请输入新密码",
            msg2: "再次输入新密码",
          },
          hidden: true,
        },
      },
      currUpdate: {},
      addHidden: true,
    };
  },
  methods: {
    // 字符串替换*
    strReplace(oldStr, start, end) {
      if (!oldStr) {
        return "";
      }
      let str = oldStr.slice(start, end);
      let result = oldStr.replace(str, "*".repeat(end - start));
      return result;
    },
    changeContent(text) {
      this.currUpdate = this.updateList[text];
    },
    clearContent() {
      this.currUpdate = {};
    },
    // 充值
    refill() {
      this.$prompt("请输入充值金额", "充值", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[0-9]*[1-9][0-9]*$/,
        inputErrorMessage: "格式有误",
      }).then(({ value }) => {
        let url = this.url + "/code/increaseBalance";
        this.$http
          .post(url, {
            account: this.user.account,
            balance: value,
          })
          .then((response) => {
            let result = response.data;
            if (result.status) {
              this.$message({
                type: "success",
                message: "充值成功，充值金额： " + value,
              });
              this.$store.commit("setUser", {
                prop: "balance",
                value: this.user.balance + parseInt(value),
              });
            }
          })
          .catch((response) => {
            console.log(response);
          });
      });
    },
    // 提现
    cashing () {
      this.$prompt("请输入提现金额", "提现", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        inputPattern: /^[0-9]*[1-9][0-9]*$/,
        inputErrorMessage: "格式有误",
      }).then(({ value }) => {
        let url = this.url + "/code/decreaseBalance";
        this.$http
          .post(url, {
            account: this.user.account,
            balance: value,
          })
          .then((response) => {
            let result = response.data;
            if (result.status) {
              this.$message({
                type: "success",
                message: "提现成功，提现金额： " + value,
              });
              this.$store.commit("setUser", {
                prop: "balance",
                value: this.user.balance - parseInt(value),
              });
            }
          })
          .catch((response) => {
            console.log(response);
          });
      });
    },
    // 银行卡
    card() {
      if (this.user.cardName) {
        // 移除
        this.removeCard();
      } else {
        // 添加
        this.changeAddHidden();
      }
    },
    // 移除银行卡
    removeCard() {
      this.$confirm("此操作将移除该银行卡, 是否继续?", "移除银行卡", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning",
      })
        .then(() => {
          let url = this.url + "/code/removeCard";
          this.$http
            .post(url, {
              account: this.user.account,
            })
            .then((response) => {
              let result = response.data;
              if (result.status) {
                this.$store.commit('setUser', {
                  prop: 'cardName',
                  value: ''
                });
                this.$store.commit('setUser', {
                  prop: 'cardNum',
                  value: ''
                });
                this.$message({
                  type: "success",
                  message: '解绑成功',
                });
              }
            });
        })
    },
    changeAddHidden() {
      this.addHidden = !this.addHidden;
    },
  },
  computed: {
    status: function () {
      switch (this.type) {
        case 0:
          return "学生";
        case 1:
          return "教师";
        case 2:
          return "需求方";
        default:
          return "";
      }
    },
  },
};
</script>

<style scoped>
.money {
  width: 100%;
  display: flex;
}
.money > div {
  width: 50%;
  min-width: 400px;
  height: 200px;
  text-align: center;
  padding-top: 50px;
  border: 2px solid #fff;
  box-sizing: border-box;
  position: relative;
}
.money .item .action {
  display: flex;
  align-content: center;
  vertical-align: middle;
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0%;
  left: 0;
}
.money .item .action:hover {
  background-color: rgba(236, 245, 255, 0.8);
}
.money .item .action button {
  opacity: 0;
  display: inline-block;
  /* color: rgb(64, 158, 255); */
  width: 50%;
  height: 100%;
  font-size: 2em;
  letter-spacing: 1.5em;
  cursor: pointer;
  line-height: 200px;
  border: none;
  background: none;
}
.money .item .action:hover button {
  opacity: 1;
}
.money .item .action button:hover {
  /* opacity: 1; */
  background-color: rgb(64, 158, 255);
  color: rgb(255, 255, 255);
}

.other {
  margin-top: 50px;
}
.other ul {
  list-style-type: none;
}
.other ul li {
  text-align: center;
  display: flex;
  margin-top: 5px;
  line-height: 80px;
  height: 80px;
  background-color: #fff;
  border-radius: 10px 10px 0 0;
}
.other ul li .icon {
  font-size: 2em;
}
.other ul li .details {
  text-align: left;
  line-height: 40px;
}

.hidden {
  display: none;
}
</style>