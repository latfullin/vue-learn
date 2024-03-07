<template>
  <div class="product__card">
    <div class="product__card-wrapper">
      <div class="product__card-head">
        <img src="@img/product-1.png" alt="" />
      </div>

      <div class="product__card-body">Мужские Кроссовки Nike Blazer Mid Suede</div>
      <div class="product__card-footer">
        <div class="product__card-price">
          <span class="product__card-price-title">Цена:</span>
          <span class="product__card-price-value">12 999 руб.</span>
        </div>
        <div class="product__card-add-product"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.product {
  &__card-wrapper {
    padding: 20px 20px 34px;
    border: 1px solid #f3f3f3;
    border-radius: 40px;
    box-shadow: 0 0 #f3f3f3;
    transition: box-shadow 0.3s;

    &:hover {
      box-shadow: 1px 1px 2px 5px #f3f3f3ab;
    }
  }

  &__card-price {
    display: flex;
    flex-direction: column;
    padding-top: 14px;
    gap: 2px;
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
