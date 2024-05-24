<script setup lang="ts">
import Button from '@components/UI/Button.vue'
import IconArrow from '@components/icons/IconArrow.vue'

import { useStateStore } from '@/stores/state'
import { storeToRefs } from 'pinia'
import { useRouter } from 'vue-router'

const route = useRouter()
const { openSidebar } = storeToRefs(useStateStore())

defineProps<{
  title: string
  subtitle: string
  image: string
}>()

const close = () => {
  openSidebar.value = false
  route.push('/')
}
</script>

<template>
  <div class="basket__empty">
    <div class="basket__empty-image">
      <img class="basket__empty-images" src="@img/empty.png" alt="" />
      <h2 class="basket__empty-title">{{ title }}</h2>
      <div class="basket__empty-subtitle">
        {{ subtitle }}
      </div>
      <Button @click="close" value="Вернуться назад">
        <template v-slot:before>
          <IconArrow />
        </template>
      </Button>
    </div>
  </div>
</template>

<style lang="scss">
.basket {
  &__empty-images {
    max-width: 120px;
  }

  &__empty-title {
    font-size: 22px;
    line-height: 28px;
    font-weight: 600;
    margin: 20px 0 0;
  }
  &__empty-subtitle {
    font-weight: 400;
    font-size: 16px;
    opacity: 0.4;
    padding: 10px 0 40px;
  }

  &__empty {
    display: flex;
    align-items: center;
    padding: 0 30px;
    justify-content: center;
    text-align: center;
    height: 100%;
  }
}
</style>
