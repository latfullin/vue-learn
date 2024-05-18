import { ref,  type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useStateStore = defineStore('state', () => {
  const openSidebar: Ref<boolean> = ref(false)


  return { openSidebar }
})
