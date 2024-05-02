<script setup lang="ts">
import { type Ticket } from '@/definitions/TicketTypeDefintions'
import InputFrame from './InputFrame.vue'

defineProps<{ ticket: Ticket }>()
</script>

<template>
  <div class="frame">
    <div class="title">Ticket Details</div>
    <div class="inputframe">
      <InputFrame label="Category">
        <div class="categoryDisplay">{{ ticket.category }}</div></InputFrame
      >

      <InputFrame label="Type">
        <div class="typeLabel" v-for="(type, index) in ticket.type" :key="index">{{ type }}</div>
      </InputFrame>

      <InputFrame label="Subject" class="span2"> {{ ticket.subject }}</InputFrame>

      <InputFrame label="Description" class="span2"> {{ ticket.description }}</InputFrame>
    </div>

    <div>
      <div class="inputLabel">Ticket Files & Documents</div>
      <div v-for="(file, index) in ticket.files" :key="index" class="fileContainer">
        <div class="fileName">{{ file.name }}</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.categoryDisplay {
  background: white;
  border-radius: 4px;
  padding: 4px 8px;
}

.typeLabel {
  display: inline-block;
  background: lightblue;
  color: darkblue;
  font-weight: 800;
  border-radius: 4px;
  padding: 4px 6px;
  margin: 0px 2px;
  font-size: 9px;
}
</style>
