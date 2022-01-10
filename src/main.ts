import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import locale from 'element-plus/lib/locale/lang/zh-cn'
import router from '/@/router/index'
import { pinia } from '/@/store'
import '/@/permission'

import 'element-plus/dist/index.css'
import 'nprogress/nprogress.css'
import '/@/assets/css/index.css'

const app = createApp(App)
app.use(ElementPlus, { locale })
app.use(router)
app.use(pinia)
app.mount('#app')
