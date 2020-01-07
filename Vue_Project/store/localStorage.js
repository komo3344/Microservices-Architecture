export const state = () => ({
  userID: ''
})

export const mutations = {
  setID: (state, userID) => {
    state.userID = userID
  },

}

export const getters = {
  getID: (state) => {
    return state.userID
  }
}