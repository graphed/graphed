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
  getters: {
    getClass: (state) => (id) => {
      return state.classes[id]
    }
  },
  mutations: {
    setClasses (state, c) {
      state.classes = c
    },
    setAuth (state, cookie, session) {
      state.auth.cookie = cookie
    },
    setSession (state, sess) {
      state.auth.session = sess
    }
  },
  actions: {
  }
})
