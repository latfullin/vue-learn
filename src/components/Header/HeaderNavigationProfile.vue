<script setup>
import IconProfile from '@components/icons/IconProfile.vue'
import { ref } from 'vue'

const total = ref(0)
</script>

<template>
  <router-link to="/profile" class="navigation__item">
    <IconProfile />
    Профиль
  </router-link>
</template>
