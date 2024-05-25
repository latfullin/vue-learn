import { defineStore } from 'pinia'
import { useProductStore } from './products'

interface IBasket {
  id: number
}

export const useBasketStore = defineStore({
  id: 'basket',
  // const basket: Ref<Array<IBasket>> = ref([])
  state: () => ({
    basket: [] as Array<IBasket>,
    initLocalStorage: false as boolean,
    favorites: [] as Array<IBasket>
  }),

  getters: {
    amount: (state): number => {
      const { getItems } = useProductStore()

      return getItems(state.basket).reduce((acc, e) => acc + e.price, 0)
    },

    basketProducts: (state) => {
      const products = useProductStore()

      return products.getItems(state.basket)
    }
  },

  actions: {
    addProduct(id: number): boolean {
      if (this.basket.findIndex((e: IBasket) => e.id === id) === -1) {
        this.basket.push({ id })
        this.saveBasketInStorage()

        return true
      }

      return false
    },

    checkIssetProduct(id: number): boolean {
      if (this.basket.findIndex((e: IBasket) => e.id === id) !== -1) {
        return true
      }

      return false
    },

    resetBasket(): void {
      this.basket.splice(0, this.basket.length)

      this.saveBasketInStorage()
    },

    removeProduct(id: number): boolean {
      if (this.basket.find((e: IBasket) => e.id === id)) {
        this.basket.splice(
          this.basket.findIndex((e: IBasket) => e.id === id),
          1
        )

        this.saveBasketInStorage()
        return true
      }

      return false
    },

    checkAddInBasket(id: number): boolean {
      if (this.basket.find((element: IBasket) => element.id === id)) {
        return false
      } else {
        return true
      }
    },

    checkAddInFavorite(id: number): boolean {
      if (this.favorites.find((favorite) => favorite.id === id)) {
        return false
      } else {
        return true
      }
    },

    toggleFavorite(id: number): void {
      
      console.log(this.favorites.find((e) => e.id === id) === undefined);

      if (this.favorites.find((e) => e.id === id) === undefined) {
        this.addFavorite(id)
      } else {
        this.removeFavorite(id)
      }
    },

    addFavorite(id: number) {
      if (this.favorites.find((e) => e.id === id) === undefined) {
        this.favorites.push({id})
        this.saveFavorite()
      }
    },

    removeFavorite(id: number): boolean {
      if (this.favorites.find((e) => e.id === id)) {
        this.favorites.splice(
          this.favorites.findIndex((e) => e.id === id),
          1
        )

        this.saveFavorite()
        return true
      }

      return false
    },

    saveFavorite() {
      localStorage.setItem('favorite', JSON.stringify(this.favorites))
    },

    getFavorite() {
      this.favorites =
        localStorage.getItem('favorite') == null ? [] : JSON.parse(localStorage.getItem('favorite'))
    },

    saveBasketInStorage() {
      localStorage.setItem('basket', JSON.stringify(this.basket))
    },

    initBasket(): void {
      if (this.initLocalStorage) {
        return
      }

      const basket = localStorage.getItem('basket')
      const favorite = localStorage.getItem('favorite')

      if (basket !== null) {
        this.basket = JSON.parse(basket)
      }

      if (favorite !== null) {
        this.favorites = JSON.parse(favorite)
      }

      this.initLocalStorage = true
    }
  }
})
