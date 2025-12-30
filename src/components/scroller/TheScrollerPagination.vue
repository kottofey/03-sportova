<script setup lang="ts">
// -----------------------------------------------------------------------------
// Setup
// -----------------------------------------------------------------------------
const { page, pages, pgBack, pgForward } = defineProps<{
  page: number;
  pages: number;
  pgBack: () => void;
  pgForward: () => void;
}>();

// -----------------------------------------------------------------------------
// State
// -----------------------------------------------------------------------------

// -----------------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------------
</script>

<template>
  <div class="scroller-pagination-wrapper">
    <button
      type="button"
      class="btn btn--back"
      @click="pgBack"
    />
    <p class="pages">{{ page }} / {{ pages }}</p>
    <button
      type="button"
      class="btn btn--fwd"
      @click="pgForward"
    />
  </div>
</template>

<style scoped lang="scss">
.scroller-pagination-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 15px;
  font-weight: 700;
}

.pages {
  display: flex;
  margin: 0 20px;
  width: 70px;
  justify-content: center;
  align-items: center;
}

.btn {
  height: 38px;
  width: 38px;
  border-radius: 50%;
  position: relative;
  background-color: $color-gray-80-t40;

  &--back:before {
    content: '';
    position: absolute;
    top: 13px;
    left: 15px;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid $color-white;
    border-right: 2px solid $color-white;
    transform: rotate(135deg);
  }

  &--fwd:before {
    content: '';
    position: absolute;
    top: 13px;
    left: 11px;
    width: 12px;
    height: 12px;
    border-bottom: 2px solid $color-white;
    border-right: 2px solid $color-white;
    transform: rotate(-45deg);
  }
}
</style>
