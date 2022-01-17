import IconTag from '@/components/Common/IconTag'
import React from 'react'
import { format } from 'date-fns'
import usePageData from '@/hooks/usePageData'

export default function PageContentOverview() {
  const { title, startDate, endDate, details } = usePageData()

  const { numberOfAdults, numberOfRooms, numberOfNights } = details

  const startDateFormatted = format(new Date(startDate), 'MMMM d')
  const endDateFormatted = format(new Date(endDate), 'MMMM d, yyyy')

  return (
    <div className="flex flex-col justify-center h-full md:transform md:-translate-y-8">
      <h1 className="font-serif text-4xl font-bold leading-relaxed xl:text-6xl xl:leading-tight">
        {title}
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
}
