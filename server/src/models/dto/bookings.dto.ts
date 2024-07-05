import { BookingsI } from '../../types/bookings.interface'
import { GuestsI } from '../../types/guests.interface'
import { CabinI } from '../../types/cabins.interface'
import { Status } from '@prisma/client'

/**
 * Data Transfer Object (DTO) for bookings details.
 * This class is used to transfer data between layers and ensure the data integrity.
 **/
export class BookingsDto implements Partial<BookingsI> {
  startDate: Date
  endDate: Date
  numNight: number
  numGuest: number
  cabinPrice: number
  totalPrice: number
  status: Status
  hasBreakfast: boolean
  isPaid: boolean
  observation: string
  guestId: GuestsI['id']
  cabinId: CabinI['id']

  constructor(bodyRequest: BookingsI) {
    this.startDate = bodyRequest.startDate
    this.endDate = bodyRequest.endDate
    this.numNight = bodyRequest.numNight
    this.numGuest = bodyRequest.numGuest
    this.cabinPrice = bodyRequest.cabinPrice
    this.totalPrice = bodyRequest.totalPrice
    this.status = bodyRequest.status
    this.hasBreakfast = bodyRequest.hasBreakfast
    this.isPaid = bodyRequest.isPaid
    this.observation = bodyRequest.observation
    this.guestId = bodyRequest.guestId
    this.cabinId = bodyRequest.cabinId
  }
}