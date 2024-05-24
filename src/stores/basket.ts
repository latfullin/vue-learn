import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import { useProductStore } from './products'

interface IBasket {
  id: number,
  price: number
}



export const useBasketStore = defineStore({
  id: 'basket',
  // const basket: Ref<Array<IBasket>> = ref([])
  state: () => ({
    basket: [] as Array<IBasket>
  }),
  
  getters: {
    amount: (state) => state.basket.reduce((acc, e) => acc + e.price, 0),
    basketProducts: (state)  =>  {
      const products = useProductStore();
      
      return products.getItems(state.basket)
    }
  },

  actions: {
    addProduct(id: number, price: number): boolean {
      if (this.basket.findIndex((e: IBasket) => e.id === id) === -1) {
        this.basket.push({ id: id, price })
        return true
      }
  
      return false
    },
  
     checkIssetProduct (id: number): boolean {
      if (this.basket.findIndex((e: IBasket) => e.id === id) !== -1) {
        return true
      }
  
      return false
    },
     
     resetBasket () :void {
      this.basket = []
    } ,
  
    removeProduct(id: number): boolean {
      if (this.basket.find((e: IBasket) => e.id === id)) {
        this.basket.splice(this.basket.findIndex((e: IBasket) => e.id === id), 1)
        return true
      }
  
      return false
    },
  },


})
