<script setup lang="ts">
import { TheScroller } from '@/components';
</script>

<template>
  <TheScroller
    class="scroller"
    :timeout="10000"
  />
</template>

<style scoped lang="scss">
.scroller {
  width: 780px;
  border-radius: 12px;
}
</style>
