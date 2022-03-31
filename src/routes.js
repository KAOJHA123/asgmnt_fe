import Home from './components/Home.vue'
import SignUp from './components/SignUp.vue'
import Login from './components/Login.vue'
import Addrecipe from './components/Addrecipe.vue'
import Updaterecipe from './components/Updaterecipe.vue'
import {createRouter,createWebHistory} from 'vue-router'

const routes=[
    {
        name:'Home',
        component:Home,
        path:'/'
    },
    {
        name:'SignUp',
        component:SignUp,
        path:'/sign-up'
    },
    {
        name:'Login',
        component:Login,
        path:'/login'
    },
    {
        name:'Addrecipe',
        component:Addrecipe,
        path:'/addrecipe'
    },
    {
        name:'Updaterecipe',
        component:Updaterecipe,
        path:'/updaterecipe'
    }
]
const router=createRouter(
    {
        history:createWebHistory(),
        routes
    }
)
export default router
