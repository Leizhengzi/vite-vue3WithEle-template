export interface IMenubar {
    menuList:Array<IMenubarList>
}
export interface ILayout {
    menubar: IMenubar
    status: IStatus
}
export interface IStatus {
    isLoading: boolean
    ACCESS_TOKEN: string
}
export interface IMenubarList {
    parentId?: number | string
    id?: number | string
    name: string
    path: string
    redirect?: string | { name: string }
    meta: {
        icon?: string
        title: string
        permission?: string[]
        activeMenu?: string
        noCache?: boolean
        hidden?: boolean
        alwaysShow?: boolean
    }
    component: (() => Promise<typeof import('*.vue')>) | string
    children?: Array<IMenubarList>
}