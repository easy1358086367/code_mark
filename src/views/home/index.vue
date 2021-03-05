<template>
  <div id="home">
    <div class="swiper" >
      <el-carousel indicator-position="outside" height="500px">
        <el-carousel-item v-for="item in swiper" :key="item">
          <img :src="item" alt="" width="100%" height="500px" />
        </el-carousel-item>
      </el-carousel>
    </div>
    <div class="more">
      <el-row :gutter="1" class="content">
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            <p class="number">1,802,332</p>
            <p>累计总数量</p>
          </div>
        </el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            <p class="number">3,657</p>
            <p>项目总量</p>
          </div>
        </el-col>
        <el-col :span="8"
          ><div class="grid-content bg-purple">
            <p class="number">5,632</p>
            <p>注册用户</p>
          </div>
        </el-col>
      </el-row>
      <el-divider></el-divider>
      <div class="content" style="width:60%;min-width:1000px;">
        <h3>订单交易与服务流程</h3>
        <div class="item">
          <div class="left">
            <h5>发布需求</h5>
            <p>项目人员匹配速度慢</p>
            <p>在这里，即时匹配空闲人员</p>
            <p>覆盖所有互联网产品</p>
          </div>
          <div class="right">
            <img :src="images[0]" alt="" width="150px">
          </div>
        </div>

        <el-divider></el-divider>
        <div class="item">
          <div class="left">
            <img :src="images[1]" alt="">
            <img :src="images[2]" alt="">
            <img :src="images[3]" alt="">
          </div>
          <div class="right">
            <h5>确认合作</h5>
            <p>海量开发者，技能多样化</p>
            <p>学生 + 老师，合作实现双赢</p>
          </div>
        </div>

        <el-divider></el-divider>
        <div class="item">
          <div class="left">
            <h5>资金托管</h5>
            <p>项目款由平台代收，安全有保障</p>
            <p></p>
          </div>
          <div class="right ">
            <img style="margin-right:-70px;opacity:1;" :src="images[4]" alt="">
            <img style="width:120px" :src="images[5]" alt="">
          </div>
        </div>
      </div>

    </div>
    <div class="conment">
      <h3>看看他们怎么说</h3>
      <div class="content">
        <p class="item">
          已在学子互联完成了6个项目，开发者的素质和总体产出都不错，通过学子互联发包的方式也提高了开发效率，降低了研发的风险。
        </p>
        <p class="item">
          远程开发是我们公司的主要工作方式，也是未来的趋势。学子互联对于使用研发开源技术的我们帮助很大。
        </p>
        <p class="item">
          一直以来我们都认为众包不仅仅是一个工具，更是一种生活方式，学子互联为这种实践做了非常好的探索和努力。
        </p>
      </div>
    </div>
    <div class="other">

    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      swiper: [
        require("@/assets/images/壁纸.png"),
      ],
      images:[
        require('assets/images/折线图.png'),
        require('assets/images/客服优先.png'),
        require('assets/images/正确.png'),
        require('assets/images/认证用户.png'),
        require('assets/images/人民币.png'),
        require('assets/images/佣金.png')
      ]
    };
  },
};
</script>

<style>
.left{
  float: left;
}
.right{
  float: right;
}

#home{
  margin-top: -100px;
}
.more{
  display: flex;
  justify-content: center;
  font-weight: lighter;
  flex-wrap: wrap;
}
.more .content{
    text-align: center;
    font-size: 24px;
    width: 80%;
    min-width: 1200px;
}
 .number {
  font-size: 36px;
  font-weight: bold;
}

h3{
  font-size: 40px;
  letter-spacing: 1.25em;
  font-weight:lighter;
}
h5{
  font-size: 36px;
  text-indent: 20px;
  font-weight: lighter;
}

.more .content .item {
  overflow: hidden;
  margin-top: 100px;
  margin-bottom: 100px;
  text-align: left;
  font-size: 24px;
  color: rgba(0, 0, 0, 0.6);
}
.more .content img{
  width: 150px;
  margin-right: 20px;
  opacity: 0.7;
}


.conment {
  background-color: rgb(153, 170, 163);
  overflow: hidden;
}
.conment h3{
  text-align: center;
  height: 100px;
  line-height: 100px;
}
.conment .content {
  display: flex;
  justify-content: space-around;
  margin: 0 auto;
  margin-bottom: 100px;
  width: 70%;
}
.conment .content p{
  width: 20%;
  border-radius: 20px;
  background-color: #ffffff;
  height: 400px;
  padding: 30px 20px;
  text-indent: 2em;
}


.other{
  height: 300px;

}
</style>