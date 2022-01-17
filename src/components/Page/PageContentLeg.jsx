import React, { useState } from 'react'

import IconChevronRight from '@/components/Icon/IconChevronRight'
import ImagesModal from '@/components/Images/ImagesModal'
import { format } from 'date-fns'
import usePageData from '@/hooks/usePageData'

export default function PageContentLeg() {
  const { startDate, endDate, legs } = usePageData()
  const { fromPlace, toPlace, description, images } = legs[0]

  const startDateFormatted = format(new Date(startDate), 'MMMM d')
  const endDateFormatted = format(new Date(endDate), 'MMMM d, yyyy')

  const [isModalOpen, setIsModalOpen] = useState(false)

  function closeModal() {
    setIsModalOpen(false)
  }

  function openModal() {
    setIsModalOpen(true)
  }

  return (
    <div className="flex flex-col justify-center h-full md:transform md:-translate-y-8">
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
        className="relative inline-block mt-4 overflow-hidden"
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
            <li className="flex-none w-auto">
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
}
