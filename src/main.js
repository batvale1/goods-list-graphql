import Vue from 'vue'
import App from './App.vue'
import VueWait from 'vue-wait';
import Notifications from 'vue-notification'
import Vuelidate from 'vuelidate'

import router from './router';
import store from './store';

Vue.config.productionTip = false

Vue.use(VueWait)
Vue.use(Notifications)
Vue.use(Vuelidate)

new Vue({
  wait: new VueWait({
    useVuex: true,
  }),
  router,
  store,
  render: h => h(App),
}).$mount('#app')
