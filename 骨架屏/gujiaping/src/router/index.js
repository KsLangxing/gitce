import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'HelloWorld',
            component: resolve => require(['@/components/HelloWorld'], resolve)
        },
        {
            path: '/LazyMan',
            name: 'LazyMan',
            component: resolve => require(['@/components/LazyMan'], resolve)
        },
        {
            path: '/Listsort',  // 拖拽排序
            name: 'Listsort',
            component: resolve => require(['@/components/Listsort'], resolve)
        },
        {
            path: '/Objlistsort',  // 拖拽排序
            name: 'Objlistsort',
            component: resolve => require(['@/components/Objlistsort'], resolve)
        }
    ]
})
