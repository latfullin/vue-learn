<script setup>
import IconBasket from '@components/icons/IconBasket.vue'
import { ref } from 'vue'

const total = ref(0)
</script>

<template>
  <router-link to="/basket" class="navigation__item">
    <IconBasket />
    {{ total }}
  </router-link>
</template>
