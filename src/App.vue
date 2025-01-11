<script setup>
import NavigationBar from './components/NavigationBar.vue';
import SliderHeader from './components/SliderHeader.vue';

</script>

<template>
  <NavigationBar />
  <div class="main">
    <SliderHeader />

    <router-view></router-view>
  </div>
</template>

<style scoped></style>
