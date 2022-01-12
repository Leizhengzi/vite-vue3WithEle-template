<template>
    <!-- <el-submenu>
        <template #title>
            <span>工作台</span>
        </template>
    </el-submenu> -->
    <el-menu-item class="flex flex-row items-center pl-1">
        <template #title>工作台</template>
    </el-menu-item>
    
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'MenubarItem',
    setup() {
        
        return {
            
        }
    },
})
</script>