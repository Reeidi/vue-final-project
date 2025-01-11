<script setup>
import NavigationBar from './components/NavigationBar.vue';
import SliderHeader from './components/SliderHeader.vue';
import AboutPage from './pages/AboutPage.vue';
import HomePage from './pages/HomePage.vue';

</script>

<template>
  <NavigationBar />
  <div class="main">
    <SliderHeader />

    <HomePage />
    <AboutPage />
  </div>
</template>

<style scoped></style>
