<script setup lang="ts">
const {
  placeholder = 'Укажите данные',
  isRequired = false,
  isValidate = false,
} = defineProps<{
  placeholder?: string;
  isRequired?: boolean;
  isValidate?: boolean;
}>();
</script>

<template>
  <div class="the-input__wrapper">
    <span class="the-input__icon"> <slot name="icon" /></span>

    <input
      type="text"
      :placeholder="placeholder && placeholder"
      class="the-input"
      :required="isRequired"
      :style="{
        '--is-valid-border': isValidate ? '2px solid #4CAF50' : '2px solid #525568FF',
        '--is-invalid-border': isValidate ? '2px solid #F44336' : '2px solid #525568FF',
        '--is-valid-color': isValidate ? '#4CAF50' : '',
        '--is-invalid-color': isValidate ? '#F44336' : '',
        '--has-icon-padding': $slots.icon ? '50px' : 0,
      }"
    />
  </div>
</template>

<style scoped lang="scss">
.the-input {
  display: flex;
  border-radius: 12px;
  outline: none;
  background-color: transparent;
  border: 1px solid $color-gray-30;
  padding: 5px 20px 5px var(--has-icon-padding);
  font-size: 14px;
  line-height: 100%;
  height: 52px;
  width: 100%;

  &__wrapper {
    display: flex;

    flex-direction: row;
    align-items: center;
    justify-content: center;

    position: relative;
  }

  &__icon {
    height: 40%;
    color: $color-accent-blue-3;
    display: flex;
    position: absolute;
    left: 20px;
  }

  &:focus {
    border: 2px solid $color-gray-60;
  }

  &:invalid:not(:placeholder-shown) {
    border: var(--is-invalid-border);
    color: var(--is-invalid-color);
  }

  &:valid:not(:placeholder-shown) {
    border: var(--is-valid-border);
    color: var(--is-valid-color);
  }
}
</style>
