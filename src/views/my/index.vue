<template>
  <div class="my">
    <el-container class="my-content">
      <el-aside width="200px" class="aside">
        <div class="msg">
          <img src="~assets/images/头像.jpg" width="150px" height="150px" alt="">
        </div>
        <ul style="height:500px" class="list">
          <li
            v-for="(item,index) in ['个人信息','安全中心','项目历程']"
            :key="index"
            @click="changeShow(index)"
          >{{item}}</li>
        </ul>
      </el-aside>
      <el-main class="content">
        <msg class="content-item" v-show="isShow == 0" />
        <safe class="content-item" v-show="isShow == 1" />
        <process class="content-item" v-show="isShow == 2"  />
      </el-main>
    </el-container>
  </div>
</template>

<script>
import msg from './my_msg';
import process from './my_process';
import safe from './my_safe';
export default {
  data() {
    return {
      name : 'easy',
      phone: '19912345678',
      isShow: 0,
    }
  },
  methods: {
    changeShow( index ) {
      this.isShow = index
    }
  },
  components : {
    msg,
    process,
    safe
  },

};
</script>

<style>
.my-content {
  margin-top: -80px;
  /* width: 100%; */
}
.my .aside {
  height: calc(100vh - 110px);
  border-right: 1px solid rgb(162, 166, 179) ;
}
.my .aside img {
  display: block;
  margin:10px auto;
}
.my .aside .list li {
  height: 50px;
  text-align: center;
  border-bottom: #fff 1px solid;
  line-height: 50px;
  font-size: 20px;
  cursor: pointer;
}
.my .aside .list li:hover {
  color: chocolate;
}
.my .content .content-item {
  width: 100%;
  height: 100%;
}

</style>