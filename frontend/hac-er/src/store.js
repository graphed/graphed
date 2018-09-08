import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    classes: [],
    auth: {
      cookie: '',
      session: ''
    }
  },
  mutations: {
    setClasses (state, c) {
      state.classes = c
    },
    setAuth (state, cookie, session) {
      state.auth.cookie = cookie
      state.auth.session = session
    }
  },
  actions: {
  }
})
