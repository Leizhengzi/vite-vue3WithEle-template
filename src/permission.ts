import router from '/@/router'
import { configure, start, done } from 'nprogress'
import { RouteRecordRaw } from 'vue-router'
import { useLayoutStore } from './store/modules/layout'
import { useLocal } from './utils/tools'

configure({ showSpinner: false })

const loginRoutePath = '/login'
const defaultRoutePath = '/'

router.beforeEach(async(to) => {
    start()
    const { getStatus, getMenubar, setToken } = useLayoutStore()
    const reg = new RegExp(/^(.+)(\s\|\s.+)$/)
    const appTitle = import.meta.env.VITE_APP_TITLE
    document.title = !to.meta.title
        ? appTitle
        : appTitle.match(reg)
            ? appTitle.replace(reg, `${to.meta.title}$2`)
            : `${to.meta.title} | ${appTitle}`
    if (to.path.toLocaleLowerCase() === loginRoutePath.toLocaleLowerCase()) {
        done()
        if (getStatus.ACCESS_TOKEN) return defaultRoutePath
        return
    }

    if (!getStatus.ACCESS_TOKEN) {
        return loginRoutePath
    }

    useLocal('token')
        .then(d => setToken(d.ACCESS_TOKEN))
        .catch()

    if (getMenubar.menuList.length === 0) {
        // generate routes

        return to.fullPath
    }
})

router.afterEach(() => {
    done()
})