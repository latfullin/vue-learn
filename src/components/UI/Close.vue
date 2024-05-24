<script setup lang="ts">
import IconClose from '@components/icons/IconClose.vue'
</script>
<template>
  <div class="close">
    <span class="icon-close">
      <IconClose />
    </span>
  </div>
</template>
<style scoped lang="scss">
.close {
  cursor: pointer;
}

.icon-close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: 1px solid #f2f2f2;
  border-radius: 8px;
  transition: border-color 0.3s;

  &:hover {
    border-color: #dbdbdb;

    & > svg {
      fill: #b5b5b5;
    }
  }
}
</style>
