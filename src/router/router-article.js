export default [
    {
        path: '/articleAdd',
        name: 'articleAdd',
        component: () => import(/* webpackChunkName: "article" */ '@/views/article/add.vue')
    }
]