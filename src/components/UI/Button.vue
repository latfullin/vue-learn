<script setup lang="ts">
const props = defineProps<{
  value: string
}>()
</script>

<template>
  <label>
    <slot name="before"></slot>
    <button>{{ value }}</button>
    <slot name="after"></slot>
  </label>
</template>
<style scoped lang="scss">
label {
  position: relative;
}

button {
  font-family: inter;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  background-color: #9dd458;
  color: #fff;
  padding: 18px 0;
  border: none;
  cursor: pointer;
  width: 100%;
  border-radius: 18px;
}
</style>
