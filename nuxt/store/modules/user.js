<<<<<<< HEAD
import {
    callApiFetch,
    callApiAdd,
    callApiEdit,
    callApiDelete,
    callApiShow
} from '../../api/user'

const FETCH = 'fetch_users'

const state = {
    users: []
}

const actions = {
    async getUsers({ commit }) {
        let response = await callApiFetch()
            
        return commit(FETCH, { users: response.data })
    }
}

const mutations = {
    [FETCH](state, { users }) {
        
        return state.users = users;
    }
}

const storeUser = {
    state,
    actions,
    mutations
}
export default storeUser
=======
const user = {
  state: {
    auth: {
      first_name: "",
      last_name: "",
      email: "",
      pasword: "",
      phone: ""
    }
  },
  actions: {
    addUser({ commit }, a) {
      console.log('action', a)
      commit("addUser", a)
    }
  },
  mutations: {
    addUser(state, a) {
      console.log('muta', a)
      console.log('muta', state)
    }
  }
}
export default user
>>>>>>> 14c713d0f399d375953e20a558278c7643eab83a
