import { createRouter,createWebHistory } from 'vue-router'
// import util from './util'

const router = createRouter({
    history:createWebHistory(import.meta.env.BASE_URL),
    routes:[
        {
            path:'/',
            name:'home',
            component:() => import('./view/Home.vue')
        },
        {
            path:'/sharedata',
            name:'share-data',
            component:() => import('./view/ShareData.vue')
        },
        {
            path:'/novel-app',
            name:'novel-app',
            component:() => import('./view/NovelApp.vue')
        },
        {
            path:'/user',
            component:() => import("./view/User.vue"),
            children:[
                {
                    path:'login',
                    name:'login',
                    component:() => import('./components/user/login.vue')
                },
                {
                    path:'register',
                    name:'register',
                    component:() => import('./components/user/register.vue')
                }
            ]
        }
    ]
})

// router.beforeEach((to,from,next)=>{
//     //check auth


//     next()
// })


export default router;