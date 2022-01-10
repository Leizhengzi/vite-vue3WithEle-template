import axios, { AxiosResponse } from 'axios'
import { ElLoading, ElNotification } from 'element-plus'
import { components } from '../router/asyncRouter'

let loading:{close():void}

const request = axios.create({
    baseURL: import.meta.env.VUE_APP_API_BASE_URL as string | undefined,
    timeout: 600000
})

const errorHandler = (error:{message:string}) => {
    loading.close()
    console.log(`err${error}`)
    ElNotification({
        title: '请求失败',
        message: error.message,
        type: 'error'
    })
    return Promise.reject(error)
}

request.interceptors.request.use(config => {
    loading = ElLoading.service({
        lock: true,
        text: 'Loading',
        spinner: 'el-icon-loading',
        background: 'rgba(0,0,0,0.4)'
    })
}, errorHandler)

request.interceptors.response.use((response:AxiosResponse<IResponse>) => {
    const { data } = response
    loading.close()
    if (data.status !== undefined && data.status !== 200) {
        let title = '请求失败'
        ElNotification({
            title,
            message: data.errorMsg,
            type: 'error'
        })
        return Promise.reject(new Error(data.errorMsg || 'Error'))
    }
    return response
}, errorHandler)

export default request