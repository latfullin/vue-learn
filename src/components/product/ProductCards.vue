<script setup>
import ProductCard from '@components/product/ProductCard.vue'
const test = [
  {
    id: 1,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '1299132d329',
    image: '@img/product-1.png'
  },
  {
    id: 2,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '1299132d329',
    image: '@img/product-1.png'
  },
  {
    id: 3,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '1299132d329',
    image: '@img/product-1.png'
  },
  {
    id: 4,
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: '1299132d329',
    image: '@img/product-1.png'
  }
]
</script>

<template>
  <div class="product__items">
    <ProductCard v-for="item in test" :image="item.image" :price="item.price" :id="item.id" />
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
