<script setup lang="ts">
import ProductCard from '@components/product/ProductCard.vue'
import ProductSkelet from '@components/product/ProductSkelet.vue'
import { useProductStore } from '@/stores/products'
import { storeToRefs } from 'pinia'

const { products, loader } = storeToRefs(useProductStore())

setTimeout(() => {
  loader.value = false
}, 1000)
</script>

<template>
  <div class="product__items">
    <ProductCard
      v-for="item in products"
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
    position: relative;
    gap: 52px 40px;
    padding-top: 40px;
    padding-bottom: 20px;
  }
}
</style>
