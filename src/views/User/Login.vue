<template>
    <div class="w-screen h-screen bg-gray-800">
       <div class="layout-login">
           <h3 class="text-2xl font-semibold text-gray-100 text-center mb-6">系统登录</h3>
           <el-form :model="form" ref="refForm" :rules="rules" label-width="80px" label-position="right">
               <el-form-item class="mb-6 -ml-20" prop="name">
                   <el-input v-model="form.name" placeholder="请输入用户名" prefix-icon="el-icon-user" />
               </el-form-item>
               <el-form-item class="mb-6 -ml-20" prop="pwd">
                   <el-input v-model="form.pwd" placeholder="请输入密码" prefix-icon="el-icon-lock" show-password />
               </el-form-item>
               <el-form-item class="mb-6 -ml-20">
                   <el-button type="primary" class="w-full">登录</el-button>
               </el-form-item>
           </el-form>
       </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent, reactive, ref } from 'vue'
import { useLayoutStore } from '/@/store/modules/layout'

const formRender = () => {
    let form = reactive({
        name: 'admin',
        pwd: 'admin'
    })
    const refForm = ref(null)
    const rules = reactive({
        name: [
            { validator: (rule: any, value: any, callback: (arg0?: Error|undefined) => void) => {
                if (!value) {
                    return callback(new Error('用户名不能为空'))
                }
                callback()
            }, trigger: 'blur'}
        ],
        pwd: [
            { validator: (rule: any, value: any, callback: (arg0?: Error|undefined) => void) => {
                if (!value) {
                    return callback(new Error('密码不能为空'))
                }
                callback()
            }, trigger: 'blur'}
        ]
    })
    return {
        form,
        refForm,
        rules
    }
}

export default defineComponent({
    name: 'Login',
    setup() {
        return {
            ...formRender()
        }
    },
})
</script>

<style lang="postcss" scoped>
.layout-login {
    padding-top: 200px;
    width: 400px;
    margin: 0 auto;

    ::v-deep(.el-input__inner) {
        border: 1px sold hsla(0, 0%, 100%, 0.1);
        background: rgba(0, 0, 0, 0.1);
        border-radius: 5px;
        color: #ddd;
    }
}
</style>