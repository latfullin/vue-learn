<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from './components/TheHeader.vue'
import TheSidebar from '@components/TheSidebar.vue'
</script>

<template>
  <TheHeader />
  <main>
    <RouterView />
    <TheSidebar />
  </main>
</template>

<style lang="scss"></style>
