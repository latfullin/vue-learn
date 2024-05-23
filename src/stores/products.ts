import { defineStore } from "pinia";

interface Product {
  id: number,
  title: string, 
  price: number,
  image: string,
}

export const useProductStore = defineStore({
  id: "products",
  state: () => ({
    loader: false as boolean,
    search: '' as string,
    items: [
      {
        id: 1,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 2,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 3,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 4,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 5,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 6,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 7,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 8,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 9,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 10,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 11,
        title: 'Мужские Кроссовки Nike Blazer Mid Suede',
        price: 321123,
        image: '@img/product-1.png'
      },
      {
        id: 12,
        title: 'выфвфы',
        price: 321123,
        image: '@img/product-1.png'
      }
    ] as Array<Product>
  }),

  getters: {
    products: state => {
      state.loader = true
      try {

        if (state.search.trim().length === 0) {
          return state.items
        } else {
          return state.items.filter((item) => item.title.toLowerCase().includes(state.search.toLocaleLowerCase()))
        }
      } finally {
        setTimeout(() => state.loader = false, 300)
      }
    }
  },

  actions: {
    getItems(items: Array<Object>): Array<Object>{
      if (items.length !== 0) { 
        return this.items.filter((item) => items.find(e => item.id === e.id))
      }

      return [];
    }
  }
})