<template>
  <div id="news">
    <h5>消息列表</h5>
    <ul class="list" v-infinite-scroll="load" style="overflow: auto">
      <li v-for="item of news" :key="item.id" class="infinite-list-item">
        <h6>{{ item.title }}</h6>
        <div class="action">
          <el-button type="primary" plain>接收</el-button>
          <el-button type="info" plain>拒绝</el-button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: ["news"],
  data() {
    return {};
  },
  methods: {
    load() {
      // this.count += 2
    },
  },
};
</script>

<style scoped>
#news {
  float: left;
  width: calc(100% - 501px);
  height: 800px;
}
.list li {
  background-color: #7dbcfc;
  margin: 10px;
  text-align: center;
  padding: 20px;
}
.list li h6 {
    font-size: 24px;
    margin-bottom: 20px;
    cursor: pointer;
}
.list li h6:hover {
    color: #fff;
}
.list li .action {
    display: flex;
    justify-content: center;
}
.list li .action button {
  display: inline-block;
  border-radius: 15px;
  font-size: 1.5em;
  letter-spacing: 10px;
  width: 150px;
  height: 50px;
}
</style>