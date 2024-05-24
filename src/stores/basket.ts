import { defineStore } from 'pinia'
import { useProductStore } from './products'

interface IBasket {
  id: number,
}

export const useBasketStore = defineStore({
  id: 'basket',
  // const basket: Ref<Array<IBasket>> = ref([])
  state: () => ({
    basket: [] as Array<IBasket>,
    initLocalStorage: false as boolean,
    favorites: [] as Array<number>
  }),
  
  getters: {
    amount: (state) :number => {
      const { getItems } = useProductStore()
      
      return getItems(state.basket).reduce((acc, e) => acc + e.price, 0)
    },
    
    basketProducts: (state)  =>  {
      const products = useProductStore();
      
      return products.getItems(state.basket)
    }
  },

  actions: {
    addProduct(id: number, price: number): boolean {
      if (this.basket.findIndex((e: IBasket) => e.id === id) === -1) {
        this.basket.push({ id })
        this.saveBasketInStorage()

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
       
       this.saveBasketInStorage()
    },
  
    removeProduct(id: number): boolean {
      if (this.basket.find((e: IBasket) => e.id === id)) {
        this.basket.splice(this.basket.findIndex((e: IBasket) => e.id === id), 1)
       
        this.saveBasketInStorage()
        return true
      }
  
      return false
    },
    
    saveBasketInStorage() {
      localStorage.setItem('basket', JSON.stringify(this.basket))
    },

    initBasket(): void {
      if (this.initLocalStorage) {
        return
      }

      const basket = localStorage.getItem('basket')
      
      if (basket !== null) {
        this.basket = JSON.parse(basket)
      }

      this.initLocalStorage = true
    }
  },
})
