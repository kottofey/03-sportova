<script setup lang="ts">
import { scrollerData } from '../data';

import { ItemCardLong, MiniBannerWidget, TheScroller } from '@/components';
</script>

<template>
  <div class="banners">
    <TheScroller
      class="scroller"
      :timeout="10000"
      :data="scrollerData"
    />
    <div class="banners__mini">
      <MiniBannerWidget background-img="/src/assets/mini-banners/banner1.png">
        <template #title>Собственное швейное производство</template>
        <template #text>Приглашаем к сотрудничеству</template>
      </MiniBannerWidget>

      <MiniBannerWidget background-img="/src/assets/mini-banners/banner2.png">
        <template #title>Посетите наш шоу-рум!</template>
        <template #text>Н.Новгород, ул.Народная 20 Ежедневно с 9:00 до 19:00</template>
      </MiniBannerWidget>
    </div>
  </div>

  <div class="slider-long-cards">
    <h2 class="slider-long-cards__title">Шведские стенки</h2>
    <div class="slider-long-cards__slider">
      <ItemCardLong
        name="Шведская стенка P-19 (Цвет: Белый)"
        image-url="/src/assets/goods/swedish-walls/wall1.png"
        :price="14980"
        is-in-cart
        is-comapre
        is-favorite
      />
      <ItemCardLong
        name="Шведская стенка P-3 (Цвет: Антик Серебро)"
        image-url="/src/assets/goods/swedish-walls/wall2.png"
        :price="7990"
        :price-before="11320"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroller {
  width: 780px;
  min-height: 480px;
  border-radius: 12px;
}

.banners {
  display: flex;
  padding: 0 20px;
  row-gap: 20px;
  column-gap: 20px;

  width: 100%;
  max-width: $wrapper-width;
  height: 100%;

  &__mini {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    row-gap: 20px;
  }
}

.slider-long-cards {
  display: flex;
  flex-direction: column;

  padding: 30px 20px;
  width: 100%;
  max-width: $wrapper-width;

  &__title {
    font-size: 31px;
    font-weight: 700;
    margin-bottom: 20px;
  }

  &__slider {
    display: flex;
    flex-direction: row;
    column-gap: 20px;
  }
}
</style>
