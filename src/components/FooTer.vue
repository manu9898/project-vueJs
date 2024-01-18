<template>
  <div  class="footer-component" >
    <div class="sections">
      <h2 class="c-c">About me</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga!</p>
    </div>

    <div class="sections">
      <h2 class="c-c">Services</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga!</p>
    </div>

    <div class="sections">
      <h2 class="c-c">categories</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga!</p>
    </div>

    <div class="sections">
      <h2 class="c-c">Contact</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid, fuga!</p>
    </div>
  </div>
</template>

<script>

</script>

<style>
.footer-component{
  background-color: #141331;
  width: 100%;
  color: white;
  height: 200px;
  display: flex;
  justify-content: space-around;
}

p{
  font-size: 12px;
}

.sections{
  width: 100px;
}

.c-c{
  color: #1dbbb4;
}

@media screen and (max-width: 600px) {
.footer-component{
  display: flex;
  flex-wrap: wrap;
}
  h2{
    font-size: 14px;
  }

}
</style>