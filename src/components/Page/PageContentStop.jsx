import React, { forwardRef } from 'react'

import PageContentShell from './PageContentShell'
import { format } from 'date-fns'

const PageContentStop = forwardRef(
  ({ itemStartDate, itemEndDate, place, images }, ref) => {
    const startDateFormatted = format(new Date(itemStartDate), 'MMMM d')
    const endDateFormatted = format(new Date(itemEndDate), 'MMMM d, yyyy')

    return (
      <PageContentShell ref={ref} images={images}>
        <p className="mt-4 text-2xl text-gray-600">
          {startDateFormatted} - {endDateFormatted}
        </p>
        <h1 className="font-serif text-4xl md:leading-relaxed max-w-prose xl:text-6xl xl:leading-tight">
          a short stay in{' '}
          <span className="font-bold">{place.locationName}</span>
        </h1>
        <p className="mt-2 text-gray-600 max-w-prose">{place.description}</p>
      </PageContentShell>
    )
  },
)

export default PageContentStop
