<script setup lang="ts">
defineProps<{
  position: string
}>()
</script>

<template>
  <svg
    :class="[
      'arrow',
      position == 'left' || position === undefined ? 'arrow-left' : '',
      position == 'right' ? 'arrow-right' : ''
    ]"
    width="16"
    height="14"
    viewBox="0 0 16 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    :test="position"
  >
    <path
      d="M14.7144 7L1.00007 7"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
    <path
      d="M7 13L1 7L7 1"
      stroke="white"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style lang="scss">
.arrow {
  position: absolute;
  top: 50%;

  &-right {
    transform: translateY(-50%) rotate(180deg);
    right: 30px;
  }

  &-left {
    left: 30px;
    transform: translateY(-50%);
  }
}
</style>
