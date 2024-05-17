import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'

interface IBasket {
  id: number
}

export const useBasketStore = defineStore('basket', () => {
  const basket: Ref<Array<IBasket>> = ref([])

  function addProduct(id: number): boolean {
    if (basket.value.findIndex((e) => e.id === id) === -1) {
      basket.value.push({ id: id })
      return true
    }

    return false
  }

  const checkIssetProduct = (id: number) => {
    if (basket.value.findIndex((e) => e.id === id) !== -1) {
      return true
    }

    return false
  } 

  const resetBasket = () => {
    basket.value = []
  } 

  function removeProduct(id: number): boolean {
    if (basket.value.find((e) => e.id === id)) {
      basket.value.splice(basket.value.findIndex((e) => e.id === id), 1)
      return true
    }

    return false
  }

  return { basket, addProduct, removeProduct }
})
