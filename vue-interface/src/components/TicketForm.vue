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

const categorySelected = ref<TicketCategory>(null)
const typesSelected = ref([])
const subjectText = ref('')
const descriptionText = ref('')

const categoryTypes = ref<string[]>([])
const showTypeSelection = ref(false)

// defineEmits<{
//     (e: 'changeState', value: number): void
// }>()
defineEmits(['changeToSummaryState'])

function updateTypes(target: HTMLSelectElement) {
  typesSelected.value = []

  switch (target.value) {
    case 'hardware':
      categoryTypes.value = HardwareTypes
      break
    case 'software':
      categoryTypes.value = SoftwareTypes
      break
    case 'network':
      categoryTypes.value = NetworkTypes
      break
    case 'in-processing':
      categoryTypes.value = InProcessingTypes
      break
    default:
      categoryTypes.value = []
  }
}
</script>

<template>
  <div class="frame">
    <div class="title">Ticket Details</div>
    <div class="inputs">
      <InputFrame label="Category" @click="() => (showTypeSelection = false)">
        <select
          v-model="categorySelected"
          @change="updateTypes($event.target as HTMLSelectElement)"
          class="inputStyle"
        >
          <option value="hardware">Hardware</option>
          <option value="software">Software</option>
          <option value="network">Network</option>
          <option value="in-processing">In-Processing</option>
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

      <InputFrame
        label="Subject"
        @click="() => (showTypeSelection = false)"
        :style="{ gridColumn: '1 / span 2' }"
      >
        <input v-model="subjectText" class="inputStyle" />
      </InputFrame>

      <InputFrame
        label="Description"
        :style="{ gridColumn: '1 / span 2' }"
        @click="() => (showTypeSelection = false)"
      >
        <input v-model="descriptionText" class="inputStyle" />
      </InputFrame>
    </div>

    <button
      @click="
        $emit('changeToSummaryState', {
          state: 'summary',
          ticket: {
            id: 1,
            category: categorySelected,
            subject: subjectText
          }
        })
      "
    >
      Submit
    </button>

    <button
      @click="
        () => {
          console.log(categorySelected)
        }
      "
    >
      Test Category
    </button>
  </div>
</template>

<style scoped>
.inputs {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2px 24px;
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
