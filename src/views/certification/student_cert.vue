<template>
  <div id="student_cert">
    <el-row type="flex" class="box">
      <el-col :xl="18" :md="20" :sm="24" class="head">
        <el-steps :active="active">
          <el-step title="步骤 1" description="选择考试科目"></el-step>
          <el-step title="步骤 2" description="考试阶段"></el-step>
          <el-step title="步骤 3" description="最终阶段"> </el-step>
        </el-steps>
      </el-col>

      <el-col :xl="18" :md="20" :sm="24" class="body">
        <!-- 选择考试内容 -->
        <div class="step step1" v-if="active == 1">
          <div class="block">
            <div class="demonstration title">请选择考试科目</div>
            <el-cascader
              :options="step1.options"
              filterable
              v-model="step1.value"
            ></el-cascader>
          </div>
          <el-button type="primary" class="btn" plain @click="mitSubject()"
            >下一步</el-button
          >
        </div>
        <!-- 开始考试 -->
        <div class="step step2" v-if="active == 2">
          <!-- 试卷内容 -->

          <!-- 提交 -->
          <el-button type="primary">提交试卷</el-button>
        </div>
        <!-- 提交信息 -->
        <div class="step step3" v-if="active == 3"></div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 1,
      step1: {
        value: [],
        options: [
          {
            value: "1",
            label: "前端",
            children: [
              {
                value: "0",
                label: "vue",
              },
              {
                value: "1",
                label: "react",
              },
              {
                value: "2",
                label: "angular",
              },
            ],
          },
          {
            value: "2",
            label: "后端",
            children: [
              {
                value: "0",
                label: "java",
                children: [
                  {
                    value: "0",
                    label: "spring",
                  },
                  {
                    value: "1",
                    label: "springBoot",
                  },
                ],
              },
              {
                value: "1",
                label: "php",
              },
              {
                value: "2",
                label: "python",
              },
            ],
          },
        ],
      },
      step2: {},
      step3: {},
    };
  },
  methods: {
    mitSubject() {
      //获取所选科目代号
      let id = this.step1.value.join('')
      // 获取试卷信息
      console.log(id)
      
      this.active++;
    },
  },
};
</script>

<style scoped>
.box {
  flex-wrap: wrap;
  justify-content: center;
}
.body {
  margin-top: 50px;
}
.body .step1 {
  width: 500px;
  margin: 0 auto;
}
.body .step1 .title {
  height: 50px;
  line-height: 50px;
  font-size: 1.5em;
}
.body .step1 .btn {
  display: block;
  width: 200px;
  margin: 100px auto;
  font-size: 1.5em;
}
</style>