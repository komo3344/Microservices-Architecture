<template>
<section class="container">
  <div class="login">
    <h3>로그인</h3><br>
    <div class="form-group">
      <label for="id">ID:</label>
      <input type="text" class="form-control" id="id" placeholder="ID를 입력하세요" autofocus name="uname" required>
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
    <p>계정이 없으신가요? <nuxt-link to="/signup">회원가입하러 가기</nuxt-link></p>
    
  </div>
</section>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'
export default {
  name: 'login',
  data(){
    return{
    }
  },

  methods: {
    async login() { // 비동기로 로그인 처리
      try{
        await this.$store.dispatch('login', {
          username: id.value,
          password: password.value
        })
      } catch (e){
        console.error(e)
        // alert('존재하지 않는 ID이거나 ID, password를 잘못 입력하셨습니다.')
      }
    },
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