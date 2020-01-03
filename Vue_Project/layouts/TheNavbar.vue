<template>
  <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
    <a class="navbar-brand" href="/">Home</a>

    <!-- Links -->
    <ul class="navbar-nav">
    <li class="nav-item">
      <a class="nav-link" href="/login">로그인</a>
    </li>
    <li class="nav-item">
      <a class="nav-link" href="/signup">회원가입</a>
    </li>

    <!-- Dropdown -->
    <li class="nav-item dropdown">
      <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
        Dropdown link
      </a>
      <div class="dropdown-menu">
        <a class="dropdown-item" href="#">Link 1</a>
        <a class="dropdown-item" href="#">Link 2</a>
        <a class="dropdown-item" href="#">Link 3</a>
      </div>
    </li>
  </ul>
  </nav>
</template>

<script>
export default {

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