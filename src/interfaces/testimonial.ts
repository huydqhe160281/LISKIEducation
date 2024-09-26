import type { User } from './user'

export interface Testimonial {
  id: number | string
  rating: number
  content: string
  user: User
}
