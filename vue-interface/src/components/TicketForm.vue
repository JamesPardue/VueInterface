<script setup lang="ts">
import { ref } from 'vue'
import InputFrame from './InputFrame.vue'
import {
  HardwareTypes,
  SoftwareTypes,
  NetworkTypes,
  InProcessingTypes,
  type TicketCategory
} from '@/definitions/TicketTypeDefintions'

defineEmits(['changeToSummaryState'])

const categorySelected = ref<TicketCategory>(null)
const typesSelected = ref([])
const subjectText = ref('')
const descriptionText = ref('')

const categoryTypes = ref<string[]>([])
const showTypeSelection = ref(false)

function updateTypes(target: HTMLSelectElement) {
  typesSelected.value = []

  switch (target.value) {
    case 'Hardware':
      categoryTypes.value = HardwareTypes
      break
    case 'Software':
      categoryTypes.value = SoftwareTypes
      break
    case 'Network':
      categoryTypes.value = NetworkTypes
      break
    case 'In-Processing':
      categoryTypes.value = InProcessingTypes
      break
    default:
      categoryTypes.value = []
  }
}

function clearTicket() {
  categorySelected.value = null
  typesSelected.value = []
  subjectText.value = ''
  descriptionText.value = ''
  categoryTypes.value = []
}
</script>

<template>
  <div class="frame">
    <div class="title">Ticket Details</div>
    <div class="inputframe">
      <InputFrame label="Category" @click="() => (showTypeSelection = false)">
        <select
          v-model="categorySelected"
          @change="updateTypes($event.target as HTMLSelectElement)"
          class="inputStyle"
        >
          <option value="Hardware">Hardware</option>
          <option value="Software">Software</option>
          <option value="Network">Network</option>
          <option value="In-Processing">In-Processing</option>
        </select>
      </InputFrame>

      <InputFrame label="Type">
        <div @click="showTypeSelection = !showTypeSelection" class="inputStyle multiSelectDisplay">
          <span v-for="(type, index) in typesSelected" :key="index"
            >{{ type }}
            <span v-if="index != Object.keys(typesSelected).length - 1">| </span>
          </span>
        </div>
        <select
          v-if="showTypeSelection"
          v-model="typesSelected"
          multiple
          class="inputStyle multiSelectStyle"
        >
          <option disabled value="">Hold Ctrl/Command to select multiple</option>
          <option v-for="(type, index) in categoryTypes" :key="index">{{ type }}</option>
        </select>
      </InputFrame>

      <InputFrame label="Subject" @click="() => (showTypeSelection = false)" class="span2">
        <input v-model="subjectText" class="inputStyle" />
      </InputFrame>

      <InputFrame label="Description" class="span2" @click="() => (showTypeSelection = false)">
        <input v-model="descriptionText" class="inputStyle" />
      </InputFrame>
    </div>

    <div class="buttonContainer">
      <button class="buttonStyle cancelButton" @click="clearTicket()">Cancel</button>
      <button
        class="buttonStyle submitButton"
        @click="
          $emit('changeToSummaryState', {
            state: 'summary',
            ticket: {
              id: 1,
              category: categorySelected,
              type: typesSelected,
              subject: subjectText,
              description: descriptionText
            }
          })
        "
      >
        Submit
      </button>
    </div>
  </div>
</template>

<style scoped>
.buttonStyle {
  border: none;
  border-radius: 4px;
  font-size: 10px;
  font-weight: 600;
  padding: 12px 10px;
  cursor: pointer;
}

.submitButton {
  background: midnightblue;
  color: ghostwhite;
}

.cancelButton {
  background: ghostwhite;
  color: midnightblue;
}

.buttonContainer {
  margin-top: 10px;
  display: grid;
  grid-template-columns: auto auto;
  gap: 10px;
  justify-content: right;
}

.inputStyle {
  width: 100%;
  background: ghostwhite;
  border: 2px solid gainsboro;
  border-radius: 4px;
  padding: 4px 2px;
  font-family: arial;
  font-size: 14px;
}
input:focus {
  background: white;
}

.multiSelectDisplay {
  font-size: 14px;
  min-height: 28px;
  padding: 0px 4px;
}

.multiSelectStyle {
  position: absolute;
  width: auto;
}

@media (min-width: 1024px) {
}
</style>
