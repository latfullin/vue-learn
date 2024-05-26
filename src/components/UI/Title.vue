<script setup lang="ts"></script>

<template>
  <div class="title-component">
    <slot name="before"></slot>
    <h2 class="title">
      <slot></slot>
    </h2>
    <slot name="after"></slot>
  </div>
</template>

<style scoped lang="scss">
.title {
  font-weight: 700;
  font-size: 32px;
  line-height: 38px;
}

.title-component {
  display: flex;
  align-items: center;
  column-gap: 20px;
}
h2 {
  margin: 0;
}
</style>
