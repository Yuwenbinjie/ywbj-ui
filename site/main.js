import Vue from 'vue'
import App from './App.vue'
import '@/assets/index.scss'
import YwVue from '@'

Vue.use(YwVue)
new Vue({
  el: '#app',
  render: h => h(App)
})
