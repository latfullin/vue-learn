<script setup lang="ts">
import BasketItem from '@components/Basket/BasketItem.vue'
interface Product {
  id: number
  title: string
  price: number
  image: string
}

defineProps<{
  items: array<Product>
}>()
</script>
<template>
  <div class="basket__items">
    <BasketItem v-for="item in items" :id="item.id" :title="item.title" :price="item.price" />
  </div>
</template>

<style lang="scss">
.basket {
  &__items {
    display: flex;
    flex-direction: column;
    padding-top: 30px;
    row-gap: 20px;
    flex: 1 0 60%;
    overflow-y: auto;

    &::-webkit-scrollbar {
      width: 5px;
      background-color: #dfdfdf;
    }

    &::-webkit-scrollbar-thumb {
      border-radius: 5px;
      background-color: #acacac;
    }
  }
}
</style>
