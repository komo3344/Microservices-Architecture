<template>
<section class="container">
  <div class="login">
    <h3>로그인</h3><br>
    <div class="form-group">
      <label for="id">ID:</label>
      <input type="text" class="form-control" id="id" placeholder="ID를 입력하세요" autofocus='true' name="uname" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group">
      <label for="password">Password:</label>
      <input type="password" class="form-control" id="password" placeholder="비밀번호를 입력하세요" name="pswd" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <button type="submit" class="btn btn-primary" @click="login()">로그인</button>
    <button type="submit" class="btn btn-primary" @click="test()">test</button>
    <p>계정이 없으신가요? <nuxt-link to="/signup">회원가입하러 가기</nuxt-link></p>
  </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'login',
  data(){
    return{

    }
  },

  methods: {
    login() {
      axios.post('http://localhost:8000/rest-auth/login/', {username: id.value, password: password.value})
      .then(res=>{
        console.log(res)
        // this.$store.commit('setID', res.data.user.username) // 유저id를 받아와서 state에 쓰기
        // console.log('userid: ' + this.$store.state.userID)
        // this.$store.commit('setLogin')  //유저 로그인 상태 true 변경
        // this.$router.push({ name: 'index'}) // 메인페이지 이동
        this.$store.commit('localStorage/setID', res.data.user.username)
        console.log('로컬스토리지 : ' + this.$store.state.localStorage.userID)
        console.log('로컬스토리지 : ' + window.localStorage.getItem("userID"))
        console.log('로컬스토리지 : ' + this.$store.getters.getID)

        })
    .catch(e => {
      console.error(e)
      alert('존재하지 않는 ID이거나 ID, password를 잘못 입력하셨습니다.')
      })
    },
    test() {
      console.log('로컬스토리지 : ' + this.$store.state.localStorage.userID)
    }
  }
}
</script>

<style>
  .login {
    position: absolute;
    top: 20%;
    left: 40%;
    text-align: center;
  }
</style>