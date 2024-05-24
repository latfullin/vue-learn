<script setup lang="ts">
import BasketEmpty from '@components/Basket/BasketEmpty.vue'
import { useBasketStore } from '@/stores/basket'
import { storeToRefs } from 'pinia'
import BasketNotEmpty from './Basket/BasketNotEmpty.vue'

const { basketProducts } = storeToRefs(useBasketStore())
</script>

<template>
  <div class="basket">
    <h2>Корзина</h2>
    <BasketNotEmpty :items="basketProducts" v-if="basketProducts.length > 0" />
    <BasketEmpty v-else />
  </div>
</template>

<style scoped lang="scss">
.basket {
  height: 100%;
  padding: 30px;
}

h2 {
  color: #000;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
}
</style>
