<template>
    <el-scrollbar>
        <router-view v-slot="{Component}">
            <transition name="fade-transform" mode="out-in">
                <keep-alive>
                    <component :is="Component" :key="key" class="m-3 relative" />
                </keep-alive>
            </transition>
        </router-view>
    </el-scrollbar>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'LayoutContent',
    setup() {
        
        return {
            
        }
    },
})
</script>