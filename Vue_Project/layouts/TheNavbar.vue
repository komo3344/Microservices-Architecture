<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <router-link to="/" class="navbar-brand">HOME</router-link>

    <!-- Links -->
    <ul class="navbar-nav">


    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        할 일
      </a>
      <div class="dropdown-menu">
        <router-link to="/todo" class="dropdown-item">TODO APP</router-link>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>

    <!-- Links -->
    <li class="nav-item">
      <router-link to="/signup" class="nav-link" >회원가입</router-link>
    </li>

    <li class="nav-item">
      <a class="nav-link" v-if="!$store.state.user" href="/login">로그인</a>
      <a class="nav-link" v-if="$store.state.user" @click.prevent="$store.dispatch('logout')">로그아웃</a>
    </li>
    <!-- <li>
      <span class="navbar-text">
        {{username}}님
      </span>
    </li> -->
  </ul>
  </nav>
</template>

<script>
import Cookie from 'js-cookie'
export default {
  data(){
    return{
      username: ''
    }
  },
  async asyncData () {
  let {data} = await axios.get('http://127.0.0.1:8000/me/')
  console.log(data)
  return {username: data}
  }
}
</script>

<style scoped>
nav{
display: flex;
justify-content: space-between;
align-self: center;
margin-bottom: 70px;
font-weight: lighter;
letter-spacing: 0.5px;
}

.nav .logo{
display: flex;
flex-direction: column;
justify-content: center;
}

.nav .logo .subheader{
opacity: 0.70;
font-size: 0.9rem;
color:white;
}

.nav .nav-content{
font-size: 1rem;
}

.nav-content ul{
display:flex;
list-style: none;
}
 
.nav-content ul li{
padding: 2px 10px;
}

.nav-content ul li:not(:first-of-type){
border-left: 1px solid rgb(255, 255, 255,0.2);
}

</style>