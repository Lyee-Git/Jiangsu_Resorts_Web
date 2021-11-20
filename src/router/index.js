import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const commonRoutes = [
    {
        path: '/404',
        name: '404',
        meta: { title: '404' },
        component: () => import('../components/404.vue'),
    },
    { path: '/', redirect: '/home' },
]

export const asyncRoutes = {
    home: {
        path: 'home',
        name: 'home',
        meta: { title: '主页' },
        component: () => import('../views/Home.vue'),
    },
    location: {
        path: 'location',
        name: 'location',
        meta: { title: '按景区位置查看' },
        component: () => import('../views/map.vue'),
    },
}
importPages(require.context('../views/resorts', true, /\.vue$/, 'lazy'));

//动态导入所有景区的Router
function importPages(r) {
    r.keys().forEach(key => {
        asyncRoutes[key.split('.')[1].slice(1)] = {path: key.split('.')[1].slice(1), name: key.split('.')[1].slice(1), component: () => r(key)};
        //console.log(asyncRoutes);
    });
}

const createRouter = () => new Router({
    routes: commonRoutes,
})

const router = createRouter()

export function resetRouter() {
    const newRouter = createRouter()
    router.matcher = newRouter.matcher
}

export default router