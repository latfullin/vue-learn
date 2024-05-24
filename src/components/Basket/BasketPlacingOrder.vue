<script lang="ts" setup>
import Button from '@components/UI/Button.vue'
import IconArrow from '@components/icons/IconArrow.vue'

import { useRouter } from 'vue-router'

import { ref, computed } from 'vue'

import { useStateStore } from '@/stores/state'
import { useBasketStore } from '@/stores/basket'
import { storeToRefs } from 'pinia'
import { useOrderStore } from '@/stores/order'

const { resetBasket } = useBasketStore()

const { checkOut } = useOrderStore()

const { showOrderPage } = storeToRefs(useStateStore())

const { amount } = storeToRefs(useBasketStore())

const orderEl = ref(Node)

const percent = computed({
  get() {
    return amount.value <= 0 ? 0 : Number(amount.value * 0.05).toFixed(2)
  }
})

const router = useRouter()

const order = () => {
  showOrderPage.value = true
  checkOut()
  resetBasket()
}

defineExpose({
  orderEl
})
</script>
<template>
  <div class="basket__order" ref="orderEl">
    <div class="basket__amount">
      <div class="basket__amount-title">Итого</div>
      <div class="basket__line"></div>
      <div class="basket__total">{{ amount }}</div>
    </div>

    <div class="basket__amount">
      <div class="basket__amount-title">Налог 5%</div>
      <div class="basket__line"></div>
      <div class="basket__total">{{ percent }}</div>
    </div>
    <Button @click="order" value="Оформить заказ">
      <template v-slot:after>
        <IconArrow position="right" />
      </template>
    </Button>
  </div>
</template>

<style lang="scss">
.basket {
  &__order {
    display: flex;
    flex-direction: column;
    row-gap: 22px;
    flex: 0 1 auto;
    padding-bottom: 30px;
  }

  &__amount {
    display: flex;
    justify-content: space-between;
  }

  &__amount-title {
    flex: 1 0 auto;
  }

  &__total {
    flex: 1 0 auto;
  }

  &__line {
    border-bottom: 1px dashed #dfdfdf;
    width: 100%;
    margin-bottom: 3px;
  }
}
</style>
