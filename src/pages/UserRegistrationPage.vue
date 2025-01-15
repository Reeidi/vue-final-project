<script setup>
import FormFieldset from '@/components/FormFieldset.vue';
import { registerUser } from '@/services/userService';
import useVuelidate from '@vuelidate/core';
import { email, maxValue, minLength, minValue, required } from '@vuelidate/validators';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const error = ref(null);

const router = useRouter();

const formData = ref({
  firstName: '',
  lastName: '',
  email: '',
  age: 2,
  password: '',
  repeatPassword: ''
});
const validationRules = computed(() => ({
  formData: {
    firstName: { required, minLengthValue: minLength(2) },
    lastName: { required, minLengthValue: minLength(2) },
    email: { required, email },
    age: {
      required,
      minValue: minValue(2),
      maxValue: maxValue(60)
    },
    password: { required, minLengthValue: minLength(4) },
    repeatPassword: { required, minLengthValue: minLength(4) },
  }
}));

const v$ = useVuelidate(validationRules, { formData });

async function onSubmit() {
  error.value = null;

  const isValid = await v$.value.$validate();
  if (!isValid)
    return;

  const result = await registerUser(formData.value);
  if (result.success) {
    router.push({ name: 'Home' });
  } else {
    console.log(result);
    error.value = result.error;
  }
}
</script>

<template>
  <div class="container">
    <div class="containerShadow">
      <h2 class="title">Registration</h2>

      <form @submit.prevent="onSubmit">
        <FormFieldset :title="'First Name'" :errors="v$.formData.firstName.$errors">
          <input type="text" name="firstName" id="firstName" class="input" v-model="v$.formData.firstName.$model" />
        </FormFieldset>

        <FormFieldset :title="'Last Name'" :errors="v$.formData.lastName.$errors">
          <input type="text" name="lastName" id="lastName" class="input" v-model="v$.formData.lastName.$model" />
        </FormFieldset>

        <FormFieldset :title="'Email'" :errors="v$.formData.email.$errors">
          <input type="text" name="email" id="email" class="input" v-model="v$.formData.email.$model" />
        </FormFieldset>

        <FormFieldset :title="'Age'" :errors="v$.formData.age.$errors">
          <input type="number" name="age" id="age" class="input" v-model="v$.formData.age.$model" />
        </FormFieldset>

        <FormFieldset :title="'Password'" :errors="v$.formData.password.$errors">
          <input type="password" name="password" id="password" class="input" v-model="v$.formData.password.$model" />
        </FormFieldset>

        <FormFieldset :title="'Repeat password'" :errors="v$.formData.repeatPassword.$errors">
          <input type="password" name="repeatPassword" id="repeatPassword" class="input"
            v-model="v$.formData.repeatPassword.$model" />
        </FormFieldset>

        <p v-if="error" class="labelSmall">{{ error }}</p>

        <div class="pad-2">
          <input type="submit" class="sendButton" value="Sign Up" />
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
  background: url(../../images/block-1.gif) 0 bottom repeat-x #fff;
}

.containerShadow {
  background: url(../../images/block-1-shadow.png) 0 0 repeat-y;
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
