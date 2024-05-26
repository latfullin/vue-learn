<script setup lang="ts">
import ProductCard from '@components/product/ProductCard.vue'
import ProductSkelet from '@components/product/ProductSkelet.vue'
import { useProductStore } from '@/stores/products'
import { storeToRefs } from 'pinia'

const { loader } = storeToRefs(useProductStore())

defineProps<{
  products: Array<T>
}>()

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
      v-if="!loader && products"
    />
    <ProductSkelet v-for="item in 12" v-else />
  </div>
</template>

<style lang="scss">
.product {
  &__items {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(var(--width-card), 1fr));
    position: relative;
    gap: var(--default-row-gap) var(--default-column-gap);
    padding-top: 40px;
    padding-bottom: 20px;
  }
}
</style>
