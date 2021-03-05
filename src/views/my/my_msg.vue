<template>
  <div id="msg" class="clearfix">
    <div class="main">
      <h3 class="title">基本信息</h3>
      <div class="main-item">
        <span class="key">账户</span>
        <span class="value">：{{ user.account }}</span>
      </div>
       <div class="main-item">
        <span class="key">真实姓名</span>
        <span class="value">：{{ user.name ? user.name:'未实名' }}</span>
      </div>
      <div class="main-item">
        <span class="key">性别</span>
        <span class="value">：{{ user.sex!='女' ? '男':'女' }}</span>
      </div>
      <div class="main-item">
        <span class="key">出生年</span>
        <span class="value">：{{ user.birth ? user.birth:'未实名' }}</span>
      </div>
      <div class="main-item">
        <span class="key">身份证号</span>
        <span class="value">：{{ user.card ? user.card:'未实名' }}</span>
      </div>
      <div class="main-item">
        <span class="key">电话</span>
        <span class="value">：{{ user.phone ? user.phone:'未设置' }}</span>
      </div>
      <div class="main-item">
        <span class="key">用户类型</span>
        <span class="value">：{{ user.type ? user.type:'游客' }}</span>
      </div>
      <div class="main-item">
        <span class="key">技能</span>
        <span class="value">：{{ user.skill.length ? user.skill:'空' }}</span>
      </div>
    </div>
      <news :news='user.news' />
  </div>
</template>

<script>
import news from 'components/content/news';
export default {
  components :{
    news
  },
  data() {
    return {
      user:this.$store.state.user,
      
      
    };
  },
  methods: {
    handleChange() {},
  },
};
</script>

<style scoped>
/* 清除浮动 */
.clearfix::after {
  clear: both;
  content: "";
  display: block;
}

.main,
.id,
.running {
  width: 500px;
  float: left;
  height: 100%;
  border-right: 1px dashed;
}
.main .title {
  letter-spacing: 1.1rem;
  color: rgb(102, 177, 255);
}
.main .main-item {
  width: 500px;
  height: 50px;
  line-height: 50px;
}
.main .main-item span {
  display: inline-block;
}
.main .main-item .key {
  width: 80px;
  text-align-last: justify;
  text-align: justify;
}
.main .main-item .value {
  width: 400px;
  padding-left: 20px;
}
.main .edit {
  margin: 5px 20px
}



.id {
  padding-top: 100px;
}
.id .link {
  text-decoration: none;
}
.id button {
  display: block;
  width: 200px;
  margin: 30px auto;
}

.running {
  padding: 20px 50px;
  border: 0;
}
.running .title {
  font-size: 30px;
  margin-bottom: 20px;
  color: rgb(102, 177, 255);
}
.running .content div {
  padding-left: 10px;
  font-size: 18px;
  color: #909399;
}
.running .content .title-min {
  font-size: 24px;
  color: #303133;
}
.running .content .to-details {
  margin: 5px 30px;
}
</style>