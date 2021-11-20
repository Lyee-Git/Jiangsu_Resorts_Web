import { asyncRoutes } from '@/router'

// 将菜单信息转成对应的路由信息 动态添加
export default function createRoutes(data) {
    const result = []
    const children = []

    result.push({
        path: '/',
        component: () => import('../components/Index.vue'),
        children,
    })

    data.forEach(item => {
        generateRoutes(children, item)
    })

    result.push(
        { path: '*', redirect: '/404' },
    )

    return result
}

function generateRoutes(children, item) {
    if (item.name) {
        if (asyncRoutes[item.name]) children.push(asyncRoutes[item.name])
    } else if (item.children) {
        item.children.forEach(e => {
            generateRoutes(children, e)
        })
    }
}