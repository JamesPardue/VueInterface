<script setup lang="ts">
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

.inputLabel {
  font-size: 12px;
  font-weight: 700;
}
</style>
