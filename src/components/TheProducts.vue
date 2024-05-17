<script setup lang="ts">
import { ref, type Ref } from 'vue'
import IconSearch from '@components/icons/IconSearch.vue'
import ProductCards from '@components/product/ProductCards.vue'
import Input from '@components/UI/Input.vue'

const search: Ref<string> = ref('')
</script>

<template>
  <div class="product">
    <div class="product__head">
      <div class="product__title">Все кроссовки</div>
      <Input v-model:value="search" placeholder="Поиск" :value="search">
        <template v-slot:before>
          <IconSearch class="icon-search" />
        </template>
      </Input>
    </div>
    <ProductCards />
  </div>
</template>

<style lang="scss">
.product {
  &__title {
    font-weight: 700;
    line-height: 39px;
    font-size: 32px;
  }

  &__head {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.icon-search {
  position: absolute;
  left: 20px;
  top: 50%;
  transform: translateY(-50%);
}
</style>
