import {createRouter,createWebHashHistory} from 'vue-router'

const loadComponent = (componentName) => import(`./components/${componentName}.vue`)


const routes = [
    {
        name:'login',
        path: '/',
        component: loadComponent('login')
    },
    {
        name:'userRegistration',
        path: '/registration',
        component: loadComponent('registration')
    },
    // {
    //     path: '/auth/google/redirect',
    //     name: 'google-callback',
    //     component: loadComponent('login')
    // },
    {
        path: '/Dashboard',
        name: '/dashboard',
        component: loadComponent('dashboard')
    }
    
]

const router = createRouter({
    history: createWebHashHistory(),
    routes, 
})

export default router