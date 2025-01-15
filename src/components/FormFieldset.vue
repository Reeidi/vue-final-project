<script setup>
defineProps({
  title: { type: String },
  errors: { type: Array }
});
</script>

<template>
  <fieldset>
    <label>
      <strong class="labelStrong">{{ title }}:</strong>
      <slot />
    </label>

    <div class="errorContainer">
      <strong v-for="error of errors" :key="error.$uid">
        {{ error.$message }}
      </strong>
    </div>
  </fieldset>
</template>

<style scoped>
span {
  display: block;
}

span i {
  color: red;
}

label {
  display: flex;
  position: relative;
  display: flex;
  min-height: 35px;
  align-items: center;
  justify-content: center;
}

.errorContainer {
  display: flex;
  flex-wrap: wrap;
  gap: 0.25rem;
  font-size: 0.75rem;
  font-weight: bold;
  color: red
}

.labelStrong {
  width: 180px;
}
</style>
