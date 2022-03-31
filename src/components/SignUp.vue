<template>
  <img class="logo" src="../assets/download.jpg" />
  <h1>...</h1>
  <h1>Sign Up</h1>
  <div class="register">
    <input type="text" v-model="name" placeholder="Enter Name" />
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="Password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="signUp">Sign Up</button>
  </div>

  <div class="Login">
    Already signed up, <a href="" v-on:click="redirect">Log in</a> Here
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "SignUp",
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },
  methods: {
    async signUp() {
      console.warn("signUp", this.name, this.email, this.password);
      let result = await axios.post("http://localhost:3000/users", {
        name: this.name,
        email: this.email,
        password: this.password,
      });
      console.warn(result);
      if (result.status == 201) {
        alert("Sign Up Done");
      }
      localStorage.setItem("user-info", JSON.stringify(result.data));
      this.$router.push({ name: "Home" });
    },
    redirect() {
      this.$router.push({ name: "Login" });
    },
  },
  mounted() {
    let user = localStorage.getItem("user-info");
    if (user) {
      this.$router.push({ name: "Home" });
    }
  },
};
</script>
<style scoped>
h1 {
  color: skyblue;
}
</style>
