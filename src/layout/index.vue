<template>
    <div>
       <div class="overflow-x-hidden overflow-y-auto">
           <div class="flex justify-between items-center h-75px shadow-sm overflow-hidden relative z-10">
               <layout-navbar />
           </div>
           <div class="flex overflow-hidden">
                <layout-menubar />
               <div class="overflow-hidden">
                    <layout-content />
               </div>
           </div>
       </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'
import LayoutNavbar from './components/navbar.vue'
import LayoutMenubar from './components/menubar.vue'
import LayoutContent from './components/content.vue'

export default defineComponent({
    name: 'Layout',
    components: { LayoutNavbar, LayoutMenubar, LayoutContent },
    setup() {
        
        return {
            
        }
    },
})
</script>