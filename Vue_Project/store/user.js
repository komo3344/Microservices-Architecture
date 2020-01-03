import Vuex from 'vuex' // Vuex 패키지 불러오기

const store = () => new Vuex.Store({  // 스토어 생성 함수 정의

  // 상태(데이터)
  state: {
    is_Login: false,
    token: ''
  },
  // 쓰기(동기 처리)
  mutations: {
    loginState (state) {
      state.is_Login = true
    },
    setToken(state, token){
      state.token = token
    }
  },
  // 읽기
  getters: {
    token(state){
      return state.token
    }
  }
})

export default store  // store 함수 모듈 기본으로 내보내기