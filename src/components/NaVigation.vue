<template>
  <nav @click="closeSubMenu">
    <ul>
      <li @click="toggleAffiche(0)">WORK
        <transition-group enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX">
          <ul class="sousMenu" v-if="affiche[0]">
            <li class="w-100" >Sous-menu 1</li>
            <li class="w-100">Sous-menu 2</li>
            <li class="w-100">Sous-menu 3</li>
          </ul>
        </transition-group>

      </li>
      <li @click="toggleAffiche(1)">WORK
        <transition-group enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX">
          <ul class="sousMenu" v-if="affiche[1]">
            <li class="w-100" >Sous-menu 4</li>
            <li class="w-100">Sous-menu 5</li>
            <li class="w-100">Sous-menu 6</li>
          </ul>
        </transition-group>
      </li>
      <li @click="toggleAffiche(2)">ABOUT
        <transition-group enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX">
          <ul class="sousMenu" v-if="affiche[2]">
            <li class="w-100" >Sous-menu 7</li>
            <li class="w-100">Sous-menu 8</li>
            <li class="w-100">Sous-menu 9</li>
          </ul>
        </transition-group>
      </li>
      <li @click="toggleAffiche(3)">CONTACT
        <transition-group enter-active-class="animate__animated animate__flipInX" leave-active-class="animate__animated animate__flipOutX">
          <ul class="sousMenu" v-if="affiche[3]">
            <li class="w-100" >Sous-menu 10</li>
            <li class="w-100">Sous-menu 11</li>
            <li class="w-100">Sous-menu 12</li>
          </ul>
        </transition-group>
      </li>
    </ul>
  </nav>
</template>

<script>
import 'animate.css';


export default {
  data() {
    return {
      affiche: [false, false, false, false],
    };
  },
  methods: {
    toggleAffiche(index) {
      for (let i = 0; i < this.affiche.length; i++) {
        this.affiche[i] = false;
      }
      this.affiche[index] = true;
      this.$store.dispatch('updateBienvenueOpacity', 0.2);
    },
    closeSubMenu(event) {
      if (!this.$el.contains(event.target)) {
        this.affiche.fill(false);
        this.$store.dispatch('updateBienvenueOpacity', 1);
      }
    },
  },
  mounted() {
    document.addEventListener('click', this.closeSubMenu);
  },
  beforeUnmount() {
    document.removeEventListener('click', this.closeSubMenu);
  },
};
</script>

<style scoped>
nav {
  background-color: #1dbbb4;
  text-align: center;
  height: 50px;
  color: white;
}

ul {
  display: flex;
  flex-wrap: wrap;
  margin: 0;
  padding: 0;
  list-style: none;
}

li {
  width: 25%;
  line-height: 50px;
  cursor: pointer;
  position: relative;
}

.sousMenu {
  display: flex;
  flex-direction: column;
  background-color: #1dbbb4;
  color: white;
  cursor: pointer;
  top: 100%;
  left: 0;
  z-index: 1;
  border-radius: 0px 0px 30px 30px;
}

.w-100 {
  width: 100%;
}


@media screen and (max-width: 600px) {
  li {
    width: 50%;
    background-color: #1dbbb4;
  }
  nav {
    height: 100px;
  }
  .sousMenu > li {
    background-color: #1dbbb4;
    z-index: 10;
  }
}

@media screen and (max-width: 400px) {
  li {
    width: 100%;
    background-color: #1dbbb4;
  }
  nav {
    height: 200px;
  }
  .sousMenu > li {
    background-color: #1dbbb4;
  }
  .sousMenu {
    border: solid lightgrey 1px;
    border-radius: 200px;
  }
}
</style>
