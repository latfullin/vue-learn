<script setup>
import { useBasketStore } from '@/stores/basket'
import IconBasket from '@components/icons/IconBasket.vue'

const basket = useBasketStore()
</script>

<template>
  <router-link to="/basket" class="navigation__item">
    <IconBasket />
    {{ basket.amount }}
  </router-link>
</template>
