import Vue from 'vue'
import VueRouter from 'vue-router'

import index from 'views/index';
import home from 'views/home';
import about from 'views/about';
import login from 'views/login';
import sign from 'views/sign';
import my from 'views/my';

import certBoss from 'views/certification/boss_cert';
import certStudent from 'views/certification/student_cert';
import certTeacher from 'views/certification/teacher_cert';
import certReal from 'views/certification/real_cert';



import proPublish from 'views/project/publish';

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/home',
    component: index,
    children: [
      // 主页
      {
        path: 'home',
        component: home
      },
      // 关于
      {
        path: 'about',
        component: about
      },
      // 登录
      {
        path: 'login',
        component: login
      },
      // 注册
      {
        path: 'sign',
        component: sign
      },
      // 个人页
      {
        path : 'my',
        component : my
      },
      // 发布项目
      {
        path : 'project_publish',
        component : proPublish,
      },
      // 教师认证
      {
        path : 'teacher_cert',
        component : certTeacher,
      },
      // 学生认证
      {
        path : 'student_cert',
        component : certStudent,
      },
      // boss认证
      {
        path : 'boss_cert',
        component : certBoss,
      },
      // 实名认证
      {
        path : 'real_cert',
        component : certReal,
      }

    ]
  }
]

const router = new VueRouter({
      mode: 'history',
      base: process.env.BASE_URL,
      routes
    })

export default router
