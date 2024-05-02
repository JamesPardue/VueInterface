<script setup lang="ts">
import { type Ticket } from '@/definitions/TicketTypeDefintions'
const props = defineProps<{ tickets: Ticket[] }>()
console.log(props)
</script>

<template>
  <div class="frame">
    <div>
      <div v-for="(ticket, index) in tickets" :key="index">{{ ticket.id }}</div>
    </div>
  </div>
</template>

<style scoped></style>
