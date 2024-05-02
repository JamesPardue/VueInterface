<script setup lang="ts">
import { ref } from 'vue'
import TicketForm from './components/TicketForm.vue'
import TicketDetails from './components/TicketDetails.vue'
import TicketList from './components/TicketList.vue'
import { type Ticket } from '@/definitions/TicketTypeDefintions'

type InputState = {
  state: 'input'
}
type SummaryState = {
  state: 'details'
  ticket: Ticket
}

type ListState = {
  state: 'list'
}
const AppState = ref<ListState | InputState | SummaryState>({ state: 'input' })

const Tickets = ref<Ticket[]>([])

const TestTicket: Ticket = {
  id: 999,
  category: 'Software',
  type: ['t1', 't2'],
  subject: 'subject text',
  description: 'description text',
  files: [
    { id: 1, name: 'file1' },
    { id: 2, name: 'file2' }
  ]
}
Tickets.value.push(TestTicket)
Tickets.value.push(TestTicket)
</script>

<template>
  <TicketForm
    v-if="AppState.state === 'input'"
    @change-to-summary-state="(i) => (AppState = i)"
    @add-to-ticket-list="(t) => Tickets.push(t)"
  />
  <TicketDetails v-else-if="AppState.state === 'details'" :ticket="AppState.ticket" />
  <TicketList :tickets="Tickets" v-else />

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
        AppState = { state: 'details', ticket: TestTicket }
      }
    "
  >
    Set to Details
  </button>
  <button
    @click="
      () => {
        AppState = { state: 'list' }
      }
    "
  >
    Set to List
  </button>
</template>

<style scoped>
@media (min-width: 1024px) {
}
</style>
