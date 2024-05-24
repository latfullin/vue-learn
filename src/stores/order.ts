import { defineStore } from "pinia";
import { useBasketStore } from "./basket";

interface IOrder {
  id: number,
  products: Array<number>
}

export const useOrderStore = defineStore({
  id: 'order',
  
  state: () => ({
    orders: [] as Array<IOrder>
  }),

  actions: {
    checkOut():void {
      const {basket} = useBasketStore()
      const storageOrder = localStorage.getItem('order')
      
      if (storageOrder === null) {
        
      } else {

      }      
    }
  }
})