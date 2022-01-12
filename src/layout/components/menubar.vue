<template>
    <el-scrollbar>
        <el-menu>
            <menubar-item />
        </el-menu>
    </el-scrollbar>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import MenubarItem from './menubarItem.vue'

export default defineComponent({
    name: 'LayoutMenubar',
    components: { MenubarItem },
    setup() {
        
        return {
            
        }
    },
})
</script>