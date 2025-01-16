<script setup>
import FooterComponent from './components/FooterComponent.vue';
import NavigationBar from './components/NavigationBar.vue';
import SliderHeader from './components/SliderHeader.vue';

</script>

<template>
  <NavigationBar />
  <div class="main">
    <SliderHeader />

    <router-view></router-view>
  </div>
  <FooterComponent />
</template>

<style scoped></style>
