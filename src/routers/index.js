import Vue from 'vue'
import Router from 'vue-router'
import store from '../store/index'
import Home from '../components/Home'
import Login from '../components/login'
import About from '../components/About'
import Dashboard from '../components/Dashboard'

Vue.use(Router)


const router = new Router({
    mode: 'history',
    routes: [{
        path: '/',
        name: 'home',
        component: Home
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/dashboard',
        name: 'dashboard',
        component: Dashboard,
        meta: {
            requiresAuth: true
        }
    }]
})

router.beforeEach((to, from, next) => {
    if (to.matched.some(record => record.meta.requiresAuth)) {
        if (store.getters.isLoggedIn) {
            next()
            return
        }
        next('/login')
    } else {
        next()
    }
})

export default router