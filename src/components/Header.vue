<template>
  <div class="navigator">
    <a href="/"> Home</a>
    <a href="/addrecipe"> Add Recipe</a>
    <a href="/updaterecipe"> Update Recipe</a>
    <a v-on:click="logout" href="#"> Logout</a>
  </div>
</template>
<script>
export default {
  name: "Header",
  methods: {
    logout() {
      localStorage.clear();
      this.$router.push({ name: "Login" });
    },
  },
};
</script>
<style scoped>
.navigator {
  background-color: rgb(70, 70, 70);
  overflow: hidden;
}
.navigator a {
  float: left;
  color: #f2f2f2;
  text-align: center;
  padding: 10px 14px;
  text-decoration: none;
  font-size: 14 px;
}
.navigator a:hover {
  background-color: rgb(46, 44, 41);
}
</style>
