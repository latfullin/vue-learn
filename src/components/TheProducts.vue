<script setup>
import ProductCards from '@components/product/ProductCards.vue'
</script>

<template>
  <div class="product">
    <div class="product__title">Все кроссовки</div>
  </div>

  <ProductCards />
</template>

<style lang="scss">
.product {
  &__title {
    font-weight: 700;
    line-height: 39px;
    font-size: 32px;
  }
}
</style>
