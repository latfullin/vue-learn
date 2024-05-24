<script setup lang="ts">
import BasketEmpty from '@components/Basket/BasketEmpty.vue'
import BasketOrder from '@components/Basket/BasketOrder.vue'
import { useBasketStore } from '@/stores/basket'
import { storeToRefs } from 'pinia'
import BasketNotEmpty from './Basket/BasketNotEmpty.vue'
import { onMounted } from 'vue'
import { useStateStore } from '@/stores/state'

const { showOrderPage } = storeToRefs(useStateStore())

const storeBasket = useBasketStore()
const { basketProducts } = storeToRefs(storeBasket)

onMounted(() => {
  storeBasket.initBasket()
})
</script>

<template>
  <div class="basket">
    <h2>Корзина</h2>
    <template v-if="showOrderPage">
      <BasketOrder
        title="Заказ оформлен!"
        subtitle="Ваш заказ #18 скоро будет передан курьерской доставке"
        image="sa"
      />
    </template>
    <template v-else>
      <BasketNotEmpty :items="basketProducts" v-if="basketProducts.length > 0" />
      <BasketEmpty
        v-else
        title="Корзина пустая"
        image="./assets/img/empty.png"
        subtitle="Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ."
      />
    </template>
  </div>
</template>

<style scoped lang="scss">
.basket {
  display: flex;
  flex-direction: column;
  height: 100%;
  padding: 30px;
}

h2 {
  color: #000;
  font-weight: 700;
  font-size: 24px;
  line-height: 29px;
  margin: 0;
}
</style>
