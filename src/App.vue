<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">eCommerce</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink :to="{name:'home'}" class="nav-link" aria-current="page">Home</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink :to="{name:'productCreate'}" class="nav-link">Create Product</RouterLink>
          </li>
        </ul>
        <span class="navbar-text">
          <!-- Navbar text with an inline element -->
        </span>
      </div>
    </div>
  </nav>
  <br>
  <div class="container">
    <RouterView />
  </div>
</template>

<style scoped>
</style>
