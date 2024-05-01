export type TicketCategory = null | 'Hardware' | 'Software'

export type Ticket = {
  id: number
  category: TicketCategory
  subject: String
}
