<template>
<section class="container">
  <div class="signup">
    <h3>회원가입</h3> <br />
    <div class="form-group">
      <label for="id">ID:</label>
      <input type="text" class="form-control" id="id" autofocus='true' placeholder="ID를 입력하세요" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group">
      <label for="email">E-mail:</label>
      <input type="email" class="form-control" id="email" placeholder="이메일을 입력하세요" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group">
      <label for="password1">Password:</label>
      <input type="password" class="form-control" id="password1" placeholder="비밀번호를 입력하세요" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <div class="form-group">
      <label for="password2">Confirm password:</label>
      <input type="password" class="form-control" id="password2" placeholder="비밀번호를 한번 더 입력하세요" required>
      <div class="valid-feedback">Valid.</div>
      <div class="invalid-feedback">Please fill out this field.</div>
    </div>
    <button type="submit" class="btn btn-primary" @click="signup()">회원가입</button>
  </div>
</section>
</template>

<script>
import axios from 'axios'

export default {
  name: 'signup',
  data(){
    return{
      id: '',
      email: '',
      password1: '',
      password2: '',
    }
  },
  methods: {
    signup() {
      axios.post('http://127.0.0.1:8000/rest-auth/registration/', 
      {username: id.value, email: email.value, password1: password1.value, password2:password2.value})
      .then(res => {
        console.log(res)
        alert('회원가입 완료')
        this.$router.push({name: 'login'})
      })
      .catch(e => console.error(e))
    }
  }
}
</script>

<style>
  .signup {
    position: absolute;
    top:20%;
    left:40%;

    text-align: center;
    
  }
</style>