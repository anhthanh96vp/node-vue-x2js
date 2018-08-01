// https://viblo.asia/p/cai-dat-vuex-trong-project-su-dung-vuejs-63vKjRJ6K2R
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user'

Vue.use(Vuex)
const debug = process.env.NODE_ENV !== 'production'
export default new Vuex.Store({
  modules: {
    user,
  },
  strict: debug
})
