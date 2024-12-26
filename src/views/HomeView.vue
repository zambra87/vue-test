<template>
  <div class="home">
    <!-- Navbar -->
    <nav class="navbar">
      <ul>
        <li><router-link to="/">Home</router-link></li>
        <li><router-link to="/about">About</router-link></li>
        <li><router-link to="/contact">Contact</router-link></li>
      </ul>
    </nav>

    <!-- Logo y contenido principal -->
    <img alt="Vue logo" src="@/assets/logo.svg" class="logo" />
    <PostsView />
  </div>
</template>

<script>
import PostsView from './PostsView.vue';

export default {
  name: 'HomeView',
  components: {
    PostsView
  }
}
</script>

<style scoped>
.home {
  text-align: center;
  padding: 2rem;
}

/* Estilo para el navbar */
.navbar {
  background-color: #333;
  padding: 1rem;
}

.navbar ul {
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
}

.navbar li {
  margin: 0 15px;
}

.navbar a {
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
}

.navbar a:hover {
  text-decoration: underline;
}

/* Estilos para el logo */
.logo {
  margin-top: 20px;
  width: 150px;
}

/* Estilo para el contenido */
.main-content {
  margin-top: 2rem;
}
</style>
