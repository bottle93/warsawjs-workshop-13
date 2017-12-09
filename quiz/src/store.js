import Vuex from 'vuex'
import Vue from 'vue'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 5,
  },
  mutations: {
    increment(state) {
      state.count++
    },
    decrement(state) {
      if (state.count > 0) {
        state.count--
      }
    }
  }
})

export default store;