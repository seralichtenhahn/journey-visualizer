import React, { forwardRef, useState } from 'react'

import IconChevronRight from '@/components/Icon/IconChevronRight'
import ImagesModal from '@/components/Images/ImagesModal'

const PageContentShell = forwardRef(({ children, images }, ref) => {
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
      className="flex flex-col h-[40vh] px-4 pt-6 overflow-y-scroll bg-white md:px-0 md:pt-0 md:overflow-y-auto md:h-full md:bg-transparent rounded-xl md:rounded-none md:justify-center"
    >
      {children}
      {images && (
        <>
          <button
            onClick={openModal}
            className="relative h-40 mt-4 mb-4 overflow-x-hidden"
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
          <ImagesModal
            images={images}
            open={isModalOpen}
            onClose={closeModal}
          />
        </>
      )}
    </div>
  )
})

export default PageContentShell
