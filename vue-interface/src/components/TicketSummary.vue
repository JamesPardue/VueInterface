<script setup lang="ts">
import { type Ticket } from '@/definitions/TicketTypeDefintions'
import type { PropType } from 'vue'

const props = defineProps<{ ticket: Ticket }>()
</script>

<template>
  <div class="frame">
    <div class="title">Ticket Details</div>
    <div class="inputs">
      <InputFrame label="Category"> {{ ticket.category }}</InputFrame>

      <InputFrame label="Type"> BBB </InputFrame>

      <InputFrame label="Subject"> {{ ticket.subject }} </InputFrame>

      <InputFrame label="Description"> DDD </InputFrame>
    </div>
  </div>
</template>

<style scoped></style>
