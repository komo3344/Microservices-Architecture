<template>
  <nav class='nav'>
    <span><nuxt-link to="/login">로그인</nuxt-link></span> &nbsp;
    <span><nuxt-link to="/signup">회원가입</nuxt-link></span>  &nbsp;
    <nuxt-link to="/">홈</nuxt-link>
    <nuxt/>
  </nav>
</template>

<style scoped>
nav {
  padding: 1rem;
  background: #F7F8FB;
  color: #47494E;
  text-align: right;

}
</style>