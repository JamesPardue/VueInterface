<script setup lang="ts">
import { ref } from 'vue'
import TicketForm from './components/TicketForm.vue'
import TicketSummary from './components/TicketSummary.vue'
import { type Ticket } from '@/definitions/TicketTypeDefintions'

type InputState = {
  state: 'input'
}
type SummaryState = {
  state: 'summary'
  ticket?: Ticket
}

const TestTicket: Ticket = {
  id: 999,
  category: 'software',
  subject: '1111111'
}

const AppState = ref<InputState | SummaryState>({ state: 'input' })
</script>

<template>
  <TicketForm v-if="AppState.state === 'input'" @change-to-summary-state="(i) => (AppState = i)" />
  <TicketSummary v-else :ticket="TestTicket" />

  <button
    @click="
      () => {
        AppState = { state: 'input' }
      }
    "
  >
    Set to Input
  </button>
  <button
    @click="
      () => {
        AppState = { state: 'summary' }
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
