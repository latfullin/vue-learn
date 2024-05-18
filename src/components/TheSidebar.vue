<script setup lang="ts">
import { watch } from 'vue'
import { useStateStore } from '@/stores/state'
import { storeToRefs } from 'pinia'
import TheBackdrop from '@components/TheBackdrop.vue'
import { ref } from 'vue'

const { openSidebar } = storeToRefs(useStateStore())
const backdrop = ref(null)

const open = (event): void => {
  window.addEventListener('click', close)
}

const close = (event): void => {
  if (event.target == backdrop.value.backdrop) {
    openSidebar.value = false
    window.removeEventListener('click', open)
  }
}

watch(openSidebar, open)
</script>

<template>
  <div :class="[{ sidebar__show: openSidebar }, 'sidebar']">
    {{ openSidebar }}
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
  opacity: 0;
  transition:
    opacity 0.3s,
    right 0.3s;

  &__show {
    right: 0;
    opacity: 1;
    z-index: 100;
  }
}
</style>
