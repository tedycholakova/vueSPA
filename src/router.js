import Vue from 'vue';
import VueRouter from 'vue-router';
import Category from './components/Category.vue';
import Login from './components/Login.vue'

Vue.use(VueRouter)

const router = new VueRouter({
    mode: 'history', 
    linkActiveClass: 'is-active', 
    routes: [
        { path: '/category/front-end', component: Category },
        { path: '/login', component: Login },
        { path: '/', redirect: '/category/front-end' }
    ]
})

export default router