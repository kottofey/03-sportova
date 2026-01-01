<script setup lang="ts">
import { scrollerData } from '../data';

import { MiniBannerWidget, TheScroller } from '@/components';

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
        <template #text>Н.Новгород, ул.Народная 20
          Ежедневно с 9:00 до 19:00</template>
      </MiniBannerWidget>    </div>
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
</style>
