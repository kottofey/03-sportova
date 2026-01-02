<script setup lang="ts">
import {
  IconCartAdd,
  IconCartAdded,
  IconComparison,
  IconComparisonAdd,
  IconComparisonAdded,
  IconHeartAdd,
  IconHeartAdded,
  TheButton,
} from '@/components';

const {
  name,
  imageUrl,
  price,
  priceBefore = undefined,
  isInCart = false,
  isFavorite = false,
  isComapre = false,
} = defineProps<{
  name: string;
  imageUrl: string;
  price: number;
  priceBefore?: number;
  isInCart?: boolean;
  isFavorite?: boolean;
  isComapre?: boolean;
}>();

import { moneyHelper } from '@/helpers';

const { toRubbles } = moneyHelper();
</script>

<template>
  <div class="item-card-long">
    <img
      class="item-card-long__image"
      :src="imageUrl"
      alt="Фото"
    />

    <h3 class="item-card-long__name">{{ name }}</h3>
    <p class="item-card-long__price-before">{{ priceBefore && toRubbles(priceBefore, '₽', 0) }}</p>
    <p
      class="item-card-long__price"
      :class="priceBefore ? 'item-card-long__price--discount' : ''"
    >
      {{ toRubbles(price, '₽', 0) }}
    </p>

    <TheButton
      color="ghost"
      icon-size="26"
      is-hoverable
      class="item-card-long__btn item-card-long__btn--cart"
      ghost-hover-bg-color="#f04716"
    >
      <template #icon>
        <IconCartAdded v-if="isInCart" />
        <IconCartAdd v-else />
      </template>
    </TheButton>

    <div class="item-card-long__hovered-buttons">
      <TheButton
        color="ghost"
        class="item-card-long__btn"
        icon-size="26"
        is-hoverable
        ghost-hover-bg-color="#f04716"
        ghost-bg-color="#ffffff"
      >
        <template #icon>
          <IconComparisonAdded v-if="isComapre" />
          <IconComparisonAdd v-else />
        </template>
      </TheButton>

      <TheButton
        color="ghost"
        class="item-card-long__btn"
        icon-size="26"
        is-hoverable
        ghost-hover-bg-color="#f04716"
        ghost-bg-color="#ffffff"
      >
        <template #icon>
          <IconHeartAdded v-if="isFavorite" />
          <IconHeartAdd v-else />
        </template>
      </TheButton>
    </div>
  </div>
</template>

<style scoped lang="scss">
.item-card-long {
  display: flex;
  flex-direction: column;
  position: relative;

  height: 520px;
  border-radius: 12px;
  flex: 0 0 280px;
  background-color: $color-white;
  padding: 20px;
  transition: box-shadow 0.4s;

  &__image {
    display: flex;
    height: 340px;
    margin-bottom: 10px;
  }

  &__name {
    display: flex;
    font-size: 15px;
  }

  &__price {
    display: flex;
    font-size: 21px;
    color: $color-accent-orange;
    //margin-top: auto;
  }

  &__price-before {
    display: flex;
    margin-top: auto;
    font-size: 15px;
    color: $color-gray-40;
    text-decoration: line-through;
  }

  &__btn {
    color: $color-accent-orange;
    display: flex;
    width: 46px;
    height: 46px;

    &--cart {
      position: absolute;
      bottom: 20px;
      right: 20px;
    }
  }

  &__hovered-buttons {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    column-gap: 20px;

    position: absolute;
    top: 20px;
    right: 20px;
  }

  &:hover {
    box-shadow: #303f7326 0 15px 25px 0;
  }
}
</style>
