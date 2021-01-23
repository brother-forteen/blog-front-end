export default [
    {
        path: '/user',
        name: 'user',
        component: () => import(/* webpackChunkName: "login" */ '@/views/user/Index.vue')
    }
]