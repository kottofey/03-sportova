<script setup lang="ts">
import { IconCart, TheButton } from '@/components';
import { moneyHelper } from '@/helpers';

// -----------------------------------------------------------------------------
// Setup
// -----------------------------------------------------------------------------

const { toRubbles } = moneyHelper();

const { items = 0, ammount = 0 } = defineProps<{
  ammount?: number;
  items?: number;
}>();
</script>

<template>
  <TheButton
    class="cart"
    color="ghost"
    icon-size="26"
    is-hoverable
    :style="{
      '--main-color': items > 0 ? '#0a4ecb' : '#6E7284',
      '--sub-color': items > 0 ? '#36383F' : '#A3A6B2',
    }"
  >
    <template #icon> <IconCart /> </template>

    <template #default>
      <span class="cart__main">Корзина ({{ items > 0 ? items : 0 }})</span>
    </template>

    <template #sub>
      <span class="cart__sub">{{ items > 0 ? toRubbles(ammount) : 'Нет товаров' }}</span>
    </template>
  </TheButton>
</template>

<style scoped lang="scss">
.cart {
  display: flex;
  min-width: 150px;
  min-height: 50px;

  &__main {
    color: var(--main-color);
  }

  &__sub {
    color: var(--sub-color);
  }

  &:hover &__main {
    color: $color-white;
  }

  &:hover &__sub {
    color: $color-accent-yellow;
  }
}
</style>
