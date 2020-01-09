<template>
  <section class="container">
    <div>
      <h1 class="title">
        Element Calendar UI
      </h1>
      <h2 class="subtitle">
        This is main page
      </h2>
      <button @click="logout">로그아웃</button>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'

export default {
  middleware: 'auth',
  
  data(){
    return{
      token : Cookie.get('token')
    }
  },
  methods: {
    logout () {
      Cookie.remove('username')
      this.$store.commit('setLogin')
    }
  },
    async asyncData () {
    let {data} = await axios.get('http://127.0.0.1:8000/user/')
    // console.log(data[0].username)
    return {username: data[0].username}
  }
  
}
</script>

<style>
.container .title{
  text-align: center;
}
.container .subtitle{
  text-align: center;
}
.container .contents{
  text-align: left;
}
</style>