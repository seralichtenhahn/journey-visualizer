import IconTag from '@/components/Common/IconTag'
import React, { forwardRef } from 'react'
import { format } from 'date-fns'
import journey from '@/assets/data/journey.json'

const PageContentOverview = forwardRef((props, ref) => {
  const { journeyTitle, details, journeyItems } = journey.data
  const { numberOfAdults, numberOfRooms, numberOfNights } = details

  const startDateFormatted = format(
    new Date(journeyItems[0].itemStartDate),
    'MMMM d',
  )
  const endDateFormatted = format(
    new Date(journeyItems[journeyItems.length - 1].itemEndDate),
    'MMMM d, yyyy',
  )

  return (
    <div
      ref={ref}
      className="flex flex-col h-full px-4 pt-8 overflow-y-scroll bg-white md:px-0 md:pt-0 md:overflow-y-auto md:bg-transparent rounded-xl md:rounded-none md:justify-center"
    >
      <h1 className="font-serif text-4xl font-bold md:leading-relaxed xl:text-6xl xl:leading-tight">
        {journeyTitle}
      </h1>
      <p className="mt-4 text-2xl text-gray-600">
        {startDateFormatted} - {endDateFormatted}
      </p>
      <div>
        <ul className="flex flex-wrap mt-2">
          <li className="mt-2 mr-4">
            <IconTag icon="calendar" label={`${numberOfNights} days`} />
          </li>
          <li className="mt-2 mr-4">
            <IconTag icon="person" label={`${numberOfAdults} adults`} />
          </li>
          <li className="mt-2 mr-4">
            <IconTag icon="bed" label={`${numberOfRooms} rooms`} />
          </li>
        </ul>
      </div>
    </div>
  )
})

export default PageContentOverview
