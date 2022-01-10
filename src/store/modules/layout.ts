import { defineStore } from 'pinia'
import router, { allowRouter } from '/@/router'
import { ILayout, IMenubar, IStatus } from '/@/type/store/layout'
import { getLocal, setLocal } from '/@/utils/tools'

const { ACCESS_TOKEN } = getLocal<IStatus>('token')

export const useLayoutStore = defineStore({
    id: 'layout',
    state: ():ILayout => ({
        menubar: {
            menuList: []
        },
        status: {
            isLoading: false,
            ACCESS_TOKEN: ACCESS_TOKEN || ''
        }
    }),
    getters: {
        getMenubar():IMenubar {
            return this.menubar
        },
        getStatus():IStatus {
            return this.status
        }
    },
    actions: {
        setToken(token:string):void {
            this.status.ACCESS_TOKEN = token
            // cache 7 days
            setLocal('token', this.status, 1000 * 360 * 360 * 24 * 7)
        }
    }
})