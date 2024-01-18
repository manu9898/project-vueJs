<template>
  <div style="padding-top: 20px; padding-left: 20px" class="article-component">
    <h2 style="padding-bottom: 20px">Nos récents articles</h2>
    <div v-for="image in images" :key="image.id" class="image-container articles">
      <img style="width: 100px; margin:0px 15px 20px 0px" :src="image.download_url" alt="Random Image" />
      <div>
        <p style="margin-right: 10px; color: white">
          <span style="text-decoration: underline; color: #1dbbb4; font-size: 16px">
            <strong>Title</strong>
          </span>
          : titre</p>
        <p style="color: white"><span style="text-decoration: underline; color: #1dbbb4 ; font-size: 16px;">
          <strong>Description</strong>
        </span> : Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam, esse.</p>
      </div>
    </div>
  </div>
</template>


<script>
import axios from "axios";

export default {
  data() {
    return {
      images: [],
    };
  },
  created() {
    this.fetchImages();
  },
  methods: {
    async fetchImages() {
      try {
        const response = await axios.get("https://picsum.photos/v2/list?page=1&limit=5");
        this.images = response.data;
      } catch (error) {
        console.error("Erreur lors de la récupération des images :", error);
      }
    },
  },
};
</script>


<style scoped>
.article-component{
  width: 30%;
  background-color:#1C1B34;
  color: #1dbbb4;
  display: flex;
  align-items: center;
  flex-direction: column;
}

img{
  border-radius: 20px;
}

.image-container{
  display: flex;
}

@media screen and (max-width: 600px) {

  .image-container{
    display: flex;
    flex-wrap: wrap;
  }

  .article-component{
    width: 65%;
    margin-top: 20px;
    margin-bottom: 20px;
  }
}


</style>