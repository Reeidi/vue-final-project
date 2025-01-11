<script setup>
import NavigationBar from './components/NavigationBar.vue';
import SliderHeader from './components/SliderHeader.vue';
import AboutPage from './pages/AboutPage.vue';
import HomePage from './pages/HomePage.vue';
import SchedulePage from './pages/SchedulePage.vue';

</script>

<template>
  <NavigationBar />
  <div class="main">
    <SliderHeader />

    <!-- <HomePage /> -->
    <!-- <AboutPage /> -->
    <SchedulePage />
  </div>
</template>

<style scoped></style>
