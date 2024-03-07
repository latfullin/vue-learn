<script setup>
import ProductCard from '@components/product/ProductCard.vue'
const test = [1, 2, 3, 4, 5]
</script>

<template>
  <div class="product__items">
    <ProductCard v-for="item in test" />
  </div>
</template>

<style lang="scss">
.product {
  &__items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 52px 40px;
    padding-top: 40px;
  }
}
</style>
