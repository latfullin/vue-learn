<script lang="ts" setup>
import Button from '@components/UI/Button.vue'
import IconArrow from '@components/icons/IconArrow.vue'

import { useRouter } from 'vue-router'

import { useStateStore } from '@/stores/state'
import { storeToRefs } from 'pinia'

const { openSidebar } = storeToRefs(useStateStore())

const router = useRouter()
const order = () => {
  openSidebar.value = false
  router.push('/order')
}
</script>
<template>
  <div class="basket__order">
    <div class="basket__amount">
      <div class="basket__amount-title"></div>
      <div class="basket__total"></div>
    </div>
    <Button @click="order" value="Оформить заказ">
      <template v-slot:after>
        <IconArrow position="right" />
      </template>
    </Button>
  </div>
</template>

<style scoped lang="scss">
.basket {
}
</style>
