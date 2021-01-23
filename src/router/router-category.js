export default [
    {
        path: '/category',
        name: 'category',
        component: () => import(/* webpackChunkName: "category" */ '@/views/category/Index.vue')
    }
]