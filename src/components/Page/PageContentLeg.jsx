import React, { forwardRef, useState } from 'react'

import IconChevronRight from '@/components/Icon/IconChevronRight'
import ImagesModal from '@/components/Images/ImagesModal'
import { format } from 'date-fns'

const PageContentLeg = forwardRef(
  (
    { fromPlace, toPlace, description, images, itemStartDate, itemEndDate },
    ref,
  ) => {
    const startDateFormatted = format(new Date(itemStartDate), 'MMMM d')
    const endDateFormatted = format(new Date(itemEndDate), 'MMMM d, yyyy')

    const [isModalOpen, setIsModalOpen] = useState(false)

    function closeModal() {
      setIsModalOpen(false)
    }

    function openModal() {
      setIsModalOpen(true)
    }

    return (
      <div
        ref={ref}
        className="flex flex-col h-full px-4 pt-6 overflow-y-scroll bg-white md:px-0 md:pt-0 md:overflow-y-auto md:bg-transparent rounded-xl md:rounded-none md:justify-center"
      >
        <p className="mt-4 text-2xl text-gray-600">
          {startDateFormatted} - {endDateFormatted}
        </p>
        <h1 className="font-serif text-4xl leading-relaxed max-w-prose xl:text-6xl xl:leading-tight">
          from <span className="font-bold">{fromPlace.locationName}</span> to{' '}
          <span className="font-bold">{toPlace.locationName}</span>
        </h1>
        <p className="mt-2 text-gray-600 max-w-prose">{description}</p>
        <button
          onClick={openModal}
          className="relative block mt-4 overflow-hidden"
        >
          <div
            aria-hidden="true"
            className="absolute inset-y-0 right-0 flex items-center justify-end w-1/4 bg-gradient-to-l from-white to-transparent"
          >
            <div className="p-1 mr-4 bg-white rounded-full shadow-md">
              <IconChevronRight className="w-6 h-6" />
            </div>
          </div>
          <ul className="flex w-auto overscroll-x-auto">
            {images.map((image) => (
              <li key={`list-${image.url}`} className="flex-none w-auto">
                <img
                  className="w-auto h-40 mr-2"
                  src={image.url}
                  alt={image.tag}
                />
              </li>
            ))}
          </ul>
        </button>
        <ImagesModal images={images} open={isModalOpen} onClose={closeModal} />
      </div>
    )
  },
)

export default PageContentLeg
