<script setup>
import LikesCounter from './LikesCounter.vue';

defineProps({
  imageUrl: { type: String },
  imageId: { type: String },
  title: { type: String },
  authorName: { type: String },
  authorAge: { type: Number },
  userLikesImageProp: { type: Boolean },
  likesProp: { type: Number }
})
</script>

<template>
  <li class="drawing-card">
    <strong class="strongText">{{ title }}</strong>
    <router-link :to="{ name: 'DrawingPage', params: { imageId: imageId } }">
      <img :src="imageUrl" alt="" class="imageBorder" />
    </router-link>
    <div class="info">
      <small class="subtitle">{{ `${authorName}, ${authorAge}` }}</small>
      <LikesCounter :likesProp="likesProp" :userLikesImageProp="userLikesImageProp" :imageId="imageId" />
    </div>
  </li>
</template>

<style scoped>
.drawing-card {
  width: 50%;
  padding: 20px 60px 20px 60px;
  display: inline-flex;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  text-align: center;
}

.strongText {
  font-size: 16px;
  line-height: 25px;
  color: #000;
  font-style: italic;
}

.imageBorder {
  border: #fff 10px solid;
  box-shadow: 0 0 5px #c1c1c1;
  display: inline-block;
  max-width: 300px;
  max-height: 200px;
}

.info {
  display: inline-flex;
}

.subtitle {
  font-weight: lighter;
  align-self: flex-start;
  padding: 4px 30px 0px 0px;
}
</style>
