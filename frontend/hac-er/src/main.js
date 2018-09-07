import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import 'vue-loaders/dist/vue-loaders.css'
import { BallTrianglePathLoader } from 'vue-loaders'

Vue.component(BallTrianglePathLoader.name, BallTrianglePathLoader)

Vue.use(Vuetify, { theme: {
  primary: '#23A4CE',
  secondary: '#424242',
  accent: '#82B1FF',
  error: '#FF5252',
  info: '#2196F3',
  success: '#4CAF50',
  warning: '#FFC107'
}})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
