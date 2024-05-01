export type TicketCategory = null | 'hardware' | 'software'

export type Ticket = {
  id: number
  category: TicketCategory
  subject: String
}
