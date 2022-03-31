<template>
  <Header />
  <h1>Hello Welcome to Home Page</h1>
  <table border="1px">
    <tr>
      <th>Id</th>
      <th>Name</th>
      <th>servings</th>
      <th>Vegan</th>
      <th>Instructions</th>
    </tr>
    <tr v-for="item in recipes" :key="item.id">
      <td>{{ item.id }}</td>
      <td>{{ item.name }}</td>
      <td>{{ item.servings }}</td>
      <td>{{ item.vegan }}</td>
      <td><button id="myBtn" v-on:click="inst">View Instruction here</button></td>
    </tr>
  </table>
</template>
<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Home",
  components: {
    Header,
  },
  methods:{
      inst(){
        modal.style.display=item.instruction;
      }
  },
  data() {
    return {
      recipes: [],
    };
  },
  async mounted() {
    let user = localStorage.getItem("user-info");
    if (!user) {
      this.$router.push({ name: "SignUp" });
    }
    let result = await axios.get("http://localhost:3000/recipes");
    console.warn(result);
    this.recipes = result.data;
  },
};
</script>
<style scoped>
td {
  width: 160px;
  height: 40px;
}
table{
  font-family: Arial, Helvetica, sans-serif;
  border-collapse: collapse;
  width: 100%;
}
td,th{
border: 1px solid #dddddd;
text-align: left;
padding: 8px;
}
tr:nth-child(even){
  background-color: #dddddd;
}

</style>
