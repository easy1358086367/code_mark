import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from '../../code_mark/src/store'
import axios from 'axios';
import lazyload from 'vue-lazyload';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';


Vue.config.productionTip = false;
Vue.prototype.$http = axios;
Vue.use(ElementUI);
Vue.use(lazyload, {
  proLoad: 1.3,
  error: 'assets/img/error.png',
  attempt: 1
})
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
