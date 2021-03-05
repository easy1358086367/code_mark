<template>
  <div id="publish">
    <el-form ref="form" class="form" :model="project" label-width="120px">
      <h3 class="title">发布项目</h3>
      <el-form-item label="项目名称">
        <el-input v-model="project.name"></el-input>
      </el-form-item>
      <el-form-item label="项目金额">
        <el-input v-model="project.price"></el-input>
      </el-form-item>
      <el-form-item label="项目周期(日）">
        <el-input-number v-model="project.time" :min="1" :max="999"  label="描述文字"></el-input-number>
      </el-form-item>
      <el-form-item label="项目类型">
        <el-select v-model="project.type" placeholder="请选择项目类型">
          <el-option label="前端" value="前端"></el-option>
          <el-option label="微信小程序" value="微信小程序"></el-option>
          <el-option label="后端" value="后端"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="主要技能">
        <el-radio-group v-model="project.skill">
          <el-radio label="Vue"></el-radio>
          <el-radio label="angular"></el-radio>
          <el-radio label="React"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="次要技能">
        <el-checkbox-group v-model="project.other">
          <el-checkbox label="jQuery" name="other"></el-checkbox>
          <el-checkbox label="bootstrap" name="other"></el-checkbox>
          <el-checkbox label="elementUI" name="other"></el-checkbox>
          <el-checkbox label="webpack" name="other"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>

      <el-form-item label="项目描述">
        <el-input type="textarea" v-model="project.desc"></el-input>
      </el-form-item>
      <el-form-item label="软性要求">
        <el-input type="textarea" v-model="project.claim"></el-input>
      </el-form-item>
      <el-form-item label="即时匹配">
        <el-switch v-model="project.delivery"></el-switch>
      </el-form-item>
      <el-form-item class="btn-group">
        <el-button type="primary" @click="onSubmit">立即创建</el-button>
        <el-button>取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      project: {
        name: "",
        type: "",
        price: 0,
        skill: "",
        other: [],
        time: 1,
        desc: "",
        claim: "",
        delivery: false,
      },
    };
  },
  methods: {
    onSubmit() {
        this.$router.replace('/my')
    },
  },
};
</script>

<style>
#publish {
  height: calc(100vh - 100px);
}
#publish .title {
  text-align: center;
  margin-bottom: 30px;
  color: #303133;
  font-weight: bold;
}
#publish .form {
  width: 70%;
  min-width: 800px;
  margin: 0 auto;
  margin-top: 40px;
  padding: 50px;
  background-color: #fff;
}
#publish .form .btn-group {
  margin: 30px auto;
  width: 400px;
}
</style>