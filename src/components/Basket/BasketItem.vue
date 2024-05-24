<script setup lang="ts">
import { useBasketStore } from '@/stores/basket'
import Close from '@components/UI/Close.vue'

const { removeProduct } = useBasketStore()

defineProps<{
  id: number
  title: string
  price: number
}>()
</script>

<template>
  <div class="basket__item">
    <div class="basket__item-row">
      <div class="basket__item-col">
        <img class="basket__item-img" src="@img/product-1.png" alt="" />
      </div>
      <div class="basket__item-col">
        <div class="basket__item-title">
          {{ title }}
        </div>
        <div class="basket__item-price">{{ price }} руб.</div>
      </div>
    </div>
    <Close class="basket__icon-close" @click="() => removeProduct(id)" />
  </div>
</template>

<style scoped lang="scss">
.basket {
  &__item {
    position: relative;
    border-radius: 20px;
    border: 1px solid #f3f3f3;
  }

  &__item-title {
    font-size: 14px;
    font-weight: 400;
    line-height: 17px;
  }

  &__item-price {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }

  &__item-col {
    display: flex;
    flex-direction: column;
    row-gap: 6px;
    &:first-child {
      flex: 1 0 auto;
    }
  }

  &__item-img {
    max-width: 70px;
    max-height: 70px;
  }

  &__item-row {
    display: flex;
    align-items: center;
    padding: 20px 64px 20px 20px;
    column-gap: 20px;
  }

  &__icon-close {
    position: absolute;
    right: 20px;
    bottom: 20px;
  }
}
</style>
