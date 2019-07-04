import Vue from 'vue'
import Router from 'vue-router'
import About from '@/views/About'
import Blog from '@/views/Blog'
import Contact from '@/views/Contact'
import Resume from '@/views/Resume'
import Portfolio from '@/views/Portfolio'
import Home from '@/views/Home'

Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/about',
            name: 'About',
            component: About
        },
        {
            path: '/blog',
            name: 'Blog',
            component: Blog
        },
        {
            path: '/contact',
            name: 'Contact',
            component: Contact
        },
        {
            path: '/resume',
            name: 'Resume',
            component: Resume
        },
        {
            path: '/portfolio',
            name: 'Portfolio',
            component: Portfolio
        },
    ]
})