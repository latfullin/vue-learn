import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

export const useBasketStore = defineStore('basket', () => {

  const basket: Ref<[object]>  = ref([])

  function addProduct(id: number): boolean {
    if (basket.value.findIndex((e) => e.id === id) === -1) {
      basket.value.push({ id: id })
      return true
    }

    return false
  }

  function removeProduct(id: number) : boolean {
    if (basket.value.find((e) => e.id === id)) {
      basket.value.push({ id: id })
      return true
    }

    return false
  }

  return { basket, addProduct, removeProduct }
})
