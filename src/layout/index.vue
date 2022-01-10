<template>
    <div class="flex h-screen">
       <div class="flex flex-1 flex-col overflow-x-hidden overflow-y-auto">
           <div class="flex justify-between items-center h-12 shadow-sm overflow-hidden relative z-10">
               Navbar
           </div>
           <div class="flex-1 overflow-hidden">
               <div class="flex flex-1 overflow-hidden">
                   Menubar
               </div>
               Main-Content
           </div>
       </div>
    </div>
</template>
<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
    name: 'Layout',
    setup() {
        
        return {
            
        }
    },
})
</script>