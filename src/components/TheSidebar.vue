<script setup lang="ts">
import { watch } from 'vue'
import { useStateStore } from '@/stores/state'
import { storeToRefs } from 'pinia'
import TheBackdrop from '@components/TheBackdrop.vue'
import { useRouter } from 'vue-router'
import { ref, type Ref } from 'vue'
import TheBasket from './TheBasket.vue'

const router = useRouter()

const { openSidebar } = storeToRefs(useStateStore())

const backdrop: Ref = ref(null)

const open = (event: Event): void => {
  window.addEventListener('click', close)
}

const close = (event: Event): void => {
  if (event.target == backdrop.value.backdrop) {
    router.push('/')
    openSidebar.value = false
    window.removeEventListener('click', open)
  }
}

watch(openSidebar, open)
</script>

<template>
  <div :class="[{ sidebar__show: openSidebar }, 'sidebar']">
    <TheBasket />
  </div>
  <TheBackdrop :show="openSidebar" ref="backdrop" />
</template>

<style lang="scss">
.sidebar {
  position: fixed;
  top: 0;
  background-color: #fff;
  right: -100%;
  height: 100%;
  width: 385px;
  max-height: 100vh;
  opacity: 0;
  transition:
    opacity 0.3s,
    right 0.5s;

  &__show {
    right: 0;
    opacity: 1;
    z-index: 100;
  }
}
</style>
