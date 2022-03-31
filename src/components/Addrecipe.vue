<template>
  <Header />
  <div class="add1"><h1>Add your recipes here</h1></div>
  <form class="add">
    <h5>Enter recipe Name:</h5>
    <input
      type="text"
      name="name"
      placeholder="Recipe name"
      v-model="recipes.name"
    />
    <h5>Serve for:</h5>
    <input
      type="text"
      name="servings"
      placeholder="Enter Servings"
      v-model="recipes.servings"
    />
    <h5>Vegan:</h5>
    <input
      type="text"
      name="vegan"
      placeholder="Whether Vegan??"
      v-model="recipes.vegan"
    />
    <h5>Add Instructions:</h5>
    <textarea
      id="instruction"
      name="instruction"
      rows="4"
      cols="50"
      v-model="recipes.instruction"
    >
    </textarea
    ><br />
    <button type="button" v-on:click="addRecipe">Add new Recipe</button>
  </form>
</template>


<script>
import Header from "./Header.vue";
import axios from "axios";
export default {
  name: "Addrecipe",
  data() {
    return {
      recipes: {
        name: '',
        servings: '',
        vegan: '',
        instruction: '',
      },
    };
  },
  methods: {
    async addRecipe() {
      let result = await axios.post("http://localhost:3000/recipes",{
      name:this.recipes.name,
      servings:this.recipes.servings,
      vegan:this.recipes.vegan,
      instruction:this.recipes.instruction,
      
      });
      if(result.status==201){
        this.$router.push({name:'Home'})
      }
      console.warn(result);
    },
  },
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
.add {
  margin-top: 10px;
}
.add input {
  width: 300px;
  height: 40px;
  padding-left: 20px;
  display: block;
  margin-bottom: 30px;
  margin-left: auto;
  margin-right: auto;
  border: 1px solid skyblue;
}
.add button {
  margin-top: 10px;
  width: 320px;
  height: 40px;
  border: 1px solid skyblue;
  color: #fff;
  background-color: skyblue;
  cursor: pointer;
}
</style>