<script setup>
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
          <ul class="items">
            <li><img src="../assets/images/slider-1.jpg" alt="" /></li>
            <!-- <li><img src="../assets/images/slider-2.jpg" alt="" /></li> -->
            <!-- <li><img src="../assets/images/slider-3.jpg" alt="" /></li> -->
          </ul>
        </div>
        <a href="#" class="prev"></a>
        <a href="#" class="next"></a>
      </div>
      <ul class="menu">
        <li><router-link class="clr-1" :to="{ name: 'Home' }">Home</router-link></li>
        <li><router-link class="clr-2" :to="{ name: 'About' }">About</router-link></li>
        <li><router-link class="clr-3" :to="{ name: 'Schedule' }">Schedule</router-link></li>
        <li><router-link class="clr-4" :to="{ name: 'Gallery' }">Gallery</router-link></li>
        <li><router-link class="clr-5" :to="{ name: 'Home' }">Contacts</router-link></li>
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
}
</style>
