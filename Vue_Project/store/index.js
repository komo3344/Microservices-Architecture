import axios from 'axios'
import Cookie from 'js-cookie'

//상태 관리할 목록
export const state = () => ({
  is_Login: false,
  token: '',
  userID: '',
  authUser: null
})

// mutations state 값을 변경하는 로직 (동기적으로) action은 비동기적으로 정의
export const mutations = {
  SET_USER (state, user) {
    state.authUser = user
  },

  setLogin(state) {
    state.is_Login = !state.is_Login
  },

  setToken: (state, token) => {
    state.token = token
  },

  setID: (state, userID) => {
    state.userID = userID
  },

  logout: (state) => {
    state.token = '',
    Cookie.set('token', null),
    Cookie.set('id', null)
  }
}

export const getters = {
  getLogin(state) {
    return state.is_Login
  },

  getToken(state) {
    return state.token
  },
}
export const actions = {
  nuxtServerInit ({ commit }, { req }) {
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('http://localhost:8000/rest-auth/login', { username, password })
      commit('SET_USER', data)
    } catch (error) {
      if (error.response && error.response.status === 401) {
        throw new Error('Bad credentials')
      }
      throw error
    }
  },

  async logout ({ commit }) {
    await axios.post('http://localhost:8000/rest-auth/logout')
    commit('SET_USER', null)
  },

  async addTask ({ commit }, {task}) {
    const { data } = await axios.post('http://localhost:8000/todos/', {task})
    console.log( data)
    // commit('SET_USER', null)
  }













  // async nuxtServerInit ({ dispatch, commit }, { req }) {
  //   if (req.headers.cookie) {
  //     let { token } = cookie.parse(req.headers.cookie)
  //     try {
  //       var { data } = await axios.post('http://localhost:8000/api-token-verity/', { token })
  //       if (data.token) {
  //         commit('setToken', { token: data.token })
  //       }
  //     } catch (err) {
  //       if (err.response.status === 400) {
  //            commit('logout')
  //       }
  //     }
  //   }
  // },
  // async login({ commit }, { username, password }) {
  //   let { data } = await axios.post('http://localhost:8000/rest-auth/login/', { username, password })
  //   commit('setToken', data.token)  // 로그인후 state token 값 넣음
  //   Cookie.set('token', data.token) // 쿠키에 token값 input
  //   Cookie.set('username', data.user.username) // 쿠키에 username값 input
  //   // window.location.reload(true) // 로그인하면 로그인페이지에 머물러잇음
  // },

  // async logout({ commit }) {
  //   await axios.post('http://localhost:8000/rest-auth/logout/').then(() => commit('logout'))
  // }
}