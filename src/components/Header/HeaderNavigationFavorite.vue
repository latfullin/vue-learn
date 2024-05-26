<script setup>
import IconFavorite from '@components/icons/IconFavorite.vue'
</script>

<template>
  <router-link :to="{ name: 'favorite' }" class="navigation__item">
    <IconFavorite />
    Закладки
  </router-link>
</template>
