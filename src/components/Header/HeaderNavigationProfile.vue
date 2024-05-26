<script setup>
import IconProfile from '@components/icons/IconProfile.vue'
</script>

<template>
  <router-link :to="{ name: 'profile' }" class="navigation__item">
    <IconProfile />
    Профиль
  </router-link>
</template>
