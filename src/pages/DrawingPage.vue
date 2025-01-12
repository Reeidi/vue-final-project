<script setup>
import LikesCounter from '@/components/LikesCounter.vue';


const author = {
  firstName: 'Radost',
  lastName: 'Peneva',
  age: 30
};

const drawing = {
  title: "My brushes",
  description: "alabala",
  imageUrl: "https://mymodernmet.com/wp/wp-content/uploads/2019/03/elements-of-art-6.jpg"
};

</script>

<template>
  <div class="container">
    <div class="containerPaperEffect">
      <h2 class="title">{{ author.firstName }}'s drawing</h2>

      <div class="pad-2">
        <h1>{{ drawing.title }}</h1>
        <img :src="drawing.imageUrl" alt="" class="imageBorder" />
        <div class="extra-wrap clr-6">
          <p><strong>{{ author.firstName }} {{ author.lastName }}, {{ author.age }} years old</strong></p>
          <p>{{ drawing.description }}</p>
        </div>

        <LikesCounter />
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  background: #fff;
  width: 960px;
}

.containerPaperEffect {
  background: url(../../images/block-1-shadow.png) 0 0 repeat;
  padding: 18px 30px 0 30px;
}

.title {
  text-align: center;
  color: #000;
}

.imageBorder {
  border: #fff 10px solid;
  box-shadow: 0 0 5px #c1c1c1;
  display: inline-block;
  max-width: 800px;
  max-height: 800px;
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

.button:hover {
  color: #b30800;
  text-decoration: underline;
}

.button:active {
  color: #00ae35;
  text-decoration: underline;
}
</style>
