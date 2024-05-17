<script setup lang="ts">
import Skeleton from 'primevue/skeleton'
</script>

<template>
  <div class="border-round border-1 surface-border p-4 surface-card">
    <Skeleton width="100%" height="140px"></Skeleton>
    <Skeleton width="100%" class="mb-2 mt-3"></Skeleton>
    <div class="flex justify-content-between mt-3">
      <Skeleton width="4rem" height="2rem"></Skeleton>
      <Skeleton width="4rem" height="2rem"></Skeleton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.flex {
  display: flex;
}
.justify-content-between {
  justify-content: space-between;
}
.mt-3 {
  margin-top: 15px;
}
.mb-3 {
  margin-bottom: 15px;
}
</style>
