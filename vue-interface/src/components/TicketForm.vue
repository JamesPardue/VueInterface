<script setup lang="ts">
import { ref } from 'vue'
import InputFrame from './InputFrame.vue'
import {
  HardwareTypes,
  SoftwareTypes,
  NetworkTypes,
  InProcessingTypes,
  type TicketCategory,
  type TicketFile
} from '@/definitions/TicketTypeDefintions'

defineProps<{ id: number }>()
defineEmits(['addToTicketList', 'backToList'])

const categorySelected = ref<TicketCategory>(null)
const typesSelected = ref([])
const subjectText = ref('')
const descriptionText = ref('')
const ticketFiles = ref<TicketFile[]>([])

const categoryTypes = ref<string[]>([])
const showTypeSelection = ref(false)

const categoryInvalid = ref(false)
const typeInvalid = ref(false)
const subjectInvalid = ref(false)
const descriptionInvalid = ref(false)

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
  ticketFiles.value = []
}

function addTicketFile() {
  let highestFileNum = 0

  for (; highestFileNum < ticketFiles.value.length; ++highestFileNum) {
    if (ticketFiles.value[highestFileNum].id !== highestFileNum) {
      break
    }
  }
  ticketFiles.value.push({
    id: highestFileNum,
    name: 'nameoffileattached' + (highestFileNum + 1) + '.ext'
  })

  ticketFiles.value.sort((a, b) => {
    return a.id > b.id ? 1 : -1
  })
}

function deleteFile(id: number) {
  const index = ticketFiles.value.findIndex((t) => t.id === id)
  ticketFiles.value.splice(index, 1)
}
</script>

<template>
  <div class="container">
    <div class="header">
      <div class="title">Ticket Details</div>
      <div class="backButton" @click="$emit('backToList')">Back</div>
    </div>
    <div class="inputframe">
      <InputFrame label="Category">
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
        <div v-if="categoryInvalid" class="errorText">Category required</div>
      </InputFrame>

      <InputFrame label="Type">
        <div @click="showTypeSelection = !showTypeSelection" class="inputStyle multiSelectDisplay">
          <span v-for="(type, index) in typesSelected" :key="index"
            >{{ type }}
            <span v-if="index != Object.keys(typesSelected).length - 1">| </span>
          </span>
        </div>
        <div
          v-if="showTypeSelection"
          class="overlay"
          @click="() => (showTypeSelection = false)"
        ></div>
        <select
          v-if="showTypeSelection"
          v-model="typesSelected"
          multiple
          class="inputStyle multiSelectStyle"
        >
          <option disabled value="">Hold Ctrl/Command to select multiple</option>
          <option v-for="(type, index) in categoryTypes" :key="index">{{ type }}</option>
        </select>
        <div v-if="typeInvalid" class="errorText">Type required</div>
      </InputFrame>

      <InputFrame label="Subject" class="span2">
        <input v-model="subjectText" class="inputStyle" />
        <div v-if="subjectInvalid" class="errorText">Subject required</div>
      </InputFrame>

      <InputFrame label="Description" class="span2">
        <input v-model="descriptionText" class="inputStyle" />
        <div v-if="descriptionInvalid" class="errorText">Description required</div>
      </InputFrame>
    </div>

    <div>
      <div class="inputLabel">Ticket Files & Documents</div>
      <div class="fileList">
        <div v-for="(file, index) in ticketFiles" :key="index" class="fileContainer">
          <div class="fileName">{{ file.name }}</div>
          <img
            class="fileDeleteButton"
            @click="deleteFile(file.id)"
            alt="delete"
            src="@/assets/trashcan.svg"
            width="20"
            height="20"
          />
        </div>
      </div>
      <button class="attachFileButton" @click="addTicketFile()">+ Attach File</button>
    </div>

    <div class="buttonContainer">
      <button class="buttonStyle cancelButton" @click="clearTicket()">Cancel</button>
      <button
        class="buttonStyle submitButton"
        @click="
          () => {
            if (categorySelected === null) {
              categoryInvalid = true
            } else {
              categoryInvalid = false
            }
            if (typesSelected.length <= 0) {
              typeInvalid = true
            } else {
              typeInvalid = false
            }
            if (subjectText === '') {
              subjectInvalid = true
            } else {
              subjectInvalid = false
            }
            if (descriptionText === '') {
              descriptionInvalid = true
            } else {
              descriptionInvalid = false
            }

            if (!categoryInvalid && !typeInvalid && !subjectInvalid && !descriptionInvalid) {
              const newTicket = {
                id: id,
                category: categorySelected,
                type: typesSelected,
                subject: subjectText,
                description: descriptionText,
                files: ticketFiles
              }
              $emit('addToTicketList', newTicket)
            }
          }
        "
      >
        Submit
      </button>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0px;
  right: 0px;
  opacity: 0%;
}

.errorText {
  color: red;
  font-size: 9px;
}

.fileDeleteButton {
  color: red;
  cursor: pointer;
}

.fileList {
  display: grid;
  gap: 4px;
  justify-content: start;
}

.fileContainer {
  display: inline-grid;
  gap: 12px;
  justify-items: start;
  grid-template-columns: auto auto;
  align-items: center;
}

.attachFileButton {
  background: ghostwhite;
  color: black;
  border: 2px solid grey;
  border-radius: 4px;
  padding: 4px 32px;
  cursor: pointer;
  margin-top: 4px;
}

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
</style>
