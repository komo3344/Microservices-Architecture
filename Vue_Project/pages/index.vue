<template>
  <section class="container">
    <div>
      <h1 class="title">
        Hello~ microservices architecture toy project 
      </h1>
      <h2 class="subtitle">
        This is main page
      </h2>
      {{username}}
    </div>
  </section>
</template>

<script>
import axios from 'axios'
export default {
  layout: 'nav',
  async asyncData () {
    let { data} = await axios.get('http://127.0.0.1:8000/user/')
    console.log(data[0].username)
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
</style>