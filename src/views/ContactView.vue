<template>
  <div class="contact">
    <h1>Contact Us</h1>
    <p>If you have any questions, feel free to reach out to us!</p>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name" required />
      </div>
      <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email" required />
      </div>
      <div class="form-group">
        <button type="submit">Submit</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "ContactView",
  data() {
    return {
      name: "",
      email: "",
    };
  },
  methods: {
    submitForm() {
      alert(`Form submitted with: ${this.name}, ${this.email}`);
    },
  },
};
</script>

<style scoped>
.contact {
  padding: 2rem;
}

h1 {
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
}

input[type="text"],
input[type="email"] {
  width: 100%;
  padding: 0.5rem;
  margin-top: 0.5rem;
  border: 1px solid #ccc;
}

button {
  padding: 0.5rem 1rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}

/* Media Queries for Responsiveness */
@media (min-width: 1024px) {
  .contact {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
  }

  form {
    width: 50%;
  }
}
</style>
