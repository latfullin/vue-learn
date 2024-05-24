<script lang="ts" setup>
import BasketItems from '@components/Basket/BasketItems.vue'
import BasketPlacingOrder from '@components/Basket/BasketPlacingOrder.vue'

defineProps<{
  items: Array<Object>
}>()
</script>
<template>
  <div class="basket__not-empty">
    <BasketItems :items="items" />
    <BasketPlacingOrder />
  </div>
</template>
<style scoped lang="scss">
.basket {
  &__not-empty {
    display: flex;
    flex-direction: column;
    flex: 1 0 auto;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
    row-gap: 30px;
  }
}
</style>
