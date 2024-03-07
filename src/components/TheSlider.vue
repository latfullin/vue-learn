<template>
  <div class="slider">
    <div class="slider__items">
      <div class="slider__item">
        <div class="slider__content">
          <div class="slider__title">
            <span class="slider__title_green">Stan Smith</span>,<br />
            Forever!
          </div>
          <router-link to="/" class="slider__btn"> Купить </router-link>
        </div>
        <div class="slider__image">
          <img src="@img/slider.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.slider {
  padding: 45px 0 20px;

  &__title {
    font-weight: 700;
    font-size: 38px;
    line-height: 46px;

    &_green {
      color: #a5d364;
    }
  }

  &__btn {
    display: inline-block;
    background-color: #a5d364;
    color: $white;
    text-decoration: none;
    font-size: 16px;
    line-height: 19.3px;
    font-weight: 700;
    padding: 14px 60px;
    border-radius: 20px;
  }

  &__items {
    display: flex;
  }

  &__content {
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    flex: 1 0 auto;
    row-gap: 20px;
    padding-left: 60px;
    padding-right: 15px;
  }

  &__item {
    display: flex;
    justify-content: space-between;
    background-color: #f4efe9;
    border-radius: 20px;
    width: 100%;
  }

  &__image {
    flex: 1 1 auto;
  }
}
</style>
