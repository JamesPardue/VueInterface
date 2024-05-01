<script setup lang="ts">
import { ref } from 'vue'
import TicketForm from './components/TicketForm.vue'
import TicketSummary from './components/TicketSummary.vue'

const AppState = ref<'input' | 'summary'>('input')
</script>

<template>
  <TicketForm v-if="AppState === 'input'" @change-to-summary-state="AppState = 'summary'" />
  <TicketSummary v-else />

  <button
    @click="
      () => {
        AppState = 'input'
      }
    "
  >
    Set to Input
  </button>
  <button
    @click="
      () => {
        AppState = 'summary'
      }
    "
  >
    Set to Summary
  </button>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
