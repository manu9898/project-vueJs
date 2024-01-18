<template>
  <div @click="handleClick" style="padding: 20px 0px 20px 0px" class="personnes-component">
    <h2 style="text-align: center; color: #1dbbb4">Librairie Axios</h2>
    <div @click=zoomOnPicture(personne) :class="{ 'zoomed': personne.zoomed }"  style="padding-left: 5px" v-for="personne in data" :key="personne.login.uuid" class="personneInData">
      <img  :src="personne.picture.large" class="personne-image" alt="Personne Image">
      <div class="personne-info">
        <h5>{{ personne.name.first }} {{ personne.name.last }}</h5>
        <div>Email: {{ personne.email }}</div>
        <div>Téléphone: {{ personne.phone }}</div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  data() {
    return {
      data: [],
      zoomedIndex: null,
    };
  },
  methods: {
    zoomOnPicture(personne) {
      if (this.zoomedIndex !== null && this.zoomedIndex !== this.data.indexOf(personne)) {
        this.data[this.zoomedIndex].zoomed = false;
      }

      if (!personne.zoomed) {
        personne.zoomed = true;
        this.zoomedIndex = this.data.indexOf(personne);
      } else {
        personne.zoomed = false;
        this.zoomedIndex = null;
      }
    },
    handleClick(event) {
      const clickedElement = event.target;
      const isPhoto = clickedElement.classList.contains("personne-image");


      if (!isPhoto) {
        if (this.zoomedIndex !== null) {
          this.data[this.zoomedIndex].zoomed = false;
          this.zoomedIndex = null;
        }
      }
    },
  },
  created() {
    axios
        .get("https://randomuser.me/api/?results=5")
        .then((response) => {
          this.data = response.data.results;
        })
        .catch((error) => {
          console.error("Erreur lors de la récupération des données:", error);
        });
  },
};
</script>

<style scoped>
.personnes-component {
  width: 70%;
  margin: 0 auto;
  background-color: #1F1F37;
  color: white;
}

.personneInData {
  display: flex;
  flex-wrap: wrap;
  margin-left: 50px;
  align-items: center;
  margin-bottom: 20px;
}

.personne-image {
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-right: 20px;
  object-fit: cover;
  margin-top: 10px;
  cursor: pointer;
}

.personne-info {
  display: flex;
  flex-direction: column;
}
.zoomed {
  transform: scale(1.5) translateX(200px);
  transition: transform 0.9s ease-in-out;
  padding-bottom: 50px;
  padding-right: 50px;
  padding-top: 50px;
}


@media screen and (max-width: 600px) {

  .personnes-component{
    padding-left: 20px;
  }
}


@media screen and (max-width: 1200px) {
  .zoomed {
    transform: scale(1.2) translateX(50px);
    transition: transform 0.9s ease-in-out;
    padding-bottom: 50px;
    padding-right: 50px;
    padding-top: 50px;

  }
}

@media screen and (max-width: 600px) {
  .personne-info{
    font-size: 12px;
  }

  .zoomed {
    transform: scale(1.2) translateX(50px);
    transition: transform 0.9s ease-in-out;
    padding-bottom: 50px;
    padding-right: 70px;
    padding-top: 50px;

  }
}
</style>
