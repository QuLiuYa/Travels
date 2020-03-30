import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)
let defalutCity = '北京'
try {
  if (localStorage.city) {
    defalutCity = localStorage.city
  }
} catch (err) {
  console.log(err)
}
export default new Vuex.Store({
  state: {
    city: defalutCity
  },
  mutations: {
    changeCity (state, city) {
      state.city = city
      localStorage.city = city
    }
  }
})
