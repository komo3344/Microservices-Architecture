import axios from 'axios'
import Cookie from 'js-cookie'

//상태 관리할 목록
export const state = () => ({
  token: '',
  user: ''
})

// mutations state 값을 변경하는 로직 (동기적으로) action은 비동기적으로 정의
export const mutations = {
  SET_USER (state, user) {
    state.user = user
  },


  logout: (state) => {
    state.token = '',
    Cookie.set('token', null)
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
  nuxtServerInit ({ commit }, { req }) {  // 서버단에서 store 초기값 세팅 첫페이지에서만 실행 (새로고침 포함)
    console.log(req)
    if (req.session && req.session.authUser) {
      commit('SET_USER', req.session.authUser)
    }
  },
  async login ({ commit }, { username, password }) {
    try {
      const { data } = await axios.post('http://localhost:8000/rest-auth/login/', { username, password })
      commit('SET_USER', data)  // state에 유저토큰 저장
      Cookie.set('token', data.token) // 쿠키에 토큰 저장
      this.$router.push('/todo')  // 인증되면 todo app페이지로 이동
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
    commit('logout')
  },

  async addTask ({ commit }, {task}) {
    const { data } = await axios.post('http://localhost:8000/todos/', {task})
    console.log( data)
  },

  async asyncData () {
    let {data} = await axios.get('http://127.0.0.1:8000/me/')
    console.log(data)
    // return {username: data}
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