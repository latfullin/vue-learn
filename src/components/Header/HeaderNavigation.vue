<script setup>
import HeaderNavigationBasket from '@components/Header/HeaderNavigationBasket.vue'
import HeaderNavigationFavorite from '@components/Header/HeaderNavigationFavorite.vue'
import HeaderNavigationProfile from '@components/Header/HeaderNavigationProfile.vue'
</script>

<template>
  <div class="navigation__items">
    <div class="navigation__item">
      <HeaderNavigationBasket />
    </div>
    <div class="navigation__item">
      <HeaderNavigationFavorite />
    </div>
    <div>
      <HeaderNavigationProfile />
    </div>
  </div>
</template>

<style lang="scss">
.navigation {
  &__items {
    display: flex;
    column-gap: 32px;
  }

  &__item {
    display: flex;
    column-gap: 10px;
    color: #5c5c5c;
    text-decoration: none;
  }
}
</style>
