<script setup lang="ts">
const {backgroundImg = 'url()'} = defineProps<{
  backgroundImg?: string
}>()
</script>

<template>
<div
class="mini-banner" :style="{
  '--img-url': `url(${backgroundImg})`
}">
  <span class="mini-banner__title">
    <slot name="title">Заголовок</slot>
  </span>

  <span class="mini-banner__text">
    <slot name="text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore, quibusdam?</slot>
  </span>

  <p class="mini-banner__more"><a href="#">Подробнее</a></p>
</div>
</template>

<style scoped lang="scss">
.mini-banner {
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 380px;
  height: 230px;
  padding: 30px;
  border-radius: 12px;

  justify-content: space-between;

  background: var(--img-url) no-repeat center center;

  &__title {
    display: flex;
    font-size: 18px;
    font-weight: 800;
    max-width: 250px;
  }

  &__text {
    display: flex;
    font-size: 15px;
    max-width: 225px;
  }

  &__more {
    display: flex;
    position: relative;
    color: $color-accent-blue-2;
    padding-right: 15px;

    &:after {
      content: '';
      position: absolute;
      width: 8px;
      height: 8px;
      border-bottom: 2px solid $color-accent-blue-2;
      border-right: 2px solid $color-accent-blue-2;

      right: 0;
      top: 7px;
      transform: rotate(-45deg);
    }
  }
}
</style>
