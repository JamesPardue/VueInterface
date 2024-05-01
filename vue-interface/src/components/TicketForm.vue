<script setup lang="ts">
import { ref } from 'vue'
import InputFrame from './InputFrame.vue'
import { type TicketCategory } from '@/definitions/TicketTypeDefintions'

const categorySelected = ref<TicketCategory>(null)
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
          <option value="hardware">Hardware</option>
          <option value="software">Software</option>
          <option value="network">Network</option>
          <option value="in-processing">In-Processing</option>
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

    <button
      @click="
        $emit('changeToSummaryState', {
          state: 'summary',
          ticket: {
            id: 1,
            category: 'hardware',
            summary: 'summary test frn input'
          }
        })
      "
    >
      Submit
    </button>

    <button
      @click="
        () => {
          console.log(categorySelected)
        }
      "
    >
      Test Category
    </button>
  </div>
</template>

<style scoped>
.inputs {
  display: grid;
}

@media (min-width: 1024px) {
}
</style>
