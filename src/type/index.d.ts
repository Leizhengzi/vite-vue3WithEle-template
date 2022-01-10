export {}
declare global {
    interface IResponse<T = any> {
        status?: number
        content: T
        errorMsg: string
    }
    interface IObject<T> {
        [index:string]: T
    }
    interface ImportMetaEnv {
        VITE_APP_TITLE: string
        VITE_PORT: number
        VITE_PROXY: string
    }
}