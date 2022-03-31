<template>
<img class="logo" src="../assets/download.jpg" />
  <h1>...</h1>
  <h1>Log In</h1>
    <div class="register">
    <input type="text" v-model="email" placeholder="Enter Email" />
    <input type="Password" v-model="password" placeholder="Enter Password" />
    <button v-on:click="login">Log In</button>
  </div>
  <div class="Login">
    Not an Existing User, 
    <router-link to="/sign-up">Sign In</router-link> Here
  </div>
</template>
<script>
import axios from 'axios'
export default {
    name:'Login',
    data(){
        return{
            email:'',
            password:''
        }
    },
    methods:{
       async login(){
           let result = await axios.get(
               `http://localhost:3000/users?email=${this.email}&password=${this.password}`
           );
           if(result.status==200 && result.data.length > 0){
               localStorage.setItem("user-info",JSON.stringify(result.data[0]));
               this.$router.push({name: "Home"});
           }
            
        }
    },
    mounted(){
      let user=localStorage.getItem('user-info');
      if(user){
        this.$router.push({name:'Home'})
      }
    }
    
}
</script>
<style scoped>
h1 {
  color: skyblue;
}
</style>