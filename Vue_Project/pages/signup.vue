<template>
  <div class="signup">
    <h3>회원가입</h3>
    ID: <input type="text" placeholder="ID를 입력하세요"><br>
    email: <input type="email" placeholder="e-mail을 입력하세요"><br>
    password1: <input type="password1" placeholder="비밀번호를 입력하세요"><br>
    password2: <input type="password2" placeholder="비밀번호를 한번 더 입력하세요"><br>
    <button @click="signup()">회원가입</button>
  </div>
  
</template>

<script>
export default {
  name: 'signup',
  layout: 'nav',
  data(){
    return{

    }
  },
  methods: {
    signup: () => {
      console.log('click')
    }
  }
}
</script>

<style>
  .signup {
    text-align: center
  }
</style>