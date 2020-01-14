<template>
  <section class="container">
    <div>
       <nuxt-link class="btn btn-outline btn-large btn-info" to="/todo">
        Todo 작성하러 가기 <span class="ml-5">&rarr;</span>
      </nuxt-link>
    </div>
  </section>
</template>

<script>
import axios from 'axios'
import Cookie from 'js-cookie'

export default {
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
  //   async asyncData () {
  //   let {data} = await axios.get('http://127.0.0.1:8000/me/')
  //   console.log(data)
  //   return {username: data}
  // }
  
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