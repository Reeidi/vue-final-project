<script setup>
defineProps({
  time: { type: String },
  courseName: { type: String },
  teacher: { type: String }
})
</script>

<template>
  <td>
    <span className="clr-2">{{ time }}</span>
    <span className="clr-4">{{ courseName }}</span>
    <span className="clr-1">{{ teacher }}</span>
  </td>
</template>

<style scoped></style>
