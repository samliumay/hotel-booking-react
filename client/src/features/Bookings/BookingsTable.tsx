import Table from '../../ui/Table.tsx'
import TableHeader from '../../ui/TableHeader.tsx'
import BookingRow from './BookingRow.tsx'
import Spinner from '../../ui/Spinner.tsx'
import Empty from '../../ui/Empty.tsx'

import { useBookings } from './useBookings.ts'
import { BookingsI } from '../../types/bookings.interface.ts'

const BookingsTable = () => {
  const { bookings, isLoading } = useBookings()

  if (isLoading) return <Spinner />
  if (!bookings.length) return <Empty resourceName="bookings" />

  return (
    <Table>
      <TableHeader columns="[0.6fr_1.5fr_2fr_1.4fr_1fr_0.5fr]">
        <div>Cabin</div>
        <div>Guest</div>
        <div>Dates</div>
        <div>Status</div>
        <div>Amount</div>
        <div></div>
      </TableHeader>

      {bookings.map((booking: BookingsI) => (
        <BookingRow
          key={booking.id}
          booking={booking}
          guest={booking.guest}
          cabin={booking.cabin}
        />
      ))}
    </Table>
  )
}

export default BookingsTable
