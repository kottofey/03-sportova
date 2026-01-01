<script setup lang="ts">
import {computed, onMounted, ref} from 'vue';


import {TheScrollerPagination} from '@/components';

// -----------------------------------------------------------------------------
// Setup
// -----------------------------------------------------------------------------

const {timeout, data} = defineProps<{ timeout: number, data: { title: string, text: string }[] }>();

// -----------------------------------------------------------------------------
// State
// -----------------------------------------------------------------------------

const currentPage = ref(1);
const runnerWidth = ref(0);
const startTime = ref(0);
const rafId = ref();
const interval = ref<NodeJS.Timeout | undefined>(undefined);

const totalPages = computed(() => data.length)

// -----------------------------------------------------------------------------
// Actions
// -----------------------------------------------------------------------------

const pgForward = () => {
  if (currentPage.value) {
    startSlides();
    if (currentPage.value === totalPages.value) {
      currentPage.value = 1;
    } else {
      currentPage.value = currentPage.value + 1;
    }
  }
};

const pgBack = () => {
  if (currentPage.value) {
    startSlides();
    if (currentPage.value === 1) {
      currentPage.value = totalPages.value;
    } else {
      currentPage.value = currentPage.value - 1;
    }
  }
};

const updateProgress = () => {
  const elapsed = Date.now() - startTime.value;
  runnerWidth.value = Math.min(elapsed / timeout, 1);

  if (runnerWidth.value >= 1) {
    pgForward();
  } else {
    rafId.value = requestAnimationFrame(updateProgress);
  }
};

const startSlides = () => {
  if (interval.value) {
    clearInterval(interval.value);
  }

  runnerWidth.value = 0;
  startTime.value = Date.now();
  rafId.value = requestAnimationFrame(updateProgress);

  interval.value = setInterval(() => {
    pgForward();
  }, timeout);
};

onMounted(() => {
  startSlides();
});
</script>

<template>
  <div v-if="data" class="scroller-wrapper">
    <h2 class="title">{{ data[currentPage - 1]?.title }}</h2>

    <p class="text">
     {{data[currentPage - 1]?.text}}
    </p>

    <RouterLink :to="{ name: 'constructor.view' }">
      <div
          type="button"
          class="btn"
      >
        Перейти в конструктор
      </div>
    </RouterLink>

    <TheScrollerPagination
        v-model:page="currentPage"
        :pages="totalPages"
        class="pagination"
        :pg-forward="pgForward"
        :pg-back="pgBack"
    />
    <div class="progress-bar">
      <div
          class="progress-bar__runner"
          :style="{ width: `${runnerWidth * 100}%` }"
      ></div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.scroller-wrapper {
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  align-items: start;
  justify-content: space-between;

  padding: 58px 50px;
  row-gap: 20px;

  background: $color-white url('@/assets/scroller/bg.png') 100% center no-repeat;
  background-size: cover;
}

.progress-bar {
  height: 4px;
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  background-color: $color-scroller;

  &__runner {
    display: flex;
    background-color: $color-scroller-runner;
    height: 4px;
  }
}

.title {
  display: flex;
  font-size: 40px;
  font-weight: 900;
  max-width: 500px;
  background: linear-gradient(to right, #0a4ecb, #4788ff);
  background-clip: text;
  color: transparent;
}

.text {
  display: flex;
  font-size: 14px;
  width: 400px;
}

.img {
  display: flex;
  max-height: 400px;
  width: auto;
}

.btn {
  display: flex;
  height: 58px;
  width: 262px;
  border-radius: 12px;
  align-items: center;
  justify-content: center;
  background: linear-gradient(to right, #f04716, #ffc62f);
  color: white;
  font-size: 15px;
  font-weight: 600;

  margin-top: auto;
}

.pagination {
  display: flex;
  position: absolute;

  bottom: 20px;
  right: 20px;
}
</style>
