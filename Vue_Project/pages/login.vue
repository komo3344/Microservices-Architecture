<template>
  <div class="login">
    <h3>로그인</h3>
    <input type="text" placeholder="ID를 입력하세요"><br>
    <input type="password" placeholder="비밀번호를 입력하세요"><br>
    <button @click="test()">로그인</button>
    <p>계정이 없으신가요? <nuxt-link to="/signup">회원가입하러 가기</nuxt-link></p>
  </div>
</template>

<script>
export default {
  name: 'login',
  layout: 'nav',
  data(){
    return{

    }
  },
  methods: {
    test: () =>{
      alert('clicked!')
    }
  }
}
</script>

<style>
  .login {
    text-align: center
  }
</style>