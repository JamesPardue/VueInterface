<script setup lang="ts">
import { ref } from 'vue'
import TicketForm from './components/TicketForm.vue'
import TicketDetails from './components/TicketDetails.vue'
import TicketList from './components/TicketList.vue'
import { type Ticket, type AppState } from '@/definitions/TicketTypeDefintions'

const State = ref<AppState>({ display: 'list' })

const Tickets = ref<Ticket[]>([])
const TicketCount = ref(0)

//AddTicket adds tickets to the list and updates the current count to be used for ticket ids.
//Tickets should only be added using this function.
function AddTicket(ticket: Ticket) {
  Tickets.value.push(ticket)
  TicketCount.value++
}

//Starting tickets to better demonstrate list
const StartingTicket1: Ticket = {
  id: 0,
  category: 'Software',
  type: ['Adobe', 'Outlook'],
  subject: 'Starting ticket 1',
  description: 'This is a software ticket',
  files: [
    { id: 1, name: 'file1' },
    { id: 2, name: 'file2' }
  ]
}
const StartingTicket2: Ticket = {
  id: 1,
  category: 'Hardware',
  type: ['Printers'],
  subject: 'Starting ticket 2',
  description: 'This is a hardware ticket',
  files: []
}
AddTicket(StartingTicket1)
AddTicket(StartingTicket2)
</script>

<template>
  <div class="frame">
    <!-- View shown depends on the display state: 'input', 'list', or 'details'-->
    <TicketForm
      v-if="State.display === 'input'"
      :id="TicketCount"
      @add-to-ticket-list="
        (t) => {
          AddTicket(t)
          State = { display: 'list' }
        }
      "
      @back-to-list="State = { display: 'list' }"
    />
    <TicketDetails
      v-else-if="State.display === 'details'"
      :ticket="State.ticket"
      @back-to-list="State = { display: 'list' }"
    />
    <TicketList
      v-else
      :tickets="Tickets"
      @show-ticket="(t) => (State = { display: 'details', ticket: t })"
    />
    <button
      v-if="State.display === 'list'"
      class="addTicketButton"
      @click="
        () => {
          State = { display: 'input' }
        }
      "
    >
      + Add Ticket
    </button>
  </div>
</template>

<style scoped>
.addTicketButton {
  background: ghostwhite;
  border: 2px solid grey;
  border-radius: 4px;
  padding: 4px 8px;
  margin-top: 12px;
  cursor: pointer;
}

@media (min-width: 1024px) {
}
</style>
