<script setup lang="ts">
import { type Ticket } from '@/definitions/TicketTypeDefintions'
import type { PropType } from 'vue'

const props = defineProps<{ ticket: Ticket }>()

console.log(props.ticket)
</script>

<template>
  <div class="frame">
    <div class="title">Ticket Details</div>
    <div class="inputs">
      <div>Category</div>
      <div>{{ ticket.category }}</div>

      <div>BBB</div>

      <div>Subject</div>
      <div>{{ ticket.subject }}</div>

      <div>DDD</div>
    </div>
  </div>
</template>

<style scoped></style>
