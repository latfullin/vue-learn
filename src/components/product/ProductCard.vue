<script setup lang="ts">
import { useBasketStore } from '@stores/basket'
import { ref, watch } from 'vue'
import IconFavorite from '../icons/IconFavorite.vue'
const { addProduct, basket, removeProduct } = useBasketStore()

const props = defineProps<{
  id: number
  title: string
  price: string
  image: number
}>()

const productInBasket = ref(true)

interface IBasket {
  id: number
}

watch(basket, (e) => {
  if (e.find((element: IBasket) => element.id === props.id)) {
    productInBasket.value = false
  } else {
    productInBasket.value = true
  }
})
</script>

<template>
  <div class="product__card">
    <div class="product__card-wrapper">
      <IconFavorite
        class="product__favorite"
        :background="!productInBasket ? '#FEF0F0' : 'transperent'"
        :heart="!productInBasket ? '#FF8585' : 'transperent'"
      />
      <div class="product__card-head">
        <img src="@img/product-1.png" alt="" />
      </div>
      <div class="product__card-body">Мужские Кроссовки Nike Blazer Mid Suede</div>
      <div class="product__card-footer">
        <div class="product__card-price">
          <span class="product__card-price-title">Цена:</span>
          <span class="product__card-price-value">{{ price }} руб.</span>
        </div>
        <div class="product__card-add-product">
          <button
            class="product__card-increment"
            v-if="productInBasket"
            @click="() => addProduct(id)"
          >
            <span> + </span>
          </button>
          <button class="success" v-else @click="() => removeProduct(id)">
            <img src="@img/product-in-basket.svg" alt="" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.success {
  position: relative;
  height: 32px;
  width: 32px;
  border-radius: 8px;
  background: linear-gradient(180deg, #89f09c 0%, #3cc755 100%);
  outline: none;
  border: none;

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
  &__favorite {
    position: absolute;
    left: 30px;
    top: 30px;
    opacity: 0;
    transition: opacity 0.6s;
    cursor: pointer;
  }

  &__card:hover .product__favorite {
    opacity: 1;
  }

  &__card-wrapper {
    position: relative;
    padding: 20px 20px 34px;
    border: 1px solid #f3f3f3;
    border-radius: 40px;
    transition: box-shadow 0.3s;
    @extend %default-box-shadow;
  }

  &__card-increment {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 32px;
    height: 32px;
    border-radius: 8px;
    border: 1px solid #f2f2f2;
    color: #d3d3d3;
    cursor: pointer;
    transition:
      box-shadow 0.3s,
      background 0.3s;
    background: transparent;

    &:hover {
      background: linear-gradient(180deg, #89f09c 0%, #3cc755 100%);
    }

    &_active {
      background: linear-gradient(180deg, #89f09c 0%, #3cc755 100%);
    }
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
