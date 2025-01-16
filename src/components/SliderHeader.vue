<script setup>
import { ref } from 'vue';

const imageNumber = ref(1);

window.setInterval(() => {
  imageNumber.value++;
  if (imageNumber.value == 4)
    imageNumber.value = 1;
}, 5000);
</script>

<template>
  <header class="header">
    <h1 class="topMargin">
      <router-link to="/">
        <img src="../assets/images/logo.png" />
      </router-link>
    </h1>
    <nav class="nav">
      <div id="slide">
        <div class="slider">
          <img :src="`/src/assets/images/slider-${imageNumber}.jpg`" alt="" />
        </div>
        <div class="prev" @click="() => { imageNumber--; if (imageNumber == 0) imageNumber = 3; }"></div>
        <div class="next" @click="() => { imageNumber++; if (imageNumber == 4) imageNumber = 1; }"></div>
      </div>
      <ul class="menu">
        <li><router-link class="clr-1" :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link class="clr-2" :to="{ name: 'About' }">About</router-link></li>
        <li><router-link class="clr-3" :to="{ name: 'Schedule' }">Schedule</router-link></li>
        <li><router-link class="clr-4" :to="{ name: 'Gallery' }">Gallery</router-link></li>
        <li><router-link class="clr-5" :to="{ name: 'Contacts' }">Contacts</router-link></li>
      </ul>
    </nav>
  </header>
</template>

<style scoped>
.header {
  width: 1000px;
  margin: 0 auto;
  z-index: 101;
  background: url(../assets/images/header.jpg) right 0 no-repeat;
}

.nav {
  z-index: 100;
  background: url(../assets/images/slider-bg.png) 0 0 no-repeat;
  margin: 17px 0px 0 0px;
  height: 571px;
  overflow: hidden;
  padding: 0px;
}

.topMargin {
  padding-top: 10px;
}

.menu {
  list-style: none;
  z-index: 500;
}
</style>
