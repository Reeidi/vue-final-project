<script setup>
</script>

<template>
  <section id="content">
    <div class="container">
      <div class="containerPaperEffect">
        <h2 class="sectionTitle" style="text-align: center;">Our Gallery</h2>

        <div class="clear"></div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.container {
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
}

.containerPaperEffect {
  background: url(../assets/images/block-1-shadow.png) 0 0 repeat;
  padding: 18px 30px 0 30px;
}

.sectionTitle {
  color: #b30800;
  padding-bottom: 5px;
  text-decoration: underline;
}

.buttonDiv {
  padding: 0px 0 50px 0;
  text-align: center;
  overflow: hidden;
}

.button {
  font-size: 30px;
  line-height: 36px;
  color: #0072ff;
  font-weight: bold;
  font-family: 'Cabin Sketch', cursive;
  letter-spacing: -1px;
  display: inline-block;
  background-color: transparent;
  text-align: center;
  margin-left: 20px;
  overflow: hidden;
}
</style>
