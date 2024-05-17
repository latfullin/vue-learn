<script setup lang="ts">
import { ref, type Ref } from 'vue'
import ProductCard from '@components/product/ProductCard.vue'
import ProductSkelet from '@components/product/ProductSkelet.vue'

const loader: Ref<boolean> = ref(true)

setTimeout(() => {
  loader.value = false
}, 1000)

const test = [
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
  }
]
</script>

<template>
  <div class="product__items">
    <ProductCard
      v-for="item in test"
      :image="item.image"
      :price="item.price"
      :id="item.id"
      v-if="!loader"
    />
    <ProductSkelet v-for="item in 12" v-else />
  </div>
</template>

<style lang="scss">
.product {
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 52px 40px;
    padding-top: 40px;
    padding-bottom: 20px;
  }
}
</style>
