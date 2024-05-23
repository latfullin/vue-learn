<script setup lang="ts">
const props = defineProps<{
  id: number
  title: string
  price: number
}>()
</script>

<template>
  <div class="">
    {{ id }}
    {{ title }}
    {{ price }}
  </div>
</template>

<style lang="scss"></style>
