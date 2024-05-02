<script setup lang="ts">
import { ref } from 'vue'
import TicketForm from './components/TicketForm.vue'
import TicketDetails from './components/TicketDetails.vue'
import TicketList from './components/TicketList.vue'
import { type Ticket, type AppState } from '@/definitions/TicketTypeDefintions'

const State = ref<AppState>({ display: 'input' })

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
    v-if="State.display === 'input'"
    @change-to-summary-state="(i) => (State = i)"
    @add-to-ticket-list="(t) => Tickets.push(t)"
  />
  <TicketDetails v-else-if="State.display === 'details'" :ticket="State.ticket" />
  <TicketList
    v-else
    :tickets="Tickets"
    @show-ticket="(t) => (State = { display: 'details', ticket: t })"
  />

  <button
    @click="
      () => {
        State = { display: 'input' }
      }
    "
  >
    Set to Input
  </button>
  <button
    @click="
      () => {
        State = { display: 'details', ticket: TestTicket }
      }
    "
  >
    Set to Details
  </button>
  <button
    @click="
      () => {
        State = { display: 'list' }
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
