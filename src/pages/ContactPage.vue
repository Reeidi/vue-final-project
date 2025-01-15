<script setup>
import FormFieldset from '@/components/FormFieldset.vue';
import { sendContactMessage } from '@/services/contactService';
import useVuelidate from '@vuelidate/core';
import { email, required } from '@vuelidate/validators';
import { computed, ref } from 'vue';
import { useRouter } from 'vue-router';

const router = useRouter();

const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: '',
});
const validationRules = computed(() => ({
  formData: {
    name: { required },
    email: { required, email },
    phone: { required },
    message: { required },
  },
}));

const v$ = useVuelidate(validationRules, { formData });

async function onSubmit() {
  const isValid = await v$.value.$validate();
  if (!isValid)
    return;

  const result = await sendContactMessage(formData.value);
  if (result) {
    router.push({ name: 'Home' });
  } else {
    console.log('Error sending message!');
  }
}
</script>

<template>
  <section id="content">
    <div class="container_12">
      <div class="grid_4 bot-1">
        <h2 class="sectionTitle" style="margin-top: 35px;">Contact Us</h2>
        <div class="map">
          <iframe title="Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11728.944494476631!2d23.328421515075664!3d42.698720803445376!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40aa859035e0fc3b%3A0xd3b042e2816cff2c!2sSerdika%20Center!5e0!3m2!1sen!2sbg!4v1639946772245!5m2!1sen!2sbg"
            width="280" height="240" allowfullscreen="" loading="lazy" />
        </div>
        <div style="color: white; padding-top: 20px;">
          <dt>ul. "Lisets" 8, <br />
            Sofia</dt>
          <dd><span>Telephone: </span>+1 800 603 6035</dd>
          <dd><span>E-mail: mail@demolink.org</span></dd>
        </div>
      </div>
      <div class="grid_8">
        <div class="block-1 top-5">
          <div class="block-1-shadow">
            <h2 class="sectionTitle">Contact Form</h2>

            <form @submit.prevent="onSubmit">
              <FormFieldset :title="'Name'" :errors="v$.formData.name.$errors">
                <input type="text" name="name" class="input" v-model="v$.formData.name.$model" />
              </FormFieldset>
              <FormFieldset :title="'Email'" :errors="v$.formData.email.$errors">
                <input type="text" name="email" class="input" v-model="v$.formData.email.$model" />
              </FormFieldset>
              <FormFieldset :title="'Phone'" :errors="v$.formData.phone.$errors">
                <input type="text" name="phone" class="input" v-model="v$.formData.phone.$model" />
              </FormFieldset>
              <FormFieldset :title="'Message'" :errors="v$.formData.message.$errors">
                <textarea name="message" id="message" class="textArea" v-model="v$.formData.message.$model"></textarea>
              </FormFieldset>

              <div class="pad-2">
                <input type="submit" class="sendButton" value="Send" />
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="clear"></div>
    </div>
  </section>

</template>

<style scoped>
.map {
  width: 300px;
  height: 260px;
  border: #fff 10px solid;
  background: #fff;
  margin-top: 8px;
}

.sectionTitle {
  color: #a400b3;
  padding-bottom: 5px;
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
  width: 350px;
  height: 17px;
  float: left;
  box-shadow: 0 0 3px #c1c1c1;
}

.textArea {
  border: #e0e0e1 1px solid;
  background: #fff;
  font-size: 14px;
  font-family: Georgia, "Times New Roman", Times, serif;
  color: #000;
  padding: 3px 10px 5px 10px;
  outline: medium none;
  width: 350px;
  height: 150px;
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
