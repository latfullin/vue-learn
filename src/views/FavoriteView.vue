<script setup lang="ts">
import IconBack from '@components/icons/IconBack.vue'
import ProductCards from '@components/product/ProductCards.vue'
import Title from '@components/UI/Title.vue'

import { useProductStore } from '@/stores/products'
import { useBasketStore } from '@/stores/basket'
import { onMounted } from 'vue'
import { ref } from 'vue'
import { watch } from 'vue'

const products: Product = ref([])

const { getItems } = useProductStore()
const { favorites } = useBasketStore()

onMounted(() => {
  products.value = getItems(favorites)
})

watch(favorites, () => {
  products.value = getItems(favorites)
})
</script>

<template>
  <div class="favorite">
    <Title class="favorite__head">
      <template v-slot:before>
        <router-link :to="{ name: 'home' }"><IconBack /></router-link>
      </template>
      Мои закладки
    </Title>

    <ProductCards :products="products" />
  </div>
</template>

<style lang="scss">
.favorite {
  &__head {
    padding-top: 40px;
    padding-bottom: 40px;
  }
}
</style>
