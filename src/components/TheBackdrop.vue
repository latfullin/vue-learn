<script setup lang="ts">
import { onMounted } from 'vue'
import { ref } from 'vue'

const backdrop = ref(Node)

defineProps<{
  show: boolean
}>()

defineExpose({
  backdrop
})
</script>

<template>
  <span :class="[{ backdrop__show: show }, 'backdrop']" ref="backdrop"></span>
</template>

<style lang="scss">
.backdrop {
  position: fixed;
  left: 0;
  top: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  visibility: hidden;
  backdrop-filter: blur(3px);
  transition:
    opacity 0.3s,
    visibility 0.3s;

  &__show {
    visibility: visible;
    opacity: 1;
  }
  &:after {
    z-index: 10;
    content: '';
    position: absolute;
    background-color: #000;
    opacity: 0.5;
    left: 0;
    width: 100%;
    height: 100%;
  }
}
</style>
