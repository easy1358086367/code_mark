<template>
  <div id="process">
    <h3>项目列表</h3>
    <ul class="list">
      <li
        v-for="(item, index) in proList"
        :key="index"
        @click="handleOpen(index)"
      >
        {{ item.name }}
      </li>
    </ul>

    <el-drawer
      :title="proChoose.name"
      :visible.sync="drawer"
      :with-header="false"
      :direction="direction"
      :before-close="handleClose"
    >
    <h3>{{proChoose.name}}</h3>
      <div>项目类型：{{ proChoose.type }}</div>
      <div>项目金额：{{ proChoose.price }}</div>
      <div>项目截至日期：{{ proChoose.time }}</div>
      <div>主要开发技能：{{ proChoose.skill }}</div>
      <div>次要开发技能：{{ proChoose.other.toString() }}</div>
      <div>
        <div>前端参与人员：{{ proChoose.person.font.toString() }}</div>
        <div>指导教师：{{ proChoose.person.teacher }}</div>
        <div>BOSS：{{ proChoose.person.boos }}</div>
      </div>
      <div>项目进度：{{ proChoose.process }}</div>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: "rtl",
      proChoose: {
        name: "学子互联3",
        type: "前端",
        price: 3000,
        skill: "vue",
        other: ["elementUI", "echart"],
        time: "????-??-??",
        desc:
          "shdnaskjndfsajknfkajsfnjksafksajhfdsakjhfdiosahfzcnjzkxnckjashdfaksuhdasihdasjkhdkjsahdsaiuhdsaui",
        claim:
          "dsanjcsajkhcsauihfaiosuhfiowqhfisahfsajhdosaijdsaihfsaihjfsaiujdklsauflisaifjsakjdafjasl",
        delivery: false,
        process: "等待确认中",
        person: {
          font: ["", ""],
          teacher: "",
          boos: "Bob",
        },
      },
      proList: [
        {
          name: "学子互联3",
          type: "前端",
          price: 3000,
          skill: "vue",
          other: ["elementUI", "echart"],
          time: "????-??-??",
          desc:
            "shdnaskjndfsajknfkajsfnjksafksajhfdsakjhfdiosahfzcnjzkxnckjashdfaksuhdasihdasjkhdkjsahdsaiuhdsaui",
          claim:
            "dsanjcsajkhcsauihfaiosuhfiowqhfisahfsajhdosaijdsaihfsaihjfsaiujdklsauflisaifjsakjdafjasl",
          delivery: false,
          process: "等待确认中",
          person: {
            font: ["", ""],
            teacher: "",
            boos: "Bob",
          },
        },
        {
          name: "学子互联2",
          type: "前端",
          price: 3000,
          skill: "vue",
          other: ["elementUI", "echart"],
          time: "2020-01-01",
          desc:
            "shdnaskjndfsajknfkajsfnjksafksajhfdsakjhfdiosahfzcnjzkxnckjashdfaksuhdasihdasjkhdkjsahdsaiuhdsaui",
          claim:
            "dsanjcsajkhcsauihfaiosuhfiowqhfisahfsajhdosaijdsaihfsaihjfsaiujdklsauflisaifjsakjdafjasl",
          delivery: false,
          process: "进行中",
          person: {
            font: ["easy1", "easy2"],
            teacher: "tea1",
            boos: "Bob",
          },
        },
        {
          name: "学子互联1",
          type: "前端",
          price: 3000,
          skill: "vue",
          other: ["elementUI", "echart"],
          time: "2020-01-01",
          desc:
            "shdnaskjndfsajknfkajsfnjksafksajhfdsakjhfdiosahfzcnjzkxnckjashdfaksuhdasihdasjkhdkjsahdsaiuhdsaui",
          claim:
            "dsanjcsajkhcsauihfaiosuhfiowqhfisahfsajhdosaijdsaihfsaihjfsaiujdklsauflisaifjsakjdafjasl",
          delivery: false,
          process: "完成",
          person: {
            font: ["easy1", "easy2"],
            teacher: "tea1",
            boos: "Bob",
          },
        },
      ],
    };
  },
  methods: {
    handleClose(done) {
      done();
    },
    handleOpen(index) {
      this.proChoose = this.proList[index];
      this.drawer = true;
    },
  },
};
</script>

<style>
</style>