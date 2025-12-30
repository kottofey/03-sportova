<script setup lang="ts">
import { RouterView } from 'vue-router';

import { ref, watchEffect } from 'vue';

import { useWindowScroll } from '@vueuse/core';

import { TheWrapperHeader } from '@/components';

const { y, measure } = useWindowScroll();

const isHeaderMini = ref<boolean>(false);

watchEffect(() => {
  isHeaderMini.value = y.value >= 200;
  measure();
});
</script>

<template>
  <div class="page-wrapper">
    <TheWrapperHeader
      :is-header-mini="isHeaderMini"
      class="header-fixed"
    />
    <RouterView />
  </div>
</template>

<style lang="scss" scoped>
.page-wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-top: 220px;
}
</style>
