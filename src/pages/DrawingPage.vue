<script setup>
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import LikesCounter from '@/components/LikesCounter.vue';
import { useDrawingLoader } from '@/composables/useDrawingLoader';

const route = useRoute();
const imageId = route.params.imageId;
const { drawing, author } = useDrawingLoader(imageId);

const likesCount = computed(() => drawing.value?.votes.length);
const userLikesImage = computed(() => drawing.value?.userLikesImage)

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

        <LikesCounter :likesProp="likesCount" :userLikesImageProp="userLikesImage" :imageId="imageId" />

        <!-- show only to author -->
        <div v-if="drawing.isAuthor" class="pad-2">
          <input type="submit" class="button" value="Edit" onClick="" />
          <input type="submit" class="button" value="Delete" onClick={deleteClick} />
        </div>
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
