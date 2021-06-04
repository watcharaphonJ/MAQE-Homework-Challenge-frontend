import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify'
import axiosModule from './components/mixins/axiosModule';

import config from '../config/base';
Vue.prototype.config = config;
Vue.config.productionTip = false

new Vue({
  vuetify,
  axiosModule,
  render: h => h(App)
}).$mount('#app')
