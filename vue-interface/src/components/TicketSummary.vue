<script setup lang="ts">
import { type Ticket } from '@/definitions/TicketTypeDefintions'
const props = defineProps<{ ticket: Ticket }>()
defineEmits(['showTicket'])
</script>

<template>
  <div class="ticketContainer">
    <div class="summaryLabel">Id:</div>
    {{ ticket.id }}

    <div class="summaryLabel">Category:</div>
    {{ ticket.category }}

    <div class="summaryLabel">Types:</div>
    <div>
      <div class="typeLabel" v-for="(type, index) in ticket.type" :key="index">{{ type }}</div>
    </div>
  </div>
</template>

<style scoped>
.ticketContainer {
  border: 2px solid darkgrey;
  border-radius: 4px;
  padding: 2px 8px;
  display: grid;
  gap: 8px;
  grid-template-columns: auto auto auto auto auto auto;
  justify-content: left;
  cursor: pointer;
}

.summaryLabel {
  font-weight: 800;
}
</style>
