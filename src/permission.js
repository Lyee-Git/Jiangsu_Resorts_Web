import { LoadingBar } from 'view-design'
import router from './router'
import store from './store'
import createRoutes from '@/utils/createRoutes'
import { getDocumentTitle } from './utils'

let hasMenus = false
router.beforeEach(async (to, from, next) => {
    document.title = getDocumentTitle(to.meta.title)
    LoadingBar.start()
    if (to.path === '/login') {
        next({ path: '/' })
    } else if (hasMenus) {
        next()
    } else {
        try {
            // const data = await axios.get('xxx')
            // const routes = createRoutes(data)
            const routes = createRoutes(store.state.menuItems)
            // 动态添加路由
            router.addRoutes(routes)
            hasMenus = true
            next({ path: to.path || '/' })
        } catch (error) {
            resetTokenAndClearUser()
            next(`/login?redirect=${to.path}`)
        }
    }
})

router.afterEach(() => {
    LoadingBar.finish()
})