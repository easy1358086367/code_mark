import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    url : 'http://116.62.178.68:8081',
    user : {
      id: '',//用户id
      account:'',//账户
      name:'',//真实姓名
      sex: '',//性别
      type: '',//用户类型
      birth: '',//出生日期
      phone: '',//手机号
      identity: '',//身份证号
      cardName: '',//银行卡名称
      cardNum:'',//银行卡账号
      balance: 0,//用户余额
      skill: [],//用户技能
      news:[
        {
          id:1,
          title:'soadjasdasdljlaksmdasdmsa'
        },
        {
          id:2,
          title:'asdsad2we21eee',
        },
        {
          id:3,
          title:'12e214wrr'
        }
      ],//用户消息
    },
  },
  mutations: {
    setUserAll ( state , user ) {
      for( let prop in user ) {
        state.user[prop] = user[prop];
      }
    },
    setUser ( state , options) {
      let prop = options.prop;
      let value = options.value;
      state.user[prop] = value;
    }
  },
  actions: {
  },
  modules: {
  }
})
