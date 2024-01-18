<!-- BienVenue.vue -->
<template>
  <div :style="{ opacity: bienvenueOpacity }" class="bienvenue-component">
    <h2 style="font-size: 48px" class="animate__animated animate__zoomInDown">Bienvenue</h2>
  </div>
</template>

<script>
import { computed } from 'vue';
import { useStore } from 'vuex';

export default {
  setup() {
    const store = useStore();
    const bienvenueOpacity = computed(() => store.state.bienvenueOpacity);

    return {
      bienvenueOpacity,
    };
  },
};
</script>

<style>
.bienvenue-component {
  color: #1dbbb4;
  text-align: center;
}
</style>
