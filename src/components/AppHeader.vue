<template>
  <nav>
    <div class="container">
      <router-link to="/">
        <img src="http://bit.ly/vue-img" alt="Vue SPA">
      </router-link>
      <router-link 
        class="nav-item is-tab" 
        to="/category/front-end" exact>Home</router-link>
      <router-link 
        class="nav-item is-tab" 
        to="/login" exact>Login</router-link>
    </div>
  </nav>
</template>
<script>
export default {};
</script>

