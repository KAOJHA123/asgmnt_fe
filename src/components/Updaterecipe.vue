<template>
  <Header />
  <div class="update">
  <h1>Update your Recipes here</h1>
  </div>
</template>
<script>
import Header from "./Header.vue";
export default {
  name: "Updaterecipe",
  components: {
    Header,
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
  },
};
</script>
<style scoped>
.update{
margin-top: 10px;
}
</style>