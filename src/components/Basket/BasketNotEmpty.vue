<script lang="ts" setup>
import BasketItems from '@components/Basket/BasketItems.vue'

defineProps<{
  items: Array<Object>
}>()
</script>
<template>
  <BasketItems :items="items" />
</template>
<style lang="scss">
.basket {
}
</style>
