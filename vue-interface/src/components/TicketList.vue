<script setup lang="ts">
import { type Ticket } from '@/definitions/TicketTypeDefintions'
import TicketSummary from './TicketSummary.vue'

const props = defineProps<{ tickets: Ticket[] }>()
defineEmits(['showTicket'])
console.log(props)
</script>

<template>
  <div class="container">
    <div class="title">Ticket List</div>
    <div class="ticketList">
      <TicketSummary
        v-for="(ticket, index) in tickets"
        :key="index"
        :ticket="ticket"
        @click="$emit('showTicket', ticket)"
      />
    </div>
  </div>
</template>

<style scoped>
.ticketList {
  display: grid;
  gap: 4px;
}
</style>
