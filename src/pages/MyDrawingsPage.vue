<script setup>
import DrawingCard from '@/components/DrawingCard.vue';
import { useDrawings } from '@/composables/useDrawings';
import { useUserStore } from '@/stores/useUserStore';
import { computed, ref } from 'vue';

const userStore = useUserStore();

const user = ref(userStore.user);

const { allDrawings, isLoading, error } = useDrawings();

const myDrawings = computed(() => allDrawings.value.filter(drawing => drawing.author._id === user.value._id));

</script>

<template>
  <section id="content">
    <div class="container">
      <div class="containerPaperEffect">
        <h2 class="sectionTitle" style="text-align: center;">{{ user.firstName }}'s drawings</h2>

        <div class="buttonDiv">
          <router-link to="/drawing/create" class="button">Add drawing</router-link>
        </div>

        <p v-if="isLoading">Loading...</p>
        <p v-if="error" class="error">{{ error }}</p>
        <ul v-else>
          <DrawingCard v-for="drawing in myDrawings" :key="drawing._id" :imageUrl="drawing.imageUrl"
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
  background: url(../../../images/block-1-shadow.png) 0 0 repeat;
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
