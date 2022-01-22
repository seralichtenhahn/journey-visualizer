import React, { forwardRef } from 'react'

import PageContentShell from './PageContentShell'
import { format } from 'date-fns'

const PageContentLeg = forwardRef(
  (
    { fromPlace, toPlace, description, images, itemStartDate, itemEndDate },
    ref,
  ) => {
    const startDateFormatted = format(new Date(itemStartDate), 'MMMM d')
    const endDateFormatted = format(new Date(itemEndDate), 'MMMM d, yyyy')

    return (
      <PageContentShell ref={ref} images={images}>
        <p className="mt-4 text-2xl text-gray-600">
          {startDateFormatted} - {endDateFormatted}
        </p>
        <h1 className="font-serif text-4xl md:leading-relaxed max-w-prose xl:text-6xl xl:leading-tight">
          from <span className="font-bold">{fromPlace.locationName}</span> to{' '}
          <span className="font-bold">{toPlace.locationName}</span>
        </h1>
        <p className="mt-2 text-gray-600 max-w-prose">{description}</p>
      </PageContentShell>
    )
  },
)

export default PageContentLeg
