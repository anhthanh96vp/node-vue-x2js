import User from "../api/User"

export const state = () => ({
  user: {}
})

export const actions = {
  addUser({ commit }) {
    commit("addUser")
  }
}
export const mutations = {
  addUser(state) {
        console.log('User.register() :', User.register());
  }
}
