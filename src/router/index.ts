import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import { components } from './asyncRouter'
import { IMenubarList } from '/@/type/store/layout'

const Components: IObject<() => Promise<typeof import('*.vue')>> = Object.assign({}, components, {
    // Layout: (() => import('/@/layout/index.vue')) as unknown as () => Promise<typeof import('*.vue')>
})

export const allowRouter: Array<IMenubarList> = [
    {
        name: 'Login',
        path: '/login',
        component: Components.Login,
        meta: { title: '登录', icon: 'el-icon-eleme', hidden: true}
    }
]

const router = createRouter({
    history: createWebHistory(),
    routes: allowRouter as RouteRecordRaw[]
})

export default router