import Vue from 'vue'
import App from './App.vue'
import '@/assets/scripts/animation.js'
import 'minireset.css'
import '@/assets/styles/main.css'
import '@/assets/styles/animation.css'
import '@mdi/font/css/materialdesignicons.css'

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
