<script setup>
import FormFieldset from '@/components/FormFieldset.vue';
import { useUserStore } from '@/stores/useUserStore';
import useVuelidate from '@vuelidate/core';
import { required } from '@vuelidate/validators';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const hasFailed = ref(false);

const userStore = useUserStore();

const formData = ref({ email: '', password: '' });
const validationRules = computed(() => ({
  formData: {
    email: { required },
    password: { required },
  },
}));

const v$ = useVuelidate(validationRules, { formData });

async function onSubmit() {
  hasFailed.value = false;

  const isValid = await v$.value.$validate();
  if (!isValid)
    return;

  const result = await userStore.login(formData.value);
  if (result) {
    router.push({ name: 'Home' });
  } else {
    hasFailed.value = true;
  }
}
</script>

<template>
  <div class="container">
    <div class="containerShadow">
      <h2 class="title">Login</h2>

      <form @submit.prevent="onSubmit">
        <FormFieldset :title="'Email'" :errors="v$.formData.email.$errors">
          <input type="text" name="email" class="input" v-model="v$.formData.email.$model" />
        </FormFieldset>

        <FormFieldset :title="'Password'" :errors="v$.formData.password.$errors">
          <input type="password" name="password" class="input" v-model="v$.formData.password.$model" />
        </FormFieldset>

        <p v-if="hasFailed" class="labelSmall">Invalid email or password.</p>

        <div class="pad-2">
          <input type="submit" class="sendButton" value="Log in" />
        </div>
      </form>
    </div>
  </div>
</template>

<style scoped>
.container {
  margin-top: 25px;
  margin-left: auto;
  margin-right: auto;
  width: 560px;
  background: url(../assets/images/block-1.gif) 0 bottom repeat-x #fff;
}

.containerShadow {
  background: url(../assets/images/block-1-shadow.png) 0 0 repeat-y;
  padding: 18px 30px 0 30px;
}

.title {
  text-align: center;
  color: #000;
}

.input {
  border: #e0e0e1 1px solid;
  background: #fff;
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #000;
  padding: 3px 10px 5px 10px;
  outline: medium none;
  width: 247px;
  height: 17px;
  float: left;
  box-shadow: 0 0 3px #c1c1c1;
}

.label {
  position: relative;
  display: flex;
  min-height: 35px;
  align-items: center;
  justify-content: center;
}

.labelSmall {
  display: flex;
  color: red;
}

.sendButton {
  font-size: 30px;
  line-height: 36px;
  color: #0072ff;
  font-weight: bold;
  font-family: 'Cabin Sketch', cursive;
  letter-spacing: -1px;
  display: inline-block;
  background-color: transparent;
}

.sendButton:hover {
  color: #b30800;
  text-decoration: underline;
}

.sendButton:active {
  color: #00ae35;
  text-decoration: underline;
}
</style>
