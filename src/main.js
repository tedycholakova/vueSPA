import Vue from 'vue';
import Layout from './components/Layout.vue';
import router from './router';

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(Layout),
}).$mount('#app')
