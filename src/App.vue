<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
  </main>
</template>

<style lang="scss"></style>
