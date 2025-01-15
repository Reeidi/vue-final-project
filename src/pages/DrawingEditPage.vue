<script setup>
import FormFieldset from '@/components/FormFieldset.vue';
import { useDrawingLoader } from '@/composables/useDrawingLoader';
import { editDrawing } from '@/services/drawingService';
import { useUserStore } from '@/stores/useUserStore';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();
const imageId = route.params.imageId;
const { drawing } = useDrawingLoader(imageId, () => {
  formData.value.drawingUrl = drawing.value.imageUrl;
  formData.value.title = drawing.value.title;
  formData.value.description = drawing.value.description;
});

const userStore = useUserStore();

const formData = ref({
  drawingUrl: '',
  title: '',
  description: '',
  authorName: `${userStore.user.firstName} ${userStore.user.lastName}`,
  authorAge: userStore.user.age
});
const validationRules = computed(() => ({
  formData: {
    drawingUrl: { required },
    title: { required },
    description: { required },
    authorName: { required },
    authorAge: { required },
  },
}));

const v$ = useVuelidate(validationRules, { formData });

async function onSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid)
    return;

  const title = formData.value.title;
  const description = formData.value.description;
  const drawingUrl = formData.value.drawingUrl;
  const result = await editDrawing(drawing.value._id, title, description, drawingUrl);
  if (result) {
    router.push({ name: 'DrawingPage', params: { imageId: imageId } });
  }
}
</script>

<template>
  <div class="container">
    <div class="containerShadow">
      <h2 class="title">{{ `${userStore.user.firstName}'s drawing` }}</h2>

      <div class="pad-2">
        <img v-if="v$.formData.drawingUrl.$model" :src="v$.formData.drawingUrl.$model" alt="" class="imageBorder" />

        <form @submit.prevent="onSubmit">
          <FormFieldset :title="'Drawing URL'" :errors="v$.formData.drawingUrl.$errors">
            <input type="text" name="drawingUrl" class="input" v-model="v$.formData.drawingUrl.$model" />
          </FormFieldset>

          <FormFieldset :title="'Title'" :errors="v$.formData.title.$errors">
            <input type="text" name="title" class="input" v-model="v$.formData.title.$model" />
          </FormFieldset>
          <FormFieldset :title="'Description'" :errors="v$.formData.description.$errors">
            <input type="text" name="description" class="input" v-model="v$.formData.description.$model" />
          </FormFieldset>
          <FormFieldset :title="'Author name'" :errors="v$.formData.authorName.$errors">
            <input type="text" name="authorName" class="input" v-model="v$.formData.authorName.$model" disabled />
          </FormFieldset>
          <FormFieldset :title="'Author age'" :errors="v$.formData.authorAge.$errors">
            <input type="text" name="authorAge" class="input" v-model="v$.formData.authorAge.$model" disabled />
          </FormFieldset>

          <div class="pad-2">
            <input type="submit" class="button" value="Save" />
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 960px;
  background: url(../../images/block-1.gif) 0 bottom repeat-x #fff;
}

.containerShadow {
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

.input {
  border: #e0e0e1 1px solid;
  background: #fff;
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #000;
  padding: 3px 10px 5px 10px;
  outline: medium none;
  width: 400px;
  height: 20px;
  float: left;
  box-shadow: 0 0 3px #c1c1c1;
}

.input:disabled {
  background-color: rgb(200, 200, 200);
}

.label {
  position: relative;
  display: flex;
  min-height: 35px;
  align-items: center;
  justify-content: center;
}

.labelStrong {
  width: 180px;
}

.hidden {
  display: none;
}
</style>
