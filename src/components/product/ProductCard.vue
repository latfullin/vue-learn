<script setup lang="ts">
import { useBasketStore } from '@stores/basket'

const { addProduct } = useBasketStore()

const props = defineProps<{
  id: number
  title: string
  price: object
  image: string
}>()

const productInBasket = true
</script>

<template>
  <div class="product__card">
    <div class="product__card-wrapper">
      <div class="product__card-head">
        <img :src="image" alt="" />
      </div>

      <div class="product__card-body">Мужские Кроссовки Nike Blazer Mid Suede</div>
      <div class="product__card-footer">
        <div class="product__card-price">
          <span class="product__card-price-title">Цена:</span>
          <span class="product__card-price-value">{{ price }} руб.</span>
        </div>
        <div class="product__card-add-product">
          <div class="border" v-if="productInBasket" @click="() => addProduct(id)">
            <span> + </span>
          </div>
          <div class="success" v-else>
            <img src="@img/product-in-basket.svg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.border {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border-radius: 8px;
  border: 1px solid #f2f2f2;
  color: #d3d3d3;
  cursor: pointer;
  transition: box-shadow 0.3s;
  background: transparent;

  &_active {
    background: linear-gradient(180deg, #89f09c 0%, #3cc755 100%);
  }
}

.success {
  position: relative;
  height: 32px;
  width: 32px;
  border-radius: 8px;
  background: linear-gradient(180deg, #89f09c 0%, #3cc755 100%);

  img {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 15px;
    height: 15px;
    transform: translate(-50%, -50%);
  }
}

.product {
  &__card-wrapper {
    padding: 20px 20px 34px;
    border: 1px solid #f3f3f3;
    border-radius: 40px;
    @extend %default-box-shadow;
  }

  &__card-price {
    display: flex;
    flex-direction: column;
    gap: 2px;
  }

  &__card-footer {
    display: flex;
    align-items: end;
    justify-content: space-between;
    padding-top: 14px;
  }

  &__card-price-title {
    color: #bdbdbd;
    font-weight: 500;
    font-size: 11px;
    line-height: 13px;
  }

  &__card-price-value {
    font-weight: 700;
    font-size: 14px;
    line-height: 17px;
  }
}
</style>
