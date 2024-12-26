<template>
  <div class="about">
    <h1>About Us</h1>
    <p>We are a team of passionate developers committed to building amazing web applications.</p>
    <img src="https://via.placeholder.com/500x300" alt="Team Image" class="team-image" />
    <div class="info">
      <h2>Our Mission</h2>
      <p>Our mission is to create solutions that make a difference in the world by simplifying complex problems.</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "AboutView",
};
</script>

<style scoped>
.about {
  text-align: center;
  padding: 2rem;
}

h1 {
  color: #2c3e50;
  font-size: 2rem;
}

p {
  font-size: 1.2rem;
  color: #7f8c8d;
  line-height: 1.6;
}

.team-image {
  width: 100%;
  max-width: 500px;
  height: auto;
  margin-top: 1.5rem;
}

.info {
  margin-top: 2rem;
}

h2 {
  font-size: 1.5rem;
  color: #2980b9;
}

@media (min-width: 1024px) {
  .about {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
  }

  .info {
    width: 50%;
  }
}
</style>
