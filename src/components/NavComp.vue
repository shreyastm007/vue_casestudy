<template>
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <router-link class="navbar-brand" to="/"><strong><i>Flipkart💫</i> </strong> </router-link>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <router-link class="nav-link active" aria-current="page" to="/">HOME</router-link>
          </li>
          <li class="nav-item" v-if="!this.$store.state.isAuthenticated">
            <router-link class="nav-link active" aria-current="page" to="/login">LOGIN</router-link>
          </li>
  
          <li class="nav-item" >
            <router-link class="nav-link active" aria-current="page" to="/cart">CART🛒</router-link>
          </li>

          <li class="nav-item" >
            <router-link class="nav-link active" aria-current="page" to="/products">PRODUCTS</router-link>
          </li>

  
          <li class="nav-item" v-if="this.$store.state.isAuthenticated">
          <button class="btn btn-primary" @click="logout"> LogOut</button>
          </li>
         
        </ul>
        
      </div>
    </div>
  </nav>
  </template>
  
  <script>
  export default {
    methods:{
      logout(){
        alert("Logged Out Successfully")
        this.$store.commit("logout");
        this.$router.push("/")
      }
    }
  
  }
  </script>
  
  <style>
  
  </style>