<script setup>
import { useBasketStore } from '@/stores/basket'
import { useStateStore } from '@/stores/state'
import IconBasket from '@components/icons/IconBasket.vue'
import { storeToRefs } from 'pinia'

const basket = useBasketStore()
const { openSidebar } = storeToRefs(useStateStore())
</script>

<template>
  <div class="navigation__item" @click="openSidebar = !openSidebar">
    <IconBasket />
    {{ basket.amount }}
  </div>
</template>

<style scoped lang="scss">
.navigation__item {
  cursor: pointer;
}
</style>
