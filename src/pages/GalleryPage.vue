<script setup>
import { ref } from 'vue';
import DrawingCard from '@/components/DrawingCard.vue';
import { getAllDrawings } from '@/services/drawingService';

const allDrawings = ref([]);

async function loadData() {
  allDrawings.value = await getAllDrawings();
}

loadData();
</script>

<template>
  <section id="content">
    <div class="container">
      <div class="containerPaperEffect">
        <h2 class="sectionTitle" style="text-align: center;">Our Gallery</h2>

        <ul>
          <DrawingCard v-for="drawing in allDrawings" :key="drawing._id" :imageUrl="drawing.imageUrl"
            :imageId="drawing._id" :title="drawing.title" :authorName="drawing.author.firstName"
            :authorAge="drawing.author.age" :userLikesImageProp="drawing.userLikesImage"
            :likesProp="drawing.votes.length" />
        </ul>

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
