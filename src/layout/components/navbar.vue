<template>
    <div class="flex items-center px-4 flex-wrap h-12 leading-75px">
       <div class="mr-2">
           LOGO
       </div>
       <div class="flex items-center">
           <span class="text-26px font-medium mr-2">企业名称</span>
           <span class="text-base text-gray-400">子名称</span>
       </div>
    </div>
    <div class="flex items-center flex-row-reverse px-4">
        <el-dropdonw>
            <span>
                <span></span>
                <div></div>
                icon
            </span>
        </el-dropdonw>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutNavbar',
    setup() {
        
        return {
            
        }
    },
})
</script>