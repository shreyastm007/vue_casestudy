import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import store from './store/store.js'


import HomeComp from "./components/HomeComp"
import LoginComp from "./components/LoginComp"

import SignupComp from "./components/SignupComp"
import CartComp from "./components/CartComp"
import ProductComp from "./components/ProductComp"
import BuyComp from "./components/BuyComp"







let router= createRouter ({
    history: createWebHistory(),//to remember the previous pages using browser history
routes:[
    {
        path:"/",
        component:HomeComp
    },
    {
        path:"/login",
        component:LoginComp
    },
    {
        path:"/signup",
        component:SignupComp
    },
    {
        path:"/cart",
        component:CartComp
    },
    {
        path:"/products",
        component:ProductComp
    },
    {
        path:"/buy",
        component:BuyComp
    },

]
})

router.beforeEach((to,from) =>{
    console.log("to",to)
    console.log("from",from)
    if(to.path === "/cart" && store.state.isAuthenticated){
        return true //if Authentication is true
    }else if(to.path === "/cart" && !store.state.isAuthenticated){
        return '/login' //if authentication is false
    }
    if(to.path === "/products" && store.state.isAuthenticated){
        return true //if Authentication is true
    }else if(to.path === "/products" && !store.state.isAuthenticated){
        return '/login' //if authentication is false
    }
    
})

let app=createApp(App)

app.use(store)
app.use(router)



app.mount('#app')

