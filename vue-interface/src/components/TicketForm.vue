<script setup lang="ts">
import { ref } from 'vue'
import InputFrame from './InputFrame.vue'

const categorySelected = ref('')
const typesSelected = ref('')
const subjectText = ref('')
const descriptionText = ref('')

// defineEmits<{
//     (e: 'changeState', value: number): void
// }>()
defineEmits(['changeToSummaryState'])
</script>

<template>
  <div class="frame">
    <div class="title">Ticket Details</div>
    <div class="inputs">
      <InputFrame label="Category">
        <select v-model="categorySelected">
          <option>Hardware</option>
          <option>Software</option>
          <option>Network</option>
          <option>In-Processing</option>
        </select>
      </InputFrame>

      <InputFrame label="Type">
        <select v-model="typesSelected">
          <option>A</option>
          <option>B</option>
          <option>C</option>
        </select>
      </InputFrame>

      <InputFrame label="Subject">
        <input v-model="subjectText" />
      </InputFrame>

      <InputFrame label="Description">
        <input v-model="descriptionText" />
      </InputFrame>
    </div>

    <button @click="$emit('changeToSummaryState')">Submit</button>
  </div>
</template>

<style scoped>
.inputs {
  display: grid;
}

@media (min-width: 1024px) {
}
</style>
