<script setup lang="ts">
const valueInput = defineModel('input')
const emit = defineEmits(['update:modelValue'])

const props = defineProps<{
  placeholder: string
}>()
</script>

<template>
  <label>
    <slot name="before"></slot>
    <input :placeholder="placeholder" type="text" v-model="valueInput" />
    <slot name="after"></slot>
  </label>
</template>

<style scoped lang="scss">
label {
  position: relative;
}

input {
  padding: 13px 5px 13px 40px;
  outline: none;
  color: #b5b5b5;
  border: 1px solid;
  border-radius: 10px;
  min-width: 250px;
  transition: color 0.3s;
}

input:focus {
  color: #6c6c6c;
}

input::placeholder {
  color: #c4c4c4;
}
</style>
