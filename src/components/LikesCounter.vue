<script setup>
import heartIcon from "../assets/images/heart-icon.png";
import heartEmptyIcon from "../assets/images/heart-empty-icon.png";
import { toRef } from "vue";
import { useUserStore } from "@/stores/useUserStore";
import { like } from "@/services/drawingService";

const userStore = useUserStore();

const props = defineProps({
  likesProp: { type: Number },
  userLikesImageProp: { type: Boolean },
  imageId: { type: String }
})

const likes = toRef(props.likesProp);
const userLikesImage = toRef(props.userLikesImageProp);

async function clickHandler() {
  if (userStore.isUserLogged) {
    const result = await like(props.imageId);
    if (result.success) {
      userLikesImage.value = !userLikesImage.value;
      likes.value = result.likesCount;
    }
  }
}

</script>

<template>
  <small class="likes">
    {{ likes || 0 }}
    <img :src="userLikesImage ? heartIcon : heartEmptyIcon" class="icon" @click="clickHandler" />
  </small>
</template>

<style scoped>
.likes {
  font-weight: lighter;
  align-self: flex-end;
  padding: 4px 0px 0px 0px;
}

.icon {
  max-width: 30px;
  max-height: 20px;
  padding: 0px 0px 0px 3px;
}
</style>
