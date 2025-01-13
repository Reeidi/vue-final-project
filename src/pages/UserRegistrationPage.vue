<script setup>
import { registerUser } from '@/services/userService';
import useVuelidate from '@vuelidate/core';
import { email, maxValue, minLength, minValue, required } from '@vuelidate/validators';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

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
  const isValid = await v$.value.$validate();
  if (!isValid)
    return;

  const result = await registerUser(formData.value);
  if (result.success) {
    router.push({ name: 'Home' });
  } else {
    console.log(result);
  }
}
</script>

<template>
  <div class="container">
    <div class="containerShadow">
      <h2 class="title">Registration</h2>

      <form @submit.prevent="onSubmit">
        <label htmlFor="firstName" class="label">
          <strong class="labelStrong">First Name:</strong>
          <input type="text" name="firstName" id="firstName" class="input" v-model="v$.formData.firstName.$model" />
          <strong class="clear"></strong>
        </label>

        <label htmlFor="lastName" class="label">
          <strong class="labelStrong">Last Name:</strong>
          <input type="text" name="lastName" id="lastName" class="input" v-model="v$.formData.lastName.$model" />
          <strong class="clear"></strong>
        </label>

        <label htmlFor="email" class="label">
          <strong class="labelStrong">Email:</strong>
          <input type="text" name="email" id="email" class="input" v-model="v$.formData.email.$model" />
          <strong class="clear"></strong>
        </label>

        <label htmlFor="age" class="label">
          <strong class="labelStrong">Age:</strong>
          <input type="number" name="age" id="age" class="input" v-model="v$.formData.age.$model" />
          <strong class="clear"></strong>
        </label>

        <label htmlFor="password" class="label">
          <strong class="labelStrong">Password:</strong>
          <input type="password" name="password" id="password" class="input" v-model="v$.formData.password.$model" />
          <strong class="clear"></strong>
        </label>

        <label htmlFor="repeatPassword" class="label">
          <strong class="labelStrong">Repeat password:</strong>
          <input type="password" name="repeatPassword" id="repeatPassword" class="input"
            v-model="v$.formData.repeatPassword.$model" />
          <strong class="clear"></strong>
        </label>

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
