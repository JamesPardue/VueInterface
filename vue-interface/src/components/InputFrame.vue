<script setup lang="ts">
//This component encapsulates the common 'label and input/info' pattern
defineProps({
  label: {
    type: String
  }
})
</script>

<template>
  <div class="inputContainer">
    <div class="inputLabel">{{ label }}</div>
    <div><slot /></div>
  </div>
</template>

<style scoped>
.inputContainer {
  display: grid;
  grid-template-rows: auto 1fr;
  gap: 4px;
}
</style>
