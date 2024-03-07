<script setup>
import IconFavorite from '@components/icons/IconFavorite.vue'
import { ref } from 'vue'

const total = ref(0)
</script>

<template>
  <router-link to="/favorite" class="navigation__item">
    <IconFavorite />
    Закладки
  </router-link>
</template>
