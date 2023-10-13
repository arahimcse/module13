import { createRouter, createWebHistory } from "vue-router";
import UserProfile from '../components/UserProfile.vue'
import UserDetails from '../components/UserDetails.vue'
import NotFound from '../components/NotFound.vue'
const routes = [
    {
        path:"/",
        name:"home",
        component: UserProfile
    },
    {
        path: "/userdetail",
        name: 'userdetail',
        component: UserDetails
    },
    {
        path: '/:pathMatch(.*)*', 
        name: 'NotFound', 
        component: NotFound 
    }
     
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router;