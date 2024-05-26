<script setup lang="ts">
import IconArrow from './IconArrow.vue'
</script>

<template>
  <div class="icon-back">
    <svg width="7" height="12" viewBox="0 0 7 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M6 11L1 6L6 1"
        stroke="#C8C8C8"
        stroke-width="1.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.icon-back {
  position: relative;
  border: 1px solid #f2f2f2;
  width: 35px;
  height: 35px;
  cursor: pointer;
  border-radius: 8px;

  svg {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
