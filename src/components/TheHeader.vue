<script setup>
import HeaderNavigation from '@components/Header/HeaderNavigation.vue'
</script>

<template>
  <header class="navigation">
    <div class="navigation__left">
      <div class="navigation__logo">
        <router-link :to="{ name: 'home' }">
          <img src="@img/logo.png" alt="" loading="lazy" />
        </router-link>
      </div>

      <div class="navigation__company-name">
        <div class="navigation__company-name-main">REACT SNEAKERS</div>
        <div class="navigation__company-name-subname">Магазин лучших кроссовок</div>
      </div>
    </div>

    <div class="navigation__right">
      <HeaderNavigation />
    </div>
  </header>
</template>

<style lang="scss">
.navigation {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
  &::after {
    position: absolute;
    content: '';
    width: 100%;
    bottom: 0;
    left: 0;
    height: 1px;
    background-color: #eaeaea;
  }
  padding: 45px 60px;

  &__logo {
    width: 40px;
    height: 40px;
  }

  &__left {
    display: flex;
    column-gap: 16px;
  }

  &__company-name {
    display: flex;
    flex-direction: column;
  }

  &__company-name-main {
    font-size: 20px;
    font-weight: 700;
    line-height: 24px;
  }

  &__company-name-subname {
    font-weight: 400;
    font-size: 14px;
    line-height: 17px;
    color: $color-light-grey;
  }
}
</style>
