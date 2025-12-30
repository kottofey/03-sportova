<script setup lang="ts">
import { LocationArrow, ClockRegular } from '@vicons/fa';
import { Icon } from '@vicons/utils';

import {
  TheButton,
  TheInput,
  IconHeart,
  IconComparison,
  CartWidget,
  CatalogueWidget,
  IconCart,
  IconSearch,
  IconPhone,
} from '@/components';

// -----------------------------------------------------------------------------
// Setup
// -----------------------------------------------------------------------------

const { isHeaderMini = false } = defineProps<{
  isHeaderMini?: boolean;
}>();
</script>

<template>
  <template v-if="!isHeaderMini">
    <div class="header-wrapper">
      <div class="top-header">
        <div class="top-header__location">
          <Icon color="#0A4ECB">
            <LocationArrow />
          </Icon>
          <span>Нижний Новгород</span>
        </div>

        <ul class="top-header__pages">
          <li>
            <RouterLink :to="{ name: 'actions.view' }">Акции</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'how-to-order.view' }">Как заказать</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'about.view' }">О компании</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'delivery.view' }">Доставка и Оплата</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'guarantees.view' }">Гарантии</RouterLink>
          </li>
          <li>
            <RouterLink :to="{ name: 'contacts.view' }">Контакты</RouterLink>
          </li>
        </ul>

        <div class="top-header__call">
          <Icon color="#0A4ECB">
            <ClockRegular />
          </Icon>
          <span><a href="tel:88005502216">8 800 550-22-16</a></span>
          <button
            type="button"
            class="call-order"
            @click="console.log('call order')"
          >
            Заказать звонок
          </button>
        </div>
      </div>

      <div class="mid-header__wrapper">
        <div class="mid-header">
          <RouterLink
            :to="{ name: 'home.view' }"
            class="mid-header__logo"
          >
            <img
              src="/src/assets/logo.png"
              alt="Logo Sportova"
            />
          </RouterLink>

          <TheInput
            class="mid-header__search"
            placeholder="Поиск по сайту"
          >
            <template #icon>
              <img
                src="/src/assets/icons/search.svg"
                alt=""
            /></template>
          </TheInput>

          <TheButton
            color="ghost"
            class="button-header"
            is-hoverable
            :icon-size="26"
          >
            <template #icon>
              <IconHeart />
            </template>
          </TheButton>

          <TheButton
            color="ghost"
            class="button-header"
            is-hoverable
            :icon-size="26"
          >
            <template #icon>
              <IconComparison />
            </template>
          </TheButton>

          <CartWidget
            :items="5"
            :ammount="12345678.45"
          />
        </div>
      </div>

      <div class="lower-header__wrapper">
        <div class="lower-header">
          <CatalogueWidget />

          <ul class="header-menu">
            <li class="header-menu__item">Шведские стенки</li>
            <li class="header-menu__item">Уличные комплексы</li>
            <li class="header-menu__item">Турники</li>
            <li class="header-menu__item">Тяжелая атлетика</li>
            <li class="header-menu__item header-menu__item--discount">% Товары со скидкой</li>
          </ul>
        </div>
      </div>
    </div>
  </template>

  <template v-else>
    <div class="header-wrapper header-wrapper--mini">
      <div class="lower-header">
        <RouterLink
          :to="{ name: 'home.view' }"
          class="lower-header__logo"
        >
          <img
            src="/src/assets/logo-mini.svg"
            alt="Logo Sportova"
          />
        </RouterLink>

        <ul class="header-menu header-menu--mini">
          <li class="header-menu__item header-menu__item--mini">Шведские стенки</li>
          <li class="header-menu__item header-menu__item--mini">Уличные комплексы</li>
          <li class="header-menu__item header-menu__item--mini">Турники</li>
          <li class="header-menu__item header-menu__item--mini">Тяжелая атлетика</li>
          <li class="header-menu__item header-menu__item--mini header-menu__item--catalogue">Каталог товаров</li>
        </ul>

        <TheButton
          color="ghost"
          class="button-header button-header--mini"
          is-hoverable
          :icon-size="24"
        >
          <template #icon>
            <!--            <IconHeart />-->
            <IconSearch />
          </template>
        </TheButton>

        <TheButton
          color="ghost"
          class="button-header button-header--mini"
          is-hoverable
          :icon-size="26"
        >
          <template #icon>
            <IconHeart />
          </template>
        </TheButton>

        <TheButton
          color="ghost"
          class="button-header button-header--mini"
          is-hoverable
          :icon-size="26"
        >
          <template #icon>
            <IconComparison />
          </template>
        </TheButton>

        <TheButton
          color="ghost"
          class="button-header button-header--mini"
          is-hoverable
          :icon-size="22"
        >
          <template #icon>
            <IconPhone />
          </template>
        </TheButton>

        <TheButton
          color="ghost"
          class="button-header button-header--mini"
          is-hoverable
          :icon-size="26"
        >
          <template #icon>
            <IconCart />
          </template>
        </TheButton>
      </div>
    </div>
  </template>
</template>

<style scoped lang="scss">
.header-wrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background-color: $color-gray-30;

  position: fixed;
  top: 0;
  z-index: 500;

  &--mini {
    flex-direction: row;
    height: 52px;

    position: fixed;
    top: 0;
    z-index: 500;

    background-color: $color-white;
  }
}

.top-header {
  max-width: $wrapper-width;
  width: 100%;
  padding: 0 20px;
  min-height: 26px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 500;
  column-gap: 10px;

  &__location {
    display: flex;
    align-items: center;
    column-gap: 10px;
    margin-right: auto;
  }

  &__pages {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    row-gap: 10px;
    column-gap: 10px;
    margin-right: auto;
  }

  &__call {
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    column-gap: 10px;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
}

.router-link-active {
  color: $color-accent-orange;
}

.call-order {
  background-color: transparent;
  color: $color-accent-blue-3;
}

.mid-header {
  min-height: 122px;
  display: flex;
  row-gap: 20px;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  max-width: $wrapper-width;
  width: 100%;
  padding: 20px 0;
  column-gap: 10px;

  &__wrapper {
    background-color: $color-white;
    width: 100%;
    display: flex;
    justify-content: center;
    padding: 0 10px;
  }

  &__logo {
    width: 260px;
    height: 62px;
    margin-right: auto;
    display: flex;
  }

  &__search {
    width: 518px;
  }
}

.button-header {
  border-color: $color-gray-30;
  min-height: 52px;
  min-width: 52px;

  &--mini {
    min-width: unset;
    min-height: unset;

    width: 46px;
    height: 46px;

    margin-right: 16px;
  }
}

.lower-header {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 52px;
  width: 100%;
  max-width: $wrapper-width;

  &__wrapper {
    width: 100%;
    height: 100%;

    display: flex;
    align-items: center;
    justify-content: center;
    background-color: $color-accent-blue-2;
  }
  &__logo {
    height: 46px;
    width: auto;
    display: flex;
    margin-right: 40px;
  }
}

.header-menu {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  column-gap: 30px;
  width: 100%;
  margin-left: 76px;
  height: 100%;

  &--mini {
    margin: 0 auto;
  }

  &__item {
    color: $color-white;
    font-size: 14px;

    &--mini {
      color: $color-gray-70;
    }

    &--catalogue {
      color: $color-accent-orange;
    }

    &--discount {
      margin-left: 76px;
      color: $color-accent-yellow;
    }
  }
}
</style>
