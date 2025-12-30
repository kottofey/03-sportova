<script setup lang="ts">
import { Icon } from '@vicons/utils';
import { computed } from 'vue';

const {
  iconSize = 16,
  color = 'main',
  isUppercase = false,
  isHoverable = false,
  isGradient = false,
} = defineProps<{
  iconSize?: number | string;
  color?: 'main' | 'alter' | 'ghost';
  isUppercase?: boolean;
  isHoverable?: boolean;
  isGradient?: boolean;
}>();

type IBg = {
  prim: string;
  sec: string;
  textColor: string;
  bgColor: string;
  hoverBgColor: string;
  hoverTextColor: string;
};

const bg = computed(() => {
  switch (color) {
    case 'main':
      return {
        prim: '#0A4ECB',
        sec: '#4788FF',
        textColor: '#ffffff',
        hoverTextColor: '#ffffff',
        bgColor: '#0A4ECB',
        hoverBgColor: '#0A4ECB',
      } as IBg;
    case 'alter':
      return {
        prim: '#F04716',
        sec: '#FFC62F',
        textColor: '#ffffff',
        hoverTextColor: '#ffffff',
        bgColor: '#F04716',
        hoverBgColor: '#F04716',
      } as IBg;
    case 'ghost':
      return {
        prim: 'transparent',
        sec: 'transparent',
        textColor: '#6E7284',
        hoverTextColor: '#ffffff',
        bgColor: '#A3A6B2',
        hoverBgColor: '#0A4ECB',
      } as IBg;
    default:
      return undefined;
  }
});
</script>

<template>
  <div
    v-if="bg"
    class="button"
    :style="{
      '--bg-color': isGradient
        ? `linear-gradient(to right, ${bg.prim}, ${bg.sec})`
        : `linear-gradient(to right, ${bg.prim}, ${bg.prim})`,

      '--hover-bg-color': isHoverable
        ? // Hoverable
          isGradient
          ? // + Hov + Grad
            color === 'ghost'
            ? bg.hoverBgColor
            : `linear-gradient(to right, ${bg.hoverBgColor}, ${bg.hoverBgColor})`
          : // + Hov - Grad
            color === 'ghost'
            ? bg.hoverBgColor
            : `linear-gradient(to right, ${bg.prim}, ${bg.sec})`
        : // Not Hoverable
          isGradient
          ? // - Hov + Grad
            color === 'ghost'
            ? ''
            : `linear-gradient(to right, ${bg.prim}, ${bg.sec}`
          : // - Hov - Grad
            color === 'ghost'
            ? ''
            : `linear-gradient(to right, ${bg.prim}, ${bg.prim}`,

      '--text-color': bg.textColor,
      '--hover-text-color': isHoverable ? bg.hoverTextColor : bg.textColor,

      '--border-color': isGradient ? (color === 'ghost' ? bg.bgColor : '') : bg.bgColor,
      '--hover-border-color': isHoverable
        ? // Hoverable
          isGradient
          ? // + Hov + Grad
            color === 'ghost'
            ? bg.prim
            : ''
          : // + Hov - Grad
            color === 'ghost'
            ? bg.prim
            : ''
        : // Not Hoverable
          isGradient
          ? // - Hov + Grad
            color === 'ghost'
            ? bg.bgColor
            : ''
          : // - Hov - Grad
            color === 'ghost'
            ? bg.bgColor
            : '',

      'text-transform': isUppercase ? 'uppercase' : 'unset',
    }"
  >
    <Icon
      v-if="$slots.icon"
      class="button__icon"
      :style="{
        '--icon-padding': ($slots.default || $slots.sub) && '12px',
      }"
      :size="parseInt(iconSize.toString())"
    >
      <!--          TODO Выяснить про iconSize почему не меняет размер-->
      <slot name="icon" />
    </Icon>

    <div class="text">
      <span
        v-if="$slots.default"
        class="text__main"
      >
        <slot name="default" />
      </span>
      <span
        v-if="$slots.sub"
        class="text__sub"
      >
        <slot name="sub" />
      </span>
    </div>
  </div>
</template>

<style scoped lang="scss">
.button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 12px;
  color: var(--text-color);
  user-select: none;
  border-radius: 12px;

  background: var(--bg-color);
  border: 1px solid var(--border-color);

  &:hover {
    background: var(--hover-bg-color);
    border: 1px solid var(--hover-border-color);
    color: var(--hover-text-color);
  }

  &__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: var(--icon-padding);
  }
}

.text {
  display: flex;
  align-items: start;
  justify-content: center;
  flex-direction: column;

  &__main {
    font-size: 13px;
  }

  &__sub {
    color: $color-gray-40;
    font-size: 11px;
  }
}
</style>
