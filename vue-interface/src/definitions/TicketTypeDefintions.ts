export type TicketCategory = null | 'Hardware' | 'Software' | 'Network' | 'In-Processing'

export const HardwareTypes = ['Laptop', 'Mobile', 'Peripherals', 'Desk Phone', 'Printers', 'Other']
export const SoftwareTypes = [
  'Teams/Zoom',
  'Mobile Blackberry',
  'Adobe',
  'Outlook',
  'Microsoft Office',
  'Other'
]
export const NetworkTypes = ['Network Access', 'Connectivity', 'VPN', 'Drivers', 'Other']
export const InProcessingTypes = ['Access Badge', 'Common Access Card (CAC)', 'SIPR', 'Trello']

export type TicketFile = {
  id: number
  name: String
}

export type Ticket = {
  id: number
  category: TicketCategory
  type: String[]
  subject: String
  description: String
  files: TicketFile[]
}

type InputState = {
  display: 'input'
}
type SummaryState = {
  display: 'details'
  ticket: Ticket
}

type ListState = {
  display: 'list'
}
export type AppState = ListState | InputState | SummaryState
