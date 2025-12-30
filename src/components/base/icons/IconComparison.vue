<script setup lang="ts">
const { isFilled = false } = defineProps<{ isFilled?: boolean }>();
</script>

<template>
  <svg
    width="24"
    height="24"
    viewBox="12 10 24 24"
    :fill="isFilled ? 'currentColor' : 'none'"
    stroke="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect
      x="12.5"
      y="24.5"
      width="5"
      height="8"
      rx="2.5"
    />
    <rect
      x="20.5"
      y="13.5"
      width="5"
      height="19"
      rx="2.5"
    />
    <rect
      x="28.5"
      y="19.5"
      width="5"
      height="13"
      rx="2.5"
    />
  </svg>
</template>

<style scoped lang="scss"></style>
