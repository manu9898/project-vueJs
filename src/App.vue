<template>
  <div id="app">
    <ti-tle></ti-tle>
    <na-vigation></na-vigation>
    <bien-venue ref="bienvenue"></bien-venue>
    <div style="display: flex" class="d-f">
      <per-sonnes></per-sonnes>
      <ar-ticles class="article"></ar-ticles>
    </div>
    <se-parator></se-parator>
    <foo-ter></foo-ter>
  </div>
</template>

<script>
import TiTle from "@/components/TiTle.vue";
import NaVigation from '@/components/NaVigation.vue';
import BienVenue from "@/components/BienVenue.vue";
import PerSonnes from '@/components/PerSonnes.vue';
import ArTicles from '@/components/ArTicles.vue';
import SeParator from '@/components/SeParator.vue';
import FooTer from '@/components/FooTer.vue';

export default {
  name: 'App',
  components: {
    TiTle,
    NaVigation,
    PerSonnes,
    ArTicles,
    FooTer,
    BienVenue,
    SeParator,
  },
  methods: {}
};
</script>

<style>
#app {
}

body {
  margin: 0;
  background-color: #141331;
}

@media screen and (max-width: 400px) {
  .d-f {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-size: 12px;
  }
}

@media screen and (max-width: 600px) {
  .d-f {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    width: 100%;
    font-size: 12px;
  }
}
</style>
