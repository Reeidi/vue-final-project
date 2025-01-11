<script setup>
defineProps({
  imageUrl: { type: String },
  imageId: { type: String },
  title: { type: String },
  authorName: { type: String },
  authorAge: { type: Number },
  userLikesImageProp: { type: Number },
  likesProp: { type: String }
})
</script>

<template>
  <li class="card">
    <strong class="strongText">{{ title }}</strong>
    <img :src="imageUrl" alt="" class="imageBorder" />
    <div class="info">
      <small class="subtitle">{{ `${authorName}, ${authorAge}` }}</small>
    </div>
  </li>
</template>

<style scoped>
.card {
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
